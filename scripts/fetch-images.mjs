// Downloads one real food photo per recipe from Unsplash into public/images/recipes/
// Usage:  UNSPLASH_KEY=your_access_key npm run fetch-images
//   (Windows PowerShell:  $env:UNSPLASH_KEY="your_access_key"; npm run fetch-images)
// Free key: https://unsplash.com/developers  -> New Application -> copy the "Access Key".
// Existing files are overwritten, so the illustrations are replaced by real photos.
import { writeFile, mkdir } from 'node:fs/promises';
import { starterRecipes } from '../src/recipes.js';

const KEY = process.env.UNSPLASH_KEY;
if (!KEY) { console.error('Set UNSPLASH_KEY first (see the comment at the top of this file).'); process.exit(1); }

const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const dir = new URL('../public/images/recipes/', import.meta.url);
await mkdir(dir, { recursive: true });
const used = new Set();

for (const recipe of starterRecipes) {
  const query = `${recipe.title} food dish`;
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=5&orientation=landscape`,
    { headers: { Authorization: `Client-ID ${KEY}` } },
  );
  if (!res.ok) { console.error(`✗ ${recipe.title}: API error ${res.status}`); continue; }
  const { results } = await res.json();
  const photo = results.find((p) => !used.has(p.id)); // never reuse a photo for two recipes
  if (!photo) { console.error(`✗ ${recipe.title}: no photo found`); continue; }
  used.add(photo.id);
  fetch(photo.links.download_location, { headers: { Authorization: `Client-ID ${KEY}` } }).catch(() => {}); // Unsplash requires this ping
  const img = await fetch(`${photo.urls.raw}&w=900&q=85&fit=crop&auto=format`);
  await writeFile(new URL(`${slug(recipe.title)}.jpg`, dir), Buffer.from(await img.arrayBuffer()));
  console.log(`✓ ${recipe.title}  (photo by ${photo.user.name} on Unsplash)`);
  await new Promise((r) => setTimeout(r, 1200)); // stay under the free rate limit (50/hour)
}
console.log('Done. Restart npm run dev if it is running.');
