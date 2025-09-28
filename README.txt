Flappy Bird — Assets Version (Desktop & Mobile, PWA)
==========================================================

Customize by swapping files in /assets:

  /assets/images/bird.png   - square bird sprite (PNG/SVG works if you rename and keep the path)
  /assets/images/bg.png     - background image (288x512 recommended; any size ok, stretched)
  /assets/images/pipe.png   - pipe texture (will be stretched and flipped)
  /assets/images/ground.png - ground tile (tiled horizontally; height ~112px fits best)

  /assets/audio/flap.wav    - flap sound
  /assets/audio/score.wav   - score sound
  /assets/audio/hit.wav     - hit sound

No code changes needed—just replace the files and refresh.

Run locally:
1) Unzip and open index.html in your browser.
2) On iOS, better to serve via a simple static host (Netlify Drop, GitHub Pages, Cloudflare Pages).

Free hosting:
- Netlify Drop: https://app.netlify.com/drop (drag the folder, get a mobile-friendly URL)
- GitHub Pages: push to repo root and enable Pages.
- Cloudflare Pages: upload as a project.

Installable (PWA):
- Chrome/Edge: menu → Install App. Works offline with sw.js cache.
