// Whole Foods Materials Data
const WHOLEFOODS_MATERIALS = [
  {
    id: "tofu-soft",
    nameCn: "嫩豆腐",
    nameEn: "Soft Tofu",
    brand: "Morinaga",
    store: "Whole Foods",
    price: 3.49,
    unit: "14 oz",
    image: "https://images.openfoodfacts.org/images/products/008/569/660/8037/front_en.38.400.jpg"
  },
  {
    id: "ground-pork",
    nameCn: "猪肉末",
    nameEn: "Ground Pork",
    brand: "Picard",
    store: "Whole Foods",
    price: 6.99,
    unit: "1 lb",
    image: "https://images.openfoodfacts.org/images/products/327/016/060/2148/front_fr.31.400.jpg"
  },
  {
    id: "scallion",
    nameCn: "青葱",
    nameEn: "Green Onions",
    brand: "Organic Produce",
    store: "Whole Foods",
    price: 1.49,
    unit: "1 bunch",
    image: "https://images.unsplash.com/photo-1629798787078-0c59e88aeb73?w=800&h=600&fit=crop"
  },
  {
    id: "garlic",
    nameCn: "蒜头",
    nameEn: "Garlic",
    brand: "Fresh Produce",
    store: "Whole Foods",
    price: 0.99,
    unit: "1 bulb",
    image: "assets/materials/garlic.jpg"
  },
  {
    id: "ginger",
    nameCn: "生姜",
    nameEn: "Fresh Ginger",
    brand: "Organic Produce",
    store: "Whole Foods",
    price: 1.29,
    unit: "per lb",
    image: "assets/materials/ginger.jpg"
  },
  {
    id: "chicken-thighs",
    nameCn: "鸡腿肉去骨",
    nameEn: "Boneless Chicken Thighs",
    brand: "M&S",
    store: "Whole Foods",
    price: 8.99,
    unit: "per lb",
    image: "https://images.openfoodfacts.org/images/products/000/000/030/6690/front_en.44.400.jpg"
  },
  {
    id: "eggs",
    nameCn: "鸡蛋",
    nameEn: "Large Eggs",
    brand: "MEREVALE",
    store: "Whole Foods",
    price: 4.99,
    unit: "12 ct",
    image: "https://images.openfoodfacts.org/images/products/408/860/017/0633/front_en.3.400.jpg"
  },
  {
    id: "roma-tomato",
    nameCn: "番茄",
    nameEn: "Roma Tomatoes",
    brand: "Fresh Produce",
    store: "Whole Foods",
    price: 3.59,
    unit: "per lb",
    image: "assets/materials/tomatoes.jpg"
  },
  {
    id: "ground-beef",
    nameCn: "牛肉馅",
    nameEn: "Ground Beef 85/15",
    brand: "TESCO",
    store: "Whole Foods",
    price: 7.99,
    unit: "per lb",
    image: "https://images.openfoodfacts.org/images/products/501/837/492/8993/front_en.64.400.jpg"
  },
  {
    id: "parsley",
    nameCn: "欧芹",
    nameEn: "Fresh Parsley",
    brand: "Organic Produce",
    store: "Whole Foods",
    price: 1.79,
    unit: "1 bunch",
    image: "assets/materials/parsley.jpg"
  },
  {
    id: "chicken-breast",
    nameCn: "鸡胸肉",
    nameEn: "Chicken Breast",
    brand: "Hacendado",
    store: "Whole Foods",
    price: 9.49,
    unit: "per lb",
    image: "https://images.openfoodfacts.org/images/products/848/000/056/6614/front_es.59.400.jpg"
  },
  {
    id: "butter",
    nameCn: "黄油",
    nameEn: "Unsalted Butter",
    brand: "Elle & Vire",
    store: "Whole Foods",
    price: 4.29,
    unit: "16 oz",
    image: "https://images.openfoodfacts.org/images/products/345/179/098/8677/front_en.186.400.jpg"
  },
  {
    id: "lemon",
    nameCn: "柠檬",
    nameEn: "Lemons",
    brand: "Fresh Produce",
    store: "Whole Foods",
    price: 0.89,
    unit: "each",
    image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=800&h=600&fit=crop"
  },
  {
    id: "milk",
    nameCn: "牛奶",
    nameEn: "Organic Milk",
    brand: "365 Organic",
    store: "Whole Foods",
    price: 5.99,
    unit: "1 gal",
    image: "https://images.openfoodfacts.org/images/products/405/648/934/6357/front_en.327.400.jpg"
  },
  {
    id: "yogurt",
    nameCn: "希腊酸奶",
    nameEn: "Greek Yogurt",
    brand: "Milbona",
    store: "Whole Foods",
    price: 6.49,
    unit: "32 oz",
    image: "https://images.openfoodfacts.org/images/products/405/648/914/8739/front_en.73.400.jpg"
  },
  {
    id: "cheese-cheddar",
    nameCn: "切达奶酪",
    nameEn: "Cheddar Cheese",
    brand: "Tillamook",
    store: "Whole Foods",
    price: 8.99,
    unit: "16 oz",
    image: "https://images.openfoodfacts.org/images/products/611/120/300/6653/front_ar.14.400.jpg"
  },
  {
    id: "spinach",
    nameCn: "菠菜",
    nameEn: "Fresh Spinach",
    brand: "Organic Produce",
    store: "Whole Foods",
    price: 4.99,
    unit: "10 oz",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=800&h=600&fit=crop"
  },
  {
    id: "broccoli",
    nameCn: "西兰花",
    nameEn: "Fresh Broccoli",
    brand: "Organic Produce",
    store: "Whole Foods",
    price: 3.99,
    unit: "per lb",
    image: "https://images.openfoodfacts.org/images/products/000/002/024/2091/front_es.102.400.jpg"
  },
  {
    id: "carrots",
    nameCn: "胡萝卜",
    nameEn: "Organic Carrots",
    brand: "365 Organic",
    store: "Whole Foods",
    price: 2.99,
    unit: "2 lb bag",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&h=600&fit=crop"
  },
  {
    id: "onions",
    nameCn: "洋葱",
    nameEn: "Yellow Onions",
    brand: "Fresh Produce",
    store: "Whole Foods",
    price: 1.99,
    unit: "3 lb bag",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=600&fit=crop"
  },
  {
    id: "potatoes",
    nameCn: "土豆",
    nameEn: "Russet Potatoes",
    brand: "Potatoes Goodness Unearthed",
    store: "Whole Foods",
    price: 4.99,
    unit: "5 lb bag",
    image: "https://images.openfoodfacts.org/images/products/003/338/353/0109/front_en.44.400.jpg"
  },
  {
    id: "salmon",
    nameCn: "三文鱼",
    nameEn: "Atlantic Salmon Fillet",
    brand: "Whole Foods Market",
    store: "Whole Foods",
    price: 14.99,
    unit: "per lb",
    image: "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=800&h=600&fit=crop"
  },
  {
    id: "bacon",
    nameCn: "培根",
    nameEn: "Uncured Bacon",
    brand: "Applegate",
    store: "Whole Foods",
    price: 9.99,
    unit: "12 oz",
    image: "https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=800&h=600&fit=crop"
  },
];
