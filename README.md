# GDTA 2026 — Wi-Fi Access Portal

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAakashk63%2FGDTA)

Official Wi-Fi access portal for **GDTA 2026** hosted at **SNS Institutions, Coimbatore**. This portal allows attendees, guests, media personnel, and staff to view available networks and easily copy passwords to their clipboard with a single click.

---

## 🚀 One-Click Deploy to Vercel

Click the button below to deploy this project directly to your Vercel account:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAakashk63%2FGDTA)

### Manual Vercel Deployment Steps:
1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New** > **Project**.
3. Select and import the `Aakashk63/GDTA` repository.
4. Keep the default settings (**Framework Preset: Other**, Root Directory: `./`).
5. Click **Deploy**. Your site will be live in seconds!

---

## ✨ Features

- **Instant Network Access**: Quick view of official Wi-Fi networks (Main, Guest, Campus, Media).
- **One-Click Password Copy**: Copies Wi-Fi passwords with animated visual confirmation and toast alerts.
- **Robust Clipboard Support**: Includes fallback clipboard support for secure contexts and embedded webviews.
- **Vercel Optimized**: Configured with `vercel.json` for clean URLs, security headers, and asset caching.
- **Responsive & Modern UI**: Built with glassmorphism, responsive typography, and mobile-first layout.
- **Custom Favicon & SEO**: Includes Open Graph tags, responsive SVG favicon, and search metadata.

---

## 📁 Project Structure

```
├── .gitignore             # Git ignore file for Vercel cache and OS files
├── favicon.svg            # Custom gold GDTA Wi-Fi favicon
├── gdta-background.png    # Background artwork
├── index.html             # Main entry point (served at root /)
├── main.html              # Fallback redirect to index.html
├── README.md              # Project documentation and deployment guide
└── vercel.json            # Vercel configuration (routing, caching, headers)
```

---

## 💻 Local Development / Preview

You can preview this project locally without any dependencies:

### Option 1: Direct in Browser
Simply double-click `index.html` or open it in any web browser.

### Option 2: Using a local web server (Recommended)
```bash
# Using Python
python -m http.server 3000

# Using Node.js (npx)
npx serve .
```
Then open `http://localhost:3000` in your browser.

---

## 🏢 Institution

**SNS Institutions, Coimbatore**  
*GDTA 2026*
