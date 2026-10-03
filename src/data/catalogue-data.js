/**
 * VITTESA — Authentic Catalogue Dataset
 * Extracted and compiled strictly from official VITTESA Catalogue:
 * "EUROPEAN-STYLE PREMIUM HOSPITALITY PORCELAIN"
 * No fabricated technical specs, GSM, or unverified claims.
 */

export const BRAND_INFO = {
  name: "VITTESA",
  tagline: "European-Style Premium Hospitality Porcelain",
  subtitle: "A European Hospitality Maison",
  descriptor: "Porcelain tableware for refined hospitality",
  pillars: [
    "Signature Design",
    "Curated Collections",
    "Essential White",
    "International Hospitality",
    "Global Trade",
    "International Sourcing",
    "Contract Manufacturing",
    "B2B Hospitality"
  ],
  motto: "People • Products • Possibilities"
};

export const COLLECTIONS = [
  {
    id: "lumera",
    layer: "01 — SIGNATURE",
    layerNumber: "01",
    name: "LUMÉRA",
    tagline: "VITTESA Signature Collection",
    badge: "Designed for VITTESA",
    heroImage: "/assets/catalogue/hero-lumera-table.jpg",
    moodImage: "/assets/catalogue/lumera-colour-trio.png",
    description: "Architectural Mediterranean porcelain with sculptural silhouettes, an architectural signature rim and a generous plating field.",
    extendedText: "LUMÉRA captures the quiet beauty of natural light and texture. With its sculpted rim and refined glaze, the collection brings together contemporary elegance and everyday functionality, designed for modern hospitality and thoughtful dining experiences.",
    colorDirections: [
      {
        id: "azure",
        name: "AZURE",
        descriptor: "Calm. Refined. Timeless.",
        hex: "#244053",
        toneClass: "tone-azure",
        description: "Deep Mediterranean oceanic blue capturing twilight light on coastal water."
      },
      {
        id: "olive",
        name: "OLIVE",
        descriptor: "Earthy. Sophisticated. Versatile.",
        hex: "#565D46",
        toneClass: "tone-olive",
        description: "Muted botanical earth tone evocative of ancient Mediterranean groves."
      },
      {
        id: "sienna",
        name: "SIENNA",
        descriptor: "Warm. Modern. Distinctive.",
        hex: "#8B4B32",
        toneClass: "tone-sienna",
        description: "Sun-baked terracotta mineral warmth designed to frame contemporary culinary creations."
      }
    ],
    accentNote: "Three coordinated colour directions designed to mix across a hospitality table setting."
  },
  {
    id: "olivera",
    layer: "02 — CURATED",
    layerNumber: "02",
    name: "OLIVERA",
    series: "Natural Earth Series",
    tagline: "Earth Olive",
    heroImage: "/assets/catalogue/olivera-editorial-hero.jpg",
    rangeImage: "/assets/catalogue/olivera-product-range.png",
    description: "A softly muted olive-grey direction with rounded silhouettes and a calm, contemporary hospitality character.",
    application: "Fine dining, boutique hotels, modern bistros, tasting menus"
  },
  {
    id: "roke",
    layer: "02 — CURATED",
    layerNumber: "02",
    name: "ROKÉ",
    series: "Sculpted Texture Series",
    tagline: "Tactile Sculptural Porcelain",
    heroImage: "/assets/catalogue/roke-editorial-hero.jpg",
    showcase1: "/assets/catalogue/roke-showcase-1.jpg",
    showcase2: "/assets/catalogue/roke-showcase-2.jpg",
    description: "A tactile, sculptural collection defined by expressive texture and presentation-led forms.",
    application: "Michelin-style presentation, signature tasting courses, elevated seafood & pasta service"
  },
  {
    id: "terra-speckle",
    layer: "02 — CURATED",
    layerNumber: "02",
    name: "TERRA SPECKLE",
    series: "Artisan Earth Series",
    tagline: "Speckled Brown",
    heroImage: "/assets/catalogue/terra-speckle-editorial-hero.png",
    rangeImage1: "/assets/catalogue/terra-speckle-product-range-1.png",
    rangeImage2: "/assets/catalogue/terra-speckle-product-range-2.png",
    description: "A warm neutral direction with organic speckling and an understated artisanal character.",
    application: "Artisanal bistros, farm-to-table restaurants, specialty coffee lounges, all-day dining"
  },
  {
    id: "urbane-grey",
    layer: "02 — CURATED",
    layerNumber: "02",
    name: "URBANE GREY",
    series: "Curated Hospitality Collection",
    tagline: "Contemporary Mineral Slate",
    heroImage: "/assets/catalogue/urbane-grey-editorial.jpg",
    rangeImage1: "/assets/catalogue/urbane-grey-range-1.jpg",
    lifestyleImage: "/assets/catalogue/urbane-grey-lifestyle.jpg",
    description: "A cool mineral grey series designed for sleek metropolitan hospitality spaces and high-contrast food presentation.",
    application: "Urban dining, steak & grill rooms, cocktail lounges, hotel restaurants"
  },
  {
    id: "paradise-pink",
    layer: "02 — CURATED",
    layerNumber: "02",
    name: "PARADISE PINK",
    series: "Curated Hospitality Collection",
    tagline: "Soft Rose Earth",
    heroImage: "/assets/catalogue/paradise-pink-editorial.jpg",
    rangeImage1: "/assets/catalogue/paradise-pink-range-1.jpg",
    lifestyleImage: "/assets/catalogue/paradise-pink-lifestyle.jpg",
    description: "A warm pastel terracotta blush with gentle rim contrast, ideal for vibrant plating, brunch concepts, and modern luxury dining.",
    application: "Brunch venues, modern dessert service, boutique resorts, coastal bistros"
  },
  {
    id: "aqua-blue",
    layer: "02 — CURATED",
    layerNumber: "02",
    name: "AQUA BLUE",
    series: "Curated Hospitality Collection",
    tagline: "Mediterranean Coastal Turquoise",
    heroImage: "/assets/catalogue/aqua-blue-editorial.jpg",
    rangeImage1: "/assets/catalogue/aqua-blue-range-1.jpg",
    lifestyleImage: "/assets/catalogue/aqua-blue-lifestyle.jpg",
    description: "A lively Mediterranean azure-aqua direction that illuminates fresh seafood, sharing plates, and poolside dining concepts.",
    application: "Seafood dining, seaside resorts, Mediterranean concepts, tapas & mezze service"
  },
  {
    id: "essential-white",
    layer: "03 — ESSENTIAL",
    layerNumber: "03",
    name: "ESSENTIAL WHITE",
    tagline: "Core Commercial Porcelain",
    badge: "Everyday Proof",
    heroImage: "/assets/catalogue/essential-white-platters-hero.jpg",
    bowlsHero: "/assets/catalogue/essential-white-bowls-hero.jpg",
    cupsHero: "/assets/catalogue/essential-white-cups-hero.jpg",
    plattersHero: "/assets/catalogue/essential-white-platter-hero.jpg",
    platesRange: "/assets/catalogue/essential-white-plates-range.png",
    bowlsRange: "/assets/catalogue/essential-white-bowls-range.png",
    cupsRange: "/assets/catalogue/essential-white-cups-range.png",
    plattersRange: "/assets/catalogue/essential-white-platters-range.png",
    description: "Classic white porcelain for timeless commercial service. Dependable, high-density hotel tableware designed for volume banqueting and everyday hospitality rigor.",
    application: "Hotels, banqueting, catering, corporate hospitality, high-volume dining"
  }
];

export const PRODUCTS = [
  // --- LUMÉRA SIGNATURE ---
  {
    id: "lp-01",
    code: "LP-01",
    name: "Dinner Plate",
    collection: "LUMÉRA",
    collectionId: "lumera",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Azure", "Olive", "Sienna"],
    colorHexes: ["#244053", "#565D46", "#8B4B32"],
    dimensions: "Ø 27 cm | H 2.5 cm",
    specs: {
      diameter: "27 cm",
      height: "2.5 cm",
      finish: "Architectural Sculpted Signature Rim, Silky Glaze Plating Field",
      origin: "VITTESA Signature Collection"
    },
    image: "/assets/catalogue/lumera-item-dinner-plate.jpg",
    editorialCaption: "Architectural Mediterranean rim framing generous plating area."
  },
  {
    id: "lp-02",
    code: "LP-02",
    name: "Side Plate",
    collection: "LUMÉRA",
    collectionId: "lumera",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Azure", "Olive", "Sienna"],
    colorHexes: ["#244053", "#565D46", "#8B4B32"],
    dimensions: "Ø 21 cm | H 2 cm",
    specs: {
      diameter: "21 cm",
      height: "2 cm",
      finish: "Architectural Signature Rim",
      origin: "VITTESA Signature Collection"
    },
    image: "/assets/catalogue/lumera-item-side-plate.jpg",
    editorialCaption: "Proportionally scaled for bread, salad, dessert and starter courses."
  },
  {
    id: "lp-03",
    code: "LP-03",
    name: "Soup Plate",
    collection: "LUMÉRA",
    collectionId: "lumera",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Azure", "Olive", "Sienna"],
    colorHexes: ["#244053", "#565D46", "#8B4B32"],
    dimensions: "Ø 22 cm | H 4.5 cm",
    specs: {
      diameter: "22 cm",
      height: "4.5 cm",
      finish: "Deep Wells with Architectural Sculpted Rim",
      origin: "VITTESA Signature Collection"
    },
    image: "/assets/catalogue/lumera-item-soup-plate.jpg",
    editorialCaption: "Ideal depth for consommés, veloutés, and emulsified dishes."
  },
  {
    id: "lp-04",
    code: "LP-04",
    name: "Pasta Bowl",
    collection: "LUMÉRA",
    collectionId: "lumera",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Azure", "Olive", "Sienna"],
    colorHexes: ["#244053", "#565D46", "#8B4B32"],
    dimensions: "Ø 24 cm | H 5.5 cm",
    specs: {
      diameter: "24 cm",
      height: "5.5 cm",
      finish: "Tapered Sculpted Silhouette",
      origin: "VITTESA Signature Collection"
    },
    image: "/assets/catalogue/lumera-item-pasta-bowl.jpg",
    editorialCaption: "Expansive bowl profile designed for pasta, risotto and sauced courses."
  },
  {
    id: "lp-06",
    code: "LP-06",
    name: "Cereal Bowl",
    collection: "LUMÉRA",
    collectionId: "lumera",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Azure", "Olive", "Sienna"],
    colorHexes: ["#244053", "#565D46", "#8B4B32"],
    dimensions: "Ø 15 cm | H 6.5 cm",
    specs: {
      diameter: "15 cm",
      height: "6.5 cm",
      finish: "Vertical Sculpted Fluted Walls",
      origin: "VITTESA Signature Collection"
    },
    image: "/assets/catalogue/lumera-item-cereal-bowl.jpg",
    editorialCaption: "Compact, versatile bowl for morning breakfast service, sides, and snacks."
  },
  {
    id: "lp-07",
    code: "LP-07",
    name: "Mug",
    collection: "LUMÉRA",
    collectionId: "lumera",
    category: "cups",
    categoryLabel: "Cups & Beverage",
    colors: ["Azure", "Olive", "Sienna"],
    colorHexes: ["#244053", "#565D46", "#8B4B32"],
    dimensions: "Ø 8.5 cm | H 9 cm | 320 ml",
    specs: {
      diameter: "8.5 cm",
      height: "9 cm",
      capacity: "320 ml",
      finish: "Architectural Linear Relief Body, Ergonomic Handle",
      origin: "VITTESA Signature Collection"
    },
    image: "/assets/catalogue/lumera-item-mug.jpg",
    editorialCaption: "Refined beverage vessel for specialty coffees, infusions and teas."
  },
  {
    id: "lp-08",
    code: "LP-08",
    name: "Rectangular Platter",
    collection: "LUMÉRA",
    collectionId: "lumera",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Azure", "Olive", "Sienna"],
    colorHexes: ["#244053", "#565D46", "#8B4B32"],
    dimensions: "L 32 cm | W 18 cm | H 3 cm",
    specs: {
      length: "32 cm",
      width: "18 cm",
      height: "3 cm",
      finish: "Linear Sculptural Rim Framing",
      origin: "VITTESA Signature Collection"
    },
    image: "/assets/catalogue/lumera-item-rect-platter.jpg",
    editorialCaption: "Linear presentation canvas for canapés, sushi, fish and sharing courses."
  },
  {
    id: "lp-09",
    code: "LP-09",
    name: "Oval Platter",
    collection: "LUMÉRA",
    collectionId: "lumera",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Azure", "Olive", "Sienna"],
    colorHexes: ["#244053", "#565D46", "#8B4B32"],
    dimensions: "L 36 cm | W 24 cm | H 3 cm",
    specs: {
      length: "36 cm",
      width: "24 cm",
      height: "3 cm",
      finish: "Architectural Rim Contour",
      origin: "VITTESA Signature Collection"
    },
    image: "/assets/catalogue/lumera-item-oval-platter.jpg",
    editorialCaption: "Generously proportioned centerpiece dish for tableside and buffet service."
  },
  {
    id: "lp-10",
    code: "LP-10",
    name: "Sauce Bowl",
    collection: "LUMÉRA",
    collectionId: "lumera",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Azure", "Olive", "Sienna"],
    colorHexes: ["#244053", "#565D46", "#8B4B32"],
    dimensions: "Ø 10 cm | H 4.5 cm | 200 ml",
    specs: {
      diameter: "10 cm",
      height: "4.5 cm",
      capacity: "200 ml",
      finish: "Fluted Sculptural Wall",
      origin: "VITTESA Signature Collection"
    },
    image: "/assets/catalogue/lumera-item-sauce-bowl.jpg",
    editorialCaption: "Precise condiment, dipping sauce and jus accompaniment vessel."
  },

  // --- OLIVERA (NATURAL EARTH SERIES) ---
  {
    id: "ase07103",
    code: "ASE07103",
    name: "Olivera Dinner Plate",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "27 cm",
    specs: {
      diameter: "27 cm",
      finish: "Softly Muted Olive-Grey Matted Glaze",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-editorial-hero.jpg",
    editorialCaption: "Rounded silhouettes and calm contemporary hospitality character."
  },
  {
    id: "ase07101",
    code: "ASE07101",
    name: "Olivera Salad Plate",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "21 cm",
    specs: {
      diameter: "21 cm",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Medium course plate with soft organic lip."
  },
  {
    id: "ase07109",
    code: "ASE07109",
    name: "Olivera Deep Coupe",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "23 cm",
    specs: {
      diameter: "23 cm",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Deep coupe with elevated curving rim for sauced mains."
  },
  {
    id: "ase07122",
    code: "ASE07122",
    name: "Olivera Serving Bowl",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "19 cm | 950 ml",
    specs: {
      diameter: "19 cm",
      capacity: "950 ml",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Large volume hospitality serving bowl."
  },
  {
    id: "ase07124",
    code: "ASE07124",
    name: "Olivera Edge Bowl",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "20 cm x 4.2 cm | 620 ml",
    specs: {
      dimensions: "20 cm x 4.2 cm",
      capacity: "620 ml",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Clean perpendicular rim wall with understated tone."
  },
  {
    id: "ase07154",
    code: "ASE07154",
    name: "Olivera Serving Platter",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "27.5 cm x 18 cm",
    specs: {
      dimensions: "27.5 cm x 18 cm",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Muted earth platter for canapés, charcuterie, and artisanal table drops."
  },
  {
    id: "ase07115",
    code: "ASE07115",
    name: "Olivera Chip Pot",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "accessories",
    categoryLabel: "Accessories",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "400 ml",
    specs: {
      capacity: "400 ml",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Versatile side container for frites, snacks, and tabletop cutlery."
  },

  // --- ROKÉ (SCULPTED TEXTURE SERIES) ---
  {
    id: "asmr-pl-101",
    code: "ASMR-PL-101",
    name: "Roké Coupe Plate",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#E5E3DF"],
    dimensions: "30 cm",
    specs: {
      diameter: "30 cm",
      finish: "Expressive Tactile Chiseled Relief Rim",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/roke-editorial-hero.jpg",
    editorialCaption: "Presentation-led form featuring highly tactile sculpted surface."
  },
  {
    id: "asmr-bl-203",
    code: "ASMR-BL-203",
    name: "Roké Pasta Bowl",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#E5E3DF"],
    dimensions: "24 cm | 700 ml",
    specs: {
      diameter: "24 cm",
      capacity: "700 ml",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/roke-showcase-1.jpg",
    editorialCaption: "Textured exterior bowl highlighting vibrant pastas and culinary colors."
  },
  {
    id: "asmr-pl-121",
    code: "ASMR-PL-121",
    name: "Roké Rim Soup Plate",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#E5E3DF"],
    dimensions: "24 cm",
    specs: {
      diameter: "24 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/roke-showcase-2.jpg",
    editorialCaption: "Broad chiseled rim framing an exquisite central well."
  },
  {
    id: "asmr-pl-103",
    code: "ASMR-PL-103",
    name: "Roké Foot Plate",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#E5E3DF"],
    dimensions: "31 cm",
    specs: {
      diameter: "31 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/roke-showcase-1.jpg",
    editorialCaption: "Elevated pedestaled foot plate for dramatic fine dining presentation."
  },
  {
    id: "asmr-cu-271",
    code: "ASMR-CU-271",
    name: "Roké Tea Cup & Saucer",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "cups",
    categoryLabel: "Cups & Beverage",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#E5E3DF"],
    dimensions: "230 ml",
    specs: {
      capacity: "230 ml",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/roke-showcase-2.jpg",
    editorialCaption: "Tactile relief textured tea cup with matching saucer."
  },

  // --- TERRA SPECKLE (ARTISAN EARTH SERIES) ---
  {
    id: "assbs103",
    code: "ASSBS103",
    name: "Terra Speckle Plate",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "27 cm",
    specs: {
      diameter: "27 cm",
      finish: "Organic Speckling, Warm Neutral Clay Character",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-editorial-hero.png",
    editorialCaption: "A warm neutral direction with organic speckling and understated artisanal character."
  },
  {
    id: "assbs105",
    code: "ASSBS105",
    name: "Terra Speckle Pasta Plate",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "27 cm",
    specs: {
      diameter: "27 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "Artisanal plate for rustic dining, farm-to-table salads and handmade pastas."
  },
  {
    id: "assbs171",
    code: "ASSBS171",
    name: "Terra Speckle Banquet Bowl",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "22 cm",
    specs: {
      diameter: "22 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-2.png",
    editorialCaption: "Generous organic banquet bowl with contrast rim."
  },
  {
    id: "assbs132",
    code: "ASSBS132",
    name: "Terra Speckle Barista Cup",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "cups",
    categoryLabel: "Cups & Beverage",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "250 ml (Saucer 16 cm)",
    specs: {
      capacity: "250 ml",
      saucer: "ASSBS133 16 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "Artisanal specialty coffee cup with warm tactile glaze."
  },
  {
    id: "assbs151",
    code: "ASSBS151",
    name: "Terra Speckle Rectangular Platter",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "29 x 15 cm",
    specs: {
      dimensions: "29 x 15 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-2.png",
    editorialCaption: "Artisan earth rectangular platter with gentle curving lip."
  },

  // --- ESSENTIAL WHITE (CORE TABLEWARE) ---
  {
    id: "sn1109",
    code: "SN1109",
    name: "Essential Coupe Plate 11\"",
    collection: "ESSENTIAL WHITE",
    collectionId: "essential-white",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Pure Hotel White"],
    colorHexes: ["#F5F5F3"],
    dimensions: "11\" (28 cm)",
    specs: {
      size: "11 inch Coupe",
      glaze: "High-density commercial vitrified white porcelain",
      range: "Core Tableware"
    },
    image: "/assets/catalogue/essential-white-plates-range.png",
    editorialCaption: "Timeless hospitality essential for hotel, restaurant, and banquet service."
  },
  {
    id: "sn1219",
    code: "SN1219",
    name: "Essential Georgian Plate 11\"",
    collection: "ESSENTIAL WHITE",
    collectionId: "essential-white",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Pure Hotel White"],
    colorHexes: ["#F5F5F3"],
    dimensions: "11\" (28 cm)",
    specs: {
      size: "11 inch Georgian Rim",
      range: "Core Tableware"
    },
    image: "/assets/catalogue/essential-white-plates-range.png",
    editorialCaption: "Classic wide rim profile for traditional and formal dining service."
  },
  {
    id: "sn1558",
    code: "SN1558",
    name: "Essential Soup Plate Regular",
    collection: "ESSENTIAL WHITE",
    collectionId: "essential-white",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Pure Hotel White"],
    colorHexes: ["#F5F5F3"],
    dimensions: "340 ml",
    specs: {
      capacity: "340 ml",
      range: "Bowls & Accessories"
    },
    image: "/assets/catalogue/essential-white-bowls-hero.jpg",
    editorialCaption: "Vitrified hotel porcelain soup plate for commercial dinner service."
  },
  {
    id: "sn1553",
    code: "SN1553",
    name: "Essential Footed Bowl",
    collection: "ESSENTIAL WHITE",
    collectionId: "essential-white",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Pure Hotel White"],
    colorHexes: ["#F5F5F3"],
    dimensions: "6\" | 750 ml",
    specs: {
      diameter: "6 inch",
      capacity: "750 ml",
      range: "Bowls & Accessories"
    },
    image: "/assets/catalogue/essential-white-bowls-range.png",
    editorialCaption: "Sturdy footed base engineered for professional stacking and durability."
  },
  {
    id: "sn1731",
    code: "SN1731",
    name: "Essential Cappuccino Cup",
    collection: "ESSENTIAL WHITE",
    collectionId: "essential-white",
    category: "cups",
    categoryLabel: "Cups & Beverage",
    colors: ["Pure Hotel White"],
    colorHexes: ["#F5F5F3"],
    dimensions: "230 ml",
    specs: {
      capacity: "230 ml",
      range: "Cups & Beverage"
    },
    image: "/assets/catalogue/essential-white-cups-hero.jpg",
    editorialCaption: "Ergonomic rim thickness retaining thermal heat for espresso & cappuccino."
  },
  {
    id: "sn1715",
    code: "SN1715",
    name: "Essential Stackable Tea Cup",
    collection: "SN1715",
    collection: "ESSENTIAL WHITE",
    collectionId: "essential-white",
    category: "cups",
    categoryLabel: "Cups & Beverage",
    colors: ["Pure Hotel White"],
    colorHexes: ["#F5F5F3"],
    dimensions: "200 ml",
    specs: {
      capacity: "200 ml",
      feature: "Space-saving interlocking stackable profile",
      range: "Cups & Beverage"
    },
    image: "/assets/catalogue/essential-white-cups-range.png",
    editorialCaption: "High-density stackable tea cup optimized for high-capacity banqueting."
  },
  {
    id: "sn1837",
    code: "SN1837",
    name: "Essential Rectangular Platter",
    collection: "ESSENTIAL WHITE",
    collectionId: "essential-white",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Pure Hotel White"],
    colorHexes: ["#F5F5F3"],
    dimensions: "12\" x 4.75\"",
    specs: {
      size: "12 x 4.75 inch",
      range: "Platters — Product Range"
    },
    image: "/assets/catalogue/essential-white-platters-hero.jpg",
    editorialCaption: "Sharp architectural rectangular platter for passed hors d'oeuvres and sashimi."
  },
  {
    id: "sn1825",
    code: "SN1825",
    name: "Essential Lotus Platter",
    collection: "ESSENTIAL WHITE",
    collectionId: "essential-white",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Pure Hotel White"],
    colorHexes: ["#F5F5F3"],
    dimensions: "12\" x 6\"",
    specs: {
      size: "12 x 6 inch",
      range: "Platters — Product Range"
    },
    image: "/assets/catalogue/essential-white-platters-range.png",
    editorialCaption: "Curved flare rim design bringing soft elegance to hotel buffet settings."
  },

  // --- CURATED TONES: URBANE GREY, PARADISE PINK, AQUA BLUE ---
  {
    id: "asug5103",
    code: "ASUG5103",
    name: "Urbane Grey Dinner Plate",
    collection: "URBANE GREY",
    collectionId: "urbane-grey",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Mineral Slate Grey"],
    colorHexes: ["#8C9298"],
    dimensions: "27 cm",
    specs: {
      diameter: "27 cm",
      collection: "Curated Hospitality Collection"
    },
    image: "/assets/catalogue/urbane-grey-editorial.jpg",
    editorialCaption: "Slate mineral grey body emphasizing contrast and artisanal cuisine."
  },
  {
    id: "aspp5103",
    code: "ASPP5103",
    name: "Paradise Pink Dinner Plate",
    collection: "PARADISE PINK",
    collectionId: "paradise-pink",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Soft Rose Earth"],
    colorHexes: ["#CBA39C"],
    dimensions: "27 cm",
    specs: {
      diameter: "27 cm",
      collection: "Curated Hospitality Collection"
    },
    image: "/assets/catalogue/paradise-pink-editorial.jpg",
    editorialCaption: "Soft blush glaze with rim character, designed for modern dining venues."
  },
  {
    id: "asab5103",
    code: "ASAB5103",
    name: "Aqua Blue Dinner Plate",
    collection: "AQUA BLUE",
    collectionId: "aqua-blue",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Mediterranean Aqua"],
    colorHexes: ["#79B1B8"],
    dimensions: "27 cm",
    specs: {
      diameter: "27 cm",
      collection: "Curated Hospitality Collection"
    },
    image: "/assets/catalogue/aqua-blue-editorial.jpg",
    editorialCaption: "Luminous coastal aqua tone bringing seaside vibrancy to the table."
  }
];

export const HOSPITALITY_APPLICATIONS = [
  {
    title: "Luxury Hotels & Resorts",
    subtitle: "End-to-end porcelain suites from all-day dining to signature restaurants and in-room amenities.",
    curation: "LUMÉRA Signature + Essential White Core"
  },
  {
    title: "Fine Dining & Tasting Concepts",
    subtitle: "Presentation-led sculptural silhouettes engineered to elevate chef-driven multi-course menus.",
    curation: "ROKÉ Sculpted + LUMÉRA Trio"
  },
  {
    title: "Boutique Cafés & Bistros",
    subtitle: "Artisanal warmth with tactile glazes, barista sizing, and durable rim resilience.",
    curation: "TERRA SPECKLE + OLIVERA Earth"
  },
  {
    title: "Hospitality Procurement Groups",
    subtitle: "Centralized specification, consistent batch matching, and dependable export trade supply.",
    curation: "Full 3-Layer Portfolio Program"
  },
  {
    title: "Contract Catering & Banqueting",
    subtitle: "High-density vitrified white porcelain built for stacking, thermal retention, and high turnarounds.",
    curation: "ESSENTIAL WHITE Everyday Proof"
  },
  {
    title: "Private Label Tabletop Programs",
    subtitle: "Bespoke development for hospitality groups seeking exclusive branded tableware lines.",
    curation: "Custom Development & Backstamping"
  }
];

export const PRIVATE_LABEL_PILLARS = [
  {
    number: "01",
    title: "Custom Shapes & Tooling",
    description: "Tailored silhouettes, specialized rims, and custom bowl wells designed to align with your culinary concept or interior architecture."
  },
  {
    number: "02",
    title: "Proprietary Color Glazes",
    description: "Exploration of exclusive matte, reactive, or silky satin glazes tailored to match client brand palettes, subject to sampling and capability."
  },
  {
    number: "03",
    title: "Branding, Embossing & Backstamps",
    description: "Under-glaze backstamps, embossed hotel logos, and subtle rim decorations applied prior to high-temperature firing."
  },
  {
    number: "04",
    title: "Export Packaging & Program Logistics",
    description: "Customized cartons, barcode labeling, pallet configurations, and scheduled international shipping for seamless rollout."
  }
];
