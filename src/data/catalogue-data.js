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
    number: "01",
    layer: "01 — SIGNATURE",
    layerNumber: "01",
    name: "LUMÉRA",
    series: "VITTESA Signature Collection",
    tagline: "VITTESA Signature Collection",
    shortDescriptor: "Architectural Mediterranean Silhouettes & Signature Rim",
    badge: "Designed for VITTESA",
    category: "Signature Layer",
    heroImage: "/assets/catalogue/hero-lumera-table.jpg",
    moodImage: "/assets/catalogue/lumera-colour-trio.png",
    galleryImages: [
      "/assets/catalogue/hero-lumera-table.jpg",
      "/assets/catalogue/lumera-colour-trio.png",
      "/assets/catalogue/lumera-item-dinner-plate.jpg",
      "/assets/catalogue/lumera-item-rect-platter.jpg"
    ],
    description: "Architectural Mediterranean porcelain with sculptural silhouettes, an architectural signature rim and a generous plating field.",
    story: {
      philosophy: "LUMÉRA captures the quiet beauty of natural light and architectural line. Born from Mediterranean coastal sensibilities, every piece balances bold sculptural form with generous plating proportions.",
      designLanguage: "Defined by a distinct, elevated stepped rim that gently cradles culinary creations, accompanied by subtle relief fluting on vertical surfaces.",
      materialCharacter: "High-density European-grade vitrified hotel porcelain fired at ultra-high temperatures for supreme edge resilience.",
      glazeFinish: "Satin-smooth silky glaze available in three coordinated Mediterranean mineral colorways.",
      hospitalityPositioning: "Signature fine dining, luxury hotel destination restaurants, tasting menus, and executive banqueting."
    },
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
    accentNote: "Three coordinated colour directions designed to mix across a hospitality table setting.",
    url: "/collections/lumera/",
    prev: { id: "essential-white", name: "ESSENTIAL WHITE", url: "/collections/essential-white/" },
    next: { id: "olivera", name: "OLIVERA", url: "/collections/olivera/" }
  },
  {
    id: "olivera",
    number: "02",
    layer: "02 — CURATED",
    layerNumber: "02",
    name: "OLIVERA",
    series: "Natural Earth Series",
    tagline: "Earth Olive",
    shortDescriptor: "Softly Muted Olive Earth & Rounded Organic Silhouettes",
    badge: "Natural Earth Series",
    category: "Curated Layer",
    heroImage: "/assets/catalogue/olivera-editorial-hero.jpg",
    rangeImage: "/assets/catalogue/olivera-product-range.png",
    galleryImages: [
      "/assets/catalogue/olivera-editorial-hero.jpg",
      "/assets/catalogue/olivera-product-range.png"
    ],
    description: "A softly muted olive-grey direction with rounded silhouettes and a calm, contemporary hospitality character.",
    story: {
      philosophy: "OLIVERA grounds the dining experience in nature's subtle palette. Soft olive-grey tones impart a soothing serenity that allows fresh organic ingredients to take center stage.",
      designLanguage: "Gentle rounded contours, deep organic coupe depths, and perpendicular edge rims crafted for modern tactile hospitality.",
      materialCharacter: "Durable vitrified porcelain engineered to withstand high-volume commercial dishwashing and thermal shock.",
      glazeFinish: "Softly matted Earth Olive glaze with understated mineral depth.",
      hospitalityPositioning: "Fine dining, boutique hotels, modern bistros, tasting menus, and farm-to-table concepts."
    },
    url: "/collections/olivera/",
    prev: { id: "lumera", name: "LUMÉRA", url: "/collections/lumera/" },
    next: { id: "roke", name: "ROKÉ", url: "/collections/roke/" }
  },
  {
    id: "roke",
    number: "03",
    layer: "02 — CURATED",
    layerNumber: "02",
    name: "ROKÉ",
    series: "Sculpted Texture Series",
    tagline: "Tactile Sculptural Porcelain",
    shortDescriptor: "Tactile Expression & Sculptural Form",
    badge: "Sculpted Texture Series",
    category: "Curated Layer",
    heroImage: "/assets/catalogue/roke-editorial-hero.jpg",
    showcase1: "/assets/catalogue/roke-showcase-1.jpg",
    showcase2: "/assets/catalogue/roke-showcase-2.jpg",
    galleryImages: [
      "/assets/catalogue/roke-editorial-hero.jpg",
      "/assets/catalogue/roke-showcase-1.jpg",
      "/assets/catalogue/roke-showcase-2.jpg",
      "/assets/catalogue/asmr/asmrpl118.jpeg"
    ],
    description: "A tactile, sculptural collection defined by expressive texture and presentation-led forms.",
    story: {
      philosophy: "ROKÉ celebrates the dramatic interplay of tactile surface and light. Designed as high-impact culinary canvases where plate artistry matches the chef's culinary ambition.",
      designLanguage: "Expressive chiseled relief rims, textured exterior bowl walls, elevated pedestal foot plates, and asymmetrical presentation canvases.",
      materialCharacter: "Extra-durable vitrified white porcelain with high thermal retention and reinforced structural edges.",
      glazeFinish: "Crisp architectural white with tactile sculptural relief and smooth glossy plating reservoirs.",
      hospitalityPositioning: "Michelin-style presentation, signature tasting courses, elevated seafood & pasta service, luxury banqueting."
    },
    url: "/collections/roke/",
    prev: { id: "olivera", name: "OLIVERA", url: "/collections/olivera/" },
    next: { id: "terra-speckle", name: "TERRA SPECKLE", url: "/collections/terra-speckle/" }
  },
  {
    id: "terra-speckle",
    number: "04",
    layer: "02 — CURATED",
    layerNumber: "02",
    name: "TERRA SPECKLE",
    series: "Artisan Earth Series",
    tagline: "Speckled Brown",
    shortDescriptor: "Organic Mineral Speckle & Artisan Warmth",
    badge: "Artisan Earth Series",
    category: "Curated Layer",
    heroImage: "/assets/catalogue/terra-speckle-editorial-hero.png",
    rangeImage1: "/assets/catalogue/terra-speckle-product-range-1.png",
    rangeImage2: "/assets/catalogue/terra-speckle-product-range-2.png",
    galleryImages: [
      "/assets/catalogue/terra-speckle-editorial-hero.png",
      "/assets/catalogue/terra-speckle-product-range-1.png",
      "/assets/catalogue/terra-speckle-product-range-2.png"
    ],
    description: "A warm neutral direction with organic speckling and an understated artisanal character.",
    story: {
      philosophy: "TERRA SPECKLE evokes handcrafted studio pottery while maintaining the rigorous technical performance of European commercial porcelain.",
      designLanguage: "Soft natural rim highlights, fluid organic platters, coupe curves, and tactile fluting across a warm neutral canvas.",
      materialCharacter: "High-fired vitrified porcelain integrated with genuine mineral speckling that won't fade or wear.",
      glazeFinish: "Warm neutral speckled clay glaze with subtle hand-wiped brown rim edging.",
      hospitalityPositioning: "Artisanal bistros, farm-to-table restaurants, specialty coffee lounges, all-day dining."
    },
    url: "/collections/terra-speckle/",
    prev: { id: "roke", name: "ROKÉ", url: "/collections/roke/" },
    next: { id: "urbane-grey", name: "URBANE GREY", url: "/collections/urbane-grey/" }
  },
  {
    id: "urbane-grey",
    number: "05",
    layer: "02 — CURATED",
    layerNumber: "02",
    name: "URBANE GREY",
    series: "Curated Hospitality Collection",
    tagline: "Contemporary Mineral Slate",
    shortDescriptor: "Metropolitan Slate Mineral & Dramatic Plating Contrast",
    badge: "Curated Hospitality",
    category: "Curated Layer",
    heroImage: "/assets/catalogue/urbane-grey-editorial.jpg",
    rangeImage1: "/assets/catalogue/urbane-grey-range-1.jpg",
    rangeImage2: "/assets/catalogue/urbane-grey-range-2.jpg",
    lifestyleImage: "/assets/catalogue/urbane-grey-lifestyle.jpg",
    galleryImages: [
      "/assets/catalogue/urbane-grey-editorial.jpg",
      "/assets/catalogue/urbane-grey-lifestyle.jpg",
      "/Creamy Mushroom Pasta in Urban Grey.png",
      "/assets/catalogue/urbane-grey-range-1.jpg"
    ],
    description: "A cool mineral grey series designed for sleek metropolitan hospitality spaces and high-contrast food presentation.",
    story: {
      philosophy: "URBANE GREY introduces architectural slate aesthetics into modern metropolitan dining, framing colorful sauces and artisanal cuts with sophisticated contrast.",
      designLanguage: "Crisp rims, fluid oval contours, structured edge platters, and generous deep coupe profiles.",
      materialCharacter: "Commercial vitrified porcelain with non-porous mineral glaze resistant to metal marking and chipping.",
      glazeFinish: "Mineral slate grey satin matte with subtle textural depth.",
      hospitalityPositioning: "Urban dining, steak & grill rooms, contemporary pasta bars, cocktail lounges, hotel restaurants."
    },
    url: "/collections/urbane-grey/",
    prev: { id: "terra-speckle", name: "TERRA SPECKLE", url: "/collections/terra-speckle/" },
    next: { id: "paradise-pink", name: "PARADISE PINK", url: "/collections/paradise-pink/" }
  },
  {
    id: "paradise-pink",
    number: "06",
    layer: "02 — CURATED",
    layerNumber: "02",
    name: "PARADISE PINK",
    series: "Curated Hospitality Collection",
    tagline: "Soft Rose Earth",
    shortDescriptor: "Pastel Terracotta Blush & Elegant Contrast Rim",
    badge: "Curated Hospitality",
    category: "Curated Layer",
    heroImage: "/assets/catalogue/paradise-pink-editorial.jpg",
    rangeImage1: "/assets/catalogue/paradise-pink-range-1.jpg",
    rangeImage2: "/assets/catalogue/paradise-pink-range-2.jpg",
    lifestyleImage: "/assets/catalogue/paradise-pink-lifestyle.jpg",
    galleryImages: [
      "/assets/catalogue/paradise-pink-editorial.jpg",
      "/assets/catalogue/paradise-pink-lifestyle.jpg",
      "/assets/catalogue/paradise-pink-range-1.jpg",
      "/assets/catalogue/paradise-pink-range-2.jpg"
    ],
    description: "A warm pastel terracotta blush with gentle rim contrast, ideal for vibrant plating, brunch concepts, and modern luxury dining.",
    story: {
      philosophy: "PARADISE PINK channels radiant warmth and playful sophistication, infusing daytime dining and delicate pastry creations with gentle blush tones.",
      designLanguage: "Soft coupe profiles, fluid platters, and gentle organic rims with delicate earth contrast borders.",
      materialCharacter: "Vitrified hotel porcelain engineered for heavy commercial service, microwave and dishwasher safe.",
      glazeFinish: "Soft rose terracotta blush with delicate speckled undertones and satin sheen.",
      hospitalityPositioning: "Brunch venues, modern dessert service, boutique resorts, coastal bistros, wellness dining."
    },
    url: "/collections/paradise-pink/",
    prev: { id: "urbane-grey", name: "URBANE GREY", url: "/collections/urbane-grey/" },
    next: { id: "aqua-blue", name: "AQUA BLUE", url: "/collections/aqua-blue/" }
  },
  {
    id: "aqua-blue",
    number: "07",
    layer: "02 — CURATED",
    layerNumber: "02",
    name: "AQUA BLUE",
    series: "Curated Hospitality Collection",
    tagline: "Mediterranean Coastal Turquoise",
    shortDescriptor: "Luminous Coastal Turquoise & Mediterranean Vibrancy",
    badge: "Curated Hospitality",
    category: "Curated Layer",
    heroImage: "/assets/catalogue/aqua-blue-editorial.jpg",
    rangeImage1: "/assets/catalogue/aqua-blue-range-1.jpg",
    rangeImage2: "/assets/catalogue/aqua-blue-range-2.jpg",
    lifestyleImage: "/assets/catalogue/aqua-blue-lifestyle.jpg",
    galleryImages: [
      "/assets/catalogue/aqua-blue-editorial.jpg",
      "/assets/catalogue/aqua-blue-lifestyle.jpg",
      "/assets/catalogue/aqua-blue-range-1.jpg",
      "/assets/catalogue/aqua-blue-range-2.jpg"
    ],
    description: "A lively Mediterranean azure-aqua direction that illuminates fresh seafood, sharing plates, and poolside dining concepts.",
    story: {
      philosophy: "AQUA BLUE brings the vibrant luminosity of Mediterranean shores directly to the table, creating high-impact visual harmony with fresh crudo, seafood, and colorful produce.",
      designLanguage: "Dynamic fluid platters, expansive deep coupe bowls, and clean edge rims finished with an organic contrast perimeter.",
      materialCharacter: "High-density vitrified porcelain body offering supreme thermal retention and scratch resistance.",
      glazeFinish: "Luminous coastal turquoise with subtle reactive specks and smooth glassy surface.",
      hospitalityPositioning: "Seafood dining, seaside resorts, Mediterranean concepts, tapas & mezze service, rooftop terraces."
    },
    url: "/collections/aqua-blue/",
    prev: { id: "paradise-pink", name: "PARADISE PINK", url: "/collections/paradise-pink/" },
    next: { id: "essential-white", name: "ESSENTIAL WHITE", url: "/collections/essential-white/" }
  },
  {
    id: "essential-white",
    number: "08",
    layer: "03 — ESSENTIAL",
    layerNumber: "03",
    name: "ESSENTIAL WHITE",
    series: "Core Commercial Porcelain",
    tagline: "Core Commercial Porcelain",
    shortDescriptor: "Vitrified High-Density Hotel Tableware & Banqueting Core",
    badge: "Everyday Proof",
    category: "Essential Layer",
    heroImage: "/assets/catalogue/essential-white-platters-hero.jpg",
    bowlsHero: "/assets/catalogue/essential-white-bowls-hero.jpg",
    cupsHero: "/assets/catalogue/essential-white-cups-hero.jpg",
    plattersHero: "/assets/catalogue/essential-white-platter-hero.jpg",
    platesRange: "/assets/catalogue/essential-white-plates-range.png",
    bowlsRange: "/assets/catalogue/essential-white-bowls-range.png",
    cupsRange: "/assets/catalogue/essential-white-cups-range.png",
    plattersRange: "/assets/catalogue/essential-white-platters-range.png",
    galleryImages: [
      "/assets/catalogue/essential-white-platters-hero.jpg",
      "/assets/catalogue/essential-white-bowls-hero.jpg",
      "/assets/catalogue/essential-white-cups-hero.jpg",
      "/assets/catalogue/essential-white-platter-hero.jpg"
    ],
    description: "Classic white porcelain for timeless commercial service. Dependable, high-density hotel tableware designed for volume banqueting and everyday hospitality rigor.",
    story: {
      philosophy: "ESSENTIAL WHITE provides the uncompromising backbone of commercial hospitality dining. Pure, unadorned vitrified white porcelain engineered for thermal endurance, stacking efficiency, and timeless presentation.",
      designLanguage: "Comprehensive sizing continuum across seamless contemporary Coupes, formal Georgian wide-rim profiles, and architectural platters.",
      materialCharacter: "High-density fully vitrified commercial white porcelain with reinforced rim technology for zero chipping.",
      glazeFinish: "Brilliant pure hotel white glaze with ultra-hard diamond finish resistant to cutlery marks.",
      hospitalityPositioning: "Hotels, banqueting halls, catering operations, corporate dining, high-turnover restaurants."
    },
    url: "/collections/essential-white/",
    prev: { id: "aqua-blue", name: "AQUA BLUE", url: "/collections/aqua-blue/" },
    next: { id: "lumera", name: "LUMÉRA", url: "/collections/lumera/" }
  }
];

export const PRODUCTS = [
  // =========================================================================
  // --- 01. LUMÉRA (SIGNATURE COLLECTION) ---
  // =========================================================================
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
  {
    id: "lp-11",
    code: "LP-11",
    name: "Serving Dish",
    collection: "LUMÉRA",
    collectionId: "lumera",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Azure", "Olive", "Sienna"],
    colorHexes: ["#244053", "#565D46", "#8B4B32"],
    dimensions: "20.5 cm x 14 cm",
    specs: {
      dimensions: "20.5 cm x 14 cm",
      finish: "Stepped Rim Architecture",
      origin: "VITTESA Signature Collection"
    },
    image: "/assets/catalogue/lumera-item-serving-dish.jpg",
    editorialCaption: "Individual presentation and sharing appetizer serving dish."
  },

  // =========================================================================
  // --- 02. OLIVERA (NATURAL EARTH SERIES) ---
  // =========================================================================
  {
    id: "ase07103",
    code: "ASEO7103",
    name: "Dinner Plate",
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
    code: "ASEO7101",
    name: "Salad Plate",
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
    code: "ASEO7109",
    name: "Deep Coupe",
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
    id: "ase07114",
    code: "ASEO7114",
    name: "Edge Plate Big",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "26 cm",
    specs: {
      diameter: "26 cm",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Perpendicular rim plate creating clean architectural presentation."
  },
  {
    id: "ase07112",
    code: "ASEO7112",
    name: "Edge Plate Small",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "20 cm",
    specs: {
      diameter: "20 cm",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Compact vertical rim side plate."
  },
  {
    id: "ase07111",
    code: "ASEO7111",
    name: "Hi-Wall Appetizer Plate",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "13 cm",
    specs: {
      diameter: "13 cm",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Miniature high-walled plate for amuse-bouche and butter service."
  },
  {
    id: "ase07122",
    code: "ASEO7122",
    name: "Serving Bowl 19 cm",
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
    id: "ase07121",
    code: "ASEO7121",
    name: "Serving Bowl 15 cm",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "15 cm | 590 ml",
    specs: {
      diameter: "15 cm",
      capacity: "590 ml",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Versatile side and salad serving bowl."
  },
  {
    id: "ase07124",
    code: "ASEO7124",
    name: "Edge Bowl 20 cm",
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
    id: "ase07123",
    code: "ASEO7123",
    name: "Edge Bowl 13 cm",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "13 cm x 6.5 cm | 570 ml",
    specs: {
      dimensions: "13 cm x 6.5 cm",
      capacity: "570 ml",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Deep straight-sided hospitality bowl."
  },
  {
    id: "ase07164",
    code: "ASEO7164",
    name: "Soup Bowl",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "11.5 cm | 287 ml",
    specs: {
      diameter: "11.5 cm",
      capacity: "287 ml",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Classic soup and broth service bowl."
  },
  {
    id: "ase07163",
    code: "ASEO7163",
    name: "Katori Bowl",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "9.5 cm | 190 ml",
    specs: {
      diameter: "9.5 cm",
      capacity: "190 ml",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Individual accompaniment and condiment katori."
  },
  {
    id: "ase07161",
    code: "ASEO7161",
    name: "Dip Bowl",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "7.5 cm | 42 ml",
    specs: {
      diameter: "7.5 cm",
      capacity: "42 ml",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Petite sauce, jus and dipping vessel."
  },
  {
    id: "ase07115",
    code: "ASEO7115",
    name: "Chip Pot",
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
  {
    id: "ase07134",
    code: "ASEO7134",
    name: "Creamer",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "accessories",
    categoryLabel: "Accessories",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "220 ml",
    specs: {
      capacity: "220 ml",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Ergonomic milk and pouring creamer."
  },
  {
    id: "ase07153",
    code: "ASEO7153",
    name: "Platter Small",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "22 cm x 15 cm",
    specs: {
      dimensions: "22 cm x 15 cm",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Organic oval platter for appetizers and passed hors d'oeuvres."
  },
  {
    id: "ase07154",
    code: "ASEO7154",
    name: "Platter Medium",
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
    id: "ase07155",
    code: "ASEO7155",
    name: "Platter Large",
    collection: "OLIVERA",
    collectionId: "olivera",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Earth Olive"],
    colorHexes: ["#7A816E"],
    dimensions: "33.5 cm x 22 cm",
    specs: {
      dimensions: "33.5 cm x 22 cm",
      series: "Natural Earth Series"
    },
    image: "/assets/catalogue/olivera-product-range.png",
    editorialCaption: "Expansive sharing platter for roasted whole cuts and seafood service."
  },

  // =========================================================================
  // --- 03. ROKÉ / ASMR COLLECTION (SCULPTED TEXTURE SERIES) ---
  // =========================================================================

  // User Highlighted ASRWM Series:
  {
    id: "asrwm6101",
    code: "ASRWM6101",
    name: "Quarter Plate",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "20 cm",
    specs: {
      diameter: "20 cm",
      finish: "Sculpted Relief Chiseled Rim, High-Density Hotel Vitrified Porcelain",
      series: "Sculpted Texture Series",
      origin: "VITTESA Curated ROKÉ"
    },
    image: "/assets/catalogue/asmr/asmrpl102.jpeg",
    editorialCaption: "20 cm sculpted plate for bread, side courses, and delicate appetizers."
  },
  {
    id: "asrwm6103",
    code: "ASRWM6103",
    name: "Dinner Plate",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "28 cm",
    specs: {
      diameter: "28 cm",
      finish: "Expressive Tactile Chiseled Relief Rim, Silky Glaze Plating Field",
      series: "Sculpted Texture Series",
      origin: "VITTESA Curated ROKÉ"
    },
    image: "/assets/catalogue/asmr/asmrpl118.jpeg",
    editorialCaption: "Signature 28 cm dinner presentation canvas with tactile border."
  },
  {
    id: "asrwm6105",
    code: "ASRWM6105",
    name: "Soup Plate",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "26 cm | 340 ml",
    specs: {
      diameter: "26 cm",
      capacity: "340 ml",
      finish: "Broad Chiseled Texture Rim, Deep Central Reservoir",
      series: "Sculpted Texture Series",
      origin: "VITTESA Curated ROKÉ"
    },
    image: "/assets/catalogue/asmr/asmrbl241.jpeg",
    editorialCaption: "26 cm wide-rim soup plate designed for velvety soups and emulsion courses."
  },
  {
    id: "asrwm6125",
    code: "ASRWM6125",
    name: "Soup Bowl",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "11.5 cm | 300 ml",
    specs: {
      diameter: "11.5 cm",
      capacity: "300 ml",
      finish: "Textured Exterior Wall, Smooth Interior Glaze",
      series: "Sculpted Texture Series",
      origin: "VITTESA Curated ROKÉ"
    },
    image: "/assets/catalogue/asmr/asmrbl202.jpeg",
    editorialCaption: "Compact individual soup bowl with tactile ribbed exterior."
  },
  {
    id: "asrwm6117",
    code: "ASRWM6117",
    name: "Canvas Plate",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "31 cm",
    specs: {
      diameter: "31 cm",
      finish: "Expansive Flat Plating Canvas, Chiseled Rim Border",
      series: "Sculpted Texture Series",
      origin: "VITTESA Curated ROKÉ"
    },
    image: "/assets/catalogue/asmr/asmrpl118.jpeg",
    editorialCaption: "31 cm wide flat canvas plate engineered for avant-garde chef plating."
  },
  {
    id: "asrwm6118",
    code: "ASRWM6118",
    name: "Magnum Plate",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "31 cm",
    specs: {
      diameter: "31 cm",
      finish: "Dramatic Deep Well with High-Relief Architectural Rim",
      series: "Sculpted Texture Series",
      origin: "VITTESA Curated ROKÉ"
    },
    image: "/assets/catalogue/asmr/asmrpl124.jpeg",
    editorialCaption: "31 cm magnum presentation plate with prominent sculptural border."
  },
  {
    id: "asrwm6151",
    code: "ASRWM6151",
    name: "Rectangle Platter",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "29 × 15 cm",
    specs: {
      dimensions: "29 x 15 cm",
      finish: "Architectural Rectangular Profile with Chiseled Outer Border",
      series: "Sculpted Texture Series",
      origin: "VITTESA Curated ROKÉ"
    },
    image: "/assets/catalogue/asmr/asmrpl151.jpeg",
    editorialCaption: "Linear presentation canvas for crudo, sashimi, and tasting drops."
  },
  {
    id: "asrwm6152",
    code: "ASRWM6152",
    name: "Podium Platter",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "27 × 11 cm",
    specs: {
      dimensions: "27 x 11 cm",
      finish: "Elevated Podium Profile with Sculpted Edge Texture",
      series: "Sculpted Texture Series",
      origin: "VITTESA Curated ROKÉ"
    },
    image: "/assets/catalogue/asmr/asmrpl152.jpeg",
    editorialCaption: "Narrow podium platter providing dramatic vertical table elevation."
  },

  // Complete ASMR Catalogue Series:
  {
    id: "asmr-pl-101",
    code: "ASMR-PL-101",
    name: "Coupe Plate 30 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "30 cm",
    specs: {
      diameter: "30 cm",
      finish: "Expressive Tactile Chiseled Relief Rim",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl118.jpeg",
    editorialCaption: "Presentation-led form featuring highly tactile sculpted surface."
  },
  {
    id: "asmr-pl-102",
    code: "ASMR-PL-102",
    name: "Coupe Plate 26 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "26 cm",
    specs: {
      diameter: "26 cm",
      finish: "Tactile Sculpted Rim",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl102.jpeg",
    editorialCaption: "Medium course coupe plate with organic chiseled perimeter."
  },
  {
    id: "asmr-pl-107",
    code: "ASMR-PL-107",
    name: "Sculpted Rim Plate 22 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "22 cm",
    specs: {
      diameter: "22 cm",
      finish: "Textured Rim Contour",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl107.jpeg",
    editorialCaption: "Versatile starter and dessert plate with chiseled relief."
  },
  {
    id: "asmr-pl-103",
    code: "ASMR-PL-103",
    name: "Foot Plate (F/H) 31 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "31 cm",
    specs: {
      diameter: "31 cm",
      feature: "Elevated Pedestal Foot Base (F/H)",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl119.jpeg",
    editorialCaption: "Elevated pedestaled foot plate for dramatic fine dining presentation."
  },
  {
    id: "asmr-pl-104",
    code: "ASMR-PL-104",
    name: "Foot Plate (F/H) 27 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "27 cm",
    specs: {
      diameter: "27 cm",
      feature: "Elevated Pedestal Base (F/H)",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl119.jpeg",
    editorialCaption: "Medium pedestaled plate elevating signature tasting courses."
  },
  {
    id: "asmr-pl-105",
    code: "ASMR-PL-105",
    name: "Foot Plate (F/H) 23.5 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "23.5 cm",
    specs: {
      diameter: "23.5 cm",
      feature: "Pedestal Footed Base (F/H)",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl119.jpeg",
    editorialCaption: "Compact pedestal plate for intricate pastry and appetizer drops."
  },
  {
    id: "asmr-pl-121",
    code: "ASMR-PL-121",
    name: "Rim Soup Plate 24 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "24 cm",
    specs: {
      diameter: "24 cm",
      finish: "Sculpted Wide Rim, Deep Inner Well",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl124.jpeg",
    editorialCaption: "Broad chiseled rim framing an exquisite central well."
  },
  {
    id: "asmr-pl-122",
    code: "ASMR-PL-122",
    name: "Rim Soup Plate 20 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "20 cm",
    specs: {
      diameter: "20 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl124.jpeg",
    editorialCaption: "20 cm rim soup plate for delicate tasting portions."
  },
  {
    id: "asmr-pl-123",
    code: "ASMR-PL-123",
    name: "Pizza / Fish Plate 31 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "31 cm",
    specs: {
      diameter: "31 cm",
      finish: "Expansive Low-Profile Surface with Tactile Texture Rim",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl123.jpeg",
    editorialCaption: "Expansive 31 cm plate for artisan flatbreads, whole fish, and sharing dishes."
  },
  {
    id: "asmr-pl-124",
    code: "ASMR-PL-124",
    name: "Deep Plate 27 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "27 cm",
    specs: {
      diameter: "27 cm",
      finish: "Deep Cavity with Sculptural Wide Border",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl124.jpeg",
    editorialCaption: "Deep dining plate designed to keep aromatic sauces and broths centered."
  },
  {
    id: "asmr-pl-132",
    code: "ASMR-PL-132",
    name: "Sculpted Flat Plate 28 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "28 cm",
    specs: {
      diameter: "28 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl132.jpeg",
    editorialCaption: "Clean flat canvas with tactile relief rim."
  },
  {
    id: "asmr-pl-133",
    code: "ASMR-PL-133",
    name: "Sculpted Flat Plate 24 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "24 cm",
    specs: {
      diameter: "24 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl133.jpeg",
    editorialCaption: "Medium course flat plate for modern presentations."
  },
  {
    id: "asmr-pl-134",
    code: "ASMR-PL-134",
    name: "Sculpted Flat Plate 18 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "18 cm",
    specs: {
      diameter: "18 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl134.jpeg",
    editorialCaption: "Bread and side plate with tactile border."
  },
  {
    id: "asmr-pl-201",
    code: "ASMR-PL-201",
    name: "Charger Plate 30 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "30 cm",
    specs: {
      diameter: "30 cm",
      finish: "Full Surface Tactile Relief",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl118.jpeg",
    editorialCaption: "Commanding 30 cm charger plate establishing table architecture."
  },
  {
    id: "asmr-pl-202",
    code: "ASMR-PL-202",
    name: "Plate 27 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "27 cm",
    specs: {
      diameter: "27 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl102.jpeg",
    editorialCaption: "Primary main dinner plate with organic tactile surface."
  },
  {
    id: "asmr-pl-203",
    code: "ASMR-PL-203",
    name: "Large Plate 23 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "23 cm",
    specs: {
      diameter: "23 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl107.jpeg",
    editorialCaption: "Medium course plate for intermediate courses."
  },
  {
    id: "asmr-pl-204",
    code: "ASMR-PL-204",
    name: "Side Plate 16 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "16 cm",
    specs: {
      diameter: "16 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl134.jpeg",
    editorialCaption: "Petite side and butter plate."
  },
  {
    id: "asmr-pl-211",
    code: "ASMR-PL-211",
    name: "Coupe Plate 19 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "19 cm",
    specs: {
      diameter: "19 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl107.jpeg",
    editorialCaption: "19 cm coupe plate with textured lip."
  },
  {
    id: "asmr-pl-214",
    code: "ASMR-PL-214",
    name: "Coupe Plate 24 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "24 cm",
    specs: {
      diameter: "24 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrpl214.jpeg",
    editorialCaption: "Graceful 24 cm coupe plate for salads and light courses."
  },
  {
    id: "asmr-bl-201",
    code: "ASMR-BL-201",
    name: "Soup Bowl 22 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "22 cm | 450 ml",
    specs: {
      diameter: "22 cm",
      capacity: "450 ml",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrbl201.jpeg",
    editorialCaption: "450 ml soup bowl with chiseled exterior wall."
  },
  {
    id: "asmr-bl-202",
    code: "ASMR-BL-202",
    name: "Soup Bowl 18 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "18 cm | 300 ml",
    specs: {
      diameter: "18 cm",
      capacity: "300 ml",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrbl202.jpeg",
    editorialCaption: "Compact 300 ml soup and broth bowl."
  },
  {
    id: "asmr-bl-203",
    code: "ASMR-BL-203",
    name: "Pasta Bowl 24 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "24 cm | 700 ml",
    specs: {
      diameter: "24 cm",
      capacity: "700 ml",
      finish: "Tactile Exterior Fluting",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrbl203.jpeg",
    editorialCaption: "Generous 700 ml pasta bowl with textured exterior."
  },
  {
    id: "asmr-bl-204",
    code: "ASMR-BL-204",
    name: "Soup Bowl 20 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "20 cm | 500 ml",
    specs: {
      diameter: "20 cm",
      capacity: "500 ml",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrbl204.jpeg",
    editorialCaption: "500 ml all-purpose soup and ramen bowl."
  },
  {
    id: "asmr-bl-221",
    code: "ASMR-BL-221",
    name: "Coupe Bowl 20 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "20 cm | 800 ml",
    specs: {
      diameter: "20 cm",
      capacity: "800 ml",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrbl221.jpeg",
    editorialCaption: "High-capacity 800 ml coupe bowl for hearty mains and sharing dishes."
  },
  {
    id: "asmr-bl-223",
    code: "ASMR-BL-223",
    name: "Sculpted Salad Bowl 17 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "17 cm | 550 ml",
    specs: {
      diameter: "17 cm",
      capacity: "550 ml",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrbl223.jpeg",
    editorialCaption: "Individual salad and cereal bowl with tactile textured rim."
  },
  {
    id: "asmr-bl-241",
    code: "ASMR-BL-241",
    name: "Pasta Plate 24 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "24 cm | 600 ml",
    specs: {
      diameter: "24 cm",
      capacity: "600 ml",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrbl241.jpeg",
    editorialCaption: "Expansive wide-rim pasta plate designed for risotto and pasta courses."
  },
  {
    id: "asmr-bl-242",
    code: "ASMR-BL-242",
    name: "Coupe Bowl 20 cm (450 ml)",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "20 cm | 450 ml",
    specs: {
      diameter: "20 cm",
      capacity: "450 ml",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrbl242.jpeg",
    editorialCaption: "450 ml shallow coupe bowl framing delicate broth and noodle dishes."
  },
  {
    id: "asmr-cu-271",
    code: "ASMR-CU-271",
    name: "Tea Cup & Saucer 230 ml",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "cups",
    categoryLabel: "Cups & Beverage",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "230 ml",
    specs: {
      capacity: "230 ml",
      feature: "Matching Sculpted Relief Saucer",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrcu271.jpeg",
    editorialCaption: "Tactile relief textured tea cup with matching saucer."
  },
  {
    id: "asmr-cu-272",
    code: "ASMR-CU-272",
    name: "Coffee Cup & Saucer (Espresso)",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "cups",
    categoryLabel: "Cups & Beverage",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "90 ml",
    specs: {
      capacity: "90 ml",
      feature: "Matching Espresso Saucer",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrcu272.jpeg",
    editorialCaption: "Intricate 90 ml espresso cup with ergonomic handle and chiseled saucer."
  },
  {
    id: "asmr-ac-301",
    code: "ASMR-AC-301",
    name: "Sauce Dish 10 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "accessories",
    categoryLabel: "Accessories",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "10 cm",
    specs: {
      diameter: "10 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrac301.jpeg",
    editorialCaption: "10 cm tactile sauce dish for olive oil and dipping reductions."
  },
  {
    id: "asmr-ac-302",
    code: "ASMR-AC-302",
    name: "Condiment Dish 12 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "accessories",
    categoryLabel: "Accessories",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "12 cm",
    specs: {
      diameter: "12 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrac302.jpeg",
    editorialCaption: "12 cm oval condiment dish with textured rim."
  },
  {
    id: "asmr-ac-303",
    code: "ASMR-AC-303",
    name: "Rectangular Ramekin 14 × 8 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "accessories",
    categoryLabel: "Accessories",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "14 × 8 cm",
    specs: {
      dimensions: "14 x 8 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrac303.jpeg",
    editorialCaption: "Linear sculpted ramekin for warm tapas, sides, and canapés."
  },
  {
    id: "asmr-ac-304",
    code: "ASMR-AC-304",
    name: "Divided Dish 15 × 8 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "accessories",
    categoryLabel: "Accessories",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "15 × 8 cm",
    specs: {
      dimensions: "15 x 8 cm",
      feature: "Dual Divided Compartments",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrac304.jpeg",
    editorialCaption: "Dual-compartment divided dish for salt, butter and accompaniments."
  },
  {
    id: "asmr-ac-305",
    code: "ASMR-AC-305",
    name: "Trio Condiment Tray",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "accessories",
    categoryLabel: "Accessories",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "21 × 7 cm",
    specs: {
      dimensions: "21 x 7 cm",
      feature: "Three Wells",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/asmrac305.jpeg",
    editorialCaption: "Three-compartment condiment tray with sculpted texture base."
  },
  {
    id: "eov-107",
    code: "EOV-107",
    name: "Oval Platter 35 × 20 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "35 × 20 cm",
    specs: {
      dimensions: "35 x 20 cm",
      finish: "Sculpted Texture Rim Contour",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/eov107.jpeg",
    editorialCaption: "Large 35 cm oval presentation platter for whole fish and roasts."
  },
  {
    id: "eov-112",
    code: "EOV-112",
    name: "Oval Platter 30 × 17 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "30 × 17 cm",
    specs: {
      dimensions: "30 x 17 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/eov112.jpeg",
    editorialCaption: "Medium 30 cm oval platter for sharing appetizers and tableside service."
  },
  {
    id: "eov-113",
    code: "EOV-113",
    name: "Oval Platter 25 × 14 cm",
    collection: "ROKÉ",
    collectionId: "roke",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Sculpted White Texture"],
    colorHexes: ["#EAE8E4"],
    dimensions: "25 × 14 cm",
    specs: {
      dimensions: "25 x 14 cm",
      series: "Sculpted Texture Series"
    },
    image: "/assets/catalogue/asmr/eov113.jpeg",
    editorialCaption: "25 cm oval platter ideal for single-portion entrees and sashimi."
  },

  // =========================================================================
  // --- 04. TERRA SPECKLE (ARTISAN EARTH SERIES) ---
  // =========================================================================
  {
    id: "assb5101",
    code: "ASSB5101",
    name: "Terra Speckle Plate 20 cm",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "20 cm",
    specs: {
      diameter: "20 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "Side and starter plate with organic mineral speckles."
  },
  {
    id: "assb5103",
    code: "ASSB5103",
    name: "Terra Speckle Dinner Plate 27 cm",
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
    id: "assb5105",
    code: "ASSB5105",
    name: "Terra Speckle Pasta Plate 27 cm",
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
    id: "assb5112",
    code: "ASSB5112",
    name: "Terra Speckle Edge Plate 20.5 cm",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "20.5 cm",
    specs: {
      diameter: "20.5 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "Vertical rim edge plate with warm contrast lip."
  },
  {
    id: "assb5114",
    code: "ASSB5114",
    name: "Terra Speckle Edge Plate 25.5 cm",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "25.5 cm",
    specs: {
      diameter: "25.5 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "Architectural 25.5 cm straight-sided dining plate."
  },
  {
    id: "assb5141",
    code: "ASSB5141",
    name: "Terra Speckle Elipse Plate 18 cm",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "18 cm",
    specs: {
      dimensions: "18 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "Soft elliptical silhouette side plate."
  },
  {
    id: "assb5142",
    code: "ASSB5142",
    name: "Terra Speckle Elipse Plate 23 cm",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "23 cm",
    specs: {
      dimensions: "23 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "23 cm organic elliptical plate."
  },
  {
    id: "assb5143",
    code: "ASSB5143",
    name: "Terra Speckle Elipse Plate 28 cm",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "28 cm",
    specs: {
      dimensions: "28 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "28 cm statement elliptical main dinner plate."
  },
  {
    id: "assb5121",
    code: "ASSB5121",
    name: "Terra Speckle Footed Bowl 14.5 cm",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "14.5 cm | 550 ml",
    specs: {
      diameter: "14.5 cm",
      capacity: "550 ml",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "550 ml footed artisanal bowl."
  },
  {
    id: "assb5122",
    code: "ASSB5122",
    name: "Terra Speckle Footed Bowl 15 cm",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "15 cm | 850 ml",
    specs: {
      diameter: "15 cm",
      capacity: "850 ml",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "850 ml large footed soup and noodle bowl."
  },
  {
    id: "assb5123",
    code: "ASSB5123",
    name: "Terra Speckle 'V' Bowl 16 cm",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "16 cm",
    specs: {
      diameter: "16 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "Tapered conical V-profile hospitality bowl."
  },
  {
    id: "assb5109",
    code: "ASSB5109",
    name: "Terra Speckle Deep Coupe 22.5 cm",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "22.5 cm",
    specs: {
      diameter: "22.5 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "Deep coupe with elevated curving rim."
  },
  {
    id: "assb5171",
    code: "ASSB5171",
    name: "Terra Speckle Banquet Bowl 22 cm",
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
    id: "assb5172",
    code: "ASSB5172",
    name: "Terra Speckle Banquet Bowl 29.5 cm",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "29.5 cm",
    specs: {
      diameter: "29.5 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-2.png",
    editorialCaption: "Expansive 29.5 cm centerpiece sharing bowl."
  },
  {
    id: "assb5132",
    code: "ASSB5132",
    name: "Terra Speckle Barista Cup 250 ml",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "cups",
    categoryLabel: "Cups & Beverage",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "250 ml (Saucer 16 cm)",
    specs: {
      capacity: "250 ml",
      saucer: "ASSB5133 16 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "Artisanal specialty coffee cup with warm tactile glaze."
  },
  {
    id: "assb5136",
    code: "ASSB5136",
    name: "Terra Speckle Expresso Cup 110 ml",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "cups",
    categoryLabel: "Cups & Beverage",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "110 ml (Saucer 12.5 cm)",
    specs: {
      capacity: "110 ml",
      saucer: "ASSB5137 12.5 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "110 ml espresso cup with organic speckled finish."
  },
  {
    id: "assb5131",
    code: "ASSB5131",
    name: "Terra Speckle Barrel Mug 350 ml",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "cups",
    categoryLabel: "Cups & Beverage",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "350 ml",
    specs: {
      capacity: "350 ml",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "350 ml comfort barrel mug."
  },
  {
    id: "assb5135",
    code: "ASSB5135",
    name: "Terra Speckle Tea Pot 685 ml",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "cups",
    categoryLabel: "Cups & Beverage",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "685 ml",
    specs: {
      capacity: "685 ml",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-1.png",
    editorialCaption: "Artisanal ceramic teapot with precision spout."
  },
  {
    id: "assb5151",
    code: "ASSB5151",
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
  {
    id: "assb5152",
    code: "ASSB5152",
    name: "Terra Speckle Rectangular Platter Large",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "39 x 21 cm",
    specs: {
      dimensions: "39 x 21 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-2.png",
    editorialCaption: "39 cm large sharing platter."
  },
  {
    id: "assb5155",
    code: "ASSB5155",
    name: "Terra Speckle Fluid Platter 27 × 11 cm",
    collection: "TERRA SPECKLE",
    collectionId: "terra-speckle",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Speckled Brown"],
    colorHexes: ["#C2B29D"],
    dimensions: "27 × 11 cm",
    specs: {
      dimensions: "27 x 11 cm",
      series: "Artisan Earth Series"
    },
    image: "/assets/catalogue/terra-speckle-product-range-2.png",
    editorialCaption: "Narrow fluid platter for sushi, canapés and tasting courses."
  },

  // =========================================================================
  // --- 05. URBANE GREY (CURATED HOSPITALITY) ---
  // =========================================================================
  {
    id: "asug5103",
    code: "ASUG5103",
    name: "Urbane Grey Dinner Plate 27 cm",
    collection: "URBANE GREY",
    collectionId: "urbane-grey",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Mineral Slate Grey"],
    colorHexes: ["#8C9298"],
    dimensions: "27 cm",
    specs: {
      diameter: "27 cm",
      finish: "Mineral Slate Satin Matt Glaze",
      collection: "Curated Hospitality Collection"
    },
    image: "/assets/catalogue/urbane-grey-editorial.jpg",
    editorialCaption: "Slate mineral grey body emphasizing contrast and artisanal cuisine."
  },
  {
    id: "asug5101",
    code: "ASUG5101",
    name: "Urbane Grey Plate 20 cm",
    collection: "URBANE GREY",
    collectionId: "urbane-grey",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Mineral Slate Grey"],
    colorHexes: ["#8C9298"],
    dimensions: "20 cm",
    specs: {
      diameter: "20 cm",
      collection: "Curated Hospitality Collection"
    },
    image: "/assets/catalogue/urbane-grey-range-1.jpg",
    editorialCaption: "20 cm side plate in slate grey."
  },
  {
    id: "asug5105",
    code: "ASUG5105",
    name: "Urbane Grey Pasta Plate 27 cm",
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
    image: "/Creamy Mushroom Pasta in Urban Grey.png",
    editorialCaption: "Expansive rim pasta plate framing rich culinary dishes."
  },
  {
    id: "asug5151",
    code: "ASUG5151",
    name: "Urbane Grey Rectangular Platter",
    collection: "URBANE GREY",
    collectionId: "urbane-grey",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Mineral Slate Grey"],
    colorHexes: ["#8C9298"],
    dimensions: "29 x 15 cm",
    specs: {
      dimensions: "29 x 15 cm",
      collection: "Curated Hospitality Collection"
    },
    image: "/assets/catalogue/urbane-grey-range-2.jpg",
    editorialCaption: "Sleek slate rectangular platter."
  },
  {
    id: "asug5132",
    code: "ASUG5132",
    name: "Urbane Grey Barista Cup 250 ml",
    collection: "URBANE GREY",
    collectionId: "urbane-grey",
    category: "cups",
    categoryLabel: "Cups & Beverage",
    colors: ["Mineral Slate Grey"],
    colorHexes: ["#8C9298"],
    dimensions: "250 ml",
    specs: {
      capacity: "250 ml",
      collection: "Curated Hospitality Collection"
    },
    image: "/assets/catalogue/urbane-grey-range-1.jpg",
    editorialCaption: "250 ml cappuccino cup with slate matte finish."
  },

  // =========================================================================
  // --- 06. PARADISE PINK (CURATED HOSPITALITY) ---
  // =========================================================================
  {
    id: "aspp5103",
    code: "ASPP5103",
    name: "Paradise Pink Dinner Plate 27 cm",
    collection: "PARADISE PINK",
    collectionId: "paradise-pink",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Soft Rose Earth"],
    colorHexes: ["#CBA39C"],
    dimensions: "27 cm",
    specs: {
      diameter: "27 cm",
      finish: "Soft Rose Earth Matt Glaze with Contrast Rim",
      collection: "Curated Hospitality Collection"
    },
    image: "/assets/catalogue/paradise-pink-editorial.jpg",
    editorialCaption: "Soft blush glaze with rim character, designed for modern dining venues."
  },
  {
    id: "aspp5101",
    code: "ASPP5101",
    name: "Paradise Pink Plate 20 cm",
    collection: "PARADISE PINK",
    collectionId: "paradise-pink",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Soft Rose Earth"],
    colorHexes: ["#CBA39C"],
    dimensions: "20 cm",
    specs: {
      diameter: "20 cm",
      collection: "Curated Hospitality Collection"
    },
    image: "/assets/catalogue/paradise-pink-range-1.jpg",
    editorialCaption: "20 cm side plate in soft rose blush."
  },
  {
    id: "aspp5105",
    code: "ASPP5105",
    name: "Paradise Pink Pasta Plate 27 cm",
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
    image: "/assets/catalogue/paradise-pink-lifestyle.jpg",
    editorialCaption: "Pastel rose pasta plate with organic border."
  },
  {
    id: "aspp5151",
    code: "ASPP5151",
    name: "Paradise Pink Rectangular Platter",
    collection: "PARADISE PINK",
    collectionId: "paradise-pink",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Soft Rose Earth"],
    colorHexes: ["#CBA39C"],
    dimensions: "29 x 15 cm",
    specs: {
      dimensions: "29 x 15 cm",
      collection: "Curated Hospitality Collection"
    },
    image: "/assets/catalogue/paradise-pink-range-2.jpg",
    editorialCaption: "Blush platter for pastries, canapés and sharing drops."
  },

  // =========================================================================
  // --- 07. AQUA BLUE (CURATED HOSPITALITY) ---
  // =========================================================================
  {
    id: "asab5103",
    code: "ASAB5103",
    name: "Aqua Blue Dinner Plate 27 cm",
    collection: "AQUA BLUE",
    collectionId: "aqua-blue",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Mediterranean Aqua"],
    colorHexes: ["#79B1B8"],
    dimensions: "27 cm",
    specs: {
      diameter: "27 cm",
      finish: "Luminous Coastal Turquoise Glaze",
      collection: "Curated Hospitality Collection"
    },
    image: "/assets/catalogue/aqua-blue-editorial.jpg",
    editorialCaption: "Luminous coastal aqua tone bringing seaside vibrancy to the table."
  },
  {
    id: "asab5101",
    code: "ASAB5101",
    name: "Aqua Blue Plate 20 cm",
    collection: "AQUA BLUE",
    collectionId: "aqua-blue",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Mediterranean Aqua"],
    colorHexes: ["#79B1B8"],
    dimensions: "20 cm",
    specs: {
      diameter: "20 cm",
      collection: "Curated Hospitality Collection"
    },
    image: "/assets/catalogue/aqua-blue-range-1.jpg",
    editorialCaption: "20 cm appetizer plate in Mediterranean aqua."
  },
  {
    id: "asab5105",
    code: "ASAB5105",
    name: "Aqua Blue Pasta Plate 27 cm",
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
    image: "/assets/catalogue/aqua-blue-lifestyle.jpg",
    editorialCaption: "Turquoise pasta plate illuminating fresh seafood and crudo."
  },
  {
    id: "asab5151",
    code: "ASAB5151",
    name: "Aqua Blue Rectangular Platter",
    collection: "AQUA BLUE",
    collectionId: "aqua-blue",
    category: "platters",
    categoryLabel: "Platters & Serving",
    colors: ["Mediterranean Aqua"],
    colorHexes: ["#79B1B8"],
    dimensions: "29 x 15 cm",
    specs: {
      dimensions: "29 x 15 cm",
      collection: "Curated Hospitality Collection"
    },
    image: "/assets/catalogue/aqua-blue-range-2.jpg",
    editorialCaption: "Vibrant aqua serving platter for crudo, sashimi, and poolside dining."
  },

  // =========================================================================
  // --- 08. ESSENTIAL WHITE (CORE COMMERCIAL TABLEWARE) ---
  // =========================================================================
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
    id: "sn1106",
    code: "SN1106",
    name: "Essential Coupe Plate 10\"",
    collection: "ESSENTIAL WHITE",
    collectionId: "essential-white",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Pure Hotel White"],
    colorHexes: ["#F5F5F3"],
    dimensions: "10\" (25.5 cm)",
    specs: {
      size: "10 inch Coupe",
      range: "Core Tableware"
    },
    image: "/assets/catalogue/essential-white-plates-range.png",
    editorialCaption: "Standard banquet dinner plate."
  },
  {
    id: "sn1102",
    code: "SN1102",
    name: "Essential Coupe Plate 9\"",
    collection: "ESSENTIAL WHITE",
    collectionId: "essential-white",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Pure Hotel White"],
    colorHexes: ["#F5F5F3"],
    dimensions: "9\" (23 cm)",
    specs: {
      size: "9 inch Coupe",
      range: "Core Tableware"
    },
    image: "/assets/catalogue/essential-white-plates-range.png",
    editorialCaption: "Lunch and salad coupe plate."
  },
  {
    id: "sn1101",
    code: "SN1101",
    name: "Essential Coupe Plate 7\"",
    collection: "ESSENTIAL WHITE",
    collectionId: "essential-white",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Pure Hotel White"],
    colorHexes: ["#F5F5F3"],
    dimensions: "7\" (18 cm)",
    specs: {
      size: "7 inch Coupe",
      range: "Core Tableware"
    },
    image: "/assets/catalogue/essential-white-plates-range.png",
    editorialCaption: "Side and bread coupe plate."
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
    id: "sn1218",
    code: "SN1218",
    name: "Essential Georgian Plate 10\"",
    collection: "ESSENTIAL WHITE",
    collectionId: "essential-white",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Pure Hotel White"],
    colorHexes: ["#F5F5F3"],
    dimensions: "10\" (25.5 cm)",
    specs: {
      size: "10 inch Georgian Rim",
      range: "Core Tableware"
    },
    image: "/assets/catalogue/essential-white-plates-range.png",
    editorialCaption: "Traditional hotel banquet plate with Georgian rim."
  },
  {
    id: "sn1326",
    code: "SN1326",
    name: "Essential Edge Plate Big 27 cm",
    collection: "ESSENTIAL WHITE",
    collectionId: "essential-white",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Pure Hotel White"],
    colorHexes: ["#F5F5F3"],
    dimensions: "27 cm",
    specs: {
      diameter: "27 cm",
      range: "Core Tableware"
    },
    image: "/assets/catalogue/essential-white-plates-range.png",
    editorialCaption: "Modern vertical edge plate in vitrified white porcelain."
  },
  {
    id: "sn1325",
    code: "SN1325",
    name: "Essential Edge Plate Small 19 cm",
    collection: "ESSENTIAL WHITE",
    collectionId: "essential-white",
    category: "plates",
    categoryLabel: "Plates",
    colors: ["Pure Hotel White"],
    colorHexes: ["#F5F5F3"],
    dimensions: "19 cm",
    specs: {
      diameter: "19 cm",
      range: "Core Tableware"
    },
    image: "/assets/catalogue/essential-white-plates-range.png",
    editorialCaption: "19 cm vertical rim edge side plate."
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
    name: "Essential Footed Bowl 6\"",
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
    id: "sn1551",
    code: "SN1551",
    name: "Essential Nappy Bowl 6.25\"",
    collection: "ESSENTIAL WHITE",
    collectionId: "essential-white",
    category: "bowls",
    categoryLabel: "Bowls",
    colors: ["Pure Hotel White"],
    colorHexes: ["#F5F5F3"],
    dimensions: "6.25\" | 500 ml",
    specs: {
      diameter: "6.25 inch",
      capacity: "500 ml",
      range: "Bowls & Accessories"
    },
    image: "/assets/catalogue/essential-white-bowls-range.png",
    editorialCaption: "High-capacity commercial nappy bowl."
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
    name: "Essential Rectangular Platter 12\"",
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
    name: "Essential Lotus Platter 12\"",
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
