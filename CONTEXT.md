# VITTESA — Project Context & Architectural Memory

> **Single Source of Truth** for the VITTESA luxury hospitality porcelain portfolio web application.  
> Architecture: **Next.js 16 (App Router) + React 19 + TypeScript + Zustand + Turbopack**, deployed on **Vercel**.  
> Active Catalogue: **9 verified collections, 162 total pieces** (OLIVERA 17, IVORA 17, SPECKLED BROWN 17, GREYBORNE 25, MODERN SAGE GREEN 15, TERRANE 16, MODERN PINK 25, MODERN BROWN 15, MODERN BLACK 15).

---

## 1. Project & Brand Overview

- **Brand:** VITTESA — Luxury Hospitality Porcelain & Stoneware Maison
- **Positioning:** High-end hospitality, fine dining, and bespoke architectural tableware portfolio and specification platform.
- **Core User Journeys:**
  1. **Brand Discovery & Curation:** Editorial-grade visual showcase across all 9 tableware collections.
  2. **Specification & Inspection:** Interactive 360/multi-angle photographic viewports with exact dimensions, capacities, and glazes.
  3. **Specification Tray & Export:** Client specification tray (via Zustand `trayStore`) allowing hospitality operators to compile sample requests and export branded PDF specification sheets (powered by `pdf-lib`).
  4. **Direct B2B Enquiry:** Integrated enquiry modal pre-filled with specified piece references and collections.

---

## 2. Technical Stack & Deployment

- **Framework:** Next.js 16.4.2 (App Router with Turbopack)
- **UI Engine:** React 19.3.1 (Server & Client Components)
- **Language:** TypeScript 7.0.2 (Strict type checking, `npx tsc --noEmit` passing with 0 errors)
- **State Management:** Zustand 5.0.15 (Tray store `store/trayStore.ts` with `localStorage` persistence)
- **Styling:** Custom Vanilla CSS design system (`app/globals.css`), luxury typography (Cormorant Garamond, Montserrat, Outfit), responsive layouts, luxury gold accents.
- **Document Generation:** `pdf-lib` (`lib/pdf-generator.ts`) for on-demand PDF specification exports.
- **Hosting / CDN:** Vercel (Production builds generate static and dynamic SSG routes).

---

## 3. Active Collections Summary (162 Products)

| Collection | Category / Series | Pieces | Hero Descriptor | Route |
| :--- | :--- | :--- | :--- | :--- |
| **OLIVERA** | Natural Earth Series | 17 | Softly muted olive-grey glaze with organic, rounded contours. | `/collections/olivera` |
| **IVORA** | Timeless Ivora Series | 17 | Warm ivora-toned pure porcelain for refined fine dining. | `/collections/ivora` |
| **SPECKLED BROWN** | Artisan Earth Series | 17 | Vitrified stoneware with natural mineral flecks and tactile warmth. | `/collections/speckled-brown` |
| **GREYBORNE** | Refined Stoneware Series | 25 | Architectural mineral slate grey with a velvety matte surface. | `/collections/greyborne` |
| **MODERN SAGE GREEN** | Modern Botanical Series | 15 | Subtle sage green porcelain with understated earthy elegance and satin finish. | `/collections/modern-sage-green` |
| **TERRANE** | Mineral Earth Series | 16 | Raw mineral earth porcelain with sculpted profiles and hand-accented contours. | `/collections/terrane` |
| **MODERN PINK** | Modern Blush Series | 25 | Contemporary soft rose-blush porcelain with subtle satin surfaces and refined contours. | `/collections/modern-pink` |
| **MODERN BROWN** | Modern Earth Series | 15 | Contemporary warm earth brown porcelain with tactile depth and architectural contours. | `/collections/modern-brown` |
| **MODERN BLACK** | Modern Noir Series | 15 | Architectural modern black porcelain with velvety matte finish and striking silhouette. | `/collections/modern-black` |

---

## 4. Product Catalogues

### 4.1 OLIVERA Collection (17 Pieces)
| ID | Code | Name | Category | Dimensions | Capacity / Specs | Primary Image | PDP Route |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `ase07103` | `ASEO7103` | Dinner Plate | Plates | 27 cm | Softly Muted Olive-Grey Matted Glaze | `/assets/catalogue/olivera/dinner plate main.jpg` | [Link](/collections/olivera/ase07103) |
| `ase07101` | `ASEO7101` | Salad Plate | Plates | 21 cm | - | `/assets/catalogue/olivera/salad plate main.jpg` | [Link](/collections/olivera/ase07101) |
| `ase07109` | `ASEO7109` | Deep Coupe | Plates | 23 cm | - | `/assets/catalogue/olivera/deep coupe main.jpg` | [Link](/collections/olivera/ase07109) |
| `ase07114` | `ASEO7114` | Edge Plate Big | Plates | 26 cm | - | `/assets/catalogue/olivera/edge plate big main.jpg` | [Link](/collections/olivera/ase07114) |
| `ase07112` | `ASEO7112` | Edge Plate Small | Plates | 20 cm | - | `/assets/catalogue/olivera/edge plate small main.jpg` | [Link](/collections/olivera/ase07112) |
| `ase07111` | `ASEO7111` | Hi-Wall Appetizer Plate | Plates | 13 cm | - | `/assets/catalogue/olivera/hi wall appetizer plate main.jpg` | [Link](/collections/olivera/ase07111) |
| `ase07122` | `ASEO7122` | Serving Bowl 19 cm | Bowls | 19 cm | 950 ml | 950 ml | `/assets/catalogue/olivera/serving bowl main.jpg` | [Link](/collections/olivera/ase07122) |
| `ase07121` | `ASEO7121` | Serving Bowl 15 cm | Bowls | 15 cm | 590 ml | 590 ml | `/assets/catalogue/olivera/serving bowl 15cm main.jpg` | [Link](/collections/olivera/ase07121) |
| `ase07124` | `ASEO7124` | Edge Bowl 20 cm | Bowls | 20 cm x 4.2 cm | 620 ml | 620 ml | `/assets/catalogue/olivera/edge bowl main.jpg` | [Link](/collections/olivera/ase07124) |
| `ase07123` | `ASEO7123` | Edge Bowl 13 cm | Bowls | 13 cm x 6.5 cm | 570 ml | 570 ml | `/assets/catalogue/olivera/edge bowl 750ml main.jpg` | [Link](/collections/olivera/ase07123) |
| `ase07164` | `ASEO7164` | Soup Bowl | Bowls | 11.5 cm | 287 ml | 287 ml | `/assets/catalogue/olivera/soup bowl main.jpg` | [Link](/collections/olivera/ase07164) |
| `ase07163` | `ASEO7163` | Katori Bowl | Bowls | 9.5 cm | 190 ml | 190 ml | `/assets/catalogue/olivera/katori main.jpg` | [Link](/collections/olivera/ase07163) |
| `ase07161` | `ASEO7161` | Dip Bowl | Bowls | 7.5 cm | 42 ml | 42 ml | `/assets/catalogue/olivera/dip bowl main.jpg` | [Link](/collections/olivera/ase07161) |
| `ase07115` | `ASEO7115` | Chip Pot | Accessories | 400 ml | 400 ml | `/assets/catalogue/olivera/chip pot main.jpg` | [Link](/collections/olivera/ase07115) |
| `ase07134` | `ASEO7134` | Creamer | Accessories | 220 ml | 220 ml | `/assets/catalogue/olivera/creamer main.jpg` | [Link](/collections/olivera/ase07134) |
| `ase07153` | `ASEO7153` | Platter Small | Platters & Serving | 22 cm x 15 cm | - | `/assets/catalogue/olivera/platters main.jpg` | [Link](/collections/olivera/ase07153) |
| `ase07154` | `ASEO7154` | Platter Medium | Platters & Serving | 27.5 cm x 18 cm | - | `/assets/catalogue/olivera/platters main.jpg` | [Link](/collections/olivera/ase07154) |


### 4.2 IVORA Collection (17 Pieces)
| ID | Code | Name | Category | Dimensions | Capacity / Specs | Primary Image | PDP Route |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `asei7103` | `ASEI7103` | Dinner Plate | Plates | 27 cm | Warm Ivora Matte Glaze with Sand Textured Rim | `/assets/catalogue/ivora/dinner plate main.png` | [Link](/collections/ivora/dinner-plate) |
| `asei7101` | `ASEI7101` | Salad Plate | Plates | 21 cm | Warm Ivora Matte Glaze with Sand Rim | `/assets/catalogue/ivora/saladplate 21 cm main.png` | [Link](/collections/ivora/salad-plate) |
| `asei7109` | `ASEI7109` | Deep Coupe | Plates | 23 cm | Warm Ivora Matte Glaze | `/assets/catalogue/ivora/deep coupe main.png` | [Link](/collections/ivora/deep-coupe) |
| `asei7114` | `ASEI7114` | Edge Plate Big | Plates | 26 cm | Warm Ivora Glaze with Sculpted Straight Edge | `/assets/catalogue/ivora/edge plate big main.png` | [Link](/collections/ivora/edge-plate-big) |
| `asei7112` | `ASEI7112` | Edge Plate Small | Plates | 20 cm | Warm Ivora Glaze with Sculpted Edge | `/assets/catalogue/ivora/edge plate small main.png` | [Link](/collections/ivora/edge-plate-small) |
| `asei7111` | `ASEI7111` | Hi-Wall Appetizer Plate | Plates | 13 cm | Warm Ivora Matte Glaze | `/assets/catalogue/ivora/hi wall appetizer plate main.png` | [Link](/collections/ivora/hi-wall-appetizer-plate) |
| `asei7122` | `ASEI7122` | Serving Bowl 19 cm | Bowls | 19 cm | 950 ml | 950 ml | `/assets/catalogue/ivora/serving bowl 19cm main.png` | [Link](/collections/ivora/serving-bowl-19cm) |
| `asei7121` | `ASEI7121` | Serving Bowl 15 cm | Bowls | 15 cm | 590 ml | 590 ml | `/assets/catalogue/ivora/serving bowl 15cm main.png` | [Link](/collections/ivora/serving-bowl-15cm) |
| `asei7124` | `ASEI7124` | Edge Bowl 20 cm | Bowls | 20 cm x 4.2 cm | 620 ml | 620 ml | `/assets/catalogue/ivora/edge bowl 620 mlmain.png` | [Link](/collections/ivora/edge-bowl-20cm) |
| `asei7123` | `ASEI7123` | Edge Bowl 13 cm | Bowls | 13 cm x 6.5 cm | 570 ml | 570 ml | `/assets/catalogue/ivora/edge bowl main 570ml.png` | [Link](/collections/ivora/edge-bowl-13cm) |
| `asei7164` | `ASEI7164` | Soup Bowl | Bowls | 11.5 cm | 287 ml | 287 ml | `/assets/catalogue/ivora/soup bowl main.png` | [Link](/collections/ivora/soup-bowl) |
| `asei7163` | `ASEI7163` | Katori Bowl | Bowls | 9.5 cm | 190 ml | 190 ml | `/assets/catalogue/ivora/katori main.png` | [Link](/collections/ivora/katori-bowl) |
| `asei7161` | `ASEI7161` | Dip Bowl | Bowls | 7.5 cm | 42 ml | 42 ml | `/assets/catalogue/ivora/dip bowl main.png` | [Link](/collections/ivora/dip-bowl) |
| `asei7115` | `ASEI7115` | Chip Pot | Accessories | 400 ml | 400 ml | `/assets/catalogue/ivora/chip pot main.png` | [Link](/collections/ivora/chip-pot) |
| `asei7134` | `ASEI7134` | Creamer | Accessories | 220 ml | 220 ml | `/assets/catalogue/ivora/creamer main.png` | [Link](/collections/ivora/creamer) |
| `asei7153` | `ASEI7153` | Platter Small | Platters & Serving | 22 cm x 15 cm | Warm Ivora Matte Glaze | `/assets/catalogue/ivora/platters main.png` | [Link](/collections/ivora/platter-small) |
| `asei7154` | `ASEI7154` | Platter Medium | Platters & Serving | 27.5 cm x 18 cm | Warm Ivora Matte Glaze | `/assets/catalogue/ivora/platters main.png` | [Link](/collections/ivora/platter-medium) |


### 4.3 SPECKLED BROWN Collection (17 Pieces)
| ID | Code | Name | Category | Dimensions | Capacity / Specs | Primary Image | PDP Route |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `assb5101` | `ASSB5101` | Dinner Plate 27 cm & Side Plate 20 cm | Plates | 20 cm & 27 cm | Organic Speckled Brown, Warm Neutral Clay Character | `/assets/catalogue/speckled-brown/Plate 20 CM 27 CM - Lifestyle.png` | [Link](/collections/speckled-brown/dinner-side-plate) |
| `assb5105` | `ASSB5105` | Pasta Plate 27 cm | Plates | 27 cm | Curved Rim Glaze with Earthy Mineral Character | `/assets/catalogue/speckled-brown/Pasta Plate 27 CM - Lifestyle.png` | [Link](/collections/speckled-brown/pasta-plate) |
| `assb5112` | `ASSB5112` | Edge Plate 20.5 cm & 25.5 cm | Plates | 20.5 cm & 25.5 cm | Architectural Vertical Rim with Warm Contrast Edge | `/assets/catalogue/speckled-brown/Edge Plate 20.5 CM 25.5 CM - Lifestyle.png` | [Link](/collections/speckled-brown/edge-plate) |
| `assb5141` | `ASSB5141` | Elipse Plate 18 cm, 23 cm & 28 cm | Plates | 18 cm, 23 cm, 28 cm | Soft Elliptical Silhouette with Mineral Speckling | `/assets/catalogue/speckled-brown/Elipse Plate 18 CM 23 CM 28 CM - Lifestyle.png` | [Link](/collections/speckled-brown/elipse-plate) |
| `assb5121` | `ASSB5121` | Footed Bowl 14.5 cm & 15 cm | Bowls | 14.5 cm (550 ml) & 15 cm (850 ml) | 550 ml / 850 ml | `/assets/catalogue/speckled-brown/Footed Bowl 14.5 CM 550 ML, 15 CM 850 ML - Lifestyle.png` | [Link](/collections/speckled-brown/footed-bowl) |
| `assb5123` | `ASSB5123` | 'V' Bowl 16 cm | Bowls | 16 cm | Conical V-Profile with Contrast Lip | `/assets/catalogue/speckled-brown/V Bowl 16 CM - Lifestyle.png` | [Link](/collections/speckled-brown/v-bowl) |
| `assb5126` | `ASSB5126` | Elipse Bowl 16 cm, 18 cm & 22 cm | Bowls | 16 cm, 18 cm, 22 cm | Organic Elliptical Profile with Speckled Finish | `/assets/catalogue/speckled-brown/Elipse Bowl 16 CM 18 CM 22 CM - Lifestyle.png` | [Link](/collections/speckled-brown/elipse-bowl) |
| `assb5109` | `ASSB5109` | Deep Coupe 22.5 cm | Bowls | 22.5 cm | Elevated Curving Rim with Earthy Speckled Glaze | `/assets/catalogue/speckled-brown/Deep Coupe 22.5 CM (Single) - Lifestyle.png` | [Link](/collections/speckled-brown/deep-coupe) |
| `assb5109-pair` | `ASSB5109-P` | Deep Coupe 22.5 cm (Pair) | Bowls | 22.5 cm (Pair) | Speckled Brown Glaze with Hand-Finished Rim | `/assets/catalogue/speckled-brown/Deep Coupe 22.5 CM (Pair) - Lifestyle.png` | [Link](/collections/speckled-brown/deep-coupe-pair) |
| `assb5125` | `ASSB5125` | Dinner Bowls 9.5 cm & Katori 9 cm | Bowls | 9 cm & 9.5 cm | Speckled Brown Mineral Glaze | `/assets/catalogue/speckled-brown/Bowls Dinner 9.5 CM Katori 9 CM - Lifestyle.png` | [Link](/collections/speckled-brown/bowls-dinner-katori) |
| `assb5120` | `ASSB5120` | Soup Bowl 325 ml | Bowls | 325 ml | 325 ml | `/assets/catalogue/speckled-brown/Soup Bowl 325 ML - Lifestyle.png` | [Link](/collections/speckled-brown/soup-bowl) |
| `assb5161` | `ASSB5161` | Artisan Soup Spoon | Accessories | Hospitality Standard | Speckled Brown Mineral Glaze | `/assets/catalogue/speckled-brown/Soup Spoon - Lifestyle.png` | [Link](/collections/speckled-brown/soup-spoon) |
| `assb5104` | `ASSB5104` | Flat Plate 30 cm | Plates | 30 cm | Expansive Statement Surface with Tactile Mineral Speckles | `/assets/catalogue/speckled-brown/Flat Plate 30 CM - Lifestyle.png` | [Link](/collections/speckled-brown/flat-plate) |
| `assb5132` | `ASSB5132` | Barista Cup 250 ml & Saucer 16 cm | Cups & Beverage | 250 ml (Saucer 16 cm) | 250 ml | `/assets/catalogue/speckled-brown/Barista Cup 250 ML Saucer 16 CM - Lifestyle.png` | [Link](/collections/speckled-brown/barista-cup-saucer) |
| `assb5136` | `ASSB5136` | Expresso Cup 110 ml & Saucer 12.5 cm | Cups & Beverage | 110 ml (Saucer 12.5 cm) | 110 ml | `/assets/catalogue/speckled-brown/Expresso Cup 110 ML Saucer 12.5 CM - Lifestyle.png` | [Link](/collections/speckled-brown/expresso-cup-saucer) |
| `assb5131` | `ASSB5131` | Barrel Mug 350 ml | Cups & Beverage | 350 ml | 350 ml | `/assets/catalogue/speckled-brown/Barrel Mug 350 ML - Lifestyle.png` | [Link](/collections/speckled-brown/barrel-mug) |
| `assb5135` | `ASSB5135` | Tea Pot 685 ml | Accessories | 685 ml | 685 ml | `/assets/catalogue/speckled-brown/Tea Pot 685 ML - Lifestyle.png` | [Link](/collections/speckled-brown/tea-pot) |


### 4.4 GREYBORNE Collection (25 Pieces)
| ID | Code | Name | Category | Dimensions | Capacity / Specs | Primary Image | PDP Route |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `asgb5101` | `ASGB5101` | Dinner Plate 27 cm & Side Plate 20 cm | Plates | 20 cm & 27 cm | Mineral Slate Grey Satin Glaze, Contrast Edge | `/assets/catalogue/greyborne/plate-20-27cm_lifestyle.png` | [Link](/collections/greyborne/dinner-side-plate) |
| `asgb5104` | `ASGB5104` | Flat Plate 30 cm | Plates | 30 cm | Expansive 30 cm Tasting Surface in Slate Grey | `/assets/catalogue/greyborne/flat-plate-30cm_lifestyle.png` | [Link](/collections/greyborne/flat-plate-30cm) |
| `asgb5105` | `ASGB5105` | Pasta Plate 27 cm | Plates | 27 cm | Wide Rim Pasta Cavity in Slate Grey | `/assets/catalogue/greyborne/pasta-plate-27cm_lifestyle.png` | [Link](/collections/greyborne/pasta-plate-27cm) |
| `asgb5112` | `ASGB5112` | Edge Plate 20.5 cm & 25.5 cm | Plates | 20.5 cm & 25.5 cm | Architectural Vertical Rim in Slate Grey | `/assets/catalogue/greyborne/edge-plate-20.5-25.5cm_lifestyle.png` | [Link](/collections/greyborne/edge-plate) |
| `asgb5141` | `ASGB5141` | Elipse Plate 18 cm, 23 cm & 28 cm | Plates | 18 cm, 23 cm, 28 cm | Organic Elliptical Plate Silhouette in Slate Grey | `/assets/catalogue/greyborne/elipse-plate-18-23-28cm_lifestyle.png` | [Link](/collections/greyborne/elipse-plate) |
| `asgb5109` | `ASGB5109` | Deep Coupe 22.5 cm | Bowls | 22.5 cm | Curving Deep Coupe Rim in Slate Grey | `/assets/catalogue/greyborne/deep-coupe-22.5cm_lifestyle.png` | [Link](/collections/greyborne/deep-coupe) |
| `asgb5171` | `ASGB5171` | Banquet Bowl 22 cm | Bowls | 22 cm | Mineral Slate Grey Satin Glaze | `/assets/catalogue/greyborne/banquet-bowl-22cm_lifestyle.png` | [Link](/collections/greyborne/banquet-bowl-22cm) |
| `asgb5172` | `ASGB5172` | Banquet Bowl 29.5 cm | Bowls | 29.5 cm | Mineral Slate Grey Satin Glaze | `/assets/catalogue/greyborne/banquet-bowl-29.5cm_lifestyle.png` | [Link](/collections/greyborne/banquet-bowl-29-5cm) |
| `asgb5120` | `ASGB5120` | Soup Bowl 325 ml | Bowls | 325 ml | 325 ml | `/assets/catalogue/greyborne/soup-bowl-325ml_lifestyle.png` | [Link](/collections/greyborne/soup-bowl-325ml) |
| `asgb5121` | `ASGB5121` | Footed Bowl 14.5 cm (550 ml) & 15 cm (850 ml) | Bowls | 14.5 cm (550 ml) & 15 cm (850 ml) | 550 ml / 850 ml | `/assets/catalogue/greyborne/footed-bowl-14.5cm-550ml-15cm-850ml_lifestyle.png` | [Link](/collections/greyborne/footed-bowl) |
| `asgb5123` | `ASGB5123` | 'V' Bowl 16 cm | Bowls | 16 cm | Conical V-Profile in Slate Grey | `/assets/catalogue/greyborne/v-bowl-16cm_lifestyle.png` | [Link](/collections/greyborne/v-bowl-16cm) |
| `asgb5125` | `ASGB5125` | Dinner Bowls 9.5 cm & Katori 9 cm | Bowls | 9 cm & 9.5 cm | Mineral Slate Grey Glaze | `/assets/catalogue/greyborne/bowls-dinner-9.5cm-katori-9cm_lifestyle.png` | [Link](/collections/greyborne/dinner-bowls-katori) |
| `asgb5126` | `ASGB5126` | Elipse Bowl 16 cm, 18 cm & 22 cm | Bowls | 16 cm, 18 cm, 22 cm | Organic Elliptical Profile in Slate Grey | `/assets/catalogue/greyborne/elipse-bowl-16-18-22cm_lifestyle.png` | [Link](/collections/greyborne/elipse-bowl) |
| `asgb5131` | `ASGB5131` | Barrel Mug 350 ml | Cups & Beverage | 350 ml | 350 ml | `/assets/catalogue/greyborne/barrel-mug-350ml_lifestyle.png` | [Link](/collections/greyborne/barrel-mug) |
| `asgb5132` | `ASGB5132` | Barista Cup 250 ml & Saucer 16 cm | Cups & Beverage | 250 ml (Saucer 16 cm) | 250 ml | `/assets/catalogue/greyborne/barista-cup-250ml-saucer-16cm_lifestyle.png` | [Link](/collections/greyborne/barista-cup-saucer) |
| `asgb5136` | `ASGB5136` | Expresso Cup 110 ml & Saucer 12.5 cm | Cups & Beverage | 110 ml (Saucer 12.5 cm) | 110 ml | `/assets/catalogue/greyborne/expresso-cup-110ml-saucer-12.5cm_lifestyle.png` | [Link](/collections/greyborne/expresso-cup-saucer) |
| `asgb5135` | `ASGB5135` | Tea Pot 685 ml | Accessories | 685 ml | 685 ml | `/assets/catalogue/greyborne/tea-pot-685ml_lifestyle.png` | [Link](/collections/greyborne/tea-pot) |
| `asgb5151` | `ASGB5151` | Rectangular Platter 29 × 15 cm | Platters & Serving | 29 × 15 cm | Rectangular Hospitality Serving Platter in Slate Grey | `/assets/catalogue/greyborne/rectangular-platter-29x15cm_lifestyle.png` | [Link](/collections/greyborne/rectangular-platter) |
| `asgb5153` | `ASGB5153` | Elipse Platter 32 cm | Platters & Serving | 32 cm | Statement Elliptical Serving Platter in Slate Grey | `/assets/catalogue/greyborne/elipse-platter-32cm_lifestyle.png` | [Link](/collections/greyborne/elipse-platter-32cm) |
| `asgb5154` | `ASGB5154` | Elipse Serving Plate 27 cm | Platters & Serving | 27 cm | Organic Elliptical Service Canvas | `/assets/catalogue/greyborne/elipse-serving-plate-27cm_lifestyle.png` | [Link](/collections/greyborne/elipse-serving-plate-27cm) |
| `asgb5155` | `ASGB5155` | Fluid Platter 21 × 11 cm & 29 × 21 cm | Platters & Serving | 21 × 11 cm & 29 × 21 cm | Fluid Asymmetric Rim in Slate Grey | `/assets/catalogue/greyborne/fluid-platter-21x11-29x21cm_lifestyle.png` | [Link](/collections/greyborne/fluid-platter) |
| `asgb5156` | `ASGB5156` | Oval Platter 26 cm & 30 cm | Platters & Serving | 26 cm & 30 cm | Classic Hospitality Oval Platter in Slate Grey | `/assets/catalogue/greyborne/oval-platter-26-30cm_lifestyle.png` | [Link](/collections/greyborne/oval-platter) |
| `asgb5127` | `ASGB5127` | Round Dip Bowl 6 cm | Accessories | 6 cm | Petite Round Condiment & Dip Dish in Slate Grey | `/assets/catalogue/greyborne/round-dip-bowl-6cm_lifestyle.png` | [Link](/collections/greyborne/round-dip-bowl-6cm) |
| `asgb5128` | `ASGB5128` | Taper Dip Bowl 7 cm | Accessories | 7 cm | Conical Tapered Dip Dish in Slate Grey | `/assets/catalogue/greyborne/taper-dip-bowl-7cm_lifestyle.png` | [Link](/collections/greyborne/taper-dip-bowl-7cm) |
| `asgb5161` | `ASGB5161` | Artisan Soup Spoon 16 cm | Accessories | 16 cm | Ergonomic Ceramic Spoon in Slate Grey | `/assets/catalogue/greyborne/soup-spoon-16cm_lifestyle.png` | [Link](/collections/greyborne/soup-spoon-16cm) |


### 4.5 MODERN SAGE GREEN Collection (15 Pieces)
| ID | Code | Name | Category | Dimensions | Capacity / Specs | Primary Image | PDP Route |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `asms5101` | `ASMS5101` | Dinner Plate 27 cm | Plates | 27 cm | Subtle Sage Green Satin Glaze | `/assets/catalogue/modern-sage-green/plates/dinner-plate-27cm_lifestyle-pair.webp` | [Link](/collections/modern-sage-green/dinner-plate-27cm) |
| `asms5102` | `ASMS5102` | Side Plate 20 cm | Plates | 20 cm | Subtle Sage Green Satin Glaze | `/assets/catalogue/modern-sage-green/plates/side-plate-20cm_lifestyle.webp` | [Link](/collections/modern-sage-green/side-plate-20cm) |
| `asms5103` | `ASMS5103` | Edge Plate Big 25.5 cm | Plates | 25.5 cm | Architectural Vertical Rim | `/assets/catalogue/modern-sage-green/plates/edge-plate-big-25.5cm_lifestyle.webp` | [Link](/collections/modern-sage-green/edge-plate-big-25-5cm) |
| `asms5104` | `ASMS5104` | Edge Plate Small 20 cm | Plates | 20 cm | Architectural Vertical Rim | `/assets/catalogue/modern-sage-green/plates/edge-plate-small-20cm_lifestyle.webp` | [Link](/collections/modern-sage-green/edge-plate-small-20cm) |
| `asms5105` | `ASMS5105` | Deep Coupe 23 cm | Bowls | 23 cm | Curved Deep Coupe Profile | `/assets/catalogue/modern-sage-green/bowls/deep-coupe-23cm_lifestyle.webp` | [Link](/collections/modern-sage-green/deep-coupe-23cm) |
| `asms5106` | `ASMS5106` | Deep Coupe Small 20 cm | Bowls | 20 cm | Curved Deep Coupe Profile | `/assets/catalogue/modern-sage-green/bowls/deep-coupe-small-20cm_lifestyle.webp` | [Link](/collections/modern-sage-green/deep-coupe-small-20cm) |
| `asms5107` | `ASMS5107` | Service Bowl 18.2 cm | Bowls | 18.2 cm | 850 ml | `/assets/catalogue/modern-sage-green/bowls/service-bowl-18.2cm-850ml_lifestyle.webp` | [Link](/collections/modern-sage-green/service-bowl-18-2cm) |
| `asms5108` | `ASMS5108` | Service Bowl 15.5 cm | Bowls | 15.5 cm | 600 ml | `/assets/catalogue/modern-sage-green/bowls/service-bowl-15.5cm-600ml_lifestyle.webp` | [Link](/collections/modern-sage-green/service-bowl-15-5cm) |
| `asms5109` | `ASMS5109` | Soup Bowl 11.5 cm | Bowls | 11.5 cm | 325 ml | `/assets/catalogue/modern-sage-green/bowls/soup-bowl-11.5cm-325ml_lifestyle.webp` | [Link](/collections/modern-sage-green/soup-bowl-11-5cm) |
| `asms5110` | `ASMS5110` | Studio Bowl 12 cm | Bowls | 12 cm | Organic Studio Bowl Profile | `/assets/catalogue/modern-sage-green/bowls/studio-bowl-12cm_lifestyle.webp` | [Link](/collections/modern-sage-green/studio-bowl-12cm) |
| `asms5111` | `ASMS5111` | Katori Bowl 10 cm | Bowls | 10 cm | 190 ml | `/assets/catalogue/modern-sage-green/bowls/katori-10cm-190ml_lifestyle.webp` | [Link](/collections/modern-sage-green/katori-10cm) |
| `asms5112` | `ASMS5112` | Dip Bowl 8 cm | Bowls | 8 cm | Petite Dip Dish | `/assets/catalogue/modern-sage-green/bowls/dip-bowl-8cm_lifestyle.webp` | [Link](/collections/modern-sage-green/dip-bowl-8cm) |
| `asms5113` | `ASMS5113` | Oval Platter 28 × 19 cm | Platters | 28 × 19 cm | Elongated Oval Surface | `/assets/catalogue/modern-sage-green/platters/oval-platter-28x19cm_lifestyle.webp` | [Link](/collections/modern-sage-green/oval-platter-28x19cm) |
| `asms5114` | `ASMS5114` | Oval Platter 25 × 14 cm | Platters | 25 × 14 cm | Sleek Oval Silhouette | `/assets/catalogue/modern-sage-green/platters/oval-platter-25x14cm_lifestyle.webp` | [Link](/collections/modern-sage-green/oval-platter-25x14cm) |
| `asms5115` | `ASMS5115` | Tea Cup & Saucer | Cups & Beverage | Cup 255 ml, Saucer 14.9 cm | 255 ml | `/assets/catalogue/modern-sage-green/cups-saucers/tea-cup-255ml-saucer-14.9cm_lifestyle.webp` | [Link](/collections/modern-sage-green/tea-cup-saucer) |


### 4.6 TERRANE Collection (16 Pieces)
| ID | Code | Name | Category | Dimensions | Capacity / Specs | Primary Image | PDP Route |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `astr5101` | `ASTR5101` | Dinner Plate 27 cm | Plates | 27 cm | Mineral Earth Glaze with Sculpted Contrast Rim | `/assets/catalogue/terrane/plates/dinner-plate-27cm_lifestyle.webp` | [Link](/collections/terrane/dinner-plate-27cm) |
| `astr5102` | `ASTR5102` | Salad Plate 21 cm | Plates | 21 cm | Mineral Earth Glaze with Tactile Rim | `/assets/catalogue/terrane/plates/salad-plate-21cm_lifestyle.webp` | [Link](/collections/terrane/salad-plate-21cm) |
| `astr5103` | `ASTR5103` | Edge Plate Big 26 cm | Plates | 26 cm | Architectural Vertical Rim | `/assets/catalogue/terrane/plates/edge-plate-big-26cm_lifestyle.webp` | [Link](/collections/terrane/edge-plate-big-26cm) |
| `astr5104` | `ASTR5104` | Edge Plate Small 20 cm | Plates | 20 cm | Architectural Vertical Rim | `/assets/catalogue/terrane/plates/edge-plate-small-20cm_lifestyle.webp` | [Link](/collections/terrane/edge-plate-small-20cm) |
| `astr5105` | `ASTR5105` | Hi-Wall Appetizer Plate 13 cm | Plates | 13 cm | High-Walled Appetizer Dish | `/assets/catalogue/terrane/plates/hi-wall-appetizer-plate-13cm_lifestyle.webp` | [Link](/collections/terrane/hi-wall-appetizer-plate-13cm) |
| `astr5106` | `ASTR5106` | Deep Coupe 23 cm | Bowls | 23 cm | Curved Deep Coupe Silhouette | `/assets/catalogue/terrane/bowls/deep-coupe-23cm_lifestyle.webp` | [Link](/collections/terrane/deep-coupe-23cm) |
| `astr5107` | `ASTR5107` | Serving Bowl 19 cm | Bowls | 19 cm | 950 ml | `/assets/catalogue/terrane/bowls/serving-bowl-19cm-950ml_lifestyle.webp` | [Link](/collections/terrane/serving-bowl-19cm) |
| `astr5108` | `ASTR5108` | Serving Bowl 15 cm | Bowls | 15 cm | 590 ml | `/assets/catalogue/terrane/bowls/serving-bowl-15cm-590ml_lifestyle.webp` | [Link](/collections/terrane/serving-bowl-15cm) |
| `astr5109` | `ASTR5109` | Edge Bowl 20 cm | Bowls | 20 cm × 4.2 cm | 620 ml | `/assets/catalogue/terrane/bowls/edge-bowl-20x4.2cm-620ml_lifestyle.webp` | [Link](/collections/terrane/edge-bowl-20cm) |
| `astr5110` | `ASTR5110` | Edge Bowl 13 cm | Bowls | 13 cm × 6.5 cm | 570 ml | `/assets/catalogue/terrane/bowls/edge-bowl-13x6.5cm-570ml_lifestyle.webp` | [Link](/collections/terrane/edge-bowl-13cm) |
| `astr5111` | `ASTR5111` | Soup Bowl 11.5 cm | Bowls | 11.5 cm | 287 ml | `/assets/catalogue/terrane/bowls/soup-bowl-11.5cm-287ml_lifestyle.webp` | [Link](/collections/terrane/soup-bowl-11-5cm) |
| `astr5112` | `ASTR5112` | Katori Bowl 9.5 cm | Bowls | 9.5 cm | 190 ml | `/assets/catalogue/terrane/bowls/katori-9.5cm-190ml_lifestyle.webp` | [Link](/collections/terrane/katori-9-5cm) |
| `astr5113` | `ASTR5113` | Dip Bowl 7.5 cm | Bowls | 7.5 cm | 42 ml | `/assets/catalogue/terrane/bowls/dip-bowl-7.5cm-42ml_lifestyle.webp` | [Link](/collections/terrane/dip-bowl-7-5cm) |
| `astr5114` | `ASTR5114` | Chip Pot 400 ml | Accessories | 400 ml | 400 ml | `/assets/catalogue/terrane/accessories/chip-pot-400ml_lifestyle.webp` | [Link](/collections/terrane/chip-pot-400ml) |
| `astr5115` | `ASTR5115` | Creamer 220 ml | Accessories | 220 ml | 220 ml | `/assets/catalogue/terrane/accessories/creamer-220ml_lifestyle.webp` | [Link](/collections/terrane/creamer-220ml) |
| `astr5116` | `ASTR5116` | Platter Range | Platters & Serving | 22 cm, 27.5 cm & 33.5 cm | Rectangular Presentation Canvas | `/assets/catalogue/terrane/platters/platters-22x15-27.5x18-33.5x22cm_lifestyle.webp` | [Link](/collections/terrane/platters-range) |

---

## 5. Site Architecture & Route Inventory

### 5.1 Route Map (Static & Dynamic SSG Routes)
- `/` — Editorial brand homepage (Hero, Curated Showcase across all 6 collections, About, Contact).
- `/collections` — Collection gateway featuring all 6 active tableware lines.
- `/showroom` — Universal product showroom with filter pills (All, Olivera, Ivora, Speckled Brown, Greyborne, Modern Sage Green, Terrane) and search.
- `/collections/[slug]` & Dedicated Routes — Collection showcase pages (`olivera`, `ivora`, `speckled-brown`, `greyborne`, `modern-sage-green`, `terrane`).
- `/collections/[slug]/[id]` & `/collections/[slug]/product?id=...` — Dynamic Product Detail Pages (PDP) supporting dual lookup (code/id or slug).
- `/documents/vittesa-catalogue.pdf` — Official digital brand catalogue PDF download.

### 5.2 Header Navigation & Announcements
- **Navigation Links:** `Home (/)` | `Collections (/collections)` | `Products (/showroom)` | `About Us (/#about)` | `Contact (/#contact)`
- **Actions:** Specification Tray Drawer trigger with live badge counter.
- **Announcement Bar:**
  1. *"BULK & WHOLESALE ENQUIRIES WELCOME"*
  2. *"DISCOVER OLIVERA, IVORA, SPECKLED BROWN, GREYBORNE, MODERN SAGE GREEN & TERRANE"*
  3. *"CONTACT US FOR INTERNATIONAL SHIPPING OPTIONS"*

---

## 6. Directory Structure

```
vittesa/
├── app/
│   ├── collections/
│   │   ├── [slug]/          # Generic collection & product routes
│   │   ├── greyborne/       # Dedicated Greyborne route & PDPs
│   │   ├── ivora/           # Dedicated Ivora route & PDPs
│   │   ├── olivera/         # Dedicated Olivera route & PDPs
│   │   └── speckled-brown/  # Dedicated Speckled Brown route & PDPs
│   ├── showroom/            # Interactive universal showroom
│   ├── globals.css          # Design system & luxury styles
│   ├── layout.tsx           # Global RootLayout (Header, Footer, Tray, Modal)
│   └── page.tsx             # Homepage
├── components/
│   ├── home/                # Hero, Featured Collections, About, Contact
│   ├── layout/              # Header, Footer, AnnouncementBar, MobileNav
│   ├── product/             # ProductCard, ProductDetailView, ImageGallery
│   ├── showroom/            # ShowroomExplorer, FilterPills
│   └── tray/                # SpecificationTrayDrawer, EnquiryModal
├── data/
│   ├── collections.ts       # Collection definitions & metadata (6 collections)
│   └── products/            # Individual collection data files & index
│       ├── greyborne.ts     # 25 products
│       ├── ivora.ts         # 17 products
│       ├── modern-sage-green.ts # 15 products
│       ├── olivera.ts       # 17 products
│       ├── speckled-brown.ts# 17 products
│       ├── terrane.ts       # 16 products
│       └── index.ts         # Unified ALL_PRODUCTS (107 products) & accessor functions
├── lib/                     # PDF specification generator
├── public/
│   ├── assets/
│   │   ├── catalogue/       # Active collection photographic assets (all 6 collections)
│   │   ├── hero/            # Editorial hero imagery
│   │   └── logo/            # Vector and high-res brand marks
│   ├── documents/           # Official catalogue PDF
│   └── favicon.png
├── store/                   # Zustand stores (trayStore.ts)
└── types/                   # TypeScript interfaces (Product, Collection)
```

---

## 7. Operational & Asset Governance Rules

1. **Asset Rule:** Do not rename or delete an image that is referenced in `data/*.ts` or codebase files. Unreferenced images may only be removed after an exhaustive grep verification across all code, styles, and data files.
2. **Product Integrity:** Do not alter product codes, dimensions, capacities, or the curated image display order (lifestyle-first photographic presentation).
3. **Route Continuity:** Keep existing URLs, rewrites, and PDP patterns backward compatible.
4. **Verification Protocol:** Always run `npx tsc --noEmit` and `npm run build` before and after changes.

---

## 8. Change Log

| Date | Milestone / Summary | Key Files Affected | Verification |
| :--- | :--- | :--- | :--- |
| **2026-10-15** | **Vite Prototype Era:** Initial static multi-collection prototype (archived). | Legacy `src/`, HTML files | Verified prototype. |
| **2026-10-16** | **Next.js 16 App Router Migration:** Fully migrated to Next.js 16, React 19, TypeScript, Zustand, and App Router. | `app/`, `components/`, `store/` | TypeScript clean, Next.js build clean. |
| **2026-10-17** | **IVORA Collection Integration:** Added 17-piece IVORA porcelain line with dedicated routes, assets, and PDPs. | `data/products/ivora.ts`, `app/collections/ivora/` | 60 routes compiled successfully. |
| **2026-10-19** | **SPECKLED BROWN & GREYBORNE Integration:** Integrated SPECKLED BROWN (17 pieces) and GREYBORNE (25 pieces), completing 4 active collections (76 total pieces). | `data/products/speckled-brown.ts`, `data/products/greyborne.ts` | 148 routes compiled successfully. |
| **2026-10-21** | **Repository Cleanup & Organization:** Removed 371 redundant files (~327 MB) including raw root duplicates, legacy Vite layer, dead dependencies (`gsap`, `pngjs`, `vite`), and obsolete assets. Rewrote `CONTEXT.md` to reflect actual 4 collections. | `.gitignore`, `package.json`, `data/products/`, `public/`, `CONTEXT.md` | 148 routes verified identical, `tsc` 0 errors, build clean. |
| **2026-10-22** | **Root Directory Cleanup & 2 New Collections (MODERN SAGE GREEN & TERRANE):** Cleaned Level 1 directory and public root of all loose image clutter, safely preserving all assets in `public/assets/logo/`, `catalogue/`, and `hero/`. Added MODERN SAGE GREEN (15 pieces) and TERRANE (16 pieces) to catalogue, showroom filters, home showcase, and dynamic SSG routing, expanding catalogue to 6 collections and 107 verified products. | `data/products/modern-sage-green.ts`, `data/products/terrane.ts`, `data/products/index.ts`, `data/collections.ts`, `components/showroom/ShowroomExplorer.tsx`, `components/home/FeaturedCollectionSection.tsx`, `components/layout/AnnouncementBar.tsx`, `next.config.mjs`, `CONTEXT.md` | `npx tsc --noEmit` passing with 0 errors. |
| **2026-10-23** | **Addition of 3 New Collections (MODERN PINK, MODERN BROWN, MODERN BLACK):** Integrated MODERN PINK (25 pieces), MODERN BROWN (15 pieces), and MODERN BLACK (15 pieces), complete with optimized WebP/responsive media pipelines, specifications, category filters, Bento gallery integration, home showcase cards, and dynamic SSG routes, expanding active catalogue from 6 to 9 collections and 162 total verified pieces. | `data/products/modern-pink.ts`, `data/products/modern-brown.ts`, `data/products/modern-black.ts`, `data/products/index.ts`, `data/collections.ts`, `components/showroom/ShowroomExplorer.tsx`, `components/home/FeaturedCollectionSection.tsx`, `components/home/VittesaGallery.tsx`, `components/layout/AnnouncementBar.tsx`, `components/layout/Footer.tsx`, `next.config.mjs`, `CONTEXT.md` | `npx tsc --noEmit` and `npm run build` passing with 325 static routes generated. |
