# Perner Hall — Landing Page
**Scott Weber Workspace · Praha – Karlín**

Premium event space landing page for Perner Hall at PK8 Pernerová 8.

---

## 📂 Štruktúra
```
perner-hall/
├── index.html              # Main landing page
├── assets/
│   └── images/
│       ├── venue-main.jpg  # Conference interior photo
│       └── floor-plan.jpg  # 3D isometric floor plan
└── README.md
```

## 🚀 Deploy na Vercel
1. Fork alebo clone tohto repo
2. Ídu na [vercel.com](https://vercel.com) → **New Project**
3. Import z GitHub → select `perner-hall`
4. Framework preset: **Other**
5. Click **Deploy**
6. Live URL: `https://perner-hall.vercel.app`

## 💻 Lokálne spustenie
Otvorte `index.html` priamo v browsere — žiadne build step ani server nepotrebuje.

## 🎨 Tech Stack
- **HTML5** — semantic markup
- **CSS3** — CSS Grid, Flexbox, CSS Variables, media queries
- **JavaScript** — vanilla JS, zero dependencies
- **Fonts** — Montserrat (Google Fonts)

## 📱 Responzivita
| Breakpoint | Layout |
|---|---|
| > 960px | Desktop — full nav, multi-col grids |
| 780–960px | Tablet — nav shrinks, single-col contact |
| < 780px | Mobile — hamburger menu, single-col layout |

## ✨ Features
- Smooth scroll navigation
- Booking modal s cookie auto-fill
- Interactive Google Maps embed + SVG fallback
- 3D floor plan sekcia
- Gallery grid s hover zoom
- Full-service contact form
