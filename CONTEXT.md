# VITTESA — Porcelain Maison
## Complete Architecture, Catalogue & Technical Context

> **Persistent Project Memory & System Context File**  
> **Brand Descriptor:** Porcelain Maison  
> **Positioning:** European-style premium hospitality porcelain  
> **Live Production URL:** [https://vittesa.vercel.app/](https://vittesa.vercel.app/)  
> **Repository:** `beyondwebco-lgtm/vittesa`  
> **Active Focus:** OLIVERA Exclusive Showroom (17 Pieces)  
> **Last Verified & Documented:** October 15, 2026  

---

## Table of Contents
1. [A. Project Overview](#a-project-overview)
2. [B. Technology Stack & Development Workflow](#b-technology-stack--development-workflow)
3. [C. Full Route Inventory](#c-full-route-inventory)
4. [D. Complete Collection Inventory](#d-complete-collection-inventory)
5. [E. Complete Product Inventory (OLIVERA 17 Pieces)](#e-complete-product-inventory)
6. [F. Product Detail Pages (PDP) & Subpages](#f-product-detail-pages-pdp--subpages)
7. [G. Image & Asset Registry](#g-image--asset-registry)
8. [H. Design System & Visual Guidelines](#h-design-system--visual-guidelines)
9. [I. Navigation & Shared Components](#i-navigation--shared-components)
10. [J. Specification Tray Engine](#j-specification-tray-engine)
11. [K. Product Filters & Collection Grids](#k-product-filters--collection-grids)
12. [L. Functional Behaviour & Interaction Map](#l-functional-behaviour--interaction-map)
13. [M. File & Component Map](#m-file--component-map)
14. [N. Known Issues & Technical Debt](#n-known-issues--technical-debt)
15. [O. Safe-Change Rules for Future AI Sessions](#o-safe-change-rules-for-future-ai-sessions)
16. [P. Change Log](#p-change-log)

---

## A. Project Overview

### Brand Identity & Positioning
- **Brand Name:** VITTESA
- **Brand Descriptor:** Porcelain Maison
- **Market Positioning:** European-style premium hospitality porcelain engineered for fine-dining restaurants, boutique luxury hotels, banqueting facilities, and culinary professionals.
- **Visual Aesthetic:** Minimalist luxury, architectural warmth, tactile organic contours, muted olive-grey mineral glaze, generous plating canvases, editorial photography, and understated luxury typography.

### Purpose of the Website & Simplified Customer Journey
VITTESA operates as an elegant, minimal digital showroom and catalogue dedicated **exclusively to the OLIVERA porcelain collection**. The website is structured around an immediately clear, product-focused customer journey:
1. **Understand Brand Offering:** Immediate recognition that VITTESA is a porcelain maison offering refined European-style porcelain tableware.
2. **Explore OLIVERA:** Seamless navigation into the flagship 17-piece OLIVERA collection via clear `SHOP OLIVERA` and `EXPLORE COLLECTION` CTAs.
3. **Browse Individual Products:** Discovering curated pieces directly on the homepage and the full 17-piece catalog on the collection page, each with clear dimensions, capacities, and a single `VIEW PRODUCT` action.
4. **Inspect Specifications & Imagery:** Multi-angle photography and complete technical specifications on dedicated Product Detail Pages (`collections/olivera/product.html?id=[id]`).
5. **Direct Product Enquiry & Bulk Ordering:** Genuine online checkout is not currently implemented; all purchase and procurement intent routes cleanly via `ENQUIRE NOW` into pre-filled enquiry forms (with product name automatically attached) or bulk hospitality schedules.

### Status of Legacy Collections
- **Active Website Scope:** OLIVERA is the **sole collection active** across the entire website.
- **Removed Collections:** LUMÉRA, AVÉRON, TERRA SPECKLE, URBANE GREY, PARADISE PINK, AQUA BLUE, and ESSENTIAL WHITE have been cleanly removed from active navigation, homepage sections, collection landing pages, showroom filters, footers, search, and trade enquiry options.
- **Data Safety:** Source files (`src/data/products/`) and underlying image assets in `public/assets/catalogue/` are strictly preserved on disk to prevent accidental data loss.

---

## B. Technology Stack & Development Workflow

### Core Stack
- **Framework:** Vanilla JavaScript (ES Modules, modern browser APIs), HTML5 semantic markup.
- **Build Tool:** Vite `^8.3.2` configured for multi-page static generation via Rollup options in `vite.config.js`.
- **CSS Architecture:** Vanilla CSS (`src/style.css`) with CSS Custom Properties (design tokens), flexbox, grid, clamp-based responsive typography, and luxury transition curves. No Tailwind or third-party CSS frameworks.
- **Client State Management:** Lightweight reactive in-memory state (`src/components/state.js`) synchronized with browser `localStorage` under `vittesa_spec_tray`.
- **Package Manager:** npm (with `package-lock.json`).
- **Dependencies (`package.json`):**
  - `dependencies`: `pdf-lib` `^1.17.1`, `pngjs` `^7.0.0`
  - `devDependencies`: `vite` `^8.3.2`
- **Hosting & Deployment:** Vercel Static Hosting (`https://vittesa.vercel.app/`). Automatically deployed from GitHub `main` branch.

### npm Scripts
| Command | Execution | Purpose |
| :--- | :--- | :--- |
| `npm run dev` | `vite` | Starts local development server with HMR |
| `npm run build` | `vite build` | Compiles multi-page distribution bundle into `dist/` |
| `npm run preview` | `vite preview` | Previews local production build |

---

## C. Full Route Inventory

| Route | File Path | Page Type | Status | Data Source | Key Components / Features |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | `app/page.tsx` | Homepage Showroom | Verified Active | `data/products/index.ts` | Two-collection showcase (OLIVERA & IVORA), `EXPLORE COLLECTIONS` primary CTA, full-screen hero, 8 curated tableware cards, About section, Bulk banner, Direct desk enquiry |
| `/collections` | `app/collections/page.tsx` | Collections Gateway | Verified Active | `data/collections.ts` | Dual-collection showcase featuring OLIVERA (17 pieces) and IVORA (17 pieces) with direct exploration CTAs |
| `/collections/olivera` | `app/collections/olivera/page.tsx` | Dedicated OLIVERA Page | Verified Active | `data/products/olivera.ts` | Compact heading, editorial hero, category filters (All 17, Plates 6, Bowls 7, Platters 2, Accessories 2), product grid |
| `/collections/olivera/product?id=[id]` | `app/collections/olivera/product/page.tsx` | OLIVERA Product Detail | Verified Active | `data/products/olivera.ts` | Multi-image thumbnail gallery, specifications table, `ENQUIRE NOW` and Specification Tray integrations |
| `/collections/ivora` | `app/collections/ivora/page.tsx` | Dedicated IVORA Page | Verified Active | `data/products/ivora.ts` | Editorial hero, category filters (All 17, Plates 6, Bowls 7, Platters 2, Accessories 2), responsive product grid (rewrites from `/collections/ivory`) |
| `/collections/ivora/[slug]` | `app/collections/ivora/[slug]/page.tsx` | IVORA Product Detail (Slug) | Verified Active | `data/products/ivora.ts` | Dynamic slug-based PDP with full keyboard, mouse & touch slideshow gallery, specs, tray & enquiry integration |
| `/collections/ivora/product?id=[id]` | `app/collections/ivora/product/page.tsx` | IVORA Product Detail (Query) | Verified Active | `data/products/ivora.ts` | Query-param compatible PDP route supporting legacy and direct ID lookups |
| `/showroom` | `app/showroom/page.tsx` | Showroom Explorer | Verified Active | `data/products/index.ts` | Technical explorer for all 34 pieces across OLIVERA & IVORA, collection filters, category filters, live search |

---

## D. Complete Collection Inventory

Verified from `data/collections.ts`. VITTESA active portfolio comprises two collections:

| # | Collection Name | Layer / Series | Category | Pieces | Hero Asset Path | URL Route | Description |
| :- | :--- | :--- | :--- | :-: | :--- | :--- | :--- |
| **01** | **OLIVERA** | Natural Earth Series | Curated Layer | 17 | `/assets/catalogue/olivera-editorial-hero.jpg` | `/collections/olivera/` | Softly muted olive-grey porcelain with rounded, organic silhouettes crafted for contemporary dining. |
| **02** | **IVORA** | Timeless Ivora Series | Curated Layer | 17 | `/assets/catalogue/ivora-editorial-hero.png` | `/collections/ivora/` | Timeless ivory-toned porcelain with refined silhouettes, designed for elegant dining and contemporary hospitality. |

**Total Active Products:** Exactly 34 verified pieces (17 OLIVERA + 17 IVORA).

---

## E. Complete Product Inventory

Every product below is extracted directly from the verified source files in `src/data/products/`. No missing fields are fabricated.

### 01. LUMÉRA (10 Pieces)
*Source:* `src/data/products/lumera.js` | *Layer:* 01 — SIGNATURE | *Palette:* Azure (`#244053`), Olive (`#565D46`), Sienna (`#8B4B32`)

| ID | Code | Product Name | Category | Dimensions | Capacity / Specs | Primary Image | Additional Images | Tray |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `lp-01` | `LP-01` | Dinner Plate | Plates | Ø 27 cm \| H 2.5 cm | Ø 27 cm, H 2.5 cm; Architectural Sculpted Rim | `/assets/catalogue/lumera-item-dinner-plate.jpg` | 1 image | Yes |
| `lp-02` | `LP-02` | Side Plate | Plates | Ø 21 cm \| H 2 cm | Ø 21 cm, H 2 cm; Architectural Rim | `/assets/catalogue/lumera-item-side-plate.jpg` | 1 image | Yes |
| `lp-03` | `LP-03` | Soup Plate | Bowls | Ø 22 cm \| H 4.5 cm | Ø 22 cm, H 4.5 cm; Deep Wells with Sculpted Rim | `/assets/catalogue/lumera-item-soup-plate.jpg` | 1 image | Yes |
| `lp-04` | `LP-04` | Pasta Bowl | Bowls | Ø 24 cm \| H 5.5 cm | Ø 24 cm, H 5.5 cm; Tapered Sculpted Silhouette | `/assets/catalogue/lumera-item-pasta-bowl.jpg` | 1 image | Yes |
| `lp-06` | `LP-06` | Cereal Bowl | Bowls | Ø 15 cm \| H 6.5 cm | Ø 15 cm, H 6.5 cm; Vertical Fluted Walls | `/assets/catalogue/lumera-item-cereal-bowl.jpg` | 1 image | Yes |
| `lp-07` | `LP-07` | Mug | Cups & Beverage | Ø 8.5 cm \| H 9 cm \| 320 ml | Capacity: 320 ml; Linear Relief Body | `/assets/catalogue/lumera-item-mug.jpg` | 1 image | Yes |
| `lp-08` | `LP-08` | Rectangular Platter | Platters & Serving | L 32 cm \| W 18 cm \| H 3 cm | L 32 cm, W 18 cm, H 3 cm; Linear Sculptural Rim | `/assets/catalogue/lumera-item-rect-platter.jpg` | 1 image | Yes |
| `lp-09` | `LP-09` | Oval Platter | Platters & Serving | L 36 cm \| W 24 cm \| H 3 cm | L 36 cm, W 24 cm, H 3 cm; Architectural Rim | `/assets/catalogue/lumera-item-oval-platter.jpg` | 1 image | Yes |
| `lp-10` | `LP-10` | Sauce Bowl | Bowls | Ø 10 cm \| H 4.5 cm \| 200 ml | Capacity: 200 ml; Fluted Sculptural Wall | `/assets/catalogue/lumera-item-sauce-bowl.jpg` | 1 image | Yes |
| `lp-11` | `LP-11` | Serving Dish | Platters & Serving | 20.5 cm x 14 cm | 20.5 cm x 14 cm; Stepped Rim Architecture | `/assets/catalogue/lumera-item-serving-dish.jpg` | 1 image | Yes |

---

### 02. OLIVERA (17 Pieces)
*Source:* `src/data/products/olivera.js` | *Layer:* 02 — CURATED | *Finish:* Softly Muted Olive-Grey Matted Glaze (`#7A816E`)

| ID | Code | Product Name | Category | Dimensions | Capacity | Primary Image | Additional Images | Tray | Dedicated PDP |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| `ase07103` | `ASEO7103` | Dinner Plate | Plates | 27 cm | Not specified | `/assets/catalogue/olivera/dinner plate main.jpg` | `dinner plate 1.jpg`, `dinner plate 3.jpg` (3 views) | Yes | `/collections/olivera/product.html?id=ase07103` |
| `ase07101` | `ASEO7101` | Salad Plate | Plates | 21 cm | Not specified | `/assets/catalogue/olivera/salad plate main.jpg` | `salad plate.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07101` |
| `ase07109` | `ASEO7109` | Deep Coupe | Plates | 23 cm | Not specified | `/assets/catalogue/olivera/deep coupe main.jpg` | `deep coupe 1.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07109` |
| `ase07114` | `ASEO7114` | Edge Plate Big | Plates | 26 cm | Not specified | `/assets/catalogue/olivera/edge plate big main.jpg` | `edge plate big.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07114` |
| `ase07112` | `ASEO7112` | Edge Plate Small | Plates | 20 cm | Not specified | `/assets/catalogue/olivera/edge plate small main.jpg` | `edge plate small.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07112` |
| `ase07111` | `ASEO7111` | Hi-Wall Appetizer Plate | Plates | 13 cm | Not specified | `/assets/catalogue/olivera/hi wall appetizer plate main.jpg` | `hi wall appetizer plate.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07111` |
| `ase07122` | `ASEO7122` | Serving Bowl 19 cm | Bowls | 19 cm \| 950 ml | 950 ml | `/assets/catalogue/olivera/serving bowl main.jpg` | `serving bowl 1.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07122` |
| `ase07121` | `ASEO7121` | Serving Bowl 15 cm | Bowls | 15 cm \| 590 ml | 590 ml | `/assets/catalogue/olivera/serving bowl 15cm main.jpg` | `serving bowl 15 cm.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07121` |
| `ase07124` | `ASEO7124` | Edge Bowl 20 cm | Bowls | 20 cm x 4.2 cm \| 620 ml | 620 ml | `/assets/catalogue/olivera/edge bowl main.jpg` | `edge bowl.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07124` |
| `ase07123` | `ASEO7123` | Edge Bowl 13 cm | Bowls | 13 cm x 6.5 cm \| 570 ml | 570 ml | `/assets/catalogue/olivera/edge bowl 750ml main.jpg` | `edge bowl 570 ml.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07123` |
| `ase07164` | `ASEO7164` | Soup Bowl | Bowls | 11.5 cm \| 287 ml | 287 ml | `/assets/catalogue/olivera/soup bowl main.jpg` | `soup bowl.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07164` |
| `ase07163` | `ASEO7163` | Katori Bowl | Bowls | 9.5 cm \| 190 ml | 190 ml | `/assets/catalogue/olivera/katori main.jpg` | `katori.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07163` |
| `ase07161` | `ASEO7161` | Dip Bowl | Bowls | 7.5 cm \| 42 ml | 42 ml | `/assets/catalogue/olivera/dip bowl main.jpg` | `dip bowl.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07161` |
| `ase07115` | `ASEO7115` | Chip Pot | Accessories | 400 ml | 400 ml | `/assets/catalogue/olivera/chip pot main.jpg` | `chip pot.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07115` |
| `ase07134` | `ASEO7134` | Creamer | Accessories | 220 ml | 220 ml | `/assets/catalogue/olivera/creamer main.jpg` | `creamer.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07134` |
| `ase07153` | `ASEO7153` | Platter Small | Platters & Serving | 22 cm x 15 cm | Not specified | `/assets/catalogue/olivera/platters main.jpg` | `platters.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07153` |
| `ase07154` | `ASEO7154` | Platter Medium | Platters & Serving | 27.5 cm x 18 cm | Not specified | `/assets/catalogue/olivera/platters main.jpg` | `platters.jpg` (2 views) | Yes | `/collections/olivera/product.html?id=ase07154` |

---

### 02b. IVORA (17 Pieces)
*Source:* `data/products/ivora.ts` | *Layer:* 02 — CURATED | *Finish:* Warm Ivory Matte Mineral Glaze with Sand Textured Rim (`#F7F4EE`)

| ID | Slug | Code | Product Name | Category | Dimensions | Capacity | Primary Image | Additional Images | Tray | Dedicated PDP |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| `asei7103` | `dinner-plate` | `ASEI7103` | Dinner Plate | Plates | 27 cm | Not specified | `/assets/catalogue/ivora/dinner plate main.png` | `dinner plate.png` (2 views) | Yes | `/collections/ivora/dinner-plate` |
| `asei7101` | `salad-plate` | `ASEI7101` | Salad Plate | Plates | 21 cm | Not specified | `/assets/catalogue/ivora/saladplate 21 cm main.png` | `salad plate.png` (2 views) | Yes | `/collections/ivora/salad-plate` |
| `asei7109` | `deep-coupe` | `ASEI7109` | Deep Coupe | Plates | 23 cm | Not specified | `/assets/catalogue/ivora/deep coupe main.png` | `deep coupe.png` (2 views) | Yes | `/collections/ivora/deep-coupe` |
| `asei7114` | `edge-plate-big` | `ASEI7114` | Edge Plate Big | Plates | 26 cm | Not specified | `/assets/catalogue/ivora/edge plate big main.png` | `edge plate big.png` (2 views) | Yes | `/collections/ivora/edge-plate-big` |
| `asei7112` | `edge-plate-small` | `ASEI7112` | Edge Plate Small | Plates | 20 cm | Not specified | `/assets/catalogue/ivora/edge plate small main.png` | `edge plate small.png` (2 views) | Yes | `/collections/ivora/edge-plate-small` |
| `asei7111` | `hi-wall-appetizer-plate` | `ASEI7111` | Hi-Wall Appetizer Plate | Plates | 13 cm | Not specified | `/assets/catalogue/ivora/hi wall appetizer plate main.png` | `hi wall appetizer plate.png` (2 views) | Yes | `/collections/ivora/hi-wall-appetizer-plate` |
| `asei7122` | `serving-bowl-19cm` | `ASEI7122` | Serving Bowl 19 cm | Bowls | 19 cm \| 950 ml | 950 ml | `/assets/catalogue/ivora/serving bowl 19cm main.png` | `serving bowl 19cm.png` (2 views) | Yes | `/collections/ivora/serving-bowl-19cm` |
| `asei7121` | `serving-bowl-15cm` | `ASEI7121` | Serving Bowl 15 cm | Bowls | 15 cm \| 590 ml | 590 ml | `/assets/catalogue/ivora/serving bowl 15cm main.png` | `serving bowl 15cm.png` (2 views) | Yes | `/collections/ivora/serving-bowl-15cm` |
| `asei7124` | `edge-bowl-20cm` | `ASEI7124` | Edge Bowl 20 cm | Bowls | 20 cm x 4.2 cm \| 620 ml | 620 ml | `/assets/catalogue/ivora/edge bowl 620 mlmain.png` | `edgebowl 620ml.png` (2 views) | Yes | `/collections/ivora/edge-bowl-20cm` |
| `asei7123` | `edge-bowl-13cm` | `ASEI7123` | Edge Bowl 13 cm | Bowls | 13 cm x 6.5 cm \| 570 ml | 570 ml | `/assets/catalogue/ivora/edge bowl main 570ml.png` | `edge bowl 570 ml.png` (2 views) | Yes | `/collections/ivora/edge-bowl-13cm` |
| `asei7164` | `soup-bowl` | `ASEI7164` | Soup Bowl | Bowls | 11.5 cm \| 287 ml | 287 ml | `/assets/catalogue/ivora/soup bowl main.png` | `soup bowl.png` (2 views) | Yes | `/collections/ivora/soup-bowl` |
| `asei7163` | `katori-bowl` | `ASEI7163` | Katori Bowl | Bowls | 9.5 cm \| 190 ml | 190 ml | `/assets/catalogue/ivora/katori main.png` | `katori.png` (2 views) | Yes | `/collections/ivora/katori-bowl` |
| `asei7161` | `dip-bowl` | `ASEI7161` | Dip Bowl | Bowls | 7.5 cm \| 42 ml | 42 ml | `/assets/catalogue/ivora/dip bowl main.png` | `dip bowl.png` (2 views) | Yes | `/collections/ivora/dip-bowl` |
| `asei7115` | `chip-pot` | `ASEI7115` | Chip Pot | Accessories | 400 ml | 400 ml | `/assets/catalogue/ivora/chip pot main.png` | `chip pot.png` (2 views) | Yes | `/collections/ivora/chip-pot` |
| `asei7134` | `creamer` | `ASEI7134` | Creamer | Accessories | 220 ml | 220 ml | `/assets/catalogue/ivora/creamer main.png` | `creamer.png` (2 views) | Yes | `/collections/ivora/creamer` |
| `asei7153` | `platter-small` | `ASEI7153` | Platter Small | Platters & Serving | 22 cm x 15 cm | Not specified | `/assets/catalogue/ivora/platters main.png` | `platters.png` (2 views) | Yes | `/collections/ivora/platter-small` |
| `asei7154` | `platter-medium` | `ASEI7154` | Platter Medium | Platters & Serving | 27.5 cm x 18 cm | Not specified | `/assets/catalogue/ivora/platters main.png` | `platters.png` (2 views) | Yes | `/collections/ivora/platter-medium` |

---

### 03. AVÉRON (45 Pieces)
*Source:* `src/data/products/averon.js` | *Layer:* 03 — CURATED | *Finish:* Sculpted Relief Chiseled Rim (`#EAE8E4`)

| ID | Code | Product Name | Category | Dimensions | Capacity / Specs | Primary Image |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `asrwm6101` | `ASRWM6101` | Quarter Plate | Plates | 20 cm | Sculpted Relief Chiseled Rim | `/assets/catalogue/asmr/asmrpl102.jpeg` |
| `asrwm6103` | `ASRWM6103` | Dinner Plate | Plates | 28 cm | Chiseled Relief Rim (2 views) | `/assets/catalogue/asmr/asmrpl118.jpeg` |
| `asrwm6105` | `ASRWM6105` | Soup Plate | Bowls | 26 cm \| 340 ml | Broad Chiseled Rim, Deep Central Reservoir | `/assets/catalogue/asmr/asmrbl241.jpeg` |
| `asrwm6125` | `ASRWM6125` | Soup Bowl | Bowls | 11.5 cm \| 300 ml | Textured Exterior Wall | `/assets/catalogue/asmr/asmrbl202.jpeg` |
| `asrwm6117` | `ASRWM6117` | Canvas Plate | Plates | 31 cm | Flat Plating Canvas, Chiseled Border | `/assets/catalogue/asmr/asmrpl118.jpeg` |
| `asrwm6118` | `ASRWM6118` | Magnum Plate | Plates | 31 cm | Deep Well with High-Relief Architectural Rim | `/assets/catalogue/asmr/asmrpl124.jpeg` |
| `asrwm6151` | `ASRWM6151` | Rectangle Platter | Platters & Serving | 29 × 15 cm | Chiseled Outer Border | `/assets/catalogue/asmr/asmrpl151.jpeg` |
| `asrwm6152` | `ASRWM6152` | Podium Platter | Platters & Serving | 27 × 11 cm | Elevated Podium Profile with Sculpted Edge | `/assets/catalogue/asmr/asmrpl152.jpeg` |
| `asmr-pl-101` | `ASMR-PL-101` | Coupe Plate 30 cm | Plates | 30 cm | Tactile Chiseled Relief Rim (2 views) | `/assets/catalogue/asmr/asmrpl118.jpeg` |
| `asmr-pl-102` | `ASMR-PL-102` | Coupe Plate 26 cm | Plates | 26 cm | Tactile Sculpted Rim | `/assets/catalogue/asmr/asmrpl102.jpeg` |
| `asmr-pl-107` | `ASMR-PL-107` | Sculpted Rim Plate 22 cm | Plates | 22 cm | Textured Rim Contour | `/assets/catalogue/asmr/asmrpl107.jpeg` |
| `asmr-pl-103` | `ASMR-PL-103` | Foot Plate (F/H) 31 cm | Plates | 31 cm | Elevated Pedestal Foot Base (F/H) | `/assets/catalogue/asmr/asmrpl119.jpeg` |
| `asmr-pl-104` | `ASMR-PL-104` | Foot Plate (F/H) 27 cm | Plates | 27 cm | Elevated Pedestal Base (F/H) | `/assets/catalogue/asmr/asmrpl119.jpeg` |
| `asmr-pl-105` | `ASMR-PL-105` | Foot Plate (F/H) 23.5 cm | Plates | 23.5 cm | Pedestal Footed Base (F/H) | `/assets/catalogue/asmr/asmrpl119.jpeg` |
| `asmr-pl-121` | `ASMR-PL-121` | Rim Soup Plate 24 cm | Bowls | 24 cm | Sculpted Wide Rim, Deep Inner Well | `/assets/catalogue/asmr/asmrpl124.jpeg` |
| `asmr-pl-122` | `ASMR-PL-122` | Rim Soup Plate 20 cm | Bowls | 20 cm | Tactile Border | `/assets/catalogue/asmr/asmrpl124.jpeg` |
| `asmr-pl-123` | `ASMR-PL-123` | Pizza / Fish Plate 31 cm | Plates | 31 cm | Low-Profile with Tactile Texture Rim | `/assets/catalogue/asmr/asmrpl123.jpeg` |
| `asmr-pl-124` | `ASMR-PL-124` | Deep Plate 27 cm | Plates | 27 cm | Deep Cavity with Wide Border | `/assets/catalogue/asmr/asmrpl124.jpeg` |
| `asmr-pl-132` | `ASMR-PL-132` | Sculpted Flat Plate 28 cm | Plates | 28 cm | Tactile Relief Rim | `/assets/catalogue/asmr/asmrpl132.jpeg` |
| `asmr-pl-133` | `ASMR-PL-133` | Sculpted Flat Plate 24 cm | Plates | 24 cm | Flat Surface with Chiseled Edge | `/assets/catalogue/asmr/asmrpl133.jpeg` |
| `asmr-pl-134` | `ASMR-PL-134` | Sculpted Flat Plate 18 cm | Plates | 18 cm | Bread/Side Plate | `/assets/catalogue/asmr/asmrpl134.jpeg` |
| `asmr-pl-201` | `ASMR-PL-201` | Charger Plate 30 cm | Plates | 30 cm | Full Surface Tactile Relief | `/assets/catalogue/asmr/asmrpl118.jpeg` |
| `asmr-pl-202` | `ASMR-PL-202` | Plate 27 cm | Plates | 27 cm | Organic Tactile Surface | `/assets/catalogue/asmr/asmrpl102.jpeg` |
| `asmr-pl-203` | `ASMR-PL-203` | Large Plate 23 cm | Plates | 23 cm | Medium Course Plate | `/assets/catalogue/asmr/asmrpl107.jpeg` |
| `asmr-pl-204` | `ASMR-PL-204` | Side Plate 16 cm | Plates | 16 cm | Petite Side / Butter Plate | `/assets/catalogue/asmr/asmrpl134.jpeg` |
| `asmr-pl-211` | `ASMR-PL-211` | Coupe Plate 19 cm | Plates | 19 cm | Textured Lip | `/assets/catalogue/asmr/asmrpl107.jpeg` |
| `asmr-pl-214` | `ASMR-PL-214` | Coupe Plate 24 cm | Plates | 24 cm | Graceful Rim Contour | `/assets/catalogue/asmr/asmrpl214.jpeg` |
| `asmr-bl-201` | `ASMR-BL-201` | Soup Bowl 22 cm | Bowls | 22 cm \| 450 ml | Chiseled Exterior Wall | `/assets/catalogue/asmr/asmrbl201.jpeg` |
| `asmr-bl-202` | `ASMR-BL-202` | Soup Bowl 18 cm | Bowls | 18 cm \| 300 ml | Compact Broth Bowl | `/assets/catalogue/asmr/asmrbl202.jpeg` |
| `asmr-bl-203` | `ASMR-BL-203` | Pasta Bowl 24 cm | Bowls | 24 cm \| 700 ml | Tactile Exterior Fluting | `/assets/catalogue/asmr/asmrbl203.jpeg` |
| `asmr-bl-204` | `ASMR-BL-204` | Soup Bowl 20 cm | Bowls | 20 cm \| 500 ml | All-Purpose Soup / Ramen Bowl | `/assets/catalogue/asmr/asmrbl204.jpeg` |
| `asmr-bl-221` | `ASMR-BL-221` | Coupe Bowl 20 cm | Bowls | 20 cm \| 800 ml | High-Capacity Coupe Bowl | `/assets/catalogue/asmr/asmrbl221.jpeg` |
| `asmr-bl-223` | `ASMR-BL-223` | Sculpted Salad Bowl 17 cm | Bowls | 17 cm \| 550 ml | Tactile Textured Rim (3 views) | `/assets/catalogue/asmr/asmrbl223.jpeg` |
| `asmr-bl-241` | `ASMR-BL-241` | Pasta Plate 24 cm | Bowls | 24 cm \| 600 ml | Expansive Wide-Rim Pasta Plate | `/assets/catalogue/asmr/asmrbl241.jpeg` |
| `asmr-bl-242` | `ASMR-BL-242` | Coupe Bowl 20 cm (450 ml) | Bowls | 20 cm \| 450 ml | Shallow Coupe Bowl | `/assets/catalogue/asmr/asmrbl242.jpeg` |
| `asmr-cu-271` | `ASMR-CU-271` | Tea Cup & Saucer 230 ml | Cups & Beverage | 230 ml | Matching Sculpted Relief Saucer | `/assets/catalogue/asmr/asmrcu271.jpeg` |
| `asmr-cu-272` | `ASMR-CU-272` | Coffee Cup & Saucer (Espresso) | Cups & Beverage | 90 ml | Matching Espresso Saucer | `/assets/catalogue/asmr/asmrcu272.jpeg` |
| `asmr-ac-301` | `ASMR-AC-301` | Sauce Dish 10 cm | Accessories | 10 cm | Tactile Sauce Dish | `/assets/catalogue/asmr/asmrac301.jpeg` |
| `asmr-ac-302` | `ASMR-AC-302` | Condiment Dish 12 cm | Accessories | 12 cm | Oval Condiment Dish (2 views) | `/assets/catalogue/asmr/asmrac302.jpeg` |
| `asmr-ac-303` | `ASMR-AC-303` | Rectangular Ramekin 14 × 8 cm | Accessories | 14 × 8 cm | Linear Sculpted Ramekin | `/assets/catalogue/asmr/asmrac303.jpeg` |
| `asmr-ac-304` | `ASMR-AC-304` | Divided Dish 15 × 8 cm | Accessories | 15 × 8 cm | Dual Divided Compartments | `/assets/catalogue/asmr/asmrac304.jpeg` |
| `asmr-ac-305` | `ASMR-AC-305` | Trio Condiment Tray | Accessories | 21 × 7 cm | Three Wells | `/assets/catalogue/asmr/asmrac305.jpeg` |
| `eov-107` | `EOV-107` | Oval Platter 35 × 20 cm | Platters & Serving | 35 × 20 cm | Sculpted Texture Rim Contour | `/assets/catalogue/asmr/eov107.jpeg` |
| `eov-112` | `EOV-112` | Oval Platter 30 × 17 cm | Platters & Serving | 30 × 17 cm | Sharing Platter | `/assets/catalogue/asmr/eov112.jpeg` |
| `eov-113` | `EOV-113` | Oval Platter 25 × 14 cm | Platters & Serving | 25 × 14 cm | Single-Portion Entree Platter | `/assets/catalogue/asmr/eov113.jpeg` |

---

### 04. TERRA SPECKLE (21 Pieces)
*Source:* `src/data/products/terra-speckle.js` | *Layer:* 04 — CURATED | *Finish:* Speckled Brown Mineral Glaze (`#C2B29D`)

| ID | Code | Product Name | Category | Dimensions | Specs / Capacity | Primary Image |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `assb5101` | `ASSB5101` | Terra Speckle Plate 20 cm | Plates | 20 cm | Side / Starter Plate | `/assets/catalogue/terra-speckle-product-range-1.png` |
| `assb5103` | `ASSB5103` | Terra Speckle Dinner Plate 27 cm | Plates | 27 cm | Organic Speckling, Warm Neutral Clay | `/assets/catalogue/terra-speckle-editorial-hero.png` |
| `assb5105` | `ASSB5105` | Terra Speckle Pasta Plate 27 cm | Plates | 27 cm | Rustic Rim Pasta Plate | `/assets/catalogue/terra-speckle-product-range-1.png` |
| `assb5112` | `ASSB5112` | Terra Speckle Edge Plate 20.5 cm | Plates | 20.5 cm | Vertical Rim Edge Plate | `/assets/catalogue/terra-speckle-product-range-1.png` |
| `assb5114` | `ASSB5114` | Terra Speckle Edge Plate 25.5 cm | Plates | 25.5 cm | Straight-Sided Dining Plate | `/assets/catalogue/terra-speckle-product-range-1.png` |
| `assb5141` | `ASSB5141` | Terra Speckle Elipse Plate 18 cm | Plates | 18 cm | Soft Elliptical Silhouette | `/assets/catalogue/terra-speckle-product-range-1.png` |
| `assb5142` | `ASSB5142` | Terra Speckle Elipse Plate 23 cm | Plates | 23 cm | Organic Elliptical Plate | `/assets/catalogue/terra-speckle-product-range-1.png` |
| `assb5143` | `ASSB5143` | Terra Speckle Elipse Plate 28 cm | Plates | 28 cm | Statement Elliptical Dinner Plate | `/assets/catalogue/terra-speckle-product-range-1.png` |
| `assb5121` | `ASSB5121` | Terra Speckle Footed Bowl 14.5 cm | Bowls | 14.5 cm \| 550 ml | Capacity: 550 ml | `/assets/catalogue/terra-speckle-product-range-1.png` |
| `assb5122` | `ASSB5122` | Terra Speckle Footed Bowl 15 cm | Bowls | 15 cm \| 850 ml | Capacity: 850 ml | `/assets/catalogue/terra-speckle-product-range-1.png` |
| `assb5123` | `ASSB5123` | Terra Speckle 'V' Bowl 16 cm | Bowls | 16 cm | Tapered Conical V-Profile | `/assets/catalogue/terra-speckle-product-range-1.png` |
| `assb5109` | `ASSB5109` | Terra Speckle Deep Coupe 22.5 cm | Bowls | 22.5 cm | Elevated Curving Rim | `/assets/catalogue/terra-speckle-product-range-1.png` |
| `assb5171` | `ASSB5171` | Terra Speckle Banquet Bowl 22 cm | Bowls | 22 cm | Contrast Rim Banquet Bowl | `/assets/catalogue/terra-speckle-product-range-2.png` |
| `assb5172` | `ASSB5172` | Terra Speckle Banquet Bowl 29.5 cm | Bowls | 29.5 cm | Centerpiece Sharing Bowl | `/assets/catalogue/terra-speckle-product-range-2.png` |
| `assb5132` | `ASSB5132` | Terra Speckle Barista Cup 250 ml | Cups & Beverage | 250 ml (Saucer 16 cm) | Capacity: 250 ml, Saucer ASSB5133 | `/assets/catalogue/terra-speckle-product-range-1.png` |
| `assb5136` | `ASSB5136` | Terra Speckle Expresso Cup 110 ml | Cups & Beverage | 110 ml (Saucer 12.5 cm) | Capacity: 110 ml, Saucer ASSB5137 | `/assets/catalogue/terra-speckle-product-range-1.png` |
| `assb5131` | `ASSB5131` | Terra Speckle Barrel Mug 350 ml | Cups & Beverage | 350 ml | Comfort Barrel Mug | `/assets/catalogue/terra-speckle-product-range-1.png` |
| `assb5135` | `ASSB5135` | Terra Speckle Tea Pot 685 ml | Cups & Beverage | 685 ml | Capacity: 685 ml, Precision Spout | `/assets/catalogue/terra-speckle-product-range-1.png` |
| `assb5151` | `ASSB5151` | Terra Speckle Rectangular Platter | Platters & Serving | 29 x 15 cm | Curving Lip | `/assets/catalogue/terra-speckle-product-range-2.png` |
| `assb5152` | `ASSB5152` | Terra Speckle Rectangular Platter Large | Platters & Serving | 39 x 21 cm | Large Sharing Platter | `/assets/catalogue/terra-speckle-product-range-2.png` |
| `assb5155` | `ASSB5155` | Terra Speckle Fluid Platter 27 × 11 cm | Platters & Serving | 27 × 11 cm | Narrow Tasting Platter | `/assets/catalogue/terra-speckle-product-range-2.png` |

---

### 05. URBANE GREY (5 Pieces)
*Source:* `src/data/products/urbane-grey.js` | *Layer:* 05 — CURATED | *Finish:* Mineral Slate Satin Matt Glaze (`#8C9298`)

| ID | Code | Product Name | Category | Dimensions | Specs / Capacity | Primary Image |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `asug5103` | `ASUG5103` | Urbane Grey Dinner Plate 27 cm | Plates | 27 cm | Mineral Slate Satin Matt Glaze | `/assets/catalogue/urbane-grey-editorial.jpg` |
| `asug5101` | `ASUG5101` | Urbane Grey Plate 20 cm | Plates | 20 cm | Side / Appetizer Plate | `/assets/catalogue/urbane-grey-range-1.jpg` |
| `asug5105` | `ASUG5105` | Urbane Grey Pasta Plate 27 cm | Plates | 27 cm | Expansive Rim Pasta Plate | `/assets/hero/creamy-mushroom-pasta-urban-grey.png` |
| `asug5151` | `ASUG5151` | Urbane Grey Rectangular Platter | Platters & Serving | 29 x 15 cm | Sleek Slate Rectangular Platter | `/assets/catalogue/urbane-grey-range-2.jpg` |
| `asug5132` | `ASUG5132` | Urbane Grey Barista Cup 250 ml | Cups & Beverage | 250 ml | Capacity: 250 ml Cappuccino Cup | `/assets/catalogue/urbane-grey-range-1.jpg` |

---

### 06. PARADISE PINK (4 Pieces)
*Source:* `src/data/products/paradise-pink.js` | *Layer:* 06 — ACCENT | *Finish:* Soft Rose Earth Matt Glaze with Contrast Rim (`#CBA39C`)

| ID | Code | Product Name | Category | Dimensions | Specs / Capacity | Primary Image |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `aspp5103` | `ASPP5103` | Paradise Pink Dinner Plate 27 cm | Plates | 27 cm | Soft Rose Earth Matt Glaze with Contrast Rim | `/assets/catalogue/paradise-pink-editorial.jpg` |
| `aspp5101` | `ASPP5101` | Paradise Pink Plate 20 cm | Plates | 20 cm | Side Plate in Soft Rose Blush | `/assets/catalogue/paradise-pink-range-1.jpg` |
| `aspp5105` | `ASPP5105` | Paradise Pink Pasta Plate 27 cm | Plates | 27 cm | Pastel Rose with Organic Border | `/assets/catalogue/paradise-pink-lifestyle.jpg` |
| `aspp5151` | `ASPP5151` | Paradise Pink Rectangular Platter | Platters & Serving | 29 x 15 cm | Pastry & Canapé Platter | `/assets/catalogue/paradise-pink-range-2.jpg` |

---

### 07. AQUA BLUE (4 Pieces)
*Source:* `src/data/products/aqua-blue.js` | *Layer:* 07 — ACCENT | *Finish:* Luminous Coastal Turquoise Glaze (`#79B1B8`)

| ID | Code | Product Name | Category | Dimensions | Specs / Capacity | Primary Image |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `asab5103` | `ASAB5103` | Aqua Blue Dinner Plate 27 cm | Plates | 27 cm | Luminous Coastal Turquoise Glaze | `/assets/catalogue/aqua-blue-editorial.jpg` |
| `asab5101` | `ASAB5101` | Aqua Blue Plate 20 cm | Plates | 20 cm | Appetizer Plate in Mediterranean Aqua | `/assets/catalogue/aqua-blue-range-1.jpg` |
| `asab5105` | `ASAB5105` | Aqua Blue Pasta Plate 27 cm | Plates | 27 cm | Turquoise Seafood & Crudo Pasta Plate | `/assets/catalogue/aqua-blue-lifestyle.jpg` |
| `asab5151` | `ASAB5151` | Aqua Blue Rectangular Platter | Platters & Serving | 29 x 15 cm | Crudo & Sashimi Serving Platter | `/assets/catalogue/aqua-blue-range-2.jpg` |

---

### 08. ESSENTIAL WHITE (15 Pieces)
*Source:* `src/data/products/essential-white.js` | *Layer:* 08 — FOUNDATION | *Finish:* Commercial Vitrified Pure Hotel White (`#F5F5F3`)

| ID | Code | Product Name | Category | Dimensions | Specs / Capacity | Primary Image |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `sn1109` | `SN1109` | Essential Coupe Plate 11" | Plates | 11" (28 cm) | High-density commercial vitrified white | `/assets/catalogue/essential-white-plates-range.png` |
| `sn1106` | `SN1106` | Essential Coupe Plate 10" | Plates | 10" (25.5 cm) | Standard banquet dinner plate | `/assets/catalogue/essential-white-plates-range.png` |
| `sn1102` | `SN1102` | Essential Coupe Plate 9" | Plates | 9" (23 cm) | Lunch and salad coupe plate | `/assets/catalogue/essential-white-plates-range.png` |
| `sn1101` | `SN1101` | Essential Coupe Plate 7" | Plates | 7" (18 cm) | Side and bread coupe plate | `/assets/catalogue/essential-white-plates-range.png` |
| `sn1219` | `SN1219` | Essential Georgian Plate 11" | Plates | 11" (28 cm) | Traditional wide Georgian rim | `/assets/catalogue/essential-white-plates-range.png` |
| `sn1218` | `SN1218` | Essential Georgian Plate 10" | Plates | 10" (25.5 cm) | Traditional hotel banquet plate | `/assets/catalogue/essential-white-plates-range.png` |
| `sn1326` | `SN1326` | Essential Edge Plate Big 27 cm | Plates | 27 cm | Modern vertical edge plate | `/assets/catalogue/essential-white-plates-range.png` |
| `sn1325` | `SN1325` | Essential Edge Plate Small 19 cm | Plates | 19 cm | 19 cm vertical rim edge side plate | `/assets/catalogue/essential-white-plates-range.png` |
| `sn1558` | `SN1558` | Essential Soup Plate Regular | Bowls | 340 ml | Capacity: 340 ml | `/assets/catalogue/essential-white-bowls-hero.jpg` |
| `sn1553` | `SN1553` | Essential Footed Bowl 6" | Bowls | 6" \| 750 ml | Diameter: 6", Capacity: 750 ml, Stackable foot | `/assets/catalogue/essential-white-bowls-range.png` |
| `sn1551` | `SN1551` | Essential Nappy Bowl 6.25" | Bowls | 6.25" \| 500 ml | Diameter: 6.25", Capacity: 500 ml | `/assets/catalogue/essential-white-bowls-range.png` |
| `sn1731` | `SN1731` | Essential Cappuccino Cup | Cups & Beverage | 230 ml | Capacity: 230 ml, Thermal rim retention | `/assets/catalogue/essential-white-cups-hero.jpg` |
| `sn1715` | `SN1715` | Essential Stackable Tea Cup | Cups & Beverage | 200 ml | Capacity: 200 ml, Interlocking stackable | `/assets/catalogue/essential-white-cups-range.png` |
| `sn1837` | `SN1837` | Essential Rectangular Platter 12" | Platters & Serving | 12" x 4.75" | Linear architectural platter | `/assets/catalogue/essential-white-platters-hero.jpg` |
| `sn1825` | `SN1825` | Essential Lotus Platter 12" | Platters & Serving | 12" x 6" | Curved flare rim lotus platter | `/assets/catalogue/essential-white-platters-range.png` |

---

## F. Product Detail Pages (PDP) & Subpages

### Implementation Architecture
1. **Routing Pattern:** `/collections/olivera/product.html?id=[productId]`
   - Configured in `vite.config.js` under Rollup inputs:
     `olivera_product: resolve(import.meta.dirname, 'collections/olivera/product.html')`
2. **Page Generation Strategy:** Dynamic client-side hydration from reusable HTML template.
   - The page extracts the target ID using `new URLSearchParams(window.location.search).get('id')`.
   - Resolves the product record against `OLIVERA_PRODUCTS` (or master `PRODUCTS`).
   - If `id` is missing or invalid, it gracefully falls back to the primary dinner plate (`ase07103`).
3. **Template Component Placement:** `collections/olivera/product.html`
4. **Hydration Engine:**
   - **Page Title & Meta:** Dynamically updates `<title>` and `<meta name="description">` to the item's specific name and collection context.
   - **Breadcrumbs:** Generates hierarchy `Home / Collections / OLIVERA / [Product Name]`.
   - **Main Gallery:** Renders a primary high-resolution slideshow view with interactive previous/next buttons and mobile touch swipe listeners.
   - **Thumbnail Strip:** Renders clickable thumbnail buttons below the main photograph. Synchronized bidirectionally with the main slider using a `MutationObserver` on `.carousel-slide.active`.
   - **Technical Specification Table:** Formats Diameter, Height, Capacity (ml), Glaze Finish, Series, and Commercial Durability attributes.
   - **Specification Tray Action:** Directly hooks into `window.vittesaAddToTray(productId)`. Displays visual feedback (`✓ Added to Spec Tray`).
   - **Trade Inquiry Action:** Opens the modal pre-filled with the exact product title via `window.vittesaOpenEnquiryModal('OLIVERA — ' + product.name)`.
   - **Cross-Selling Section:** Renders a 4-card grid ("More Pieces From OLIVERA") excluding the currently active product, each linking directly to its respective PDP.

---

## G. Image & Asset Registry

### Directory Structure
```
public/assets/
├── catalogue/
│   ├── olivera/             # 53 photography assets (plates, bowls, platters, showcase views)
│   ├── asmr/                # 38 photography assets for AVÉRON (sculpted relief chiseled chinaware)
│   ├── hero-lumera-table.jpg
│   ├── olivera-editorial-hero.jpg
│   ├── roke-editorial-hero.jpg
│   ├── terra-speckle-editorial-hero.png
│   ├── urbane-grey-editorial.jpg
│   ├── paradise-pink-editorial.jpg
│   ├── aqua-blue-editorial.jpg
│   ├── essential-white-platters-hero.jpg
│   ├── vittesa-emblem-gold.jpg
│   └── vittesa-brand-mark.jpg
└── hero/
    └── creamy-mushroom-pasta-urban-grey.png
```

### Preservation & File Rules
- **Multiple Views:** Numbered or suffixed files (e.g., `dinner plate main.jpg`, `dinner plate 1.jpg`, `dinner plate 3.jpg`, `asmrpl118 (2).jpeg`) represent distinct photographic angles of the same product.
- **Strict Asset Rule:** Never rename, consolidate, overwrite, or delete existing image files. They are actively referenced by product gallery carousels and PDP thumbnail strips.

---

## H. Design System & Visual Guidelines

### Color Tokens & Inks (`src/style.css`)
```css
:root {
  /* Editorial Porcelain Palette */
  --bg-porcelain: #F5F0E6;       /* Warm European off-white / parchment base */
  --bg-porcelain-alt: #EBE5D8;   /* Subtle contrasting background tone */
  --bg-stone: #E2DBD0;           /* Warm stone neutral */
  --bg-dark: #ECE5D8;            /* Softened background depth */
  --bg-surface: #FFFFFF;         /* Pure white container / card background */

  /* Inks */
  --ink-primary: #181716;        /* Deep charcoal / near black */
  --ink-secondary: #585551;      /* Refined editorial secondary text */
  --ink-muted: #8E8A84;          /* Soft metadata captions */

  /* Catalogue Accent Tones */
  --tone-azure: #23455B;         /* Mediterranean Azure (LUMÉRA) */
  --tone-olive: #59614B;         /* Natural Earth Olive (OLIVERA) */
  --tone-sienna: #8E4A35;        /* Warm Tuscan Sienna (LUMÉRA) */
  --tone-gold: #9E7B3B;          /* Muted Brand Gold Accent */
  --tone-gold-muted: rgba(158, 123, 59, 0.25);

  /* Lines & Dividers */
  --border-subtle: rgba(24, 23, 22, 0.08);
  --border-medium: rgba(24, 23, 22, 0.16);

  /* Typography */
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Layout Spacing */
  --container-max: 1440px;
  --gutter: clamp(1.25rem, 4vw, 3.5rem);
  --header-height: 80px;

  /* Transitions */
  --ease-luxury: cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: 0.7s var(--ease-luxury);
  --transition-fast: 0.25s ease;
}
```

### Established Aesthetic Principles
1. **Warmth Over Pure White:** Avoid stark `#FFFFFF` document backgrounds. All pages utilize `--bg-porcelain: #F5F0E6` to reflect natural clay and fine European porcelain bodies.
2. **Refined Compact Headings:** Headings must feel architectural, restrained, and intentional. Avoid oversized or garish banner titles.
3. **No Series Numbers in Display Copy:** Series codes and technical identifiers are stripped from customer-facing titles and descriptions site-wide to preserve a refined luxury aesthetic.
4. **Photography-First Presentation:** Products and collections are presented with expansive, clean aspect ratios (`aspect-ratio: 4/3` or `16/9`) using `object-fit: cover`.

---

## I. Navigation & Shared Components

### 1. Top Rotating Announcement Bar (`.top-announcement-bar`)
*Component File:* `src/components/announcement.js`
- **Location:** Slim, full-width announcement bar placed directly above the main navigation header across all pages.
- **Message Rotation:** Automatically cycles through 6 curated brand & trade messages every 3.5 seconds:
  1. `PREMIUM HOSPITALITY PORCELAIN FOR EVERY SETTING`
  2. `EXPLORE OUR EUROPEAN-STYLE COLLECTIONS`
  3. `BULK & WHOLESALE ENQUIRIES WELCOME`
  4. `OUTFITTING HOTELS, RESTAURANTS & CAFÉS`
  5. `CONNECT WITH US FOR INTERNATIONAL TRADE ENQUIRIES`
  6. `ENQUIRE ABOUT BULK ORDERS & SHIPPING OPTIONS` *(Note: Complimentary shipping offer was unverified in business policies and was intentionally replaced with verified bulk/shipping inquiry copy per specification).*
- **Aesthetics & Performance:** Styled in muted parchment `#E8E1D4` with refined uppercase typography, letter spacing (`0.16em`), and ultra-smooth fade/settle transitions. Fixed container minimum heights prevent any layout shifts during transitions.
- **Accessibility & Responsiveness:** Fully readable on desktop and mobile. Pauses rotation on mouse hover and keyboard focus (`focusin`/`focusout`). Respects user `prefers-reduced-motion` settings. Implements `<aside role="region" aria-label="Announcements">` and `aria-live="polite"`.

### 2. Site Header (`.site-header`)
- **Brand Logo:** Features the official `Elegant Gold VITTESA Monogram Logo` (`/assets/logo/vittesa-monogram-gold.png`), combining the circular monogram emblem and the refined serif wordmark in rich antique gold. Scaled with responsive bounds (`clamp(30px, 2.8vw, 36px)`) across all desktop headers, mobile navigation drawers, and footers. Favicon uses the extracted high-resolution circular monogram (`/assets/logo/vittesa-monogram-emblem.png`).
- **Left:** Brand luxury monogram logo (`.brand-logo-wrap`).
- **Center:** Desktop navigation links:
  - `Home` (`/`)
  - `Collections` (`/collections/`)
  - `Products` (`/showroom.html`)
  - `About Us` (`/#about`)
  - `Contact` (`/#contact`)
- **Right:**
  - **Header CTA:** Replaced old Spec Tray counter and Enquire link with a clean, luxury `CONTACT US` button (`.btn-contact-header`) linking directly to `/#contact` (smooth-scrolls to the trade inquiry desk).
  - **Mobile Menu Toggle:** Accessible hamburger toggle button.
- **Scroll Behavior:** Transitions to semi-opaque blurred glass (`rgba(245, 240, 230, 0.98)`) with subtle drop shadow on scroll past 40px.

### 3. Mobile Navigation Drawer (`.mobile-nav-overlay`)
- Accessible slide-out navigation with numbered index links (`01 Home`, `02 Collections`, etc.).
- Footer includes primary `CONTACT US` button (`.mobile-contact-btn`) navigating directly to the contact desk.
- Supports `Escape` key and backdrop click dismissal.

### 3. Collection Cards (`.collection-card-editorial`)
- Implemented in `collections/index.html`.
- Two-column split layout for featured hero collection (OLIVERA): ~54% image, ~46% content column with "EXPLORE OLIVERA" CTA.
- 3-column responsive grid for remaining collections.

### 4. Product Cards (`.product-item-card`)
- Clean rectangular presentation with consistent aspect ratio.
- Media block with progressive multi-image carousel or direct link.
- Product title, dimension / capacity tag.
- Single primary action button: `.btn-card-quickview` (`VIEW PRODUCT`) linking directly to the product's dedicated PDP (`/collections/olivera/product.html?id=[id]`).
- Clean 100% card width button styling with 44px mobile touch target and no competing duplicate buttons.

### 5. CTA Hierarchy & Conversion Map
Every page enforces a single clear, intentional primary action without competing button clutter:

| Location | Primary CTA | Destination / Behavior |
| :--- | :--- | :--- |
| **Announcement Bar** | 3 Rotating Messages | Bulk & wholesale, Olivera discovery, international shipping options |
| **Header** | `SHOP OLIVERA` | `/collections/olivera/` |
| **Homepage Hero** | `EXPLORE COLLECTION` | `/collections/olivera/` (Secondary: `CONTACT US` -> `/#contact`) |
| **Featured Collection** | `EXPLORE COLLECTION` | `/collections/olivera/` |
| **Homepage Product Cards** | `VIEW PRODUCT` | `/collections/olivera/product.html?id=[id]` |
| **Featured Products Footer** | `VIEW ALL OLIVERA PRODUCTS →` | `/collections/olivera/` |
| **Bulk Enquiry Banner** | `ENQUIRE ABOUT BULK ORDERS` | `#contact` (automatically preselects `bulk` enquiry type) |
| **Contact Section** | `SEND ENQUIRY` | Direct submission of streamlined enquiry form with validation |
| **Product Detail Page (PDP)** | `ENQUIRE NOW` | Opens enquiry modal pre-filled with product name (Secondary: `+ Add to Spec Tray`) |
| **Footer** | `OLIVERA Collection` | `/collections/olivera/` |

---

## J. Specification Tray Engine

*Component File:* `src/components/tray.js`

### Operational Workflow
1. **Adding an Item:** Invoked via `window.vittesaAddToTray(productId)`.
   - Verifies item existence in master catalog.
   - Prevents duplicate entries.
   - Pushes `{ id, code, name, collection, dimensions, image }` to `state.specTray`.
   - Serializes state to `localStorage.setItem('vittesa_spec_tray', ...)`.
   - Updates all `.tray-badge` elements across headers and mobile drawers.
2. **Removing an Item:** Invoked via `window.vittesaRemoveFromTray(productId)`.
   - Filters out the target item from `state.specTray`.
   - Re-syncs `localStorage` and updates badges and drawer item rows.
3. **Drawer Display:**
   - Empty state shows curated message and disables quotation actions.
   - Populated state renders item thumbnails, dimensions, collection labels, and remove buttons.
4. **Quotation Action (`tray-proceed-btn`):**
   - Collects all item names into a comma-separated schedule.
   - Pre-fills the enquiry notes field (`#enq-notes`) with:  
     `"Specification Schedule Request for: [Item 1, Item 2, ...]"`
   - Smoothly scrolls to the `#contact` section or redirects to `/#contact`.

---

## K. Product Filters & Collection Grids

*Component File:* `src/components/collection-filter.js`

### Filtering Logic
- Client-side category filtering using `data-category` attributes on `.product-item-card`.
- Standard category tabs:
  - `All Pieces`
  - `Plates`
  - `Bowls`
  - `Platters & Serving`
  - `Accessories` / `Cups & Beverage`
- Computes item count badges dynamically per category.
- Smooth CSS fade transition on grid changes.

---

## L. Functional Behaviour & Interaction Map

| Interaction | Trigger | Handler | Verified Target / Outcome | Status |
| :--- | :--- | :--- | :--- | :--- |
| Header Tray Button | Click `.open-tray-btn` | `initTray` in `tray.js` | Opens `.spec-tray-drawer` with current schedule | Verified Working |
| Add to Spec Tray | Click `.btn-card-tray` or PDP button | `addToTray` in `tray.js` | Saves to `localStorage`, increments badge | Verified Working |
| Remove from Tray | Click `✕` on tray item row | `removeFromTray` in `tray.js` | Removes item, updates drawer and badge | Verified Working |
| Card Slideshow Next/Prev | Click `.carousel-nav-btn` | `carousel.js` | Steps through multiple photos with slide transition | Verified Working |
| Card Slideshow Swipe | Touch swipe on mobile | `carousel.js` | Steps through photos based on horizontal delta (>30px) | Verified Working |
| PDP Thumbnail Click | Click `.pdp-thumb-btn` | `product.html` inline script | Transitions main PDP image to selected view | Verified Working |
| Quick View / View Details | Click product card media or link | Card anchor or `modal.js` | Navigates to PDP (`/collections/olivera/product.html?id=...`) or opens modal | Verified Working |
| Category Filter Tab | Click filter tab | `collection-filter.js` | Filters visible cards by category | Verified Working |
| Trade Enquiry Submission | Submit form | `enquiry.js` | Shows simulated transmission confirmation message | Verified Working |

---

## M. File & Component Map

### 1. Application Entry Points & Configuration
- `index.html`: Main landing page and portfolio overview.
- `vite.config.js`: Vite multi-page Rollup bundle configuration.
- `package.json`: Project manifest, build scripts, dependencies.

### 2. Pages & Routes
- `showroom.html`: Showroom curation page.
- `collections/index.html`: Master collections index page.
- `collections/olivera/index.html`: OLIVERA collection catalog.
- `collections/olivera/product.html`: Dedicated OLIVERA Product Detail Page (PDP).
- `collections/averon/index.html`: AVÉRON collection catalog.
- `collections/terra-speckle/index.html`: TERRA SPECKLE collection catalog.
- `collections/urbane-grey/index.html`: URBANE GREY collection catalog.
- `collections/paradise-pink/index.html`: PARADISE PINK collection catalog.
- `collections/aqua-blue/index.html`: AQUA BLUE collection catalog.
- `collections/essential-white/index.html`: ESSENTIAL WHITE collection catalog.

### 3. Data Modules (`src/data/`)
- `src/data/collections.js`: Master registry of all 8 collections.
- `src/data/catalogue-data.js`: Unified data aggregator for homepage components.
- `src/data/products/index.js`: Aggregates all 121 products.
- `src/data/products/lumera.js`: 10 LUMÉRA product specifications.
- `src/data/products/olivera.js`: 17 OLIVERA product specifications and photo arrays.
- `src/data/products/averon.js`: 45 AVÉRON product specifications.
- `src/data/products/terra-speckle.js`: 21 TERRA SPECKLE product specifications.
- `src/data/products/urbane-grey.js`: 5 URBANE GREY product specifications.
- `src/data/products/paradise-pink.js`: 4 PARADISE PINK product specifications.
- `src/data/products/aqua-blue.js`: 4 AQUA BLUE product specifications.
- `src/data/products/essential-white.js`: 15 ESSENTIAL WHITE product specifications.

### 4. Interactive Components (`src/components/`)
- `src/components/carousel.js`: Progressive slideshow engine with touch gestures.
- `src/components/tray.js`: Specification Tray state and drawer manager.
- `src/components/modal.js`: Quick-view technical specification modal.
- `src/components/navigation.js`: Header stickiness and mobile overlay navigation.
- `src/components/collection-filter.js`: Client-side category filtering tabs.
- `src/components/enquiry.js`: Trade inquiry modal and form handler.
- `src/components/state.js`: Global in-memory reactive state bus.

### 5. Styling
- `src/style.css`: Unified global stylesheet with complete design tokens.

---

## N. Known Issues & Technical Debt

1. **Missing LUMÉRA Collection Route (`/collections/lumera/`):**
   - *Status:* **Unresolved Gap**
   - *Detail:* `src/data/collections.js` registers LUMÉRA with URL `/collections/lumera/`, but the physical folder and HTML file do not exist in `collections/`. Users clicking LUMÉRA from the master index or navigation cannot view a dedicated LUMÉRA collection page.
2. **Single-Collection PDP Implementation:**
   - *Status:* **Known Architecture Constraint**
   - *Detail:* Currently, only OLIVERA has a dedicated standalone PDP template (`collections/olivera/product.html`). The other 7 collections currently rely on the inline quick-view modal (`src/components/modal.js`).
3. **Simulated Form Submission:**
   - *Status:* **Client-Side Prototype**
   - *Detail:* Trade inquiry forms and Specification Tray submissions currently simulate transmission with a timeout and confirmation UI; they are not yet wired to a live backend API or webhook.
4. **Direct Online Checkout / Payment Gateway Status:**
   - *Status:* **Architectural Model (B2B Procurement)**
   - *Detail:* Genuine direct online checkout, payment gateways, and shopping carts are not currently configured. In accordance with conversion design principles, the website avoids misleading or non-functional `BUY NOW` checkout traps; all purchasing interest routes cleanly via `ENQUIRE NOW` with pre-filled product details.

---

## O. Safe-Change Rules for Future AI Sessions

> **MANDATORY PROTOCOL FOR ALL FUTURE MODIFICATIONS**

1. **Read CONTEXT.md First:** Every future AI coding session must inspect this file before making changes.
2. **Preserve Asset Relationships:** Never rename, delete, overwrite, or consolidate existing images in `public/assets/`. Numbered files represent separate photographic views of single products.
3. **No Series Numbers in Customer UI:** Never re-introduce technical series codes into customer-facing titles or descriptions.
4. **Targeted Inspections Only:** Do not perform full project scans when `CONTEXT.md` already contains the authoritative inventory and component mapping.
5. **Aesthetic Consistency:** Maintain the warm porcelain aesthetic (`#F5F0E6`), compact refined headings, generous whitespace, and luxury typography.
6. **Update CONTEXT.md on Structural Changes:** Whenever new routes, products, PDP templates, or features are introduced, update the respective sections and add a dated entry to the Change Log.

---

## P. Change Log

| Date | Summary of Changes | Affected Files & Routes | Verification / Tests |
| :--- | :--- | :--- | :--- |
| **2026-10-14** | Initialized and populated complete `CONTEXT.md` project memory file. Documented complete architecture, all 8 collections, all 121 verified products, PDP routing, asset registries, design tokens, and technical debt. | `CONTEXT.md` (Root) | Verified all 121 product records against `src/data/products/`, checked Vite build configuration, verified file paths. |
| **2026-10-14** | Updated `olivera-editorial-hero.jpg` with user-edited clean horizontal tabletop photograph (removing catalogue page text/header/thumbnails). | `public/assets/catalogue/olivera-editorial-hero.jpg` | Verified visual composition and resolution. Used in `/collections/` and `/collections/olivera/`. |
| **2026-10-15** | Featured OLIVERA and hid all other collection cards on homepage (`index.html`) under `#collections`. Added centered single-card styling in `src/style.css` and updated gateway CTA to explore OLIVERA. | `index.html`, `src/style.css`, `CONTEXT.md` | Verified production build with `npm run build`. |
| **2026-10-15** | Removed "THE HOSPITALITY SHOWROOM" / Technical Catalogue Explorer gateway section from `index.html`. | `index.html`, `CONTEXT.md` | Verified production build with `npm run build`. |
| **2026-10-15** | Replaced static header announcement text with a rotating 6-message announcement slideshow (`src/components/announcement.js`, `.top-announcement-bar`) with hover/focus pause and reduced-motion support. Replaced unverified free shipping with bulk enquiry copy. Removed Spec Tray and Enquire buttons from header and mobile nav; added unified `CONTACT US` CTA linking to `/#contact`. Preserved tray engine elsewhere. | `src/components/announcement.js`, `src/main.js`, `src/style.css`, all 11 HTML pages, `CONTEXT.md` | Verified production build (`npm run build`), tested script execution, confirmed zero layout shifts. |
| **2026-10-15** | Replaced placeholder circular emblem + font lockup with official `VITTESA Luxury Serif Wordmark.png` across all 11 HTML pages (desktop header, mobile drawer header, and luxury footer). Cropped transparent margins and rendered high-resolution brand ink asset (`public/assets/logo/vittesa-wordmark-dark.png`) with responsive scaling and hover feedback. | All 11 HTML pages, `src/style.css`, `public/assets/logo/`, `CONTEXT.md` | Built successfully with `npm run build` (zero errors, 1.13s). Verified responsive sizing across breakpoints. |
| **2026-10-15** | Renamed `Serene Earth-Toned Ceramic Table Setting.png` to `about-us.png` (`public/assets/catalogue/about-us.png`) and updated homepage (`index.html`) About Us editorial photo. | `index.html`, `src/style.css`, `public/assets/catalogue/about-us.png`, `CONTEXT.md` | Verified production build (`npm run build`). |
| **2026-10-15** | Integrated official `Elegant Gold VITTESA Monogram Logo.png` as site logo across all 11 HTML pages (desktop headers, mobile drawers, and footers). Extracted clean transparent antique gold asset (`/assets/logo/vittesa-monogram-gold.png`) and circular monogram favicon (`/assets/logo/vittesa-monogram-emblem.png`). Proportioned responsive CSS scaling rules in `src/style.css`. | All 11 HTML pages, `src/style.css`, `public/assets/logo/`, `CONTEXT.md` | Verified production build (`npm run build`, 468ms). |
| **2026-10-15** | **OLIVERA Exclusive Showroom Transformation:** Simplified the active website experience to focus exclusively on the 17-piece OLIVERA porcelain collection. Excluded all other collections (LUMÉRA, AVÉRON, TERRA SPECKLE, URBANE GREY, PARADISE PINK, AQUA BLUE, ESSENTIAL WHITE) from active navigation, data aggregators, filters, footers, search, and enquiry dropdowns while preserving underlying image files on disk. Rebuilt homepage (`index.html`) with minimal header, OLIVERA editorial hero, featured collection banner, 17-piece responsive product showcase with multi-image slideshow carousels, refined About Us with `about-us.png`, dedicated trade enquiry form, and minimal luxury footer. Updated dedicated collection page (`collections/olivera/index.html`), product detail page (`collections/olivera/product.html`), collections gateway (`collections/index.html`), and showroom (`showroom.html`). Added working "Buy Now" enquiry pre-fill actions and responsive 2-column mobile layout. | `index.html`, `collections/olivera/index.html`, `collections/olivera/product.html`, `collections/index.html`, `showroom.html`, `src/data/products/index.js`, `src/data/collections.js`, `src/components/collection-filter.js`, `src/components/enquiry.js`, `src/components/showroom.js`, `src/style.css`, `CONTEXT.md` | Clean `npm run build` (424ms); `node scripts/check_purity.js` confirmed 0 legacy collection references; `node scripts/verify_olivera_products.js` confirmed all 17 items, images, and PDP links intact. |
| **2026-10-15** | **Premium Shopping UX & Conversion Optimisation:** Re-architected homepage (`index.html`) into a strict, focused 6-section shopping experience: (A) Editorial Hero with `Porcelain for Refined Living.` and `SHOP OLIVERA` / `CONTACT US` CTAs, (B) Featured OLIVERA collection with single `EXPLORE COLLECTION` CTA, (C) Shop the Products with 8 curated OLIVERA cards featuring single `VIEW PRODUCT` action leading to PDPs + `VIEW ALL PRODUCTS (17 PIECES)` button, (D) Refined brand introduction (`Designed for Exceptional Tables.`) with `about-us.png`, (E) Business contact section with streamlined enquiry form (Full Name, Email, Message required; Company, Phone, Enquiry Type optional; `SEND ENQUIRY`), and (F) Minimal luxury footer. Streamlined dedicated collection page (`collections/olivera/index.html`) with category filters and single `VIEW PRODUCT` card actions. Optimised Product Detail Pages (`collections/olivera/product.html`) with verified `ENQUIRE NOW` primary CTA, pre-filling product details into enquiry modal, secondary `+ Add to Spec Tray`, understated announcement bar, and clean coordinating pieces grid. Updated button typography, 100% card action widths, and 44px mobile touch targets in `src/style.css`. | `index.html`, `collections/olivera/index.html`, `collections/olivera/product.html`, `src/style.css`, `src/components/enquiry.js`, `src/components/router.js`, `src/components/tray.js`, `scripts/`, `CONTEXT.md` | Built cleanly with `npm run build` (671ms); verified 0 legacy collection references across active HTML; verified all 17 OLIVERA items, images, and PDP links via test scripts. |
| **2026-10-16** | **Homepage Redesign for Premium Porcelain Ecommerce Experience:** Transformed `index.html` into a clean, editorial, conversion-focused showroom matching the exact 10-section structure: (1) Announcement bar rotating 3 verified messages (`BULK & WHOLESALE ENQUIRIES WELCOME`, `DISCOVER THE OLIVERA COLLECTION`, `CONTACT US FOR INTERNATIONAL SHIPPING OPTIONS`), (2) Minimal navigation with gold monogram, Home, Collection, About, Contact, and primary action `SHOP OLIVERA`, (3) Editorial image-first Hero (`Beautifully Made for the Art of Dining.`, `Discover OLIVERA, a considered porcelain collection defined by softly muted olive-grey tones and organic silhouettes.`, `SHOP OLIVERA` and `EXPLORE THE COLLECTION` CTAs), (4) Featured collection (`Discover OLIVERA`), (5) Featured products showcase (`Selected for Your Table`) with 8 verified OLIVERA products (Dinner Plate, Salad Plate, Deep Coupe, Edge Plate Big, Serving Bowl 19 cm, Katori Bowl, Creamer, Platter Small) with multi-image carousels, dimensions, and single `VIEW PRODUCT` links to PDPs + `VIEW ALL OLIVERA PRODUCTS →`, (6) Refined brand introduction (`Thoughtfully Chosen Porcelain.` with `about-us.png`), (7) Factual Trust Section (`Chosen with Care.` with Product Enquiries Welcome, Bulk & Wholesale Enquiries, International Shipping Options — Contact Us), (8) Bulk & Wholesale enquiry banner (`Looking for Bulk or Wholesale Orders?`) with `ENQUIRE ABOUT BULK ORDERS` linking to `#contact` with auto-preselection of `bulk` enquiry type, (9) Simplified approachable contact desk (`How Can We Help?`), and (10) Minimal footer. | `index.html`, `src/style.css`, `src/components/router.js`, `scripts/validate_links.js`, `CONTEXT.md` | `npm run build` passed in 417ms; `check_purity.js` confirmed 0 legacy collection references; `verify_olivera_products.js` verified all 17 OLIVERA products and links; `validate_links.js` passed 100%. |
| **2026-10-16** | **Full-Screen Hero Redesign with Sunlit Artisan Stoneware Imagery:** Redesigned homepage hero section with full-width cinematic `Sunlit Artisan Stoneware Table Setting.png` background (`min-height: 90vh`), soft multi-stop black gradient overlay (52% to 4% opacity) preserving natural lighting and dish visibility, elegant white serif typography (`Exquisite Porcelain. Refined Dining.`), refined eyebrow (`VITTESA · PORCELAIN MAISON`), concise description, warm gold primary CTA button (`EXPLORE COLLECTION` -> `/collections/olivera/`) and ghost secondary CTA (`CONTACT US` -> `/#contact`). Mobile responsive layout with centered composition and full-width touch targets. | `index.html`, `src/style.css`, `public/assets/hero/`, `CONTEXT.md` | `npm run build` compiled cleanly in 432ms; `validate_links.js` passed 100%; `check_purity.js` confirmed 0 legacy collection references. |
| **2026-10-16** | **Next.js App Router Migration:** Implemented complete Next.js 16 + React 19 App Router architecture on branch `migration/nextjs-app-router`. Built root layout (`app/layout.tsx`) with Google Fonts (`Cormorant Garamond` & `Plus Jakarta Sans`), modular header, rotating announcement bar, specification tray drawer, and quick enquiry modal. Implemented all core routes: Homepage (`app/page.tsx`), Collections Gateway (`app/collections/page.tsx`), Dedicated Olivera Collection (`app/collections/olivera/page.tsx`), Product Detail Page (`app/collections/olivera/product/page.tsx`), and Showroom Explorer (`app/showroom/page.tsx`). Converted state management to Zustand (`store/trayStore.ts`, `store/modalStore.ts`) with localStorage persistence for the Specification Tray and dynamic PDF generation (`lib/pdf-generator.ts`). Configured rewrites for legacy routes in `next.config.mjs`. | `app/`, `components/`, `data/`, `lib/`, `store/`, `types/`, `next.config.mjs`, `tsconfig.json`, `package.json`, `CONTEXT.md` | `npx tsc --noEmit` and `npm run build` compiled with 0 errors; all routes prerendered cleanly. |
| **2026-10-17** | **Next.js Migration Finalization & Verification:** Completed end-to-end verification and hardening of the Next.js App Router setup. (1) Added hydration mounting guards to `SpecificationTrayDrawer.tsx`, `Header.tsx`, and `MobileNav.tsx` to eliminate SSR/localStorage hydration mismatch warnings. (2) Integrated Specification Tray direct transfer with `useModalStore` to immediately present a prefilled enquiry dialog with formatted tableware schedule. (3) Added responsive specification tray button into `MobileNav` when items exist in the schedule. (4) Extended `next.config.mjs` legacy HTML rewrites (`/index.html`, `/collections/index.html`, `/collections/olivera/index.html`, `/collections/olivera/product.html`, `/showroom.html`). (5) Verified clean static generation (all 7 routes 200 OK), zero TypeScript errors (`tsc --noEmit`), and verified all HTTP endpoints. | `components/tray/SpecificationTrayDrawer.tsx`, `components/layout/Header.tsx`, `components/layout/MobileNav.tsx`, `app/page.tsx`, `next.config.mjs`, `CONTEXT.md` | `npx tsc --noEmit` passed with 0 errors; `npm run build` passed in 714ms; all 8 HTTP routes returned 200 OK. |
| **2026-10-17** | **Vercel Next.js Deployment Configuration:** Added `vercel.json` with `"framework": "nextjs"` preset override to ensure Vercel automatically deploys with the Next.js build runtime. Triggered production redeployment. | `vercel.json`, `CONTEXT.md` | Pushed to GitHub `main` branch to trigger Vercel redeployment. |
| **2026-10-17** | **IVORY Porcelain Collection Integration:** Integrated new premium porcelain collection **IVORY** (17 pieces, 32 verified images) alongside OLIVERA. (1) Ingested all 32 authentic image assets from `Ivora Collection/` into `public/assets/catalogue/ivory/` and established `ivory-editorial-hero.png`. (2) Modeled full 17-piece catalog in `data/products/ivory.ts` with dimensions, capacities, and unique slugs; combined into unified 34-piece dataset in `data/products/index.ts`. (3) Registered collection in `data/collections.ts`. (4) Built dedicated collection page (`/collections/ivory/`) with category filters (Plates, Bowls, Platters, Accessories). (5) Built dynamic slug-based PDP (`/collections/ivory/[slug]/`) and query PDP (`/collections/ivory/product?id=...`) with accessible multi-view image gallery (mouse, keyboard Arrow keys, touch swipe), specification table, and direct enquiry modal prefill. (6) Updated homepage (`app/page.tsx`) with two-collection showcase (OLIVERA & IVORY), `EXPLORE COLLECTIONS` hero CTA, and dual-collection featured product explorer. (7) Updated collections gateway (`app/collections/page.tsx`) to showcase both lines and showroom explorer (`app/showroom/page.tsx`) with collection filter pills (`All Products`, `OLIVERA`, `IVORY`). (8) Updated header navigation (`Home | Collections | Products | About Us | Contact`) and footer links. | `data/products/ivory.ts`, `data/products/index.ts`, `data/collections.ts`, `app/collections/ivory/`, `app/collections/page.tsx`, `app/showroom/page.tsx`, `app/page.tsx`, `components/product/ProductDetailView.tsx`, `components/layout/Header.tsx`, `components/layout/Footer.tsx`, `CONTEXT.md` | `npx tsc --noEmit` passed (0 errors); `npm run build` static export succeeded (43 static pages); verified all routes 200 OK via HTTP endpoint tests. |
| **2026-10-18** | **IVORY Renamed to Official Collection Name IVORA:** Renamed the newly introduced porcelain collection from `IVORY` to **`IVORA`** (`Ivora Collection`) across all components, routes, and data files. (1) Created `data/products/ivora.ts` containing all 17 verified items with collection `IVORA`, `series: "Timeless Ivora Series"`, and image asset paths pointing to `public/assets/catalogue/ivora/`. (2) Updated `data/collections.ts` with collection name `IVORA`, slug `ivora`, and route `/collections/ivora/`, retaining alias fallback for `ivory`. (3) Re-exported `IVORA_PRODUCTS` as `IVORY_PRODUCTS` and maintained dual-match in `data/products/index.ts` for backward compatibility. (4) Established dedicated routes `app/collections/ivora/page.tsx`, `app/collections/ivora/[slug]/page.tsx`, and `app/collections/ivora/product/page.tsx`. (5) Added rewrites in `next.config.mjs` mapping `/collections/ivory`, `/collections/ivory/:slug`, and HTML variants to `/collections/ivora`. (6) Updated ProductCard, ProductDetailView, FeaturedCollectionSection, FeaturedProductsSection, ContactSection, ShowroomExplorer, SpecificationTrayDrawer, and AnnouncementBar labels. (7) Verified full build with 60 static and dynamic routes generated cleanly with zero errors. | `data/products/ivora.ts`, `data/products/ivory.ts`, `data/collections.ts`, `app/collections/ivora/`, `next.config.mjs`, `components/product/ProductDetailView.tsx`, `components/product/ProductCard.tsx`, `components/home/FeaturedCollectionSection.tsx`, `components/home/ContactSection.tsx`, `components/showroom/ShowroomExplorer.tsx`, `components/tray/SpecificationTrayDrawer.tsx`, `components/layout/AnnouncementBar.tsx`, `CONTEXT.md` | `npm run build` compiled 60 routes with 0 errors. |
| **2026-10-18** | **Minimalist Collection Section Redesign (OLIVERA & IVORA):** Streamlined the featured collection sections across the homepage (`components/home/FeaturedCollectionSection.tsx`) and collections gateway (`app/collections/page.tsx`) to adhere strictly to a 3-element minimal layout beside the large collection image: (1) Elegant serif collection heading (`OLIVERA` / `IVORA`), (2) Concise, readable single-sentence description, (3) Warm gold/bronze button (`SHOP NOW`) linking directly to the collection page (`/collections/olivera/` and `/collections/ivora/`). Completely removed all legacy badges, series labels (`Series 02 • Natural Earth`, `Series 01 • Timeless Ivora`), pieces metadata (`17 Verified Pieces`), specification tags (`Vitrified Porcelain`, `Dishwasher & Microwave Safe`), and redundant headers. Styled `.olivera-feature-btn` in `app/globals.css` and `src/style.css` with `--tone-gold` background, white uppercase text, and refined hover elevate effect. Fully responsive on mobile. | `components/home/FeaturedCollectionSection.tsx`, `app/collections/page.tsx`, `app/globals.css`, `src/style.css`, `CONTEXT.md` | `npm run build` compiled 60 routes with 0 errors. |
| **2026-10-18** | **Collections Page Smooth Fade-In Loading Animation:** Added smooth, slow fade-in loading animation exclusively to collection images on `/collections`. (1) Created `CollectionFadeImage.tsx` client component that detects image load completion (via `onLoad` & cached `.complete` check) before triggering fade-in. (2) Configured 1.5-second `ease-in-out` CSS transition gradually shifting from `opacity: 0` to `opacity: 1` and subtle scale from `1.03` to `1` without layout shift or flickering. (3) Added `@media (prefers-reduced-motion: reduce)` override to respect accessibility preferences with instant display. (4) Maintained strict page and component isolation. | `components/collection/CollectionFadeImage.tsx`, `app/collections/page.tsx`, `app/globals.css`, `src/style.css`, `CONTEXT.md` | `npm run build` passed with 0 errors. |
| **2026-10-21** | **SPECKLED BROWN Collection Integration with Lifestyle Photos First:** Integrated the authentic **SPECKLED BROWN** artisan stoneware collection (17 verified pieces, 34 authentic photos) as the 3rd collection across the site alongside OLIVERA and IVORA. (1) Ingested all 34 images into `public/assets/catalogue/speckled-brown/` with pairs of Lifestyle and Studio shots. (2) Modeled all 17 items in `data/products/speckled-brown.ts` with Lifestyle photos placed FIRST in the `images` array for card slideshows and PDP galleries. (3) Registered collection in `data/collections.ts` with series `Artisan Earth Series`, badge, description, and hero editorial images. (4) Updated `data/products/index.ts` to export `SPECKLED_BROWN_PRODUCTS` and unified 51-piece dataset with collection matching (`speckled-brown`, `speckled brown`, `terra-speckle`). (5) Added dedicated collection route `app/collections/speckled-brown/page.tsx`, slug route `[slug]/page.tsx`, and query route `product/page.tsx`. (6) Updated homepage showcase (`FeaturedCollectionSection.tsx`), featured products (`FeaturedProductsSection.tsx`), showroom explorer collection pills (`ShowroomExplorer.tsx`), footer navigation (`Footer.tsx`), announcement bar (`AnnouncementBar.tsx`), and rewrites in `next.config.mjs`. | `data/products/speckled-brown.ts`, `data/products/index.ts`, `data/collections.ts`, `app/collections/speckled-brown/`, `components/home/FeaturedCollectionSection.tsx`, `components/home/FeaturedProductsSection.tsx`, `components/showroom/ShowroomExplorer.tsx`, `components/product/ProductCard.tsx`, `components/product/ProductDetailView.tsx`, `components/layout/Footer.tsx`, `components/layout/AnnouncementBar.tsx`, `next.config.mjs`, `CONTEXT.md` | `npx tsc --noEmit` passed (0 errors); `npm run build` compiled 96 routes cleanly with 0 errors. |
| **2026-10-21** | **GREYBORNE Collection Integration with Lifestyle Photos First:** Integrated the authentic **GREYBORNE** refined stoneware collection (25 verified pieces, 50 authentic photos from `The_Greyborne_Collection_renamed/`) as the 4th collection across the site alongside OLIVERA, IVORA, and SPECKLED BROWN. (1) Ingested all 50 images into `public/assets/catalogue/greyborne/` with paired Lifestyle and Studio photography. (2) Modeled all 25 items in `data/products/greyborne.ts` with Lifestyle photography placed FIRST in `images` array. (3) Registered collection in `data/collections.ts` with series `Refined Stoneware Series`, badge, description, and editorial hero image. (4) Updated `data/products/index.ts` to export `GREYBORNE_PRODUCTS` and unified 76-piece master catalog with collection matching (`greyborne`, `thegreybornecollection`, `urbanegrey`). (5) Added dedicated collection route `app/collections/greyborne/page.tsx`, slug route `[slug]/page.tsx`, and query route `product/page.tsx`. (6) Updated homepage showcase (`FeaturedCollectionSection.tsx`), featured products (`FeaturedProductsSection.tsx`), showroom explorer collection pills (`ShowroomExplorer.tsx`), footer navigation (`Footer.tsx`), announcement bar (`AnnouncementBar.tsx`), and rewrites in `next.config.mjs`. | `data/products/greyborne.ts`, `data/products/index.ts`, `data/collections.ts`, `app/collections/greyborne/`, `components/home/FeaturedCollectionSection.tsx`, `components/home/FeaturedProductsSection.tsx`, `components/showroom/ShowroomExplorer.tsx`, `components/product/ProductCard.tsx`, `components/product/ProductDetailView.tsx`, `components/layout/Footer.tsx`, `components/layout/AnnouncementBar.tsx`, `next.config.mjs`, `CONTEXT.md` | `npx tsc --noEmit` passed (0 errors); `npm run build` compiled 148 routes cleanly with 0 errors. |







