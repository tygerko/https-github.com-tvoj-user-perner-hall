# Dokumentace projektu: Perner.Experience

**Klient:** Scott.Weber Workspace
**URL produkce (FTP):** `https://scottweber.cz/pernerexperience`
**URL staging (Vercel):** `https://https-github-com-tvoj-user-perner-h.vercel.app/`
**Repozitář:** GitHub – větev `main`
**Verze:** 1.0 (únor 2026)

---

## 1. Přehled projektu

Jednostránkový marketingový web (landing page) pro eventový prostor **Perner.Experience** od Scott.Weber Workspace. Web slouží jako prodejní nástroj pro potenciální klienty – prezentuje prostory, kapacity, varianty uspořádání a umožňuje odeslat poptávku přes HubSpot formulář.

---

## 2. Technologie

| Technologie | Verze | Účel |
|---|---|---|
| React | 19.2 | UI framework |
| Vite | 7.x | Build tool, dev server |
| CSS custom properties | – | Design systém (barvy, typografie, spacing) |
| react-pdf | 10.4 | (závislost, aktuálně nevyužívána aktivně) |
| ESLint | 9.x | Linting |

### Build příkazy

```bash
# Instalace závislostí
npm install

# Vývojový server (localhost:5173)
npm run dev

# Produkční build → složka /dist
npm run build

# Náhled produkčního buildu
npm run preview
```

---

## 3. Nasazení na FTP (scottweber.cz/pernerexperience)

### Postup

1. Spustit produkční build:
   ```bash
   npm run build
   ```
2. Obsah složky `/dist` nahrát na FTP do složky `/pernerexperience/` na serveru.

### Důležité nastavení serveru

Protože jde o **Single Page Application (SPA)**, musí server přesměrovávat všechny požadavky na `index.html`. Přidat do kořene nasazení soubor `.htaccess`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /pernerexperience/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /pernerexperience/index.html [L]
</IfModule>
```

### Base path ve Vite – DŮLEŽITÉ

V souboru `vite.config.js` je řádek s `base` jako **komentář**:

```js
// base: '/pernerexperience/', // ← odkomentovat LEN pro FTP build, ne pro Vercel
```

**Před FTP buildem je nutné tento řádek odkomentovat**, jinak budou všechny cesty k assetům broken v podsložce:

```js
export default defineConfig({
  base: '/pernerexperience/',   // ← odkomentovat před npm run build
  // ...
})
```

Po buildu a nahrání na FTP řádek opět zakomentovat (jinak se rozbije Vercel staging).

---

## 4. Struktura projektu

```
/
├── public/
│   ├── assets/
│   │   ├── floor-plan.jpg              # 3D půdorys (slide 0 ve Space Plan)
│   │   ├── og-image.jpg                # Open Graph obrázek (1200×630)
│   │   ├── logo-scott-weber.png        # Logo v Navbar
│   │   ├── pdf/
│   │   │   └── perner-karlin-varianty-usporadani.pdf   # Kompletní plán (ke stažení)
│   │   └── space-plans/
│   │       ├── thumbs/                 # JPG náhledy (710px výška, bez popisků)
│   │       │   ├── setup-a1-b2.jpg
│   │       │   └── ... (9 souborů)
│   │       ├── perner-experience-divadlo-hall-central.pdf
│   │       ├── perner-experience-skola-hall-central.pdf
│   │       ├── perner-experience-kabaret-hall.pdf
│   │       ├── perner-experience-banket-hall.pdf
│   │       ├── perner-experience-banket-hall-central.pdf
│   │       ├── perner-experience-koktejl-hall-central.pdf
│   │       ├── perner-experience-divadlo-hall1-hall2.pdf
│   │       ├── perner-experience-skola-hall1-hall2.pdf
│   │       └── perner-experience-koktejl-hall1-hall2.pdf
│   ├── sitemap.xml
│   ├── robots.txt
│   ├── favicon.png
│   └── apple-touch-icon.png
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css           # Navigace + CTA tlačítko
│   │   ├── Hero.jsx / .css             # Úvodní sekce s videem
│   │   ├── TrustBar.jsx / .css         # Lišta s logy klientů
│   │   ├── Why.jsx / .css              # Sekce "Proč Perner.Experience"
│   │   ├── UseCases.jsx / .css         # Typy eventů / use cases
│   │   ├── Capacities.jsx / .css       # Kapacity prostorů
│   │   ├── FloorPlan.jsx / .css        # Space Plan – swipe slider
│   │   ├── Gallery.jsx / .css          # Fotogalerie
│   │   ├── Footer.jsx / .css           # Patička s kontakty
│   │   ├── BookingModal.jsx / .css     # Poptávkový modal s HubSpot formulářem
│   │   ├── ExitIntentPopup.jsx / .css  # Popup při odchodu ze stránky
│   │   └── PdfViewer.jsx / .css        # Komponenta pro PDF viewer (rezerva)
│   ├── App.jsx                         # Hlavní komponenta, složení stránky
│   └── main.jsx                        # Vstupní bod aplikace
│
├── index.html                          # HTML šablona s SEO meta tagy
├── package.json
├── vite.config.js
└── DOKUMENTACE.md                      # Tento soubor
```

---

## 5. Komponenty – popis

### Navbar
- Fixní navigace s logem, navigačními odkazy a CTA tlačítkem „REZERVOVAT PROSTOR"
- Hamburger menu pod breakpointem **1100px**
- CTA tlačítko je viditelné na **všech velikostech obrazovky** (včetně mobilu vedle hamburgeru)

### Hero
- Fullscreen sekce s pozadím (video nebo obrázek)
- Obsahuje nadpis, perex a CTA tlačítko

### TrustBar
- Horizontální lišta s logy referenčních klientů (Rohlik, aj.)

### Why
- Sekce s ikonami a texty – klíčové vlastnosti prostoru

### UseCases
- Karty typů eventů (konference, gala, teambuilding, atd.)

### Capacities
- Tabulka/přehled kapacit jednotlivých sálů

### FloorPlan (Space Plan)
- **Swipe slider** s 10 slidy:
  - Slide 0: 3D vizualizace půdorysu (`floor-plan.jpg`)
  - Slidy 1–9: JPG náhledy Artboard PDF plánů s různými konfiguracemi
- Navigace: šipky, tečky (dots), dotykový swipe (mobil)
- Každý slide má tlačítko „Stáhnout PDF" pro přímé stažení PDF plánu
- SEO hidden list se všemi PDF odkazy (pro crawlery)

### Gallery
- Fotogalerie 8 prostorů s SEO alt texty

### BookingModal
- Modal formulář napojený na **HubSpot** (form ID v komponentě)
- Otevírá se kliknutím na CTA tlačítka na celé stránce

### ExitIntentPopup
- Popup zobrazený při detekci odchodu ze stránky (mouseout z okna)
- Slouží k zachycení odcházejícího návštěvníka s nabídkou

### Footer
- Kontaktní informace, adresa, odkaz na email
- Adresa: Pernerova 727/40a, Praha 8 – Karlín, **PSČ 186 00**
- Email: `svoboda@scottweber.cz`

---

## 6. Tracking a analytika

### Google Tag Manager
- **GTM ID:** `GTM-5WRHPMD`
- Implementace: script v `<head>` + noscript `<iframe>` v `<body>`
- Přes GTM lze spravovat všechny ostatní trackingové nástroje bez zásahu do kódu

### HubSpot
- **Account ID:** `25662392`
- Tracking script: `//js.hs-scripts.com/25662392.js`
- Forms script: `//js.hsforms.net/forms/v2.js`
- Obě knihovny načítány asynchronně (`async defer`)
- HubSpot formulář v `BookingModal.jsx` zachytává poptávky

### Open Graph & Twitter Card
- Nastaveno v `index.html`
- OG obrázek: `/assets/og-image.jpg` (1200×630 px)
- Slouží pro správné zobrazení při sdílení na LinkedIn, Facebook, Twitter

---

## 7. SEO

### Meta tagy
- Title, description, keywords – v `index.html`
- Canonical URL: `https://scottweber.cz/pernerexperience`
- `robots: index, follow`

### Schema.org JSON-LD (strukturovaná data)
V `index.html` jsou tři JSON-LD bloky:
1. **EventVenue + LocalBusiness** – adresa, kapacita, vybavení, kontakt, GPS souřadnice
2. **FAQPage** – 6 nejčastějších otázek pro Google Featured Snippets
3. **BreadcrumbList** – navigační drobečky pro SERP

### Sitemap
- `/public/sitemap.xml` – jedna URL stránky s prioritou 1.0

### robots.txt
- Povoluje indexaci všem robotům včetně AI crawlerů:
  - GPTBot (OpenAI)
  - Claude-Web (Anthropic)
  - PerplexityBot
  - anthropic-ai

### Alt texty obrázků
- Všechny fotografie v galerii mají SEO keyword-rich alt texty v češtině
- Všechny PDF náhledy ve Space Plan mají popisné alt texty

---

## 8. Řešené problémy

### PDF viewer rozbil responzivitu
**Problém:** Původní PDF iframe narušoval layout na menších obrazovkách.
**Řešení:** PDF iframe byl nahrazen swipe sliderem s JPG náhledy. PDF soubory jsou dostupné ke stažení, ne ke vložení (iframe).

### Navbar – kolize položek menu
**Problém:** Hamburger menu se aktivovalo na 780px, ale položky menu se začaly překrývat už na ~1100px.
**Řešení:** Breakpoint pro hamburger menu zvýšen na **1100px**.

### CTA tlačítko mizelo na mobilu
**Problém:** Při zobrazení hamburgeru se schoval i CTA button „REZERVOVAT PROSTOR", čímž se ztratila hlavní konverzní akce.
**Řešení:** CTA button zůstává viditelný na všech velikostech obrazovky (vedle hamburgeru), pouze zmenšen (`padding: .5rem 1rem`, `font-size: .68rem`).

### JPG náhledy obsahovaly textové popisky
**Problém:** Artboard PDF soubory měly v dolní části popisky a logo scott.weber, které neměly být viditelné v náhledech slideru.
**Řešení:** PNG náhledy generovány přes macOS `qlmanage`, konvertovány přes `sips` a oříznuty na výšku **710px** (z původních 990px), čímž se odstranily dolní textové popisky.

### Merge konflikt – stará mřížka se vrátila
**Problém:** Při mergování větve `claude/upbeat-nightingale` do `main` se remote `main` obsahoval jinou verzi `FloorPlan.jsx` (mřížka + PdfViewer iframe). Merge vytvořil nefunkční hybrid.
**Řešení:** Po merge byl `FloorPlan.jsx` ručně přepsán správnou (slider) verzí z worktree větve.

### PSČ nekonzistence
**Problém:** Footer zobrazoval PSČ `170 00`, JSON-LD strukturovaná data měla správně `186 00`.
**Řešení:** Footer opraven na `186 00 Praha – Karlín`.

### Nefunkční mailto odkaz v Footeru
**Problém:** Odkaz na email měl `href="#"` místo skutečné adresy.
**Řešení:** Opraveno na `href="mailto:svoboda@scottweber.cz"`.

---

## 9. PDF soubory – pojmenování

PDF soubory jsou pojmenovány podle obsahu, aby klient věděl, co stahuje:

| Soubor | Obsah |
|---|---|
| `perner-experience-divadlo-hall-central.pdf` | Divadelní uspořádání – Hall + Central |
| `perner-experience-skola-hall-central.pdf` | Školní uspořádání – Hall + Central |
| `perner-experience-kabaret-hall.pdf` | Kabaretní uspořádání – Hall |
| `perner-experience-banket-hall.pdf` | Banketové uspořádání – Hall |
| `perner-experience-banket-hall-central.pdf` | Banketové uspořádání – Hall + Central |
| `perner-experience-koktejl-hall-central.pdf` | Koktejlní uspořádání – Hall + Central |
| `perner-experience-divadlo-hall1-hall2.pdf` | Divadelní uspořádání – Hall 1 + Hall 2 |
| `perner-experience-skola-hall1-hall2.pdf` | Školní uspořádání – Hall 1 + Hall 2 |
| `perner-experience-koktejl-hall1-hall2.pdf` | Koktejlní uspořádání – Hall 1 + Hall 2 |
| `perner-karlin-varianty-usporadani.pdf` | Kompletní přehled všech variant |

---

## 10. Kontakt & správa

- **Kontaktní osoba (klient):** Petr Svoboda – `svoboda@scottweber.cz` – +420 724 286 796
- **Správa GTM:** Přes Google Tag Manager (ID: GTM-5WRHPMD) – nevyžaduje změny v kódu
- **HubSpot:** Formuláře a CRM přes HubSpot portál (Account ID: 25662392)

---

*Dokumentace vytvořena: únor 2026*
