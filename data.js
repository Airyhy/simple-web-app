function createMaterialImage(label) {
  const safeLabel = label.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="420">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#f5e6cf" />
          <stop offset="100%" stop-color="#e0c7a2" />
        </linearGradient>
      </defs>
      <rect width="600" height="420" fill="url(#bg)" />
      <rect x="40" y="40" width="520" height="340" rx="26" fill="rgba(255,255,255,0.55)" />
      <text x="300" y="220" font-size="38" text-anchor="middle" fill="#5a4a3a" font-family="Arial, sans-serif">
        ${safeLabel}
      </text>
    </svg>
  `.trim();
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const MATERIALS = [
  {
    id: "tofu-soft",
    nameCn: "嫩豆腐",
    nameEn: "Soft tofu",
    store: "Whole Foods",
    price: 3.49,
    image: createMaterialImage("Soft tofu")
  },
  {
    id: "ground-pork",
    nameCn: "猪肉末",
    nameEn: "Ground pork",
    store: "Whole Foods",
    price: 6.99,
    image: createMaterialImage("Ground pork")
  },
  {
    id: "scallion",
    nameCn: "青葱",
    nameEn: "Scallions",
    store: "Whole Foods",
    price: 1.49,
    image: createMaterialImage("Scallions")
  },
  {
    id: "garlic",
    nameCn: "蒜头",
    nameEn: "Garlic bulbs",
    store: "Whole Foods",
    price: 0.99,
    image: createMaterialImage("Garlic")
  },
  {
    id: "ginger",
    nameCn: "生姜",
    nameEn: "Fresh ginger",
    store: "Whole Foods",
    price: 1.29,
    image: createMaterialImage("Ginger")
  },
  {
    id: "chicken-thighs",
    nameCn: "鸡腿肉去骨",
    nameEn: "Boneless chicken thighs",
    store: "Whole Foods",
    price: 8.99,
    image: createMaterialImage("Chicken thighs")
  },
  {
    id: "eggs",
    nameCn: "鸡蛋",
    nameEn: "Eggs",
    store: "Whole Foods",
    price: 4.99,
    image: createMaterialImage("Eggs")
  },
  {
    id: "roma-tomato",
    nameCn: "番茄",
    nameEn: "Roma tomatoes",
    store: "Whole Foods",
    price: 3.59,
    image: createMaterialImage("Tomatoes")
  },
  {
    id: "ground-beef",
    nameCn: "牛肉馅",
    nameEn: "Ground beef",
    store: "Whole Foods",
    price: 7.99,
    image: createMaterialImage("Ground beef")
  },
  {
    id: "parsley",
    nameCn: "欧芹",
    nameEn: "Fresh parsley",
    store: "Whole Foods",
    price: 1.79,
    image: createMaterialImage("Parsley")
  },
  {
    id: "chicken-breast",
    nameCn: "鸡胸肉",
    nameEn: "Chicken breasts",
    store: "Whole Foods",
    price: 9.49,
    image: createMaterialImage("Chicken breast")
  },
  {
    id: "butter",
    nameCn: "黄油",
    nameEn: "Butter",
    store: "Whole Foods",
    price: 4.29,
    image: createMaterialImage("Butter")
  },
  {
    id: "lemon",
    nameCn: "柠檬",
    nameEn: "Lemon",
    store: "Whole Foods",
    price: 0.89,
    image: createMaterialImage("Lemon")
  },
  {
    id: "cornstarch",
    nameCn: "玉米淀粉",
    nameEn: "Cornstarch",
    store: "Costco",
    price: 6.49,
    image: createMaterialImage("Cornstarch")
  },
  {
    id: "chicken-broth",
    nameCn: "鸡汤",
    nameEn: "Chicken broth carton",
    store: "Costco",
    price: 8.99,
    image: createMaterialImage("Chicken broth")
  },
  {
    id: "canola-oil",
    nameCn: "菜籽油",
    nameEn: "Canola oil",
    store: "Costco",
    price: 12.99,
    image: createMaterialImage("Canola oil")
  },
  {
    id: "roasted-peanuts",
    nameCn: "烤花生",
    nameEn: "Roasted peanuts",
    store: "Costco",
    price: 9.49,
    image: createMaterialImage("Peanuts")
  },
  {
    id: "soy-sauce",
    nameCn: "酱油",
    nameEn: "Soy sauce",
    store: "Costco",
    price: 7.49,
    image: createMaterialImage("Soy sauce")
  },
  {
    id: "sugar",
    nameCn: "白砂糖",
    nameEn: "Granulated sugar",
    store: "Costco",
    price: 4.99,
    image: createMaterialImage("Sugar")
  },
  {
    id: "tomato-paste",
    nameCn: "番茄膏",
    nameEn: "Tomato paste",
    store: "Costco",
    price: 6.99,
    image: createMaterialImage("Tomato paste")
  },
  {
    id: "breadcrumbs",
    nameCn: "面包糠",
    nameEn: "Breadcrumbs",
    store: "Costco",
    price: 5.49,
    image: createMaterialImage("Breadcrumbs")
  },
  {
    id: "olive-oil",
    nameCn: "橄榄油",
    nameEn: "Olive oil",
    store: "Costco",
    price: 15.99,
    image: createMaterialImage("Olive oil")
  },
  {
    id: "paprika",
    nameCn: "红椒粉",
    nameEn: "Paprika",
    store: "Costco",
    price: 5.99,
    image: createMaterialImage("Paprika")
  },
  {
    id: "black-pepper",
    nameCn: "黑胡椒",
    nameEn: "Black pepper",
    store: "Costco",
    price: 6.99,
    image: createMaterialImage("Black pepper")
  },
  {
    id: "doubanjiang",
    nameCn: "郫县豆瓣酱",
    nameEn: "Doubanjiang",
    store: "Ranch99",
    price: 3.99,
    image: createMaterialImage("Doubanjiang")
  },
  {
    id: "sichuan-pepper",
    nameCn: "花椒",
    nameEn: "Sichuan peppercorns",
    store: "Ranch99",
    price: 4.59,
    image: createMaterialImage("Sichuan pepper")
  },
  {
    id: "chili-oil",
    nameCn: "红油",
    nameEn: "Chili oil",
    store: "Ranch99",
    price: 5.99,
    image: createMaterialImage("Chili oil")
  },
  {
    id: "dried-chilies",
    nameCn: "干辣椒",
    nameEn: "Dried chilies",
    store: "Ranch99",
    price: 2.99,
    image: createMaterialImage("Dried chilies")
  },
  {
    id: "black-vinegar",
    nameCn: "陈醋",
    nameEn: "Chinese black vinegar",
    store: "Ranch99",
    price: 3.79,
    image: createMaterialImage("Black vinegar")
  },
  {
    id: "shaoxing",
    nameCn: "绍兴料酒",
    nameEn: "Shaoxing rice wine",
    store: "Ranch99",
    price: 4.49,
    image: createMaterialImage("Shaoxing wine")
  },
  {
    id: "white-pepper",
    nameCn: "白胡椒粉",
    nameEn: "White pepper",
    store: "Ranch99",
    price: 3.59,
    image: createMaterialImage("White pepper")
  },
  {
    id: "light-soy",
    nameCn: "生抽",
    nameEn: "Light soy sauce",
    store: "Ranch99",
    price: 2.99,
    image: createMaterialImage("Light soy sauce")
  },
  {
    id: "oregano",
    nameCn: "牛至",
    nameEn: "Dried oregano",
    store: "Ranch99",
    price: 2.49,
    image: createMaterialImage("Oregano")
  },
  {
    id: "chili-flakes",
    nameCn: "辣椒碎",
    nameEn: "Chili flakes",
    store: "Ranch99",
    price: 2.49,
    image: createMaterialImage("Chili flakes")
  },
  {
    id: "sea-salt",
    nameCn: "海盐",
    nameEn: "Sea salt",
    store: "Ranch99",
    price: 1.99,
    image: createMaterialImage("Sea salt")
  },
  {
    id: "thyme",
    nameCn: "百里香",
    nameEn: "Dried thyme",
    store: "Ranch99",
    price: 2.59,
    image: createMaterialImage("Thyme")
  }
];

const DISHES = [
  {
    name: "麻婆豆腐 (Mapo Tofu)",
    image: "assets/mapo-tofu.jpg",
    tagline: "麻辣豆腐配猪肉末与花椒 / Spicy tofu with pork and Sichuan pepper.",
    steps: {
      preparation: [
        "切1英寸豆腐块，入加盐沸水焯1分钟沥干 / Dice tofu into 1-inch cubes; blanch in salted water for 1 minute, then drain.",
        "蒜、姜、葱切末备好 / Mince garlic, ginger, and scallion."
      ],
      main: [
        "热油下蒜、姜、葱炒香，加入豆瓣酱炒出红油 / Sauté aromatics; stir in doubanjiang until the oil turns red.",
        "加入猪肉末炒散至变色 / Add ground pork and cook until browned."
      ],
      side: [
        "倒入高汤，下豆腐小火烧5分钟入味 / Pour in broth, add tofu, and simmer gently for 5 minutes."
      ],
      seasoning: [
        "用水淀粉勾芡，撒花椒粉并淋红油 / Thicken with cornstarch slurry; finish with Sichuan pepper and chili oil."
      ]
    },
    materialIds: [
      "tofu-soft",
      "ground-pork",
      "scallion",
      "garlic",
      "ginger",
      "cornstarch",
      "chicken-broth",
      "canola-oil",
      "doubanjiang",
      "sichuan-pepper",
      "chili-oil"
    ]
  },
  {
    name: "宫保鸡丁 (Kung Pao Chicken)",
    image: "assets/kung-pao-chicken.jpg",
    tagline: "花生辣椒香炒鸡丁 / Kung pao chicken with peanuts and chilies.",
    steps: {
      preparation: [
        "鸡丁用生抽、绍兴酒、淀粉腌制15分钟 / Marinate chicken with soy sauce, Shaoxing wine, and cornstarch for 15 minutes.",
        "花生、干辣椒备用 / Prepare peanuts and dried chilies."
      ],
      main: [
        "大火滑炒鸡丁至变色微焦，盛出 / Stir-fry chicken on high heat until browned; remove from pan."
      ],
      side: [
        "干锅略炒花生与干辣椒，盛出备用 / Toast peanuts and dried chilies briefly; set aside."
      ],
      seasoning: [
        "炒香蒜、姜、葱，加入调味汁收至发亮 / Cook garlic, ginger, and scallion; add sauce and reduce until glossy.",
        "回锅鸡丁与花生快速翻匀 / Return chicken and peanuts; toss quickly to coat."
      ]
    },
    materialIds: [
      "chicken-thighs",
      "garlic",
      "scallion",
      "roasted-peanuts",
      "soy-sauce",
      "cornstarch",
      "dried-chilies",
      "black-vinegar",
      "shaoxing"
    ]
  },
  {
    name: "番茄炒蛋 (Tomato Egg Stir-Fry)",
    image: "assets/tomato-egg.jpg",
    tagline: "家常番茄炒蛋 / Classic tomato egg stir-fry.",
    steps: {
      preparation: [
        "鸡蛋加少许盐与清水打散 / Beat eggs with a pinch of salt and a splash of water.",
        "番茄切块，葱切末 / Chop tomatoes and scallions."
      ],
      main: [
        "中火炒鸡蛋至刚凝固，盛出 / Scramble eggs over medium heat until just set; remove."
      ],
      side: [
        "番茄加少许盐和糖炒至出汁 / Cook tomatoes with a pinch of salt and sugar until saucy."
      ],
      seasoning: [
        "回锅鸡蛋轻轻翻拌 / Return eggs and gently fold to combine.",
        "撒葱花，滴少许香油 / Finish with scallions and a drizzle of sesame oil."
      ]
    },
    materialIds: [
      "eggs",
      "roma-tomato",
      "scallion",
      "canola-oil",
      "sugar",
      "white-pepper",
      "light-soy"
    ]
  },
  {
    name: "肉丸酱 (Meatball Paste)",
    image: "assets/meatballs.jpg",
    tagline: "番茄酱汁慢炖肉丸 / Savory meatballs simmered in tomato paste.",
    steps: {
      preparation: [
        "肉馅与面包糠、鸡蛋、洋葱、蒜末、盐胡椒拌匀 / Combine ground meat with breadcrumbs, egg, onion, garlic, salt, and pepper.",
        "搓成约1英寸肉丸，冷藏10分钟定型 / Form 1-inch meatballs; chill 10 minutes to set."
      ],
      main: [
        "热油煎至表面金黄 / Sear in hot oil until browned on all sides."
      ],
      side: [
        "番茄膏用高汤稀释备用 / Dilute tomato paste with broth for a simmering sauce."
      ],
      seasoning: [
        "加入番茄汁小火焖12-15分钟 / Simmer in tomato sauce for 12-15 minutes.",
        "撒香草并调味收尾 / Finish with herbs and adjust seasoning."
      ]
    },
    materialIds: [
      "ground-beef",
      "eggs",
      "parsley",
      "garlic",
      "tomato-paste",
      "breadcrumbs",
      "olive-oil",
      "oregano",
      "chili-flakes"
    ]
  },
  {
    name: "香煎鸡胸 (Pan-Fried Chicken Breast)",
    image: "assets/pan-fried-chicken-breast.jpg",
    tagline: "金黄外皮多汁鸡胸 / Juicy chicken with a golden crust.",
    steps: {
      preparation: [
        "擦干水分，敲至约1/2英寸厚 / Pat chicken dry and pound to about 1/2-inch thickness.",
        "两面撒盐、黑胡椒和红椒粉 / Season both sides with salt, pepper, and paprika."
      ],
      main: [
        "热油每面煎3-4分钟至金黄 / Sear in hot oil 3-4 minutes per side until golden."
      ],
      side: [
        "黄油与蒜片备用 / Prepare butter and sliced garlic for basting."
      ],
      seasoning: [
        "转小火加黄油蒜片，煎至中心165°F / Lower heat, add butter and garlic; cook to 165°F internal temp.",
        "静置5分钟再切片 / Rest 5 minutes before slicing."
      ]
    },
    materialIds: [
      "chicken-breast",
      "butter",
      "garlic",
      "lemon",
      "canola-oil",
      "paprika",
      "black-pepper",
      "sea-salt",
      "thyme"
    ]
  }
];

window.DATA = {
  MATERIALS,
  DISHES
};
