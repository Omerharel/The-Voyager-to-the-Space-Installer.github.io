# The Voyager to the Space Installer

Static website built with plain **HTML/CSS/JavaScript**.

## Run locally (dev)

From the project folder:

```bash
python3 -m http.server 5173
```

Then open `http://localhost:5173/`.

## Project structure

- `index.html`: main page
- `style.css`: styles
- `javascript.js`: animations / interactions
- `Fonts/`: local font assets

## Notes

- The page uses CDN scripts (e.g. GSAP, ScrollMagic, particles.js). If you’re offline, those assets won’t load.
