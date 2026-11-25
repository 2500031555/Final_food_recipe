import React, { useEffect, useState } from 'react';
import { imageFileToDataUrl, loadVideoFile, getEmbedUrl, MAX_VIDEO_MB } from './script.js';

// Image upload + image URL + video upload + video URL fields.
// Used by the Admin module (and the admin pop-up form).
export function MediaFields({ recipeForm, setRecipeForm, notify }) {
  const imagePreview = recipeForm.imageData || recipeForm.image;
  const [videoPreview, setVideoPreview] = useState('');

  useEffect(() => {
    if (!recipeForm.videoFile) { setVideoPreview(''); return undefined; }
    const url = URL.createObjectURL(recipeForm.videoFile);
    setVideoPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [recipeForm.videoFile]);

  async function pickImage(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const imageData = await imageFileToDataUrl(file);
      setRecipeForm((form) => ({ ...form, imageData }));
    } catch (error) {
      notify?.(error.message);
    }
    event.target.value = '';
  }

  function pickVideo(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('video/')) { notify?.('Please choose a video file (MP4, WEBM or MOV).'); return; }
    if (file.size > MAX_VIDEO_MB * 1024 * 1024) { notify?.(`Video is too large. Maximum size is ${MAX_VIDEO_MB} MB.`); return; }
    setRecipeForm((form) => ({ ...form, videoFile: file }));
    event.target.value = '';
  }

  return (
    <>
      <fieldset className="media-box">
        <legend>Recipe image</legend>
        <label className="file-pick">
          Upload image <span className="optional">(JPG, PNG or WEBP)</span>
          <input type="file" accept="image/*" onChange={pickImage} />
        </label>
        <label>
          …or paste an image URL <span className="optional">(optional)</span>
          <input
            type="url"
            value={recipeForm.image}
            onChange={(e) => setRecipeForm({ ...recipeForm, image: e.target.value })}
            placeholder="https://..."
          />
        </label>
        {imagePreview && (
          <div className="media-preview">
            <img src={imagePreview} alt="Selected recipe" />
            {recipeForm.imageData && (
              <button type="button" className="delete-btn" onClick={() => setRecipeForm({ ...recipeForm, imageData: '' })}>
                Remove uploaded image
              </button>
            )}
          </div>
        )}
      </fieldset>

      <fieldset className="media-box">
        <legend>Recipe video</legend>
        <label className="file-pick">
          Upload video <span className="optional">(MP4, WEBM · max {MAX_VIDEO_MB} MB)</span>
          <input type="file" accept="video/*" onChange={pickVideo} />
        </label>
        <label>
          …or paste a video URL <span className="optional">(YouTube, Vimeo or .mp4 link)</span>
          <input
            type="url"
            value={recipeForm.videoUrl}
            onChange={(e) => setRecipeForm({ ...recipeForm, videoUrl: e.target.value })}
            placeholder="https://www.youtube.com/watch?v=..."
          />
        </label>
        {recipeForm.videoFile && (
          <div className="media-preview">
            <video src={videoPreview} controls preload="metadata" />
            <span className="file-name">{recipeForm.videoFile.name}</span>
            <button type="button" className="delete-btn" onClick={() => setRecipeForm({ ...recipeForm, videoFile: null })}>
              Remove uploaded video
            </button>
          </div>
        )}
        {recipeForm.videoFile && recipeForm.videoUrl && (
          <small className="media-note">An uploaded video takes priority over the URL.</small>
        )}
      </fieldset>
    </>
  );
}

// Plays a recipe video: uploaded file (from IndexedDB), YouTube/Vimeo embed or a direct video link.
export function RecipeVideo({ video }) {
  const [src, setSrc] = useState('');
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let objectUrl = '';
    let cancelled = false;
    setSrc(''); setFailed(false);
    if (video?.kind === 'file') {
      loadVideoFile(video.key)
        .then((blob) => {
          if (cancelled) return;
          if (!blob) { setFailed(true); return; }
          objectUrl = URL.createObjectURL(blob);
          setSrc(objectUrl);
        })
        .catch(() => !cancelled && setFailed(true));
    } else if (video?.kind === 'url') {
      setSrc(video.url);
    }
    return () => { cancelled = true; if (objectUrl) URL.revokeObjectURL(objectUrl); };
  }, [video]);

  if (!video) return null;
  if (failed) return <p className="video-missing">This video is no longer available in this browser.</p>;
  if (!src) return <p className="video-missing">Loading video…</p>;

  const embed = video.kind === 'url' ? getEmbedUrl(src) : null;
  return (
    <div className="recipe-video">
      <h3>Watch how it's made</h3>
      {embed ? (
        <iframe src={embed} title="Recipe video" allow="accelerometer; encrypted-media; picture-in-picture" allowFullScreen />
      ) : (
        <video src={src} controls preload="metadata" onError={() => setFailed(true)} />
      )}
    </div>
  );
}
