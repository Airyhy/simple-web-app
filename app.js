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
    materials: {
      "Whole Foods": [
        "五花肉/猪肉末 Ground pork (1 lb)",
        "蒜头 Garlic bulbs",
        "生姜 Fresh ginger",
        "青葱 Scallions",
        "嫩豆腐 Soft tofu (2 blocks)"
      ],
      Costco: [
        "玉米淀粉 Cornstarch",
        "鸡汤 Chicken broth carton",
        "菜籽油 Canola oil"
      ],
      Ranch99: [
        "郫县豆瓣酱 Doubanjiang (spicy bean paste)",
        "花椒 Sichuan peppercorns",
        "红油 Chili oil"
      ]
    }
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
    materials: {
      "Whole Foods": [
        "鸡腿肉去骨 Boneless chicken thighs (2 lb)",
        "蒜头 Garlic bulbs",
        "青葱 Scallions"
      ],
      Costco: [
        "烤花生 Roasted peanuts",
        "酱油 Soy sauce",
        "玉米淀粉 Cornstarch"
      ],
      Ranch99: [
        "干辣椒 Dried chilies",
        "陈醋 Chinese black vinegar",
        "绍兴料酒 Shaoxing rice wine"
      ]
    }
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
    materials: {
      "Whole Foods": [
        "鸡蛋 Eggs (6)",
        "番茄 Roma tomatoes (4)",
        "青葱 Scallions"
      ],
      Costco: [
        "菜籽油 Canola oil",
        "白砂糖 Granulated sugar"
      ],
      Ranch99: [
        "白胡椒粉 White pepper",
        "生抽 Light soy sauce"
      ]
    }
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
    materials: {
      "Whole Foods": [
        "牛肉馅 Ground beef (1.5 lb)",
        "鸡蛋 Egg (1)",
        "欧芹 Fresh parsley",
        "蒜头 Garlic bulbs"
      ],
      Costco: [
        "番茄膏 Tomato paste",
        "面包糠 Breadcrumbs",
        "橄榄油 Olive oil"
      ],
      Ranch99: [
        "牛至 Dried oregano",
        "辣椒碎 Chili flakes"
      ]
    }
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
    materials: {
      "Whole Foods": [
        "鸡胸肉 Chicken breasts (2)",
        "黄油 Butter",
        "蒜头 Garlic bulbs",
        "柠檬 Lemon"
      ],
      Costco: [
        "菜籽油 Canola oil",
        "红椒粉 Paprika",
        "黑胡椒 Black pepper"
      ],
      Ranch99: [
        "海盐 Sea salt",
        "百里香 Dried thyme"
      ]
    }
  }
];

const dishGallery = document.getElementById("dish-gallery");
const addDishButton = document.getElementById("add-dish");
const stepsList = document.getElementById("dish-steps");
const materialsGrid = document.getElementById("dish-materials");
const selectedDishesList = document.getElementById("selected-dishes");
const combinedMaterialsGrid = document.getElementById("combined-materials");
const generateListButton = document.getElementById("generate-list");
const clearDinnerButton = document.getElementById("clear-dinner");

const dinnerSelection = [];
let activeDish = null;

function createFallbackImage(label) {
  const safeLabel = label.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#f6b365" />
          <stop offset="100%" stop-color="#fda085" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#bg)" />
      <rect x="40" y="40" width="720" height="420" rx="30" fill="rgba(255,255,255,0.2)" />
      <text x="400" y="260" font-size="48" text-anchor="middle" fill="#1f2430" font-family="Arial, sans-serif">
        ${safeLabel}
      </text>
      <text x="400" y="320" font-size="22" text-anchor="middle" fill="#1f2430" font-family="Arial, sans-serif">
        Photo unavailable
      </text>
    </svg>
  `.trim();
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function renderDishCards() {
  dishGallery.innerHTML = DISHES.map(
    (dish) => `
      <article class="dish-card" data-dish="${dish.name}">
        <img src="${dish.image}" alt="${dish.name}" loading="lazy" />
        <div class="dish-card-body">
          <h3>${dish.name}</h3>
          <p>${dish.tagline}</p>
        </div>
      </article>
    `
  ).join("");

  dishGallery.querySelectorAll(".dish-card img").forEach((img) => {
    img.addEventListener("error", () => {
      const card = img.closest(".dish-card");
      if (!card) return;
      const dishName = card.dataset.dish || "Dish";
      img.src = createFallbackImage(dishName);
    });
  });

  dishGallery.querySelectorAll(".dish-card").forEach((card) => {
    card.addEventListener("click", () => {
      const dishName = card.dataset.dish;
      const selectedDish = findDishByName(dishName);
      if (!selectedDish) return;
      activeDish = selectedDish;
      updateActiveCard();
      renderSteps(selectedDish.steps);
      renderMaterials(materialsGrid, selectedDish.materials);
    });
  });
}

const STEP_TITLES = {
  preparation: "0. Preparation beforehand / 事前准备",
  main: "1. Main part / 主菜制作",
  side: "2. Side part / 配菜处理",
  seasoning: "3. Seasoning and sauce / 调味与酱汁"
};

const STORE_LABELS = {
  "Whole Foods": "Whole Foods / 全食超市",
  Costco: "Costco / 好市多",
  Ranch99: "Ranch 99 / 大华超市"
};

function renderSteps(steps) {
  const sections = Object.entries(STEP_TITLES)
    .map(([key, title]) => {
      const items = steps[key] || [];
      if (items.length === 0) return "";
      const list = items.map((step) => `<li>${step}</li>`).join("");
      return `
        <section class="steps-section">
          <h3>${title}</h3>
          <ol>${list}</ol>
        </section>
      `;
    })
    .join("");

  stepsList.innerHTML = sections;
}

function renderMaterials(targetElement, materials) {
  targetElement.innerHTML = Object.entries(materials)
    .map(([store, items]) => {
      const storeLabel = STORE_LABELS[store] || store;
      const list = items.map((item) => `<li>${item}</li>`).join("");
      return `
        <div class="store-card">
          <h4>${storeLabel}</h4>
          <ul>${list}</ul>
        </div>
      `;
    })
    .join("");
}

function findDishByName(name) {
  return DISHES.find((dish) => dish.name === name);
}

function updateActiveCard() {
  dishGallery.querySelectorAll(".dish-card").forEach((card) => {
    const isActive = card.dataset.dish === activeDish?.name;
    card.classList.toggle("selected", isActive);
  });
}

function updateSelectedDishes() {
  selectedDishesList.innerHTML = dinnerSelection
    .map((dish) => `<li class="chip">${dish.name}</li>`)
    .join("");
}

function combineMaterials() {
  const combined = {
    "Whole Foods": new Set(),
    Costco: new Set(),
    Ranch99: new Set()
  };

  dinnerSelection.forEach((dish) => {
    Object.entries(dish.materials).forEach(([store, items]) => {
      if (!combined[store]) {
        combined[store] = new Set();
      }
      items.forEach((item) => combined[store].add(item));
    });
  });

  const formatted = Object.fromEntries(
    Object.entries(combined).map(([store, items]) => [
      store,
      Array.from(items)
    ])
  );

  renderMaterials(combinedMaterialsGrid, formatted);
}

function handleAddDish() {
  const selectedDish = activeDish;
  if (!selectedDish) return;
  if (!dinnerSelection.some((dish) => dish.name === selectedDish.name)) {
    dinnerSelection.push(selectedDish);
    updateSelectedDishes();
  }
}

function handleGenerateList() {
  if (dinnerSelection.length === 0) {
    combinedMaterialsGrid.innerHTML =
      "<p>请先添加至少一道菜 / Please add at least one dish first.</p>";
    return;
  }
  combineMaterials();
}

function handleClearDinner() {
  dinnerSelection.length = 0;
  updateSelectedDishes();
  combinedMaterialsGrid.innerHTML = "";
}

renderDishCards();
activeDish = DISHES[0];
updateActiveCard();
renderSteps(activeDish.steps);
renderMaterials(materialsGrid, activeDish.materials);

addDishButton.addEventListener("click", handleAddDish);
generateListButton.addEventListener("click", handleGenerateList);
clearDinnerButton.addEventListener("click", handleClearDinner);
