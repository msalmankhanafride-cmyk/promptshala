# PromptPitara — Pro Refresh

A static HTML/CSS/JavaScript prompt library. No build step, framework, API key, or backend is required.

## Included in this update
- Premium responsive dark/neon marketplace visual refresh.
- Ten category artwork thumbnails plus a hero illustration (all local WebP assets).
- Preserved the existing 109 prompt templates and their individual prompt pages.
- Preserved the Custom Prompt Builder, search, category filters, saved prompts, preview, copy, and share behavior.
- Updated navigation, mobile layout, prompt cards, and metadata.

## Deploy to Vercel via GitHub
1. Extract the ZIP.
2. Open the extracted project folder and confirm `index.html`, `app.js`, `style.css`, and `assets/` are present.
3. Upload/replace the project files in your GitHub repository. Do not upload only `index.html`; the `assets` folder and all other files are required.
4. Commit the changes. Vercel should automatically redeploy if the repository is connected.
5. Open the deployed site on desktop and mobile and test search, category filters, prompt preview, copy, save, share, and the custom prompt builder.

## Editing prompts
Edit the `P` array at the top of `app.js`. Each entry uses:
`[category, title, prompt_template, { variable: default_value }]`

## Notes
- Saved prompts are stored locally in each visitor's browser; they do not sync across devices.
- The Custom Prompt Builder is rule-based. It does not call an AI API.
- This project is static and can be deployed directly to Vercel, Netlify, or GitHub Pages.
