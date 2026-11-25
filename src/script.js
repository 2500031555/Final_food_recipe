// Shared browser-storage helpers used by the Food Recipes modules.

export function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function clearSession() {
  localStorage.removeItem('rn_session');
}

// ---------- Media helpers (image + video upload) ----------

export const PLACEHOLDER_IMAGE = '/images/placeholder.jpg';
export const MAX_VIDEO_MB = 100;

// Read an image file, shrink it (max 900px wide) and return a compressed JPEG data URL
// so it fits comfortably in browser Local Storage.
export function imageFileToDataUrl(file, maxWidth = 900, quality = 0.82) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith('image/')) {
      reject(new Error('Please choose an image file (JPG, PNG or WEBP).'));
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Could not read the image.'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('This image could not be opened.'));
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width);
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

// Videos are too large for Local Storage, so uploaded video files are kept in IndexedDB.
function openVideoDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('food_recipes_media', 1);
    req.onupgradeneeded = () => req.result.createObjectStore('videos');
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveVideoFile(key, file) {
  const db = await openVideoDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('videos', 'readwrite');
    tx.objectStore('videos').put(file, key);
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => reject(tx.error);
  });
}

export async function loadVideoFile(key) {
  const db = await openVideoDb();
  return new Promise((resolve, reject) => {
    const req = db.transaction('videos').objectStore('videos').get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

export async function deleteVideoFile(key) {
  try {
    const db = await openVideoDb();
    db.transaction('videos', 'readwrite').objectStore('videos').delete(key);
  } catch {
    // Nothing to delete or storage unavailable.
  }
}

// Turn a YouTube / Vimeo page link into an embeddable URL. Returns null for direct video files.
export function getEmbedUrl(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace('www.', '');
    if (host === 'youtu.be') return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    if (host.endsWith('youtube.com')) {
      if (u.pathname.startsWith('/embed/')) return url;
      const id = u.searchParams.get('v') || (u.pathname.startsWith('/shorts/') ? u.pathname.split('/')[2] : '');
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }
    if (host === 'vimeo.com') return `https://player.vimeo.com/video/${u.pathname.split('/').filter(Boolean)[0]}`;
  } catch {
    // not a valid URL
  }
  return null;
}
