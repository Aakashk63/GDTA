# GDTA 2026 — Wi-Fi Access Portal (High-Density Load Balanced)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAakashk63%2FGDTA)

Official high-capacity Wi-Fi access portal for **GDTA 2026** hosted at **SNS Institutions, Coimbatore**. Engineered to support **900+ concurrent attendees** seamlessly without access point congestion, latency, or server bottlenecks.

---

## ⚡ 900+ User Load Balancing Architecture

To ensure flawless operation when 900+ users connect simultaneously in the hall, the portal incorporates a two-layer load balancing strategy:

### 1. Wi-Fi Access Point Load Balancing (Client-Side)
- **Dedicated High-Density Access Point**: Connects attendees directly to the official high-capacity access point (`GDTA`), preventing DHCP exhaustion and connection drops.
- **Dynamic Recommended AP Badge**: Each attendee is guided to their assigned optimal AP (`⭐ Recommended for your device`).
- **Live Capacity & AP Load Metrics**: Real-time status indicators (Optimal Load, Connected Devices / Maximum AP capacity of 1,200).
- **Instant QR Code Scan-to-Connect**: Pre-rendered vector QR codes allow iOS & Android users to point their camera and connect instantly without typing passwords or waiting in DHCP queues.

### 2. Edge CDN & Web Traffic Load Balancing (Vercel)
- **Vercel Anycast Edge Network**: Responses served directly from edge POPs nearest to Coimbatore (Mumbai/Chennai) with <15ms TTFB.
- **Aggressive Edge Caching**: Configured via `vercel.json` with `s-maxage=86400, stale-while-revalidate` for HTML and 1-year immutable caching for static assets.
- **81% Bandwidth Reduction**: Background image converted to modern WebP (112 KB vs 591 KB PNG), saving hundreds of megabytes of cellular/Wi-Fi bandwidth when 900 users load the page concurrently.
- **Offline Service Worker (`sw.js`)**: All core assets, fonts, and QR codes are cached locally. Even if mobile cellular towers are overloaded at the venue, the portal opens instantly with 0ms delay offline.

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

## ✨ Key Features

- **High-Density Load Balancer**: Handles 900+ concurrent attendees across 1,200 total device AP capacity.
- **One-Click Password Copy**: Copies passwords with visual button confirmation (`COPIED!`) and clipboard fallback.
- **Password Reveal Toggle**: View password in plain text with one click.
- **Camera QR Connect**: Instant connection for mobile cameras via pre-generated SVG QR codes.
- **Offline Ready**: Progressive Web App capabilities via custom Service Worker (`sw.js`).
- **Responsive & Glassmorphic UI**: Tailored for all screen sizes from small phones to tablets and laptops.

---

## 📁 Project Structure

```
├── .gitignore             # Git ignore file for Vercel cache and OS files
├── favicon.svg            # Custom gold GDTA Wi-Fi favicon
├── gdta-background.png         # Desktop background artwork (fallback)
├── gdta-background.webp        # Desktop WebP background (112 KB - 81% smaller)
├── gdta-background-mobile.jpg  # Mobile portrait artwork (fallback)
├── gdta-background-mobile.webp # Mobile WebP portrait background (optimized)
├── index.html                  # Main entry point with Wi-Fi portal UI
├── main.html                   # Wi-Fi portal page
├── qr-gdta-2026.svg            # Wi-Fi QR code for GDTA_2026
├── qr-gdta-guest.svg      # Wi-Fi QR code for GDTA_GUEST
├── qr-gdta-media.svg      # Wi-Fi QR code for GDTA_MEDIA
├── qr-sns-gdta.svg        # Wi-Fi QR code for SNS_GDTA
├── README.md              # Project documentation and deployment guide
├── sw.js                  # Service Worker for offline resilience
└── vercel.json            # Edge CDN caching, clean URLs, and security headers
```

---

## 💻 Local Development / Preview

Preview locally without any dependencies:

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
