# Perner.Experience – Dokumentace pro vývojáře

> **Scott.Weber Workspace** | Prémiový event prostor, Praha Karlín
> Verze projektu: 1.0 | Poslední aktualizace: únor 2026

---

## Obsah

1. [Přehled architektury](#1-přehled-architektury)
2. [Struktura projektu](#2-struktura-projektu)
3. [Hlavní sekce webu](#3-hlavní-sekce-webu)
4. [Technologie](#4-technologie)
5. [API integrace](#5-api-integrace)
6. [Spuštění a deploy](#6-spuštění-a-deploy)
7. [Zapeklitosti a known issues](#7-zapeklitosti-a-known-issues)

---

## 1. Přehled architektury

Web je **jednostránková aplikace (SPA)** postavená na **React 19 + Vite**. Nepoužívá žádný backend ani databázi – veškerá logika je na frontendu. Formuláře odesílají data přímo do **HubSpot** přes jejich Forms API. Mapa je vložena přes **Google Maps Embed API**.

```
Prohlížeč → Vite SPA (React)
              ├── HubSpot Forms API  (odeslání poptávky)
              ├── HubSpot Analytics  (tracking návštěvníků)
              └── Google Maps Embed  (iframe s mapou)
```

Web je nasazen na **Vercel** – automatický deploy se spustí při každém `git push` na větev `main`.

---

## 2. Struktura projektu

```
perner-vercel/
├── index.html                  ← SEO meta tagy, Schema.org JSON-LD, HubSpot skripty
├── vite.config.js              ← Vite konfigurace (jen React plugin, nic víc)
├── package.json
├── .env                        ← lokální env proměnné (viz sekce 7)
│
├── src/
│   ├── main.jsx                ← React root mount
│   ├── App.jsx                 ← Hlavní komponenta, routing sekcí, modal state
│   ├── index.css               ← Globální CSS proměnné (barvy, fonty, spacing)
│   └── components/
│       ├── Navbar.jsx / .css
│       ├── Hero.jsx / .css
│       ├── TrustBar.jsx / .css
│       ├── Why.jsx / .css
│       ├── Gallery.jsx / .css
│       ├── Capacities.jsx / .css
│       ├── UseCases.jsx / .css
│       ├── FloorPlan.jsx / .css
│       ├── BookingModal.jsx / .css
│       └── Footer.jsx / .css
│
└── public/
    ├── favicon.png
    ├── apple-touch-icon.png
    ├── robots.txt
    ├── sitemap.xml
    └── assets/
        ├── hero-video.mp4          ← Hero background video
        ├── floor-plan.jpg          ← 3D půdorys (hlavní overview)
        ├── og-image.jpg            ← Open Graph náhledový obrázek
        ├── logo-scott-weber.png
        ├── clients/                ← Loga klientů (SVG + PNG)
        ├── gallery/                ← Fotky eventu (PK8_Event1-8.jpg)
        └── space-plans/
            ├── setup-*.pdf         ← PDF podklady ke stažení (9 variant)
            └── thumbs/
                └── setup-*.jpg     ← Náhledy setup karet
```

---

## 3. Hlavní sekce webu

Web se skládá z těchto komponent, řazených shora dolů:

### 3.1 `Navbar`
- Fixní navigační lišta, scrolluje s průhledností
- Obsahuje tlačítko **"Poptat prostor"** → otevírá `BookingModal`
- Props: `onOpenModal` (callback)

### 3.2 `Hero`
- Fullscreen úvodní sekce s **video na pozadí** (`hero-video.mp4`)
- Video se automaticky přehrává, je ztlumené, smyčka
- CTA tlačítko → otevírá `BookingModal`
- Props: `onOpenModal` (callback)

### 3.3 `TrustBar`
- Animovaný ticker s logy klientů (Visa, Bolt, EY, Harley-Davidson, atd.)
- Loga jsou duplikována (pole `[...logos, ...logos]`) pro plynulé zacyklení
- Každé logo má volitelné vlastnosti:
  - `white: true` → aplikuje CSS filtr `brightness(0) invert(1)` (pro loga s tmavým textem)
  - `height` → výška v px jako inline style (override defaultní 36px)
  - bez příznaků → grayscale filtr, při hoveru plné barvy

### 3.4 `Why`
- Statická sekce s výhodami prostoru (ikony + text)
- Čistě prezentační, bez logiky

### 3.5 `Gallery`
- Fotogalerie eventů s lightboxem
- Fotky z `public/assets/gallery/PK8_Event1-8.jpg`
- Klik na fotku → fullscreen overlay lightbox (interní React state)

### 3.6 `Capacities`
- Přehled kapacit pro různá uspořádání (divadlo, banket, koktejl atd.)
- Statická data přímo v komponentě

### 3.7 `UseCases`
- Případy použití (konference, product launch, gala dinner atd.)
- Statická sekce s ikonami a popisky

### 3.8 `FloorPlan`
- **Interaktivní sekce s půdorysy**
- Hlavní 3D půdorys (`floor-plan.jpg`) – kliknutelný s lightboxem
- 9 karet variant uspořádání (Setup A1+B2 až C3)
  - Každá karta: náhledový obrázek (kliknutelný → lightbox) + tlačítko ke stažení PDF
- PDF soubory jsou v `public/assets/space-plans/setup-*.pdf`
- Náhledy v `public/assets/space-plans/thumbs/setup-*.jpg`

### 3.9 `BookingModal`
- Popup modal s poptávkovým formulářem
- Otvírá se z Navbar a Hero přes `onOpenModal` callback v `App.jsx`
- Po úspěšném odeslání zobrazí potvrzení, zavře se po 4 s
- Odesílá data do **HubSpot** (viz sekce API)

### 3.10 `Footer`
- Kontaktní sekce + druhý poptávkový formulář (inline, bez modalu)
- Google Maps iframe
- Kontaktní info (Petr Svoboda, adresa, MHD)
- Po úspěšném odeslání formuláře: zobrazí se potvrzení, po **4 sekundách** se formulář automaticky resetuje zpět do výchozího stavu
- Patička s logem Scott.Weber

---

## 4. Technologie

| Technologie | Verze | Použití |
|---|---|---|
| **React** | 19.x | UI framework |
| **Vite** | 7.x | Bundler, dev server, build |
| **CSS Modules** | – | Každá komponenta má vlastní `.css` soubor |
| **HubSpot Forms API** | v3 | Odesílání poptávek |
| **HubSpot Analytics** | – | Tracking návštěvníků (script v `index.html`) |
| **Google Maps Embed API** | – | Mapa lokality v patičce |
| **Schema.org JSON-LD** | – | SEO strukturovaná data (EventVenue, FAQPage, BreadcrumbList) |
| **Vercel** | – | Hosting, CD pipeline |

### CSS architektura
- Globální design tokens jsou definovány v `src/index.css` jako CSS proměnné:
  ```css
  --clr-gold, --clr-text, --clr-text-dim, --clr-surface, --clr-surface2,
  --clr-border-dim, --dur, --ease ...
  ```
- Každá komponenta importuje vlastní `.css` soubor s BEM-like třídami
- Není použit žádný CSS framework (žádný Tailwind, Bootstrap apod.)

---

## 5. API integrace

### 5.1 HubSpot Forms API

**Endpoint:**
```
POST https://api.hsforms.com/submissions/v3/integration/submit/{PORTAL_ID}/{FORM_ID}
```

**Credentials (hardcoded v komponentách):**
```
PORTAL_ID = 25662392
FORM_ID   = adcabaf2-3b40-4937-bc02-cbf251d6135b   ← Footer formulář
```
> BookingModal může mít jiné FORM_ID – ověř v `BookingModal.jsx`

**Tělo požadavku:**
```json
{
  "fields": [
    { "name": "firstname", "value": "..." },
    { "name": "lastname",  "value": "..." },
    { "name": "email",     "value": "..." },
    { "name": "phone",     "value": "..." },
    { "name": "company",   "value": "..." },
    { "name": "datum_akce","value": "1700000000000" },  ← timestamp v ms!
    { "name": "pocet_hostu","value": "200" },
    { "name": "typ_akce",  "value": "Konference" },
    { "name": "message",   "value": "..." }
  ],
  "context": {
    "pageUri": "https://...",
    "pageName": "Perner.Experience"
  }
}
```

> **Důležité:** Pole `datum_akce` je v HubSpot nakonfigurováno jako **date** typ a očekává timestamp v milisekundách (ne ISO string). Konverze se dělá přes `new Date(value).setHours(12, 0, 0, 0)`.

**Prázdná pole jsou filtrována** (`.filter(f => f.value)`) – HubSpot by vrátil chybu při prázdném required poli.

---

### 5.2 Google Maps Embed API

**Použití:** Pouze jako `<iframe>` v `Footer.jsx` – nevyžaduje žádný JavaScript SDK.

```jsx
src={`https://www.google.com/maps/embed/v1/place?key=AIzaSy...&q=50.091391,14.455645&zoom=18`}
```

> **API klíč je hardcoded** přímo v `Footer.jsx` (viz sekce 7 – zapeklitosti).

---

### 5.3 HubSpot Analytics

Tracking skript je vložen přímo do `index.html`:
```html
<script src="//js.hs-scripts.com/25662392.js" async defer></script>
```
Funguje automaticky, není potřeba nic volat z kódu.

---

## 6. Spuštění a deploy

### Lokální vývoj
```bash
npm install
npm run dev       # spustí Vite dev server na http://localhost:5173
```

### Build
```bash
npm run build     # vytvoří produkční build do /dist
npm run preview   # lokálně otestuje produkční build
```

### Deploy na Vercel
Deploy je **plně automatický** – napojený na GitHub větev `main`:
1. Udělej změny v kódu
2. `git add . && git commit -m "popis" && git push`
3. Vercel automaticky spustí build a nasadí

**Manuální deploy** (pokud není GitHub napojení):
1. `npm run build`
2. Nahrát obsah složky `/dist` na hosting

---

## 7. Zapeklitosti a known issues

Tato sekce dokumentuje problémy, na které jsme narazili – ušetří čas při případném debugování.

---

### ⚠️ 7.1 Google Maps API klíč – env proměnné nefungují na Vercel

**Problém:** Vite embeduje env proměnné (`import.meta.env.VITE_*`) **při build time**, ne za běhu. Pokud Vercel env proměnná není nastavena **před spuštěním buildu**, aplikace dostane `undefined`.

**Řešení:** API klíč pro Google Maps je **hardcoded** přímo v `Footer.jsx`. Není to ideální, ale Maps Embed API klíč lze omezit na konkrétní doménu v Google Cloud Console, takže riziko je minimální.

**Kde to je:** `Footer.jsx`, řádek s `maps/embed/v1/place?key=AIzaSy...`

---

### ⚠️ 7.2 PDF soubory se mezerou v názvu – 404 na Vercel

**Problém:** PDF soubory měly v názvech mezery (např. `Setup A1 + B2.pdf`). Lokálně fungovalo vše, ale Vercel vrátil 404 – URL encoding mezer (`%20`, `+`) nefunguje spolehlivě.

**Řešení:** Všechny PDF soubory přejmenovat na **kebab-case** bez mezer:
```
setup-a1-b2.pdf, setup-a2-b3.pdf, setup-a3.pdf, ...
```
Stejný vzor použít pro náhledy v `/thumbs/`.

> **Pravidlo:** Veškeré soubory v `/public/` pojmenovávat bez mezer a bez speciálních znaků (pouze `a-z`, `0-9`, `-`, `_`, `.`).

---

### ⚠️ 7.3 Favicon – JPEG přejmenovaný na .png

**Problém:** Původní favicon byl JPEG soubor přejmenovaný na `.png`. Prohlížeče odmítaly načíst ikonu i v inkognito módu.

**Řešení:** Správná konverze přes `sips`:
```bash
sips -s format png vstup.jpg --out favicon.png
```
Ne jen přejmenování souboru.

---

### ⚠️ 7.4 SVG loga klientů – filtry na tmavém pozadí

**Problém:** Klientská loga mají různé barvy a formáty. Na tmavém pozadí (#0a0a0a) je potřeba každé logo zpracovat jinak.

**Systém tří tříd v TrustBar.css:**
- **`.trust__logo-img`** (default) – `filter: grayscale(1)`, hover odstraní grayscale
- **`.trust__logo-img--white`** – `filter: brightness(0) invert(1)`, pro loga s tmavým textem/ikonou (Bolt, HP, Nestlé, Havel & Partners atd.)
- **`.trust__logo-img--color`** – `filter: none`, pro loga s průhledným pozadím a barevnou grafikou

**Nastavení v `TrustBar.jsx`:**
```jsx
{ src: '/assets/clients/bolt.svg',   alt: 'Bolt',   white: true, height: 36 }
{ src: '/assets/clients/rohlik.png', alt: 'Rohlik',             height: 62 }
```

> **Rohlik.cz:** Používá PNG (ne SVG) s bílým textem a žlutou ikonou na průhledném pozadí – **nepoužívat žádný filtr**. SVG verze nešla spolehlivě upravit.

---

### ⚠️ 7.5 HubSpot datum_akce – timestamp v milisekundách

**Problém:** HubSpot pole typu `date` **nepřijímá ISO string** (`2025-03-15`). Vrátí chybu validace.

**Řešení:** Konvertovat na Unix timestamp v milisekundách:
```js
String(new Date(form.datum_akce).setHours(12, 0, 0, 0))
// např. "1741953600000"
```
Čas je nastaven na poledne (12:00) aby nedocházelo k posunutí data kvůli časovým zónám.

---

### ⚠️ 7.6 Hero video – není v git repozitáři

**Problém:** `hero-video.mp4` (3.1 MB) není commitnutý v gitu (je v `.gitignore`). Po klonování repozitáře video chybí.

**Řešení:** Soubor je potřeba zkopírovat manuálně:
```
public/assets/hero-video.mp4
```

Lokálně se nachází v: `/Users/tyger/Documents/work/scott/perner-vercel/public/assets/hero-video.mp4`

---

### ⚠️ 7.7 Loga klientů – výšky jsou individuálně nastavené

Každé logo má nastavenou vlastní výšku v px (inline style), protože loga mají různé proporce a výchozí 36px nevyhovuje všem.

Přehled aktuálních výšek (v `TrustBar.jsx`):
```
Visa: 28px | Bolt: 36px | EY: 36px | Harley-Davidson: 19px
Rapid7: 23px | Rohlik: 62px | Generali: default | OCP: 80px
Nestlé: 43px | SimilarWeb: 44px | Strabag: 44px | HP: 44px
Mastercard: 44px | MZP: 78px | Firma roku: 60px | Havel: default
```

---

## Kontakt a přístupy

| Systém | Přístup |
|---|---|
| **GitHub** | `tygerko/perner-hall` |
| **Vercel** | napojeno na GitHub, auto-deploy |
| **HubSpot** | Portal ID: `25662392` |
| **Google Cloud** | Maps API klíč hardcoded v `Footer.jsx` |

---

*Dokumentace vytvořena na základě reálného vývoje projektu Perner.Experience.*
