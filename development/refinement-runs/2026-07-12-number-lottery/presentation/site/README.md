# Resonant Time Capsule Static Site

This folder is a complete static website. It has no build step, package manager,
framework, external font, JavaScript, or server-side dependency.

## Required Files

```text
index.html
assets/resonant-time-capsule-poster.png
idea/index.html
```

Keep the relative paths unchanged when uploading.

The homepage links to `idea/`, a complete hosted HTML version of the full idea.
The public site does not depend on the research Markdown source.

## Local Preview

From this folder:

```bash
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080/`.

## Hosting

### Netlify Drop

Drag this entire `site` folder into Netlify Drop. No build command or publish
configuration is required.

### Cloudflare Pages Or Vercel

- Build command: none
- Output/publish directory: `.`
- Root directory: this `site` folder

### GitHub Pages

Publish this folder as the Pages source, or copy its contents into a repository
`docs/` folder. Keep `.nojekyll` so the files are served without Jekyll
processing.

### Any Static Web Host

Upload the contents so `index.html` is at the public root and `assets/` remains
next to it.

## Optional Before Publishing

- Add the final public domain as a canonical URL and `og:url`.
- Add an absolute hosted `og:image` URL for richer social previews.
- Replace the poster asset with a future time-capsule-explicit version while
  keeping the same filename, or update its path in `index.html`.

## Public Boundary

The page intentionally states that the idea is not live, no token supply has
been selected, and no words are being collected.
