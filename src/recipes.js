// 40 starter recipes. Each recipe has its own image in /public/images/recipes/<slug>.jpg
// To use a real photo, just replace that file (keep the same file name).
// Optional: add video: { kind: 'url', url: 'https://...' } to give a starter recipe a video.
export const RECIPES_VERSION = 40;

export const starterRecipes = [
  {
    "id": 2,
    "title": "Avocado Breakfast Toast",
    "category": "Breakfast",
    "time": 10,
    "difficulty": "Easy",
    "rating": 4.8,
    "author": "Mia Patel",
    "emoji": "🥑",
    "image": "/images/recipes/avocado-breakfast-toast.jpg",
    "description": "A bright, crunchy morning favourite with creamy avocado, chilli flakes and lemon.",
    "ingredients": [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "½ lemon",
      "Chilli flakes",
      "Sea salt",
      "Black pepper",
      "Optional: 2 eggs"
    ],
    "steps": [
      "Toast sourdough until golden and crisp.",
      "Mash avocado with lemon juice, salt and pepper.",
      "Spread generously over toast.",
      "Finish with chilli flakes and an optional soft-boiled egg."
    ],
    "video": null
  },
  {
    "id": 4,
    "title": "Fluffy Berry Pancakes",
    "category": "Breakfast",
    "time": 18,
    "difficulty": "Easy",
    "rating": 4.7,
    "author": "Emma Wilson",
    "emoji": "🥞",
    "image": "/images/recipes/fluffy-berry-pancakes.jpg",
    "description": "Soft, golden pancakes with juicy berries and a drizzle of maple syrup.",
    "ingredients": [
      "1 cup all-purpose flour",
      "1 tbsp sugar",
      "1 tsp baking powder",
      "¾ cup milk",
      "1 egg",
      "2 tbsp melted butter",
      "1 cup mixed berries",
      "Maple syrup"
    ],
    "steps": [
      "Mix flour, sugar and baking powder in a bowl.",
      "Whisk milk, egg and melted butter separately.",
      "Combine wet and dry ingredients without overmixing.",
      "Cook small ladles on a lightly buttered pan until bubbles form; flip.",
      "Serve with berries and maple syrup."
    ],
    "video": null
  },
  {
    "id": 10,
    "title": "Mango Yogurt Parfait",
    "category": "Breakfast",
    "time": 8,
    "difficulty": "Easy",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🥭",
    "image": "/images/recipes/mango-yogurt-parfait.jpg",
    "description": "Creamy yogurt layered with ripe mango, crunchy granola and a little honey.",
    "ingredients": [
      "1 cup Greek yogurt",
      "1 ripe mango, diced",
      "½ cup granola",
      "1 tsp honey",
      "A few mint leaves"
    ],
    "steps": [
      "Spoon half the yogurt into a glass.",
      "Add a layer of diced mango and granola.",
      "Repeat the layers with the remaining yogurt.",
      "Drizzle with honey, garnish with mint and serve chilled."
    ],
    "video": null
  },
  {
    "id": 15,
    "title": "Crispy Masala Dosa",
    "category": "Breakfast",
    "time": 25,
    "difficulty": "Medium",
    "rating": 4.9,
    "author": "Food Recipes Kitchen",
    "emoji": "🥞",
    "image": "/images/recipes/crispy-masala-dosa.jpg",
    "description": "A golden, crisp dosa filled with gently spiced potato masala.",
    "ingredients": [
      "2 cups dosa batter",
      "3 boiled potatoes",
      "1 onion, sliced",
      "½ tsp mustard seeds",
      "8 curry leaves",
      "¼ tsp turmeric",
      "2 tbsp oil",
      "Salt to taste"
    ],
    "steps": [
      "Mash the boiled potatoes roughly.",
      "Temper mustard seeds and curry leaves in oil.",
      "Add onion, turmeric, salt and potatoes; cook for 4 minutes.",
      "Spread dosa batter thinly on a hot pan.",
      "Drizzle oil, cook until crisp and add potato masala before folding."
    ],
    "video": null
  },
  {
    "id": 34,
    "title": "Idli with Sambar",
    "category": "Breakfast",
    "time": 30,
    "difficulty": "Easy",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🍘",
    "image": "/images/recipes/idli-with-sambar.jpg",
    "description": "Soft steamed idlis served with a hearty lentil and vegetable sambar.",
    "ingredients": [
      "2 cups idli batter",
      "1 cup toor dal",
      "1 tomato",
      "1 cup mixed vegetables",
      "1 tsp sambar powder",
      "Salt",
      "Coriander"
    ],
    "steps": [
      "Pour batter into greased idli moulds and steam for 10–12 minutes.",
      "Cook dal until soft.",
      "Simmer vegetables with tomato and sambar powder.",
      "Mash dal into the vegetables and simmer.",
      "Serve hot sambar with idlis."
    ],
    "video": null
  },
  {
    "id": 46,
    "title": "French Toast",
    "category": "Breakfast",
    "time": 12,
    "difficulty": "Easy",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🍞",
    "image": "/images/recipes/french-toast.jpg",
    "description": "Golden bread slices dipped in a cinnamon egg mixture.",
    "ingredients": [
      "4 bread slices",
      "2 eggs",
      "¼ cup milk",
      "½ tsp cinnamon",
      "1 tsp sugar",
      "1 tbsp butter"
    ],
    "steps": [
      "Whisk eggs, milk, cinnamon and sugar.",
      "Dip bread slices briefly in the mixture.",
      "Heat butter in a pan.",
      "Cook bread on both sides until golden.",
      "Serve warm with fruit or honey."
    ],
    "video": null
  },
  {
    "id": 47,
    "title": "Stuffed Paratha",
    "category": "Breakfast",
    "time": 30,
    "difficulty": "Medium",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🫓",
    "image": "/images/recipes/stuffed-paratha.jpg",
    "description": "Whole-wheat flatbread filled with a spiced potato mixture.",
    "ingredients": [
      "2 cups wheat flour",
      "3 boiled potatoes",
      "1 green chilli",
      "½ tsp cumin",
      "½ tsp coriander powder",
      "Coriander",
      "Ghee"
    ],
    "steps": [
      "Knead wheat flour with water into a soft dough.",
      "Mash potatoes with spices, chilli and coriander.",
      "Roll dough, add filling and seal.",
      "Roll gently into a paratha.",
      "Cook on a hot pan with ghee until golden."
    ],
    "video": null
  },
  {
    "id": 58,
    "title": "Apple Cinnamon Oats",
    "category": "Breakfast",
    "time": 10,
    "difficulty": "Easy",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🍎",
    "image": "/images/recipes/apple-cinnamon-oats.jpg",
    "description": "Warm oats topped with tender apple, cinnamon and nuts.",
    "ingredients": [
      "½ cup rolled oats",
      "1 cup milk",
      "1 apple, diced",
      "¼ tsp cinnamon",
      "1 tsp honey",
      "1 tbsp chopped nuts"
    ],
    "steps": [
      "Simmer oats in milk until creamy.",
      "Cook apple with cinnamon and a splash of water until tender.",
      "Spoon apples over the oats.",
      "Drizzle with honey.",
      "Top with chopped nuts."
    ],
    "video": null
  },
  {
    "id": 9,
    "title": "Grilled Veggie Wraps",
    "category": "Lunch",
    "time": 20,
    "difficulty": "Easy",
    "rating": 4.8,
    "author": "Aarav Mehta",
    "emoji": "🌯",
    "image": "/images/recipes/grilled-veggie-wraps.jpg",
    "description": "Warm wraps filled with grilled vegetables, crisp greens and a creamy herb dressing.",
    "ingredients": [
      "2 large whole-wheat tortillas",
      "1 small zucchini, sliced",
      "1 red bell pepper, sliced",
      "½ red onion, sliced",
      "1 cup lettuce",
      "¼ cup plain yogurt",
      "1 tbsp lemon juice",
      "½ tsp mixed herbs",
      "Salt and black pepper"
    ],
    "steps": [
      "Mix yogurt, lemon juice, mixed herbs, salt and pepper to make the dressing.",
      "Grill zucchini, bell pepper and onion until tender and lightly charred.",
      "Warm the tortillas in a dry pan for a few seconds.",
      "Spread the dressing over each tortilla and add lettuce and grilled vegetables.",
      "Roll the tortillas tightly, slice in half and serve warm."
    ],
    "video": null
  },
  {
    "id": 11,
    "title": "Tomato Basil Bruschetta",
    "category": "Lunch",
    "time": 15,
    "difficulty": "Easy",
    "rating": 4.9,
    "author": "Food Recipes Kitchen",
    "emoji": "🍅",
    "image": "/images/recipes/tomato-basil-bruschetta.jpg",
    "description": "Toasted bread topped with juicy tomatoes, fresh basil, garlic and olive oil.",
    "ingredients": [
      "1 baguette",
      "3 ripe tomatoes, diced",
      "1 garlic clove",
      "8 fresh basil leaves",
      "2 tbsp olive oil",
      "Salt and black pepper"
    ],
    "steps": [
      "Dice tomatoes and finely chop the basil.",
      "Mix tomatoes with basil, olive oil, salt and pepper.",
      "Toast baguette slices until crisp.",
      "Rub each toast lightly with garlic.",
      "Spoon the tomato mixture over the toast and serve."
    ],
    "video": null
  },
  {
    "id": 19,
    "title": "Lemon Rice",
    "category": "Lunch",
    "time": 15,
    "difficulty": "Easy",
    "rating": 4.7,
    "author": "Food Recipes Kitchen",
    "emoji": "🍋",
    "image": "/images/recipes/lemon-rice.jpg",
    "description": "Quick South Indian rice brightened with lemon, peanuts and curry leaves.",
    "ingredients": [
      "2 cups cooked rice",
      "1 lemon",
      "2 tbsp peanuts",
      "½ tsp mustard seeds",
      "1 green chilli",
      "8 curry leaves",
      "¼ tsp turmeric",
      "1 tbsp oil"
    ],
    "steps": [
      "Fluff the cooked rice and let it cool slightly.",
      "Heat oil and add mustard seeds and peanuts.",
      "Add chilli, curry leaves and turmeric.",
      "Turn off the heat and stir in lemon juice.",
      "Toss with rice and adjust salt before serving."
    ],
    "video": null
  },
  {
    "id": 37,
    "title": "Pav Bhaji",
    "category": "Lunch",
    "time": 35,
    "difficulty": "Medium",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🍞",
    "image": "/images/recipes/pav-bhaji.jpg",
    "description": "Mumbai-style mashed vegetable curry served with toasted pav.",
    "ingredients": [
      "2 potatoes",
      "1 cup cauliflower",
      "½ cup peas",
      "1 capsicum",
      "2 tomatoes",
      "2 tbsp pav bhaji masala",
      "Pav buns",
      "Butter"
    ],
    "steps": [
      "Boil potatoes, cauliflower and peas until tender.",
      "Mash the vegetables.",
      "Sauté capsicum and tomatoes with pav bhaji masala.",
      "Add mashed vegetables and simmer.",
      "Toast pav with butter and serve."
    ],
    "video": null
  },
  {
    "id": 42,
    "title": "Chicken Tikka Wrap",
    "category": "Lunch",
    "time": 30,
    "difficulty": "Medium",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🌯",
    "image": "/images/recipes/chicken-tikka-wrap.jpg",
    "description": "Spiced grilled chicken wrapped with crunchy salad and yogurt sauce.",
    "ingredients": [
      "300 g boneless chicken",
      "½ cup yogurt",
      "1 tsp tikka masala",
      "4 tortillas",
      "1 cucumber",
      "1 tomato",
      "Lettuce"
    ],
    "steps": [
      "Mix chicken with yogurt and tikka masala.",
      "Cook chicken in a pan until fully cooked.",
      "Mix yogurt with a little lemon and salt for sauce.",
      "Fill tortillas with lettuce, cucumber, tomato and chicken.",
      "Roll tightly and serve."
    ],
    "video": null
  },
  {
    "id": 50,
    "title": "Dal Tadka",
    "category": "Lunch",
    "time": 30,
    "difficulty": "Easy",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🍲",
    "image": "/images/recipes/dal-tadka.jpg",
    "description": "Yellow lentils finished with a sizzling garlic and cumin tempering.",
    "ingredients": [
      "1 cup toor dal",
      "½ tsp turmeric",
      "1 tomato",
      "3 garlic cloves",
      "1 tsp cumin",
      "1 dried red chilli",
      "1 tbsp ghee"
    ],
    "steps": [
      "Wash dal and pressure-cook with turmeric until soft.",
      "Mash lightly and simmer with tomato and salt.",
      "Heat ghee in a small pan.",
      "Add cumin, garlic and dried chilli.",
      "Pour the tempering over dal and garnish."
    ],
    "video": null
  },
  {
    "id": 1,
    "title": "Creamy Tuscan Pasta",
    "category": "Dinner",
    "time": 25,
    "difficulty": "Easy",
    "rating": 4.9,
    "author": "Sofia Chen",
    "emoji": "🍝",
    "image": "/images/recipes/creamy-tuscan-pasta.jpg",
    "description": "Silky, sun-dried tomato cream sauce with fresh spinach, parmesan and a little garlic magic.",
    "ingredients": [
      "250 g pasta",
      "2 tbsp olive oil",
      "3 garlic cloves, minced",
      "½ cup sun-dried tomatoes",
      "1 cup cream",
      "2 cups baby spinach",
      "½ cup parmesan",
      "Salt and black pepper"
    ],
    "steps": [
      "Cook pasta in salted water until al dente. Reserve ½ cup pasta water.",
      "Warm olive oil in a pan. Add garlic and sun-dried tomatoes; cook for 2 minutes.",
      "Stir in cream and parmesan, then simmer gently until silky.",
      "Fold in spinach and cooked pasta. Loosen with pasta water if needed.",
      "Season generously and finish with extra parmesan."
    ],
    "video": null
  },
  {
    "id": 5,
    "title": "Spicy Paneer Tacos",
    "category": "Dinner",
    "time": 30,
    "difficulty": "Medium",
    "rating": 4.8,
    "author": "Neha Kapoor",
    "emoji": "🌮",
    "image": "/images/recipes/spicy-paneer-tacos.jpg",
    "description": "Smoky, spiced paneer tucked into warm tortillas with crunchy slaw and mint yogurt.",
    "ingredients": [
      "250 g paneer, cubed",
      "6 small tortillas",
      "1 tsp paprika",
      "½ tsp cumin",
      "1 bell pepper",
      "1 cup shredded cabbage",
      "½ cup yogurt",
      "Mint chutney"
    ],
    "steps": [
      "Toss paneer with paprika, cumin, salt and a little oil.",
      "Sear paneer and sliced bell pepper until golden.",
      "Mix yogurt with mint chutney for a quick sauce.",
      "Warm tortillas and fill with paneer, peppers and cabbage.",
      "Finish with mint yogurt and lime."
    ],
    "video": null
  },
  {
    "id": 14,
    "title": "Classic Vegetable Biryani",
    "category": "Dinner",
    "time": 45,
    "difficulty": "Medium",
    "rating": 4.9,
    "author": "Food Recipes Kitchen",
    "emoji": "🍚",
    "image": "/images/recipes/classic-vegetable-biryani.jpg",
    "description": "Fragrant basmati rice layered with spiced vegetables, herbs and golden onions.",
    "ingredients": [
      "2 cups basmati rice",
      "2 cups mixed vegetables",
      "1 onion, sliced",
      "1 tomato, chopped",
      "½ cup yogurt",
      "2 tbsp biryani masala",
      "Mint and coriander",
      "2 tbsp oil or ghee"
    ],
    "steps": [
      "Wash and soak rice for 20 minutes.",
      "Fry onions until golden; add tomato, vegetables, yogurt and spices.",
      "Cook the rice separately until nearly done.",
      "Layer rice over the vegetables with mint and coriander.",
      "Cover and cook on low heat for 15 minutes."
    ],
    "video": null
  },
  {
    "id": 16,
    "title": "Paneer Butter Masala",
    "category": "Dinner",
    "time": 35,
    "difficulty": "Medium",
    "rating": 4.9,
    "author": "Food Recipes Kitchen",
    "emoji": "🧀",
    "image": "/images/recipes/paneer-butter-masala.jpg",
    "description": "Soft paneer cubes in a rich tomato, butter and cream gravy.",
    "ingredients": [
      "250 g paneer",
      "3 tomatoes",
      "1 onion",
      "1 tbsp butter",
      "1 tsp ginger-garlic paste",
      "½ tsp garam masala",
      "¼ cup cream",
      "Salt to taste"
    ],
    "steps": [
      "Cook chopped onion and tomatoes until soft.",
      "Cool and blend into a smooth puree.",
      "Heat butter and ginger-garlic paste in a pan.",
      "Add puree and spices; simmer for 8 minutes.",
      "Add paneer and cream, then simmer gently for 5 minutes."
    ],
    "video": null
  },
  {
    "id": 21,
    "title": "Classic Margherita Pizza",
    "category": "Dinner",
    "time": 30,
    "difficulty": "Medium",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🍕",
    "image": "/images/recipes/classic-margherita-pizza.jpg",
    "description": "A simple homemade pizza topped with tomato, mozzarella and fresh basil.",
    "ingredients": [
      "1 pizza base",
      "½ cup pizza sauce",
      "150 g mozzarella",
      "1 tomato, sliced",
      "Fresh basil leaves",
      "1 tsp olive oil",
      "Dried oregano"
    ],
    "steps": [
      "Preheat oven according to the pizza base instructions.",
      "Spread pizza sauce over the base.",
      "Add mozzarella and tomato slices.",
      "Bake until the crust is crisp and cheese is bubbling.",
      "Finish with basil, oregano and olive oil."
    ],
    "video": null
  },
  {
    "id": 35,
    "title": "Palak Paneer",
    "category": "Dinner",
    "time": 30,
    "difficulty": "Medium",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🥬",
    "image": "/images/recipes/palak-paneer.jpg",
    "description": "Paneer cubes simmered in a creamy spinach gravy.",
    "ingredients": [
      "250 g paneer",
      "3 cups spinach",
      "1 onion",
      "1 tomato",
      "1 tsp ginger-garlic paste",
      "¼ cup cream",
      "½ tsp garam masala"
    ],
    "steps": [
      "Blanch spinach and blend to a smooth puree.",
      "Sauté onion and ginger-garlic paste.",
      "Add tomato and cook until soft.",
      "Stir in spinach puree and spices.",
      "Add paneer and cream",
      " simmer gently."
    ],
    "video": null
  },
  {
    "id": 41,
    "title": "Fish Curry",
    "category": "Dinner",
    "time": 35,
    "difficulty": "Medium",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🐟",
    "image": "/images/recipes/fish-curry.jpg",
    "description": "Fish simmered in a tangy tomato and tamarind gravy.",
    "ingredients": [
      "500 g firm fish pieces",
      "1 onion",
      "2 tomatoes",
      "1 tsp ginger-garlic paste",
      "1 tsp chilli powder",
      "½ tsp turmeric",
      "1 tbsp tamarind paste",
      "Curry leaves"
    ],
    "steps": [
      "Season fish with turmeric and salt.",
      "Sauté onion, curry leaves and ginger-garlic paste.",
      "Add tomatoes and spices",
      " cook until soft.",
      "Add tamarind and water",
      " simmer.",
      "Add fish and cook gently until just done."
    ],
    "video": null
  },
  {
    "id": 54,
    "title": "Baked Mac and Cheese",
    "category": "Dinner",
    "time": 35,
    "difficulty": "Medium",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🧀",
    "image": "/images/recipes/baked-mac-and-cheese.jpg",
    "description": "Pasta baked in a creamy cheese sauce with a golden top.",
    "ingredients": [
      "250 g macaroni",
      "2 tbsp butter",
      "2 tbsp flour",
      "2 cups milk",
      "1½ cups grated cheddar",
      "¼ cup breadcrumbs"
    ],
    "steps": [
      "Cook macaroni until just tender and drain.",
      "Melt butter, stir in flour and cook for 1 minute.",
      "Whisk in milk until smooth and thick.",
      "Add cheese and stir until melted.",
      "Mix with pasta, top with breadcrumbs and bake until golden."
    ],
    "video": null
  },
  {
    "id": 3,
    "title": "Rainbow Buddha Bowl",
    "category": "Healthy",
    "time": 20,
    "difficulty": "Easy",
    "rating": 4.9,
    "author": "Arjun Rao",
    "emoji": "🥗",
    "image": "/images/recipes/rainbow-buddha-bowl.jpg",
    "description": "A colourful, nourishing bowl of crunchy vegetables, grains and tangy tahini dressing.",
    "ingredients": [
      "1 cup cooked quinoa",
      "1 cup chickpeas",
      "1 cucumber",
      "1 carrot",
      "1 cup red cabbage",
      "1 avocado",
      "2 tbsp tahini",
      "1 tbsp lemon juice"
    ],
    "steps": [
      "Prepare quinoa according to packet instructions.",
      "Chop cucumber, carrot, cabbage and avocado.",
      "Whisk tahini, lemon juice, a splash of water and salt.",
      "Arrange quinoa, chickpeas and vegetables in a bowl.",
      "Drizzle with dressing and serve fresh."
    ],
    "video": null
  },
  {
    "id": 12,
    "title": "Creamy Spinach Soup",
    "category": "Healthy",
    "time": 25,
    "difficulty": "Easy",
    "rating": 4.7,
    "author": "Food Recipes Kitchen",
    "emoji": "🥣",
    "image": "/images/recipes/creamy-spinach-soup.jpg",
    "description": "A smooth, comforting spinach soup with onion, garlic and a gentle touch of cream.",
    "ingredients": [
      "3 cups fresh spinach",
      "1 small onion, chopped",
      "2 garlic cloves",
      "2 cups vegetable stock",
      "¼ cup cream",
      "1 tbsp olive oil",
      "Salt and pepper"
    ],
    "steps": [
      "Heat olive oil in a pot and soften the onion.",
      "Add garlic and cook for 30 seconds.",
      "Add spinach and vegetable stock; simmer for 8 minutes.",
      "Blend until smooth, then stir in cream.",
      "Season to taste and serve warm."
    ],
    "video": null
  },
  {
    "id": 17,
    "title": "Chana Masala",
    "category": "Healthy",
    "time": 30,
    "difficulty": "Easy",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🥘",
    "image": "/images/recipes/chana-masala.jpg",
    "description": "Protein-rich chickpeas simmered in a tangy onion and tomato masala.",
    "ingredients": [
      "2 cups cooked chickpeas",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "1 tsp ginger-garlic paste",
      "1 tsp chana masala",
      "½ tsp cumin",
      "1 tbsp oil",
      "Coriander leaves"
    ],
    "steps": [
      "Heat oil and add cumin.",
      "Add onion and ginger-garlic paste; cook until soft.",
      "Add tomatoes and chana masala; cook until thick.",
      "Stir in chickpeas and ½ cup water.",
      "Simmer for 12 minutes and garnish with coriander."
    ],
    "video": null
  },
  {
    "id": 22,
    "title": "Greek Salad",
    "category": "Healthy",
    "time": 12,
    "difficulty": "Easy",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🥒",
    "image": "/images/recipes/greek-salad.jpg",
    "description": "A refreshing salad of cucumber, tomato, olives and feta with lemon dressing.",
    "ingredients": [
      "1 cucumber",
      "2 tomatoes",
      "½ red onion",
      "½ cup olives",
      "½ cup feta cheese",
      "1 tbsp olive oil",
      "1 tbsp lemon juice",
      "Oregano"
    ],
    "steps": [
      "Chop cucumber and tomatoes into bite-sized pieces.",
      "Thinly slice the onion.",
      "Combine vegetables and olives in a bowl.",
      "Whisk olive oil, lemon juice and oregano.",
      "Pour over the salad and top with feta."
    ],
    "video": null
  },
  {
    "id": 51,
    "title": "Vegetable Khichdi",
    "category": "Healthy",
    "time": 30,
    "difficulty": "Easy",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🍚",
    "image": "/images/recipes/vegetable-khichdi.jpg",
    "description": "A soothing one-pot meal of rice, lentils and vegetables.",
    "ingredients": [
      "½ cup rice",
      "½ cup moong dal",
      "1 cup mixed vegetables",
      "½ tsp cumin",
      "¼ tsp turmeric",
      "4 cups water",
      "Salt"
    ],
    "steps": [
      "Wash rice and dal together.",
      "Heat a little ghee and add cumin.",
      "Add vegetables, rice, dal, turmeric, salt and water.",
      "Pressure-cook until soft.",
      "Stir and serve warm with yogurt."
    ],
    "video": null
  },
  {
    "id": 6,
    "title": "Chocolate Lava Cakes",
    "category": "Dessert",
    "time": 22,
    "difficulty": "Medium",
    "rating": 5,
    "author": "Luca Martin",
    "emoji": "🍫",
    "image": "/images/recipes/chocolate-lava-cakes.jpg",
    "description": "Rich little chocolate cakes with a warm, molten centre. Date-night worthy, any night.",
    "ingredients": [
      "100 g dark chocolate",
      "100 g butter",
      "2 eggs",
      "¼ cup sugar",
      "2 tbsp flour",
      "Pinch of salt",
      "Butter for ramekins"
    ],
    "steps": [
      "Heat oven to 220°C. Butter two ramekins.",
      "Melt chocolate and butter together; cool slightly.",
      "Whisk eggs and sugar until pale, then fold in chocolate.",
      "Fold in flour and salt. Divide between ramekins.",
      "Bake 9–11 minutes. Rest 1 minute, then turn out carefully."
    ],
    "video": null
  },
  {
    "id": 26,
    "title": "Chocolate Chip Cookies",
    "category": "Dessert",
    "time": 25,
    "difficulty": "Easy",
    "rating": 4.9,
    "author": "Food Recipes Kitchen",
    "emoji": "🍪",
    "image": "/images/recipes/chocolate-chip-cookies.jpg",
    "description": "Soft-centred cookies with crisp edges and plenty of chocolate chips.",
    "ingredients": [
      "1½ cups flour",
      "½ cup softened butter",
      "½ cup brown sugar",
      "¼ cup white sugar",
      "1 egg",
      "½ tsp baking soda",
      "¾ cup chocolate chips",
      "1 tsp vanilla"
    ],
    "steps": [
      "Heat oven to 180°C and line a baking tray.",
      "Cream butter and both sugars until fluffy.",
      "Mix in egg and vanilla.",
      "Fold in flour and baking soda, then chocolate chips.",
      "Scoop onto the tray and bake for 10–12 minutes."
    ],
    "video": null
  },
  {
    "id": 55,
    "title": "Carrot Halwa",
    "category": "Dessert",
    "time": 45,
    "difficulty": "Medium",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🥕",
    "image": "/images/recipes/carrot-halwa.jpg",
    "description": "A classic Indian dessert of slow-cooked carrots, milk and cardamom.",
    "ingredients": [
      "4 cups grated carrots",
      "3 cups milk",
      "¼ cup sugar",
      "2 tbsp ghee",
      "¼ tsp cardamom",
      "2 tbsp chopped nuts"
    ],
    "steps": [
      "Cook grated carrots in a heavy pan for 5 minutes.",
      "Add milk and simmer, stirring often.",
      "Cook until most milk evaporates.",
      "Add sugar, ghee and cardamom.",
      "Garnish with nuts and serve warm."
    ],
    "video": null
  },
  {
    "id": 56,
    "title": "Rice Kheer",
    "category": "Dessert",
    "time": 40,
    "difficulty": "Easy",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🍮",
    "image": "/images/recipes/rice-kheer.jpg",
    "description": "Creamy rice pudding simmered with milk, cardamom and nuts.",
    "ingredients": [
      "¼ cup basmati rice",
      "1 litre milk",
      "¼ cup sugar",
      "¼ tsp cardamom",
      "2 tbsp chopped nuts",
      "A few raisins"
    ],
    "steps": [
      "Rinse rice and soak for 15 minutes.",
      "Bring milk to a gentle simmer.",
      "Add drained rice and cook, stirring often.",
      "When rice is soft, add sugar and cardamom.",
      "Garnish with nuts and raisins."
    ],
    "video": null
  },
  {
    "id": 57,
    "title": "Gulab Jamun",
    "category": "Dessert",
    "time": 40,
    "difficulty": "Medium",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🍩",
    "image": "/images/recipes/gulab-jamun.jpg",
    "description": "Soft milk-solid dumplings soaked in fragrant cardamom syrup.",
    "ingredients": [
      "1 cup milk powder",
      "¼ cup flour",
      "2 tbsp ghee",
      "¼ cup milk",
      "1 cup sugar",
      "1 cup water",
      "2 cardamom pods"
    ],
    "steps": [
      "Simmer sugar, water and cardamom to make a light syrup.",
      "Mix milk powder, flour and ghee.",
      "Add milk gradually to form a soft dough.",
      "Shape small smooth balls.",
      "Fry on low heat until evenly golden and soak in warm syrup."
    ],
    "video": null
  },
  {
    "id": 7,
    "title": "Golden Masala Chai",
    "category": "Drinks",
    "time": 12,
    "difficulty": "Easy",
    "rating": 4.9,
    "author": "Asha Reddy",
    "emoji": "☕",
    "image": "/images/recipes/golden-masala-chai.jpg",
    "description": "Comfort in a cup: strong tea simmered with warming spices, ginger and milk.",
    "ingredients": [
      "2 cups water",
      "2 tsp black tea",
      "1 cup milk",
      "1 inch fresh ginger",
      "2 cardamom pods",
      "1 small cinnamon stick",
      "Sugar to taste"
    ],
    "steps": [
      "Crush ginger and cardamom lightly.",
      "Bring water, ginger, cardamom and cinnamon to a simmer.",
      "Add tea and simmer for 2 minutes.",
      "Add milk and sugar; bring back to a gentle boil.",
      "Strain into cups and serve hot."
    ],
    "video": null
  },
  {
    "id": 13,
    "title": "Strawberry Banana Smoothie",
    "category": "Drinks",
    "time": 5,
    "difficulty": "Easy",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🍓",
    "image": "/images/recipes/strawberry-banana-smoothie.jpg",
    "description": "A naturally sweet, refreshing smoothie made with strawberries, banana and milk.",
    "ingredients": [
      "1 banana",
      "1 cup strawberries",
      "¾ cup milk",
      "½ cup yogurt",
      "1 tsp honey (optional)",
      "4 ice cubes"
    ],
    "steps": [
      "Wash and hull the strawberries.",
      "Add banana, strawberries, milk and yogurt to a blender.",
      "Add honey if desired and blend until smooth.",
      "Add ice and blend briefly again.",
      "Pour into glasses and serve immediately."
    ],
    "video": null
  },
  {
    "id": 25,
    "title": "Mango Lassi",
    "category": "Drinks",
    "time": 5,
    "difficulty": "Easy",
    "rating": 4.9,
    "author": "Food Recipes Kitchen",
    "emoji": "🥭",
    "image": "/images/recipes/mango-lassi.jpg",
    "description": "A cool, creamy mango and yogurt drink with a hint of cardamom.",
    "ingredients": [
      "1 cup ripe mango pieces",
      "1 cup plain yogurt",
      "½ cup chilled milk",
      "1–2 tsp sugar or honey",
      "A pinch of cardamom",
      "Ice cubes"
    ],
    "steps": [
      "Add mango, yogurt and milk to a blender.",
      "Add sugar or honey and cardamom.",
      "Blend until smooth and creamy.",
      "Add ice and blend briefly.",
      "Pour into glasses and serve chilled."
    ],
    "video": null
  },
  {
    "id": 59,
    "title": "Watermelon Mint Juice",
    "category": "Drinks",
    "time": 5,
    "difficulty": "Easy",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🍉",
    "image": "/images/recipes/watermelon-mint-juice.jpg",
    "description": "A fresh summer cooler made with watermelon, mint and lime.",
    "ingredients": [
      "3 cups seedless watermelon",
      "6 mint leaves",
      "½ lime",
      "Ice cubes"
    ],
    "steps": [
      "Chill the watermelon pieces.",
      "Blend watermelon with mint until smooth.",
      "Add lime juice and blend briefly.",
      "Strain if preferred.",
      "Serve over ice."
    ],
    "video": null
  },
  {
    "id": 8,
    "title": "Lemon Herb Roast Potatoes",
    "category": "Sides",
    "time": 40,
    "difficulty": "Easy",
    "rating": 4.7,
    "author": "Noah Green",
    "emoji": "🥔",
    "image": "/images/recipes/lemon-herb-roast-potatoes.jpg",
    "description": "Crispy-edged potatoes with lemon zest, rosemary and plenty of cracked pepper.",
    "ingredients": [
      "600 g baby potatoes",
      "2 tbsp olive oil",
      "1 lemon",
      "2 garlic cloves",
      "1 tsp rosemary",
      "Salt and pepper"
    ],
    "steps": [
      "Heat oven to 220°C. Halve the potatoes.",
      "Toss with olive oil, garlic, rosemary, salt and pepper.",
      "Roast for 30–35 minutes, turning halfway.",
      "Finish with lemon zest and a squeeze of lemon juice."
    ],
    "video": null
  },
  {
    "id": 24,
    "title": "Garlic Butter Mushrooms",
    "category": "Sides",
    "time": 15,
    "difficulty": "Easy",
    "rating": 4.7,
    "author": "Food Recipes Kitchen",
    "emoji": "🍄",
    "image": "/images/recipes/garlic-butter-mushrooms.jpg",
    "description": "Juicy mushrooms tossed in garlic butter, parsley and cracked pepper.",
    "ingredients": [
      "300 g mushrooms",
      "2 tbsp butter",
      "3 garlic cloves",
      "1 tbsp chopped parsley",
      "½ tsp black pepper",
      "Salt to taste",
      "1 tsp lemon juice"
    ],
    "steps": [
      "Clean and halve the mushrooms.",
      "Melt butter in a wide pan.",
      "Add mushrooms and cook until browned.",
      "Stir in minced garlic, salt and pepper.",
      "Finish with parsley and lemon juice."
    ],
    "video": null
  },
  {
    "id": 33,
    "title": "Homemade Hummus",
    "category": "Sides",
    "time": 10,
    "difficulty": "Easy",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🧆",
    "image": "/images/recipes/homemade-hummus.jpg",
    "description": "A smooth chickpea dip blended with tahini, lemon, garlic and olive oil.",
    "ingredients": [
      "1½ cups cooked chickpeas",
      "2 tbsp tahini",
      "1 lemon",
      "1 garlic clove",
      "2 tbsp olive oil",
      "2–3 tbsp cold water",
      "½ tsp cumin",
      "Salt to taste"
    ],
    "steps": [
      "Add chickpeas, tahini, lemon juice and garlic to a blender.",
      "Add cumin, salt and olive oil.",
      "Blend, adding cold water gradually until smooth.",
      "Taste and adjust lemon and salt.",
      "Serve with a drizzle of olive oil and vegetables or pita."
    ],
    "video": null
  },
  {
    "id": 52,
    "title": "Roasted Sweet Potato Wedges",
    "category": "Sides",
    "time": 30,
    "difficulty": "Easy",
    "rating": 4.8,
    "author": "Food Recipes Kitchen",
    "emoji": "🍠",
    "image": "/images/recipes/roasted-sweet-potato-wedges.jpg",
    "description": "Crispy-edged sweet potato wedges seasoned with paprika and herbs.",
    "ingredients": [
      "2 sweet potatoes",
      "1 tbsp olive oil",
      "½ tsp paprika",
      "½ tsp garlic powder",
      "½ tsp dried herbs",
      "Salt"
    ],
    "steps": [
      "Heat oven to 220°C.",
      "Cut sweet potatoes into wedges.",
      "Toss with oil and seasonings.",
      "Spread in one layer on a tray.",
      "Roast for 20–25 minutes, turning once."
    ],
    "video": null
  }
];
