# 🎂 Birthday Surprise Web App

A beautiful, single-file birthday greeting card with letter reveal—perfect for making someone feel special!

## Quick Start

```bash
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

## Customize

Edit **`src/App.jsx`**—everything is in one file:

1. **BIRTHDAY_NAME** (line ~13) — Replace with your friend's name
2. **LETTER_CONTENT** (line ~18) — Paste your heartfelt letter (supports 10,000+ words)
   - Use `<p>` for paragraphs, `<h2>` for section headers
   - Add `<div className="flex justify-center my-8"><span className="text-[#FF69B4] text-2xl">✦ ❤ ✦</span></div>` for decorative dividers
3. **Music** — Add an audio URL to the `<audio>` element's `src` attribute for background music

## Build for Production

```bash
npm run build
```

Deploy the `dist` folder to Vercel, Netlify, or any static host.
