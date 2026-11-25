import React, { useEffect, useMemo, useState } from 'react';
import './style.css';
import { readStorage, writeStorage, saveVideoFile, deleteVideoFile, PLACEHOLDER_IMAGE } from './script.js';
import { starterRecipes, RECIPES_VERSION } from './recipes.js';
import { RecipeVideo, MediaFields } from './media.jsx';
import LoginModule from './login.jsx';
import SignupModule from './signup.jsx';
import AdminModule from './admin.jsx';
import UserModule from './user.jsx';

const categories = ['All recipes', 'Breakfast', 'Lunch', 'Dinner', 'Healthy', 'Dessert', 'Drinks', 'Sides'];
const read = readStorage;

function getRecentLogin() {
  try {
    if (localStorage.getItem('rn_login_history_reset') !== 'done') {
      localStorage.removeItem('rn_last_login');
      localStorage.setItem('rn_login_history_reset', 'done');
    }
  } catch {
    // The app can still run when browser storage is unavailable.
  }
  return read('rn_recent_login', null);
}

const emptyRecipeForm = { title: '', category: 'Dinner', time: '20', difficulty: 'Easy', description: '', image: '', imageData: '', videoUrl: '', videoFile: null, ingredients: '', steps: '' };
const starterIds = new Set(starterRecipes.map((recipe) => recipe.id));

// Admin-added recipes are kept; the starter collection (40 recipes) is always loaded fresh,
// so older saved copies of the previous 63-recipe list are dropped automatically.
function loadRecipes() {
  const saved = read('rn_recipes', []);
  const deleted = new Set(read('rn_deleted_recipes', []));
  const custom = saved.filter((recipe) => !(Number.isInteger(recipe.id) && recipe.id <= 100));
  return [...custom, ...starterRecipes.filter((recipe) => !deleted.has(recipe.id))];
}

function App() {
  const [recipes, setRecipes] = useState(loadRecipes);
  const [users, setUsers] = useState(() => read('rn_users', []));
  const [user, setUser] = useState(() => read('rn_session', null));
  const [favorites, setFavorites] = useState(() => read('rn_favorites', []));
  const [category, setCategory] = useState('All recipes');
  const [query, setQuery] = useState('');
  const [modal, setModal] = useState('');
  const [selected, setSelected] = useState(null);
  const [authMode, setAuthMode] = useState('login');
  const [view, setView] = useState('home');
  const [toast, setToast] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [lastLogin, setLastLogin] = useState(() => getRecentLogin());
  const [form, setForm] = useState({
    name: '',
    email: getRecentLogin()?.email || '',
    password: '',
  });
  const [recipeForm, setRecipeForm] = useState(emptyRecipeForm);
  useEffect(() => { if (!writeStorage('rn_recipes', recipes)) setToast('Browser storage is full. Remove some recipes or use smaller images.'); writeStorage('rn_recipes_version', RECIPES_VERSION); }, [recipes]);
  useEffect(() => localStorage.setItem('rn_users', JSON.stringify(users)), [users]);
  useEffect(() => localStorage.setItem('rn_session', JSON.stringify(user)), [user]);
  useEffect(() => localStorage.setItem('rn_favorites', JSON.stringify(favorites)), [favorites]);
  useEffect(() => { if (toast) { const t = setTimeout(() => setToast(''), 2600); return () => clearTimeout(t) } }, [toast]);
  const filtered = useMemo(() => recipes.filter(r => (category === 'All recipes' || r.category === category) && (!showFavorites || favorites.includes(r.id)) && `${r.title} ${r.category} ${r.description} ${r.author}`.toLowerCase().includes(query.toLowerCase())), [recipes, category, query, showFavorites, favorites]);
  const isAdmin = user?.role === 'admin';
  function openAuth(mode) {
    setAuthMode(mode);
    setForm({ name: '', email: mode === 'login' ? lastLogin?.email || '' : '', password: '' });
    setModal('');
    setView(mode);
  }
  function submitAuth(e) {
    e.preventDefault();

    const email = form.email.trim().toLowerCase();
    const password = form.password;
    const name = form.name.trim();

    if (!email || !password) {
      setToast('Please enter your email and password.');
      return;
    }

    if (authMode === 'signup') {
      if (name.length < 2) {
        setToast('Please enter your name (at least 2 characters).');
        return;
      }

      if (password.length < 4) {
        setToast('Password must contain at least 4 characters.');
        return;
      }

      const existingUsers = read('rn_users', []);
      if (existingUsers.some((account) => account.email.toLowerCase() === email)) {
        setToast('An account with this email already exists. Please log in.');
        return;
      }

      const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        role: email === 'admin@foodrecipeapp.com' ? 'admin' : 'user',
      };
      const updatedUsers = [...existingUsers, newUser];

      // Save the account immediately so it is available on the next visit.
      const saved = writeStorage('rn_users', updatedUsers);
      if (!saved) {
        setToast('Could not save your account. Please enable browser storage and try again.');
        return;
      }

      setUsers(updatedUsers);

      const loginRecord = {
        email: newUser.email,
        loggedInAt: new Date().toISOString(),
      };
      setLastLogin(loginRecord);
      writeStorage('rn_recent_login', loginRecord);
      setUser({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      });
      setModal('');
      setView(newUser.role === 'admin' ? 'admin' : 'user');
      setToast(`Account created successfully. Welcome, ${newUser.name.split(' ')[0]}!`);
      return;
    }

    const savedUsers = read('rn_users', []);
    const found = savedUsers.find(
      (account) => account.email.toLowerCase() === email && account.password === password
    );

    if (!found) {
      setToast('Email or password is incorrect. Please sign up if you are new.');
      return;
    }

    const loginRecord = {
      email: found.email,
      loggedInAt: new Date().toISOString(),
    };
    setLastLogin(loginRecord);
    writeStorage('rn_recent_login', loginRecord);
    setUser({
      id: found.id,
      name: found.name,
      email: found.email,
      role: found.role,
    });
    setModal('');
    setView(found.role === 'admin' ? 'admin' : 'user');
    setToast(`Welcome back, ${found.name.split(' ')[0]}!`);
  }
  function updateProfile(nextName) {
    const cleanName = nextName.trim();
    if (!cleanName || cleanName.length < 2) {
      setToast('Please enter a name with at least 2 characters.');
      return;
    }
    setUsers((previousUsers) => previousUsers.map((account) =>
      account.id === user.id ? { ...account, name: cleanName } : account
    ));
    setUser((currentUser) => ({ ...currentUser, name: cleanName }));
    setToast('Your account name has been updated.');
  }
  function logout() { setUser(null); setShowFavorites(false); setView('home'); setToast('You have been signed out.'); }
  function toggleFavorite(id) { if (!user) { openAuth('login'); setToast('Sign in to save your favourite recipes.'); return; } setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]); setToast(favorites.includes(id) ? 'Removed from favourites.' : 'Saved to your favourites ♥'); }
  async function submitRecipe(e) {
    e.preventDefault();
    if (!isAdmin) { setToast('Only admins can add recipes.'); return; }
    const id = Date.now();
    let video = null;
    if (recipeForm.videoFile) {
      try { await saveVideoFile(`video-${id}`, recipeForm.videoFile); video = { kind: 'file', key: `video-${id}`, name: recipeForm.videoFile.name }; }
      catch { setToast('Could not save the video in this browser. Try a smaller file or a video URL.'); return; }
    } else if (recipeForm.videoUrl.trim()) {
      video = { kind: 'url', url: recipeForm.videoUrl.trim() };
    }
    const { imageData, videoUrl, videoFile, ...rest } = recipeForm;
    const r = {
      ...rest, id, time: Number(recipeForm.time) || 20, rating: 5, author: user.name, emoji: '🍽️',
      image: imageData || recipeForm.image.trim() || PLACEHOLDER_IMAGE, video,
      ingredients: recipeForm.ingredients.split('\n').map(s => s.trim()).filter(Boolean),
      steps: recipeForm.steps.split('\n').map(s => s.trim()).filter(Boolean),
    };
    setRecipes(prev => [r, ...prev]); setModal(''); setRecipeForm(emptyRecipeForm); setToast('Recipe published successfully!');
  }
  function deleteRecipe(id) {
    const gone = recipes.find(r => r.id === id);
    if (gone?.video?.kind === 'file') deleteVideoFile(gone.video.key);
    if (starterIds.has(id)) writeStorage('rn_deleted_recipes', [...read('rn_deleted_recipes', []), id]);
    setRecipes(prev => prev.filter(r => r.id !== id)); setFavorites(prev => prev.filter(x => x !== id)); setToast('Recipe removed.');
  }
  const scrollToRecipes = () => { document.getElementById('recipes')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenu(false) };
  if (view === 'login') return <LoginModule form={form} setForm={setForm} onSubmit={submitAuth} onSignup={() => openAuth('signup')} onHome={() => setView('home')} recentLogin={lastLogin} />;
  if (view === 'signup') return <SignupModule form={form} setForm={setForm} onSubmit={submitAuth} onLogin={() => openAuth('login')} onHome={() => setView('home')} />;
  if (view === 'user' && user) return <UserModule user={user} favorites={favorites} lastLogin={lastLogin} onUpdateProfile={updateProfile} onLogout={logout} onHome={() => setView('home')} onFavorites={() => { setView('home'); setShowFavorites(true); setTimeout(scrollToRecipes, 50) }} />;
  if (view === 'admin' && user?.role === 'admin') return <AdminModule user={user} recipes={recipes} users={users} favorites={favorites} recipeForm={recipeForm} setRecipeForm={setRecipeForm} onSubmit={submitRecipe} onDelete={deleteRecipe} notify={setToast} onLogout={logout} onHome={() => setView('home')} categories={categories} />;
  return <div className="app-shell">
    <div className="announcement">
      <span className="sparkle">✳</span> A little inspiration for your everyday table <span className="announce-right">Made with love, shared with everyone <span>♡</span>
      </span>
    </div>
    <header className="navbar">
      <a className="brand" href="#top" onClick={() => { setCategory('All recipes'); setShowFavorites(false) }}>
        <span className="brand-mark">f<span>✳</span>
        </span>
        <span>Food <span className="brand-light">Recipes</span>
          <small>GOOD FOOD. GOOD MOOD.</small>
        </span>
      </a>
      <nav className={mobileMenu ? 'nav-links open' : 'nav-links'}>
        <a href="#recipes" onClick={scrollToRecipes}>Explore recipes</a>
        <a href="#about">Our story</a>{user && <button className={'nav-link-button ' + (showFavorites ? 'active' : '')} onClick={() => { setShowFavorites(!showFavorites); setCategory('All recipes'); scrollToRecipes() }}>♡ Saved recipes</button>}{isAdmin && <button className="nav-link-button admin-link" onClick={() => setView('admin')}>Admin module</button>}{user && !isAdmin && <button className="nav-link-button" onClick={() => setView('user')}>User module</button>}</nav>
      <div className="nav-actions">{user ? <>
        <div className="user-chip">
          <span className="avatar">{user.name?.[0]?.toUpperCase() || 'U'}</span>
          <button className="user-name" onClick={() => setView(isAdmin ? 'admin' : 'user')}>{user.name.split(' ')[0]}</button>{isAdmin && <span className="admin-badge">ADMIN</span>}</div>
        <button className="btn btn-outline small-btn" onClick={logout}>Log out</button>
      </> : <>
        <button className="login-btn" onClick={() => openAuth('login')}>Log in</button>
        <button className="btn btn-dark small-btn" onClick={() => openAuth('signup')}>Join for free <span>↗</span>
        </button>
      </>}<button className="hamburger" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu">☰</button>
      </div>
    </header>
    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line">
            </span> YOUR DAILY DOSE OF DELICIOUS</div>
          <h1>Find your next<br /> <em>favourite.</em>
          </h1>
          <p className="hero-sub">Recipes worth slowing down for. Discover feel-good food, simple ingredients, and little moments that make every meal special.</p>
          <div className="hero-buttons">
            <button className="btn btn-dark btn-large" onClick={scrollToRecipes}>Explore recipes <span>↗</span>
            </button>
            <button className="text-button" onClick={() => setModal('story')}>Our little story <span>→</span>
            </button>
          </div>
          <div className="hero-social-proof">
            <div className="avatar-stack">
              <span>👩🏻</span>
              <span>👨🏽</span>
              <span>👩🏾</span>
              <span>👨🏻</span>
            </div>
            <div>
              <strong>Made for food lovers</strong>
              <small>One recipe at a time <span className="gold-stars">★★★★★</span>
              </small>
            </div>
          </div>
          <span className="hero-doodle doodle-one">✳</span>
          <span className="hero-doodle doodle-two">✦</span>
        </div>
        <div className="hero-visual">
          <div className="hero-image-main">
            <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=90" alt="A colourful table of fresh, delicious food" />
            <div className="image-label">
              <span className="label-icon">✦</span>
              <div>
                <strong>Fresh ideas, daily</strong>
                <small>Something good is cooking</small>
              </div>
            </div>
          </div>
          <div className="floating-note note-top">
            <span>✳</span>
            <div>
              <strong>Cook something lovely</strong>
              <small>You've got this.</small>
            </div>
          </div>
          <div className="floating-note note-bottom">
            <span className="note-heart">♡</span>
            <div>
              <strong>Little joys, big flavour</strong>
              <small>Recipes made to be shared</small>
            </div>
          </div>
          <div className="hero-orbit">
          </div>
        </div>
        <div className="hero-bottom-note">
          <span>SCROLL A LITTLE</span>
          <span className="scroll-line">
          </span>
          <span>GOOD THINGS AHEAD ↓</span>
        </div>
      </section>
      <section className="stats-strip">
        <div>
          <strong>200<span>+</span>
          </strong>
          <small>Recipes to fall for</small>
        </div>
        <div>
          <strong>15<span> min</span>
          </strong>
          <small>Quick & easy favourites</small>
        </div>
        <div>
          <strong>100<span>%</span>
          </strong>
          <small>Made for real life</small>
        </div>
        <div className="stats-quote">“The secret ingredient is always a little love.” <span>— The Food Recipes way</span>
        </div>
      </section>
      <section className="recipes-section" id="recipes">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line">
              </span> THE GOOD STUFF</div>
            <h2>
              {showFavorites ? (
                <>Your saved <em>favourites.</em>
                </>
              ) : (
                <>A table full of <em>ideas.</em>
                </>
              )}
            </h2>
            <p>Something delicious for every craving, every mood, every kind of day.</p>
          </div>
          <div className="heading-side">
            <span className="handwritten">made for your kitchen <span>↙</span>
            </span>
            <div className="recipe-count">{filtered.length.toString().padStart(2, '0')} <span>RECIPES</span>
            </div>
          </div>
        </div>
        <div className="browse-toolbar">
          <div className="category-tabs">{categories.map(c => <button key={c} className={category === c ? 'category-tab selected' : 'category-tab'} onClick={() => { setCategory(c); setShowFavorites(false) }}>{c}</button>)}</div>
          <label className="search-box">
            <span>⌕</span>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Find something delicious..." aria-label="Search recipes" />
            <kbd>⌘ K</kbd>
          </label>
        </div>
        {showFavorites && !user ? <div className="empty-state">
          <span>♡</span>
          <h3>Your favourites live here</h3>
          <p>Sign in to save recipes you love.</p>
          <button className="btn btn-dark" onClick={() => openAuth('login')}>Log in</button>
        </div> : filtered.length === 0 ? <div className="empty-state">
          <span>{showFavorites ? '♡' : '⌕'}</span>
          <h3>{showFavorites ? 'No saved recipes yet' : 'Nothing simmering here...'}</h3>
          <p>{showFavorites ? 'Tap the heart on any recipe to keep it close.' : 'Try another search or choose a different category.'}</p>
          <button className="btn btn-outline" onClick={() => { setQuery(''); setCategory('All recipes'); setShowFavorites(false) }}>Show all recipes</button>
        </div> : <div className="recipe-grid">{filtered.map((r, i) => <article className="recipe-card" key={r.id} style={{ '--delay': `${i * 60}ms` }}>
          <button className="recipe-image" onClick={() => { setSelected(r); setModal('recipe') }} aria-label={`View ${r.title}`}>
            <img src={r.image} alt={r.title} loading="lazy" onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = PLACEHOLDER_IMAGE }} />
            <span className="card-category">{r.category}</span>
            <span className="view-recipe">View recipe ↗</span>
          </button>
          <div className="recipe-info">
            <div className="recipe-meta">
              <span>◷ {r.time} min</span>
              <span className="dot">·</span>
              <span>{r.difficulty}</span>
              <span className="rating">★ {r.rating || '5.0'}</span>
            </div>
            <div className="recipe-title-row">
              <button className="recipe-title" onClick={() => { setSelected(r); setModal('recipe') }}>{r.title}</button>
              <button className={favorites.includes(r.id) ? 'heart-button loved' : 'heart-button'} onClick={() => toggleFavorite(r.id)} aria-label="Save recipe">{favorites.includes(r.id) ? '♥' : '♡'}</button>
            </div>
            <p>{r.description}</p>
            <div className="card-footer">
              <span>by <strong>{r.author}</strong>
              </span>{isAdmin && <button className="delete-btn" onClick={() => deleteRecipe(r.id)}>Remove</button>}<button className="arrow-circle" onClick={() => { setSelected(r); setModal('recipe') }} aria-label="Open recipe">↗</button>
            </div>
          </div>
        </article>)}</div>}
        <div className="browse-more">
          <span className="browse-line">
          </span>
          <span>GOOD FOOD IS NEVER OUT OF STYLE</span>
          <span className="browse-line">
          </span>
        </div>
      </section>
      <section className="newsletter" id="about">
        <div className="newsletter-art">
          <span className="art-sun">✳</span>
          <div className="art-circle">
            <span>made<br />with<br />
              <em>love</em>
            </span>
          </div>
          <span className="art-leaf">〰</span>
        </div>
        <div className="newsletter-copy">
          <div className="eyebrow">
            <span className="eyebrow-line">
            </span> A NOTE FROM OUR KITCHEN</div>
          <h2>Good things are<br /> <em>worth sharing.</em>
          </h2>
          <p>Food Recipes is a little corner of the internet for curious cooks, happy eaters, and anyone who believes the best memories happen around a table.</p>
          <button className="btn btn-dark btn-large" onClick={() => user ? setModal('story') : openAuth('signup')}>{user ? 'Read our story' : 'Come on in'} <span>↗</span>
          </button>
        </div>
        <div className="newsletter-side-note">A LITTLE MORE JOY<br />IN EVERY BITE <span>♡</span>
        </div>
      </section>
    </main>
    <footer className="footer">
      <a className="brand footer-brand" href="#top">
        <span className="brand-mark">f<span>✳</span>
        </span>
        <span>Food <span className="brand-light">Recipes</span>
          <small>GOOD FOOD. GOOD MOOD.</small>
        </span>
      </a>
      <span className="footer-center">Made with a full heart & a hungry belly.</span>
      <span className="footer-right">© 2026 Food Recipes <span>·</span> A student project</span>
    </footer>
    {toast && <div className="toast">
      <span>✳</span>{toast}</div>}
    {modal && <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) setModal('') }}>
      <div className={'modal-card ' + (modal === 'recipe' ? 'recipe-modal' : '')}>
        <button className="modal-close" onClick={() => setModal('')} aria-label="Close">×</button>
        {modal === 'auth' && <div className="auth-content">
          <div className="modal-brand">f<span>✳</span>
          </div>
          <div className="eyebrow centered">YOUR PLACE AT THE TABLE</div>
          <h2>{authMode === 'login' ? 'Welcome back.' : 'Come on in.'}</h2>
          <p className="modal-sub">{authMode === 'login' ? 'Your next favourite recipe is waiting.' : 'Join our little community of food lovers.'}</p>
          <div className="auth-switch">
            <button className={authMode === 'login' ? 'chosen' : ''} onClick={() => setAuthMode('login')}>Log in</button>
            <button className={authMode === 'signup' ? 'chosen' : ''} onClick={() => setAuthMode('signup')}>Create account</button>
          </div>
          <form onSubmit={submitAuth} className="form-stack">{authMode === 'signup' && <label>Your name<input required minLength="2" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="How should we call you?" />
          </label>}<label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
            </label>
            <label>Password<input required minLength="4" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="At least 4 characters" />
            </label>
            <button className="btn btn-dark submit-btn" type="submit">{authMode === 'login' ? 'Log in to Food Recipes' : 'Create my account'} <span>↗</span>
            </button>
          </form>
          <p className="auth-foot">{authMode === 'login' ? "New around here? " : 'Already part of Food Recipes? '}<button onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}>{authMode === 'login' ? 'Create an account' : 'Log in'}</button>
          </p>
          <p className="demo-hint">Admin demo: create an account using <strong>admin@foodrecipeapp.com</strong> to open Admin Studio.</p>
        </div>}
        {modal === 'recipe' && selected && <div className="recipe-detail">
          <img className="detail-image" src={selected.image} alt={selected.title} />
          <div className="detail-body">
            <div className="eyebrow">
              <span className="eyebrow-line">
              </span>{selected.category.toUpperCase()} · BY {selected.author?.toUpperCase()}</div>
            <h2>{selected.title}</h2>
            <p className="detail-description">{selected.description}</p>
            <div className="detail-stats">
              <span>◷ <strong>{selected.time} min</strong>
              </span>
              <span>✦ <strong>{selected.difficulty}</strong>
              </span>
              <span>★ <strong>{selected.rating || '5.0'}</strong>
              </span>
            </div>
            {selected.video && <RecipeVideo video={selected.video} />}
            <div className="detail-columns">
              <div>
                <h3>What you'll need <span>({selected.ingredients?.length || 0})</span>
                </h3>
                <ul className="ingredients">{selected.ingredients?.map((x, i) => <li key={i}>
                  <span className="check-dot">✓</span>{x}</li>)}</ul>
              </div>
              <div>
                <h3>Let's make it</h3>
                <ol className="steps">{selected.steps?.map((x, i) => <li key={i}>
                  <span>{String(i + 1).padStart(2, '0')}</span>{x}</li>)}</ol>
              </div>
            </div>
            <button className="btn btn-dark submit-btn" onClick={() => toggleFavorite(selected.id)}>{favorites.includes(selected.id) ? '♥ Saved to favourites' : '♡ Save this recipe'}</button>
          </div>
        </div>}
        {modal === 'admin' && <div className="admin-content">
          <div className="eyebrow">
            <span className="eyebrow-line">
            </span> FOOD RECIPES ADMIN</div>
          <h2>Admin <em>studio.</em>
          </h2>
          <p className="modal-sub">A little space to keep the recipe collection growing.</p>
          <div className="admin-stats">
            <div>
              <strong>{recipes.length}</strong>
              <span>Published recipes</span>
            </div>
            <div>
              <strong>{users.length}</strong>
              <span>Community members</span>
            </div>
            <div>
              <strong>{favorites.length}</strong>
              <span>Saved favourites</span>
            </div>
          </div>
          <form onSubmit={submitRecipe} className="form-stack admin-form">
            <label>Recipe title<input required value={recipeForm.title} onChange={e => setRecipeForm({ ...recipeForm, title: e.target.value })} placeholder="e.g. Sunday lemon cake" />
            </label>
            <div className="form-row">
              <label>Category<select value={recipeForm.category} onChange={e => setRecipeForm({ ...recipeForm, category: e.target.value })}>{categories.filter(c => c !== 'All recipes').map(c => <option key={c}>{c}</option>)}</select>
              </label>
              <label>Prep time (min)<input type="number" min="1" value={recipeForm.time} onChange={e => setRecipeForm({ ...recipeForm, time: e.target.value })} />
              </label>
            </div>
            <label>Short description<textarea required rows="2" value={recipeForm.description} onChange={e => setRecipeForm({ ...recipeForm, description: e.target.value })} placeholder="What makes this recipe special?" />
            </label>
            <MediaFields recipeForm={recipeForm} setRecipeForm={setRecipeForm} notify={setToast} />
            <label>Ingredients <span className="optional">(one per line)</span>
              <textarea required rows="4" value={recipeForm.ingredients} onChange={e => setRecipeForm({ ...recipeForm, ingredients: e.target.value })} placeholder={'2 cups flour\n1 lemon\nA little love'} />
            </label>
            <label>Steps <span className="optional">(one step per line)</span>
              <textarea required rows="4" value={recipeForm.steps} onChange={e => setRecipeForm({ ...recipeForm, steps: e.target.value })} placeholder={'Preheat the oven...\nMix everything together...'} />
            </label>
            <button className="btn btn-dark submit-btn" type="submit">Publish recipe <span>↗</span>
            </button>
          </form>
        </div>}
        {modal === 'story' && <div className="story-content">
          <div className="modal-brand">f<span>✳</span>
          </div>
          <div className="eyebrow centered">A LITTLE ABOUT US</div>
          <h2>Food tastes better<br />when it's <em>shared.</em>
          </h2>
          <p>Food Recipes began with a simple thought: cooking shouldn't feel complicated. It should feel like music in the kitchen, a friend asking for seconds, and the first bite of something you made yourself.</p>
          <p>We're here for weeknight wins, weekend experiments, recipes passed around, and the joy of finding a new favourite. Pull up a chair — there's always room at this table.</p>
          <button className="btn btn-dark submit-btn" onClick={() => { setModal(''); scrollToRecipes() }}>Let's find something delicious <span>↗</span>
          </button>
        </div>}
      </div>
    </div>}
  </div>
}

export default App;
