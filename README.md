# VITTESA — Luxury Hospitality Porcelain Portfolio & Catalogue

An interactive, high-fidelity digital portfolio and product catalogue for **VITTESA**, showcasing curated fine porcelain dinnerware collections designed for luxury hospitality, Michelin-grade dining, and high-end banquet presentation.

---

## ✨ Features

- **Interactive Collection Showcase**: Explore curated collections including *Lumière Matte White*, *Noir & Charcoal Reactive*, *Sienna Terracotta & Blush*, *Nordic Slate & Azure Blue*, and *Aura Gold Leaf Accents*.
- **Comprehensive Product Catalog**: Detailed item specifications, shapes, dimensions, glaze finishes, and hospitality grade certifications.
- **Dynamic Spec Sheet & Quote Generator**: Select items, customize quantities, and export quote inquiries directly with instant spec calculation.
- **Table Setting Visualizer / Gallery**: High-resolution imagery of place settings, plate pairings, and editorial plating showcases.
- **High Performance & Responsive**: Built with Vite and vanilla modern CSS for ultra-fast load times and seamless mobile/desktop responsiveness.

---

## 🛠️ Tech Stack

- **Framework / Bundler**: [Vite](https://vitejs.dev/)
- **Core**: Vanilla HTML5, modern ES Modules JavaScript
- **Styling**: Modern Vanilla CSS (Fluid Typography, CSS Custom Properties, Glassmorphism, Micro-animations)
- **Asset Processing**: Node.js pipeline with `pdf-lib` & `pngjs` for extracting and structuring vector & raster catalog assets

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) installed.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/beyondwebco-lgtm/vittesa.git
cd vittesa
npm install
```

### Development Server

Start the local Vite development server:

```bash
npm run dev
```

Visit the local URL shown in your terminal (typically `http://localhost:5173`).

### Production Build

Compile and bundle for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The output will be generated in the `dist/` directory, ready for deployment to any static hosting service (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

---

## 📁 Project Structure

```
vittesa/
├── public/                 # Static assets and curated catalogue imagery
│   ├── collections/        # High-res collection photography
│   └── icons/              # UI icons and symbols
├── src/
│   ├── data/
│   │   └── catalogue-data.js # Structured product data, collections & specs
│   ├── main.js             # UI interaction logic, search & spec calculator
│   └── style.css           # Luxury design system and responsive styles
├── index.html              # Main HTML entry point
├── package.json            # Project manifest & scripts
└── vite.config.js          # Vite configuration
```

---

## 📄 License

ISC License. All rights reserved by VITTESA.
