// Ranch99 Materials Data
const RANCH99_MATERIALS = [
  {
    id: "doubanjiang",
    nameCn: "郫县豆瓣酱",
    nameEn: "Pixian Doubanjiang",
    brand: "Pantai",
    store: "Ranch99",
    price: 4.99,
    unit: "16 oz",
    image: "https://images.openfoodfacts.org/images/products/885/005/800/0734/front_fr.3.400.jpg"
  },
  {
    id: "sichuan-pepper",
    nameCn: "花椒",
    nameEn: "Sichuan Peppercorns",
    brand: "PaMiZeng",
    store: "Ranch99",
    price: 5.99,
    unit: "2 oz",
    image: "https://images.openfoodfacts.org/images/products/471/300/855/0021/front_en.22.400.jpg"
  },
  {
    id: "chili-oil",
    nameCn: "红油",
    nameEn: "Chili Oil",
    brand: "LAOGANMA",
    store: "Ranch99",
    price: 3.99,
    unit: "7.41 oz",
    image: "https://images.openfoodfacts.org/images/products/692/180/470/0269/front_en.137.400.jpg"
  },
  {
    id: "dried-chilies",
    nameCn: "干辣椒",
    nameEn: "Dried Red Chilies",
    brand: "Sichuan Brand",
    store: "Ranch99",
    price: 3.49,
    unit: "4 oz",
    image: "https://images.unsplash.com/photo-1583202925739-250942342e4e?w=800&h=600&fit=crop"
  },
  {
    id: "black-vinegar",
    nameCn: "陈醋",
    nameEn: "Chinkiang Vinegar",
    brand: "Gold Plum",
    store: "Ranch99",
    price: 4.29,
    unit: "18.6 oz",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop&sat=-30"
  },
  {
    id: "shaoxing",
    nameCn: "绍兴料酒",
    nameEn: "Shaoxing Cooking Wine",
    brand: "Pagoda",
    store: "Ranch99",
    price: 5.49,
    unit: "25.4 oz",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop"
  },
  {
    id: "white-pepper",
    nameCn: "白胡椒粉",
    nameEn: "White Pepper Powder",
    brand: "Spice King",
    store: "Ranch99",
    price: 3.99,
    unit: "4 oz",
    image: "https://images.unsplash.com/photo-1596040033229-a0b55ee0a8ec?w=800&h=600&fit=crop&sat=-50"
  },
  {
    id: "light-soy",
    nameCn: "生抽",
    nameEn: "Light Soy Sauce",
    brand: "Amoy",
    store: "Ranch99",
    price: 3.49,
    unit: "16.9 oz",
    image: "https://images.openfoodfacts.org/images/products/500/011/104/4226/front_en.29.400.jpg"
  },
  {
    id: "oregano",
    nameCn: "牛至",
    nameEn: "Dried Oregano",
    brand: "McCormick",
    store: "Ranch99",
    price: 4.99,
    unit: "3 oz",
    image: "https://images.unsplash.com/photo-1515694590451-e33a61ab6f11?w=800&h=600&fit=crop"
  },
  {
    id: "chili-flakes",
    nameCn: "辣椒碎",
    nameEn: "Crushed Red Pepper",
    brand: "Dynasty",
    store: "Ranch99",
    price: 2.99,
    unit: "1 oz",
    image: "https://images.unsplash.com/photo-1599909533872-c97725f38dc7?w=800&h=600&fit=crop&hue=10"
  },
  {
    id: "sea-salt",
    nameCn: "海盐",
    nameEn: "Sea Salt",
    brand: "Diamond Crystal",
    store: "Ranch99",
    price: 3.49,
    unit: "26 oz",
    image: "https://images.unsplash.com/photo-1587228060-59e4ef64f5c5?w=800&h=600&fit=crop&sat=-80"
  },
  {
    id: "thyme",
    nameCn: "百里香",
    nameEn: "Dried Thyme",
    brand: "Spice Islands",
    store: "Ranch99",
    price: 4.49,
    unit: "0.7 oz",
    image: "https://images.unsplash.com/photo-1515694590451-e33a61ab6f11?w=800&h=600&fit=crop&hue=30"
  },
  {
    id: "sesame-oil",
    nameCn: "芝麻油",
    nameEn: "Toasted Sesame Oil",
    brand: "Kadoya",
    store: "Ranch99",
    price: 6.99,
    unit: "11 oz",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&h=600&fit=crop&hue=40"
  },
  {
    id: "oyster-sauce",
    nameCn: "蚝油",
    nameEn: "Oyster Sauce",
    brand: "Lee Kum Kee",
    store: "Ranch99",
    price: 4.99,
    unit: "18 oz",
    image: "https://images.openfoodfacts.org/images/products/007/889/512/6419/front_en.146.400.jpg"
  },
  {
    id: "hoisin-sauce",
    nameCn: "海鲜酱",
    nameEn: "Hoisin Sauce",
    brand: "Blue Dragon",
    store: "Ranch99",
    price: 4.49,
    unit: "8.75 oz",
    image: "https://images.openfoodfacts.org/images/products/502/213/460/2656/front_en.20.400.jpg"
  },
  {
    id: "rice-vinegar",
    nameCn: "米醋",
    nameEn: "Rice Vinegar",
    brand: "Marukan",
    store: "Ranch99",
    price: 3.99,
    unit: "12 oz",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&h=600&fit=crop&sat=-20&hue=20"
  },
  {
    id: "mirin",
    nameCn: "味霖",
    nameEn: "Mirin Cooking Wine",
    brand: "Yutaka",
    store: "Ranch99",
    price: 5.99,
    unit: "10 oz",
    image: "https://images.openfoodfacts.org/images/products/502/090/300/5506/front_en.14.400.jpg"
  },
  {
    id: "noodles",
    nameCn: "拉面",
    nameEn: "Ramen Noodles",
    brand: "Nissin",
    store: "Ranch99",
    price: 4.99,
    unit: "5 pack",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop"
  },
  {
    id: "rice-noodles",
    nameCn: "米粉",
    nameEn: "Rice Noodles",
    brand: "Thai Kitchen",
    store: "Ranch99",
    price: 3.99,
    unit: "8 oz",
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=800&h=600&fit=crop"
  },
  {
    id: "wonton-wrappers",
    nameCn: "馄饨皮",
    nameEn: "Wonton Wrappers",
    brand: "Twin Dragon",
    store: "Ranch99",
    price: 3.49,
    unit: "12 oz",
    image: "https://images.openfoodfacts.org/images/products/003/720/023/6021/front_en.21.400.jpg"
  },
  {
    id: "bok-choy",
    nameCn: "青江菜",
    nameEn: "Baby Bok Choy",
    brand: "Fresh Produce",
    store: "Ranch99",
    price: 2.99,
    unit: "per lb",
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=800&h=600&fit=crop"
  },
  {
    id: "shiitake",
    nameCn: "香菇",
    nameEn: "Shiitake Mushrooms",
    brand: "Fresh Produce",
    store: "Ranch99",
    price: 5.99,
    unit: "8 oz",
    image: "https://images.unsplash.com/photo-1608224429093-8169c07e8ba1?w=800&h=600&fit=crop"
  },
  {
    id: "bamboo-shoots",
    nameCn: "竹笋",
    nameEn: "Bamboo Shoots",
    brand: "Dynasty",
    store: "Ranch99",
    price: 2.49,
    unit: "8 oz",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&h=600&fit=crop"
  },
  {
    id: "water-chestnuts",
    nameCn: "马蹄",
    nameEn: "Water Chestnuts",
    brand: "Dynasty",
    store: "Ranch99",
    price: 2.49,
    unit: "8 oz",
    image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&h=600&fit=crop&hue=30"
  },
  {
    id: "coconut-milk",
    nameCn: "椰奶",
    nameEn: "Coconut Milk",
    brand: "Thai Kitchen",
    store: "Ranch99",
    price: 3.99,
    unit: "13.66 oz",
    image: "https://images.unsplash.com/photo-1598514982901-ae62764ae75e?w=800&h=600&fit=crop"
  },
  {
    id: "curry-paste",
    nameCn: "咖喱酱",
    nameEn: "Red Curry Paste",
    brand: "Patak's",
    store: "Ranch99",
    price: 4.99,
    unit: "10 oz",
    image: "https://images.openfoodfacts.org/images/products/888/670/000/5349/front_en.95.400.jpg"
  },
  {
    id: "fish-sauce",
    nameCn: "鱼露",
    nameEn: "Fish Sauce",
    brand: "Red Boat",
    store: "Ranch99",
    price: 9.99,
    unit: "8.45 oz",
    image: "https://images.unsplash.com/photo-1586985064044-8c3b5c36df76?w=800&h=600&fit=crop&sat=-10&hue=30"
  },
];
