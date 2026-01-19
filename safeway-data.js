// Safeway Materials Data
const SAFEWAY_MATERIALS = [
  {
    id: "cornstarch",
    nameCn: "玉米淀粉",
    nameEn: "Cornstarch",
    brand: "Let's Do...Organic",
    store: "Safeway",
    price: 2.99,
    unit: "16 oz",
    image: "https://images.openfoodfacts.org/images/products/004/318/200/5296/front_en.25.400.jpg"
  },
  {
    id: "chicken-broth",
    nameCn: "鸡汤",
    nameEn: "Chicken Broth",
    brand: "Kallø",
    store: "Safeway",
    price: 3.49,
    unit: "32 oz",
    image: "https://images.openfoodfacts.org/images/products/501/366/511/2235/front_en.38.400.jpg"
  },
  {
    id: "canola-oil",
    nameCn: "菜籽油",
    nameEn: "Canola Oil",
    brand: "O Organics",
    store: "Safeway",
    price: 7.99,
    unit: "48 oz",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&h=600&fit=crop"
  },
  {
    id: "roasted-peanuts",
    nameCn: "烤花生",
    nameEn: "Dry Roasted Peanuts",
    brand: "Meridian",
    store: "Safeway",
    price: 5.99,
    unit: "16 oz",
    image: "https://images.openfoodfacts.org/images/products/501/421/371/1306/front_en.59.400.jpg"
  },
  {
    id: "soy-sauce",
    nameCn: "酱油",
    nameEn: "Soy Sauce",
    brand: "Kikkoman",
    store: "Safeway",
    price: 4.49,
    unit: "15 oz",
    image: "https://images.openfoodfacts.org/images/products/871/503/511/0106/front_en.247.400.jpg"
  },
  {
    id: "sugar",
    nameCn: "白砂糖",
    nameEn: "Granulated Sugar",
    brand: "C&H",
    store: "Safeway",
    price: 3.99,
    unit: "4 lbs",
    image: "https://images.unsplash.com/photo-1587228060-59e4ef64f5c5?w=800&h=600&fit=crop"
  },
  {
    id: "tomato-paste",
    nameCn: "番茄膏",
    nameEn: "Tomato Paste",
    brand: "Contadina",
    store: "Safeway",
    price: 2.29,
    unit: "12 oz",
    image: "https://images.unsplash.com/photo-1598164888914-e6c4c8d8d1a3?w=800&h=600&fit=crop"
  },
  {
    id: "breadcrumbs",
    nameCn: "面包糠",
    nameEn: "Italian Breadcrumbs",
    brand: "Progresso",
    store: "Safeway",
    price: 3.99,
    unit: "15 oz",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop"
  },
  {
    id: "olive-oil",
    nameCn: "橄榄油",
    nameEn: "Extra Virgin Olive Oil",
    brand: "Primadonna",
    store: "Safeway",
    price: 12.99,
    unit: "25.5 oz",
    image: "https://images.openfoodfacts.org/images/products/405/648/914/1877/front_en.93.400.jpg"
  },
  {
    id: "paprika",
    nameCn: "红椒粉",
    nameEn: "Paprika",
    brand: "Signature SELECT",
    store: "Safeway",
    price: 2.99,
    unit: "2.12 oz",
    image: "https://images.unsplash.com/photo-1599909533872-c97725f38dc7?w=800&h=600&fit=crop"
  },
  {
    id: "black-pepper",
    nameCn: "黑胡椒",
    nameEn: "Black Pepper",
    brand: "Signature SELECT",
    store: "Safeway",
    price: 4.49,
    unit: "4 oz",
    image: "https://images.unsplash.com/photo-1596040033229-a0b55ee0a8ec?w=800&h=600&fit=crop"
  },
  {
    id: "pasta",
    nameCn: "意面",
    nameEn: "Spaghetti Pasta",
    brand: "Barilla",
    store: "Safeway",
    price: 2.49,
    unit: "16 oz",
    image: "https://images.openfoodfacts.org/images/products/800/076/380/2065/front_en.149.400.jpg"
  },
  {
    id: "rice",
    nameCn: "茉莉香米",
    nameEn: "Jasmine Rice",
    brand: "Tilda",
    store: "Safeway",
    price: 12.99,
    unit: "10 lb",
    image: "https://images.openfoodfacts.org/images/products/502/218/860/8270/front_en.42.400.jpg"
  },
  {
    id: "beans-black",
    nameCn: "黑豆罐头",
    nameEn: "Black Beans",
    brand: "Goya",
    store: "Safeway",
    price: 1.99,
    unit: "15 oz",
    image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&h=600&fit=crop"
  },
  {
    id: "honey",
    nameCn: "蜂蜜",
    nameEn: "Raw Honey",
    brand: "Signature SELECT",
    store: "Safeway",
    price: 7.99,
    unit: "24 oz",
    image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=800&h=600&fit=crop"
  },
  {
    id: "peanut-butter",
    nameCn: "花生酱",
    nameEn: "Creamy Peanut Butter",
    brand: "Jif",
    store: "Safeway",
    price: 5.49,
    unit: "40 oz",
    image: "https://images.unsplash.com/photo-1588690610253-59d52b1c0c0f?w=800&h=600&fit=crop"
  },
  {
    id: "flour",
    nameCn: "面粉",
    nameEn: "All Purpose Flour",
    brand: "Gold Medal",
    store: "Safeway",
    price: 4.99,
    unit: "5 lb",
    image: "https://images.openfoodfacts.org/images/products/001/600/001/8032/front_en.79.400.jpg"
  },
  {
    id: "baking-powder",
    nameCn: "泡打粉",
    nameEn: "Baking Powder",
    brand: "Dr. Oetker",
    store: "Safeway",
    price: 3.49,
    unit: "10 oz",
    image: "https://images.openfoodfacts.org/images/products/405/648/910/9761/front_en.177.400.jpg"
  },
  {
    id: "vanilla-extract",
    nameCn: "香草精",
    nameEn: "Vanilla Extract",
    brand: "McCormick",
    store: "Safeway",
    price: 8.99,
    unit: "2 oz",
    image: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=800&h=600&fit=crop"
  },
  {
    id: "chocolate-chips",
    nameCn: "巧克力豆",
    nameEn: "Chocolate Chips",
    brand: "Nestle Toll House",
    store: "Safeway",
    price: 4.99,
    unit: "12 oz",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&h=600&fit=crop"
  },
  {
    id: "oats",
    nameCn: "燕麦片",
    nameEn: "Rolled Oats",
    brand: "Quaker",
    store: "Safeway",
    price: 5.99,
    unit: "42 oz",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=800&h=600&fit=crop"
  },
  {
    id: "cereal",
    nameCn: "早餐麦片",
    nameEn: "Breakfast Cereal",
    brand: "Weetabix",
    store: "Safeway",
    price: 6.49,
    unit: "18.5 oz",
    image: "https://images.openfoodfacts.org/images/products/501/104/510/6229/front_en.133.400.jpg"
  },
  {
    id: "coffee",
    nameCn: "咖啡粉",
    nameEn: "Ground Coffee",
    brand: "Nescafé",
    store: "Safeway",
    price: 9.99,
    unit: "12 oz",
    image: "https://images.openfoodfacts.org/images/products/761/042/812/5004/front_en.29.400.jpg"
  },
  {
    id: "tea",
    nameCn: "红茶",
    nameEn: "Black Tea",
    brand: "Lipton",
    store: "Safeway",
    price: 5.99,
    unit: "100 ct",
    image: "https://images.openfoodfacts.org/images/products/872/209/008/5804/front_en.126.400.jpg"
  },
  {
    id: "ketchup",
    nameCn: "番茄酱",
    nameEn: "Tomato Ketchup",
    brand: "Heinz",
    store: "Safeway",
    price: 3.99,
    unit: "32 oz",
    image: "https://images.unsplash.com/photo-1598991461557-e80784c4f9da?w=800&h=600&fit=crop"
  },
  {
    id: "mustard",
    nameCn: "黄芥末",
    nameEn: "Yellow Mustard",
    brand: "French's",
    store: "Safeway",
    price: 2.99,
    unit: "20 oz",
    image: "https://images.openfoodfacts.org/images/products/004/125/000/0341/front_en.66.400.jpg"
  },
  {
    id: "mayo",
    nameCn: "蛋黄酱",
    nameEn: "Mayonnaise",
    brand: "Hellmann's",
    store: "Safeway",
    price: 5.99,
    unit: "30 oz",
    image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=800&h=600&fit=crop"
  },
  {
    id: "jam",
    nameCn: "草莓果酱",
    nameEn: "Strawberry Jam",
    brand: "Bonne Maman",
    store: "Safeway",
    price: 5.49,
    unit: "13 oz",
    image: "https://images.openfoodfacts.org/images/products/317/468/017/0000/front_en.184.400.jpg"
  },
];
