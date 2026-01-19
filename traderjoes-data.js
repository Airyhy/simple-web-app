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
  },
  {
    id: "everything-bagel",
    nameCn: "什锦贝果调味料",
    nameEn: "Everything But The Bagel Seasoning",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 2.99,
    unit: "2.3 oz",
    image: "https://images.unsplash.com/photo-1599909533872-c97725f38dc7?w=800&h=600&fit=crop"
  },
  {
    id: "cauliflower-gnocchi",
    nameCn: "花椰菜意式面疙瘩",
    nameEn: "Cauliflower Gnocchi",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 3.49,
    unit: "12 oz",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop"
  },
  {
    id: "mandarin-chicken",
    nameCn: "橘子鸡",
    nameEn: "Mandarin Orange Chicken",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 6.99,
    unit: "22 oz",
    image: "https://images.unsplash.com/photo-1588347818036-8fc8d30e4e07?w=800&h=600&fit=crop"
  },
  {
    id: "cookie-butter",
    nameCn: "饼干酱",
    nameEn: "Speculoos Cookie Butter",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 4.99,
    unit: "14.1 oz",
    image: "https://images.unsplash.com/photo-1588690610253-59d52b1c0c0f?w=800&h=600&fit=crop"
  },
  {
    id: "elote-chips",
    nameCn: "墨西哥玉米片",
    nameEn: "Elote Corn Chip Dippers",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 2.99,
    unit: "12 oz",
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=800&h=600&fit=crop"
  },
  {
    id: "organic-popcorn",
    nameCn: "有机爆米花",
    nameEn: "Organic Popcorn with Olive Oil",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 2.99,
    unit: "8 oz",
    image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=800&h=600&fit=crop"
  },
  {
    id: "tj-joe-joes",
    nameCn: "乔乔曲奇",
    nameEn: "Joe-Joe's Cookies",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 3.49,
    unit: "13.4 oz",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&h=600&fit=crop"
  },
  {
    id: "tj-hold-the-cone",
    nameCn: "迷你冰淇淋甜筒",
    nameEn: "Hold the Cone! Mini Ice Cream Cones",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 4.49,
    unit: "7.5 oz",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=600&fit=crop"
  },
  {
    id: "tj-frozen-berries",
    nameCn: "冷冻混合莓果",
    nameEn: "Frozen Mixed Berry Blend",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 3.99,
    unit: "12 oz",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=800&h=600&fit=crop"
  },
  {
    id: "tj-bruschetta",
    nameCn: "意式烤面包酱",
    nameEn: "Bruschetta Sauce",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 3.99,
    unit: "12 oz",
    image: "https://images.unsplash.com/photo-1572695157279-8f57e194940c?w=800&h=600&fit=crop"
  },
  {
    id: "tj-salsa-verde",
    nameCn: "绿莎莎酱",
    nameEn: "Salsa Verde",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 2.99,
    unit: "12 oz",
    image: "https://images.unsplash.com/photo-1599909533872-c97725f38dc7?w=800&h=600&fit=crop"
  },
  {
    id: "tj-sriracha",
    nameCn: "是拉差辣酱",
    nameEn: "Sriracha Sauce",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 2.49,
    unit: "9 oz",
    image: "https://images.unsplash.com/photo-1599909533872-c97725f38dc7?w=800&h=600&fit=crop"
  },
  {
    id: "tj-green-dragon",
    nameCn: "青龙辣酱",
    nameEn: "Green Dragon Hot Sauce",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 3.99,
    unit: "7 oz",
    image: "https://images.unsplash.com/photo-1599909533872-c97725f38dc7?w=800&h=600&fit=crop"
  },
  {
    id: "tj-frozen-tamales",
    nameCn: "冷冻塔马利",
    nameEn: "Chicken Tamales",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 4.99,
    unit: "18 oz",
    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=800&h=600&fit=crop"
  },
  {
    id: "tj-soup-dumplings",
    nameCn: "小笼包",
    nameEn: "Pork Soup Dumplings (Xiao Long Bao)",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 4.49,
    unit: "6 ct",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&h=600&fit=crop"
  },
  {
    id: "tj-gyoza",
    nameCn: "煎饺",
    nameEn: "Chicken Gyoza Potstickers",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 3.99,
    unit: "16 oz",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&h=600&fit=crop"
  },
  {
    id: "tj-fried-rice",
    nameCn: "冷冻炒饭",
    nameEn: "Vegetable Fried Rice",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 3.49,
    unit: "18 oz",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&h=600&fit=crop"
  },
  {
    id: "tj-pad-thai",
    nameCn: "泰式炒河粉",
    nameEn: "Thai Vegetable Pad Thai",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 3.99,
    unit: "9 oz",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=600&fit=crop"
  },
  {
    id: "tj-naan",
    nameCn: "印度馕饼",
    nameEn: "Garlic Naan",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 2.99,
    unit: "4 ct",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop"
  },
  {
    id: "tj-pita",
    nameCn: "口袋面包",
    nameEn: "Whole Wheat Pita Bread",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 2.49,
    unit: "6 ct",
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=800&h=600&fit=crop"
  },
  {
    id: "tj-flatbread",
    nameCn: "薄饼",
    nameEn: "Mediterranean Flatbread",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 3.49,
    unit: "4 ct",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&h=600&fit=crop"
  },
  {
    id: "tj-butter-chicken",
    nameCn: "印度黄油鸡",
    nameEn: "Butter Chicken with Basmati Rice",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 4.99,
    unit: "18 oz",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&h=600&fit=crop"
  },
  {
    id: "tj-tikka-masala",
    nameCn: "印度咖喱鸡",
    nameEn: "Chicken Tikka Masala",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 4.99,
    unit: "10.6 oz",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop"
  },
  {
    id: "tj-hash-browns",
    nameCn: "薯饼",
    nameEn: "Hash Browns",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 2.99,
    unit: "16 oz",
    image: "https://images.unsplash.com/photo-1618897659164-3d5a08bfa8aa?w=800&h=600&fit=crop"
  },
  {
    id: "tj-mac-cheese",
    nameCn: "奶酪通心粉",
    nameEn: "Mac & Cheese",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 3.99,
    unit: "20 oz",
    image: "https://images.unsplash.com/photo-1639744091413-8aa8f2f5c11f?w=800&h=600&fit=crop"
  },
  {
    id: "tj-veggie-burger",
    nameCn: "素食汉堡",
    nameEn: "Hi-Protein Veggie Burgers",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 4.49,
    unit: "4 ct",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800&h=600&fit=crop"
  },
  {
    id: "tj-falafel",
    nameCn: "中东豆饼",
    nameEn: "Falafel Mix",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 2.99,
    unit: "12 oz",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop"
  },
  {
    id: "tj-olive-oil",
    nameCn: "特级初榨橄榄油",
    nameEn: "Extra Virgin Olive Oil",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 9.99,
    unit: "16.9 oz",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&h=600&fit=crop"
  },
  {
    id: "tj-balsamic",
    nameCn: "意大利黑醋",
    nameEn: "Balsamic Glaze",
    brand: "Trader Joe's",
    store: "Trader Joe's",
    price: 3.99,
    unit: "8.5 oz",
    image: "https://images.unsplash.com/photo-1596040033229-a0b55ee0a8ec?w=800&h=600&fit=crop"
  },
];
