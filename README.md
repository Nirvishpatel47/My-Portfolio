# Nirvish Patel — Personal Portfolio

A multi-page, editorial personal portfolio website designed for **Nirvish Patel**, inspired by the visual design system of [MadeForNothing](https://madefornothing.com/).

Built with **100% semantic HTML5, modern CSS3, and vanilla JavaScript** without any frameworks, bundlers, or third-party runtime dependencies.

---

## Page Routes & Structure

The website is architected into clean, extensionless directory routes:

```
f:\Nirvish Patel Portfolio\
├── index.html                   # / (Homepage)
├── work\
│   ├── index.html               # /work (All projects & demos)
│   ├── shivshakti-tech\
│   │   └── index.html           # /work/shivshakti-tech (Case study)
│   ├── madefornothing\
│   │   └── index.html           # /work/madefornothing (Case study)
│   ├── assistflow\
│   │   └── index.html           # /work/assistflow (Case study)
│   └── ddcet-preparation\
│       └── index.html           # /work/ddcet-preparation (Case study)
├── experience\
│   └── index.html               # /experience (Professional history)
├── about\
│   └── index.html               # /about (Background & philosophy)
├── contact\
│   └── index.html               # /contact (Direct channels & inquiry)
├── 404.html                     # Custom 404 page
├── styles.css                   # Global stylesheet (Tokens, Grid, Responsive)
├── script.js                    # Theme management, mobile drawer & interactions
├── vercel.json                  # Vercel clean URL rewrite configuration
├── _redirects                   # Netlify & Cloudflare Pages clean URLs
└── assets\
    └── images\
        └── profile.jpg          # Profile photograph
```

---

## Local Development & Testing

You can preview the entire multi-page website locally using Python's built-in HTTP server:

```bash
# From the project root:
python -m http.server 8000
```

Then open in your browser:
- Homepage: `http://localhost:8000/`
- Work Index: `http://localhost:8000/work/`
- Case Study (Shiv Shakti): `http://localhost:8000/work/shivshakti-tech/`
- Case Study (MadeForNothing): `http://localhost:8000/work/madefornothing/`
- Case Study (AssistFlow): `http://localhost:8000/work/assistflow/`
- Case Study (DDCET Preparation): `http://localhost:8000/work/ddcet-preparation/`
- Experience: `http://localhost:8000/experience/`
- About: `http://localhost:8000/about/`
- Contact: `http://localhost:8000/contact/`

---

## Clean URLs & Deployment

### 1. Vercel
Configuration is included in [`vercel.json`](vercel.json):
```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```
Deploy via `vercel` CLI or Git integration. URLs like `example.com/work` or `example.com/about` resolve cleanly.

### 2. Netlify / Cloudflare Pages
Configuration is included in [`_redirects`](_redirects). Extensionless paths automatically serve the corresponding `index.html` file.

### 3. Nginx / Docker
For custom VPS hosting:
```nginx
server {
    listen 80;
    server_name nirvishpatel.me;
    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ $uri/index.html /404.html;
    }
}
```

---

## Features & Highlights

- **Visual Design**: Understated paper tones, quiet typography (`Source Serif 4`, `IBM Plex Sans`, `IBM Plex Mono`), forest slate green accents, and subtle borders.
- **Persistent Theme**: Light and dark mode with zero flash of unstyled theme, stored in `localStorage` and matching system preference.
- **Editorial Portrait**: Framed 4:5 portrait treatment with caption badge and automatic SVG monogram fallback.
- **Fully Responsive**: Engineered and tested across viewports (375px mobile up to 1920px widescreen).
- **Accessible**: Semantic landmarks, keyboard navigation, contrast compliance, and `prefers-reduced-motion` support.
