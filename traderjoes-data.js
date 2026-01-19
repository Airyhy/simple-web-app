// Trader Joe's Materials Data
const TRADERJOES_MATERIALS = [
  {
    id: "almond-milk-tj",
    nameCn: "杏仁奶",
    nameEn: "Almond Milk",
    brand: "Maruja",
    store: "Trader Joe's",
    price: 3.99,
    unit: "150 g",
    image: "https://images.openfoodfacts.org/images/products/842/519/771/2024/front_en.60.400.jpg"
  },
  {
    id: "frozen-veggies-tj",
    nameCn: "冷冻蔬菜",
    nameEn: "Frozen Sweet Potato Fries",
    brand: "Strong Roots",
    store: "Trader Joe's",
    price: 4.49,
    unit: "500 g",
    image: "https://images.openfoodfacts.org/images/products/539/152/818/0073/front_en.72.400.jpg"
  },
  {
    id: "quinoa-tj",
    nameCn: "藜麦",
    nameEn: "Quinoa Crackers",
    brand: "Jardin Bio",
    store: "Trader Joe's",
    price: 5.99,
    unit: "200 g",
    image: "https://images.openfoodfacts.org/images/products/000/000/615/3153/front_fr.76.400.jpg"
  },
  {
    id: "hummus-tj",
    nameCn: "鹰嘴豆泥",
    nameEn: "Hummus",
    brand: "Ramona's",
    store: "Trader Joe's",
    price: 4.99,
    unit: "500 g",
    image: "https://images.openfoodfacts.org/images/products/506/022/832/3799/front_en.3.400.jpg"
  },
  {
    id: "guacamole-tj",
    nameCn: "鳄梨酱",
    nameEn: "Guacamole",
    brand: "Hacendado",
    store: "Trader Joe's",
    price: 5.49,
    unit: "200 g",
    image: "https://images.openfoodfacts.org/images/products/848/000/003/8524/front_en.118.400.jpg"
  },
  {
    id: "salsa-tj",
    nameCn: "莎莎酱",
    nameEn: "Salsa",
    brand: "HELLMANN'S",
    store: "Trader Joe's",
    price: 3.99,
    unit: "750 ml",
    image: "https://images.openfoodfacts.org/images/products/871/811/472/4485/front_en.46.400.jpg"
  },
  {
    id: "tortilla-chips-tj",
    nameCn: "玉米片",
    nameEn: "Tortilla Chips",
    brand: "Old El Paso",
    store: "Trader Joe's",
    price: 3.49,
    unit: "185 g",
    image: "https://images.openfoodfacts.org/images/products/841/007/648/1597/front_en.317.400.jpg"
  },
  {
    id: "trail-mix-tj",
    nameCn: "混合坚果",
    nameEn: "Trail Mix Bar",
    brand: "Deliciously Ella",
    store: "Trader Joe's",
    price: 2.99,
    unit: "40 g",
    image: "https://images.openfoodfacts.org/images/products/506/048/284/2197/front_en.3.400.jpg"
  },
  {
    id: "dark-chocolate-tj",
    nameCn: "黑巧克力",
    nameEn: "Dark Chocolate 85%",
    brand: "J. D. Gross",
    store: "Trader Joe's",
    price: 4.99,
    unit: "125 g",
    image: "https://images.openfoodfacts.org/images/products/000/002/099/5553/front_en.314.400.jpg"
  },
  {
    id: "pesto-tj",
    nameCn: "青酱",
    nameEn: "Pesto Genovese",
    brand: "Barilla",
    store: "Trader Joe's",
    price: 5.99,
    unit: "190 g",
    image: "https://images.openfoodfacts.org/images/products/807/680/951/3753/front_en.347.400.jpg"
  },
  {
    id: "marinara-tj",
    nameCn: "番茄酱",
    nameEn: "Marinara Sauce",
    brand: "RAO'S HOMEMADE",
    store: "Trader Joe's",
    price: 7.99,
    unit: "56 oz",
    image: "https://images.openfoodfacts.org/images/products/074/747/900/0413/front_en.71.400.jpg"
  },
  {
    id: "coconut-water-tj",
    nameCn: "椰子水",
    nameEn: "Coconut Water",
    brand: "Vita Coco",
    store: "Trader Joe's",
    price: 4.99,
    unit: "1 L",
    image: "https://images.openfoodfacts.org/images/products/089/899/900/0503/front_en.175.400.jpg"
  },
  {
    id: "kombucha-tj",
    nameCn: "康普茶",
    nameEn: "Kombucha",
    brand: "Remedy",
    store: "Trader Joe's",
    price: 3.99,
    unit: "700 mL",
    image: "https://images.openfoodfacts.org/images/products/935/027/100/0225/front_en.18.400.jpg"
  },
  {
    id: "sparkling-water-tj",
    nameCn: "气泡水",
    nameEn: "Sparkling Water",
    brand: "Nestlé",
    store: "Trader Joe's",
    price: 2.49,
    unit: "33 cl",
    image: "https://images.openfoodfacts.org/images/products/800/227/077/6823/front_fr.30.400.jpg"
  },
  {
    id: "frozen-fruit-tj",
    nameCn: "冷冻水果",
    nameEn: "Frozen Mixed Berries",
    brand: "Hacendado",
    store: "Trader Joe's",
    price: 4.99,
    unit: "300 g",
    image: "https://images.openfoodfacts.org/images/products/848/000/061/0898/front_es.88.400.jpg"
  },
  {
    id: "protein-bars-tj",
    nameCn: "蛋白棒",
    nameEn: "Protein Bars",
    brand: "Nakd",
    store: "Trader Joe's",
    price: 6.99,
    unit: "135 g",
    image: "https://images.openfoodfacts.org/images/products/506/008/870/0112/front_en.30.400.jpg"
  },
  {
    id: "granola-tj",
    nameCn: "格兰诺拉麦片",
    nameEn: "Granola",
    brand: "LU",
    store: "Trader Joe's",
    price: 5.49,
    unit: "200 g",
    image: "https://images.openfoodfacts.org/images/products/762/221/060/1988/front_en.168.400.jpg"
  },
  {
    id: "almond-butter-tj",
    nameCn: "杏仁酱",
    nameEn: "Almond Butter",
    brand: "pip & nut",
    store: "Trader Joe's",
    price: 8.99,
    unit: "170 g",
    image: "https://images.openfoodfacts.org/images/products/506/036/718/1281/front_en.46.400.jpg"
  },
  {
    id: "apple-cider-tj",
    nameCn: "苹果醋",
    nameEn: "Apple Cider Vinegar",
    brand: "BRAGG",
    store: "Trader Joe's",
    price: 4.99,
    unit: "473 ml",
    image: "https://images.openfoodfacts.org/images/products/007/430/500/1161/front_en.64.400.jpg"
  },
  {
    id: "crackers-tj",
    nameCn: "饼干",
    nameEn: "Chocolate Crackers",
    brand: "LU",
    store: "Trader Joe's",
    price: 3.99,
    unit: "300 g",
    image: "https://images.openfoodfacts.org/images/products/762/221/044/9283/front_en.605.400.jpg"
  }
];
