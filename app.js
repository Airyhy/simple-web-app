const dishGallery = document.getElementById("dish-gallery");
const selectedDishesList = document.getElementById("selected-dishes");
const combinedMaterialsGrid = document.getElementById("combined-materials");
const clearDinnerButton = document.getElementById("clear-dinner");

const dinnerSelection = [];
let activeDish = null;

// Store manual items and item states
let manualGroceryItems = [];
let itemStates = {}; // Track "confirmed", "already have" states
let permanentlyOwnedItems = new Set(); // Items that are always marked as "already have"
let removedIngredientsFromDishes = {}; // Track ingredients removed from specific dishes

// Load permanent items from localStorage
function loadPermanentItems() {
  const saved = localStorage.getItem('permanentlyOwnedItems');
  if (saved) {
    permanentlyOwnedItems = new Set(JSON.parse(saved));
  }
}

// Save permanent items to localStorage
function savePermanentItems() {
  localStorage.setItem('permanentlyOwnedItems', JSON.stringify([...permanentlyOwnedItems]));
}

// Load removed ingredients from localStorage
function loadRemovedIngredients() {
  const saved = localStorage.getItem('removedIngredientsFromDishes');
  if (saved) {
    removedIngredientsFromDishes = JSON.parse(saved);
  }
}

// Save removed ingredients to localStorage
function saveRemovedIngredients() {
  localStorage.setItem('removedIngredientsFromDishes', JSON.stringify(removedIngredientsFromDishes));
}

// Get DISHES and MATERIALS from window.DATA (loaded by data.js)
let DISHES = [];
let MATERIALS = [];

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
  console.log('=== renderDishCards() ===');
  console.log('DISHES:', DISHES);
  console.log('DISHES.length:', DISHES ? DISHES.length : 'DISHES is undefined');
  
  // Add visible debug info to page
  if (!dishGallery) {
    alert('ERROR: dishGallery element not found!');
    return;
  }
  
  if (!DISHES || DISHES.length === 0) {
    dishGallery.innerHTML = `
      <div style="background: #ffe0e0; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: red;">⚠️ Debug Info:</h3>
        <p><strong>DISHES:</strong> ${DISHES ? DISHES.length + ' items' : 'undefined'}</p>
        <p><strong>window.DATA:</strong> ${window.DATA ? 'exists' : 'undefined'}</p>
        <p><strong>window.DATA.DISHES:</strong> ${window.DATA && window.DATA.DISHES ? window.DATA.DISHES.length + ' items' : 'undefined'}</p>
        <p style="color: red; font-weight: bold;">未加载到菜品数据 / No dish data loaded</p>
      </div>
    `;
    return;
  }

  console.log('Rendering', DISHES.length, 'dishes...');
  
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
  
  console.log('Rendered HTML length:', dishGallery.innerHTML.length);

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
      
      // Open detailed view
      openDishDetail(selectedDish);
      
      // Update active dish
      activeDish = selectedDish;
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
  Safeway: "Safeway / 西夫韦",
  Ranch99: "Ranch 99 / 大华超市",
  "Trader Joe's": "Trader Joe's / 乔氏超市"
};

const STORE_COLORS = {
  "Whole Foods": "#00674f",
  Safeway: "#e31837",
  Ranch99: "#ff9500"
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

function getMaterialById(id) {
  return MATERIALS.find((item) => item.id === id);
}

function getMaterialsByStore(materialIds) {
  const grouped = {};
  const missingIds = [];
  
  materialIds.forEach((id) => {
    const item = getMaterialById(id);
    if (!item) {
      missingIds.push(id);
      console.warn(`⚠️ Material not found: ${id}`);
      return;
    }
    if (!grouped[item.store]) {
      grouped[item.store] = [];
    }
    grouped[item.store].push(item);
  });
  
  if (missingIds.length > 0) {
    console.error(`❌ Missing ${missingIds.length} materials for this dish:`, missingIds);
  }
  
  return grouped;
}

function formatMaterialLabel(item, showPrice = false) {
  const base = `${item.nameCn} ${item.nameEn}`;
  if (!showPrice) return base;
  return `${base} ($${item.price.toFixed(2)})`;
}

function renderMaterials(targetElement, materialsByStore, showPrice = false) {
  targetElement.innerHTML = Object.entries(materialsByStore)
    .map(([store, items]) => {
      const storeLabel = STORE_LABELS[store] || store;
      const list = items
        .map((item) => `<li>${formatMaterialLabel(item, showPrice)}</li>`)
        .join("");
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
    .map((dish, index) => `
      <li class="chip" data-index="${index}" title="点击移除 / Tap to remove">
        <span class="chip-text">${dish.name}</span>
        <span class="chip-remove" aria-label="Remove">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </span>
      </li>
    `)
    .join("");
  
  // Add event listeners for chips (better than onclick for mobile)
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', function(e) {
      e.preventDefault();
      const index = parseInt(this.getAttribute('data-index'));
      removeDishFromDinner(index);
    });
    
    // Add touch feedback
    chip.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.95)';
    });
    
    chip.addEventListener('touchend', function() {
      this.style.transform = '';
    });
  });
  
  // Auto-generate grocery list whenever dishes change
  if (dinnerSelection.length > 0) {
    combineMaterials();
  } else {
    combinedMaterialsGrid.innerHTML = "<p style='text-align: center; color: #999; padding: 40px;'>添加菜品后自动生成购物清单 / Add dishes to auto-generate shopping list</p>";
  }
}

function removeDishFromDinner(index) {
  const dish = dinnerSelection[index];
  dinnerSelection.splice(index, 1);
  updateSelectedDishes();
  showToast(`已移除：${dish.name} / Removed from dinner plan`, "warning");
}

function combineMaterials() {
  if (dinnerSelection.length === 0 && manualGroceryItems.length === 0) {
    combinedMaterialsGrid.innerHTML = "<p style='text-align: center; color: #999; padding: 40px;'>添加菜品后自动生成购物清单 / Add dishes to auto-generate shopping list</p>";
    return;
  }

  // Collect all materials with their dishes (excluding removed ingredients)
  const materialDishMap = new Map(); // materialId -> Set of dish names
  
  dinnerSelection.forEach((dish) => {
    // Get removed ingredients for this dish
    const removedForDish = removedIngredientsFromDishes[dish.name] || [];
    
    dish.materialIds.forEach((id) => {
      // Skip if this ingredient was removed from this dish
      if (removedForDish.includes(id)) {
        return;
      }
      
      if (!materialDishMap.has(id)) {
        materialDishMap.set(id, new Set());
      }
      materialDishMap.get(id).add(dish.name);
    });
  });

  // Separate items by state
  const neededItems = [];
  const alreadyHaveItems = [];
  const notNeededItems = [];

  // Categorize materials from dishes
  const materialEntries = Array.from(materialDishMap.entries());
  const sortedMaterials = materialEntries.sort((a, b) => {
    const matA = getMaterialById(a[0]);
    const matB = getMaterialById(b[0]);
    if (!matA || !matB) return 0;
    return matA.store.localeCompare(matB.store);
  });

  sortedMaterials.forEach(([materialId, dishNames]) => {
    const material = getMaterialById(materialId);
    if (!material) return;

    const itemKey = `material-${materialId}`;
    const isPermanent = permanentlyOwnedItems.has(itemKey);
    let state = itemStates[itemKey] || 'needed';
    
    // Auto-apply "have" state for permanent items
    if (isPermanent) {
      state = 'have';
    }
    
    const storeClass = `store-${material.store.replace(/\s/g, '')}`;
    const dishesArray = Array.from(dishNames);
    const dishes = dishesArray.join(', ');

    const itemData = {
      key: itemKey,
      materialId,
      nameCn: material.nameCn,
      nameEn: material.nameEn,
      dishes,
      dishesArray, // Keep array for removal logic
      store: material.store,
      price: `$${material.price.toFixed(2)}`,
      storeClass,
      isManual: false,
      isPermanent
    };

    if (state === 'have') {
      alreadyHaveItems.push(itemData);
    } else if (state === 'confirmed') {
      // Confirmed items stay in needed section
      neededItems.push(itemData);
    } else {
      neededItems.push(itemData);
    }
  });

  // Categorize manual items
  manualGroceryItems.forEach((item, index) => {
    const itemKey = `manual-${index}`;
    const isPermanent = permanentlyOwnedItems.has(itemKey);
    let state = itemStates[itemKey] || 'needed';
    
    // Auto-apply "have" state for permanent items
    if (isPermanent) {
      state = 'have';
    }

    const itemData = {
      key: itemKey,
      nameCn: item.nameCn,
      nameEn: item.nameEn || '',
      dishes: item.dishes,
      store: item.store,
      price: '-',
      storeClass: 'manual-item',
      isManual: true,
      manualIndex: index,
      isPermanent
    };

    if (state === 'have') {
      alreadyHaveItems.push(itemData);
    } else if (state === 'skip') {
      notNeededItems.push(itemData);
    } else {
      neededItems.push(itemData);
    }
  });

  // Collect removed ingredients from all dishes
  const removedItems = [];
  dinnerSelection.forEach((dish) => {
    const removedForDish = removedIngredientsFromDishes[dish.name] || [];
    
    removedForDish.forEach((materialId) => {
      const material = getMaterialById(materialId);
      if (!material) return;

      const itemKey = `removed-${materialId}-${dish.name}`;
      const storeClass = `store-${material.store.replace(/\s/g, '')}`;

      const itemData = {
        key: itemKey,
        materialId,
        nameCn: material.nameCn,
        nameEn: material.nameEn,
        dishes: dish.name, // Show which dish it was removed from
        dishesArray: [dish.name],
        store: material.store,
        price: `$${material.price.toFixed(2)}`,
        storeClass,
        isRemoved: true,
        isPermanent: false
      };

      removedItems.push(itemData);
    });
  });

  // Build HTML with three sections
  let html = '';

  // Shopping List (Needed Items)
  html += renderGrocerySection(
    '购物清单 / Shopping List',
    neededItems,
    'needed-section',
    true
  );

  // Already Have List
  if (alreadyHaveItems.length > 0) {
    html += renderGrocerySection(
      '已有清单 / Already Have List',
      alreadyHaveItems,
      'already-have-section',
      false
    );
  }

  // Not Needed for This Dish List (showing other state changes)
  if (notNeededItems.length > 0) {
    html += renderGrocerySection(
      '其他标记 / Other Marked Items',
      notNeededItems,
      'not-needed-section',
      false
    );
  }

  // Removed from Dishes List
  if (removedItems.length > 0) {
    html += renderGrocerySection(
      '🗑️ 从菜谱移除 / Removed from Dishes',
      removedItems,
      'removed-section',
      false
    );
  }

  html += `
    <div class="grocery-summary">
      <strong>购物清单 / Shopping:</strong> ${neededItems.length} 项 / items<br>
      <strong>已有 / Already have:</strong> ${alreadyHaveItems.length} 项 / items<br>
      <strong>从菜谱移除 / Removed from dishes:</strong> ${removedItems.length} 项 / items<br>
      <strong>总计 / Total:</strong> ${neededItems.length + alreadyHaveItems.length + removedItems.length} 项 / items
    </div>
    
    <div class="grocery-actions">
      <button class="btn-confirm-materials" onclick="confirmAllMaterials()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 6px;">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        确认材料 / Confirm Materials
      </button>
      <button class="btn-add-item" onclick="openAddItemModal()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 6px;">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
        添加项目 / Add Item
      </button>
    </div>
  `;

  combinedMaterialsGrid.innerHTML = html;
}

function renderGrocerySection(title, items, sectionClass, showActions) {
  if (items.length === 0 && !showActions) return '';

  let html = `
    <div class="grocery-section-wrapper ${sectionClass}">
      <h3 class="grocery-section-title">${title} (${items.length})</h3>
      <div style="overflow-x: auto;">
        <table class="grocery-table">
          <thead>
            <tr>
              <th>材料 / Item</th>
              <th>用于菜品 / Used in Dishes</th>
              <th>商店 / Store</th>
              <th>价格 / Price</th>
              <th>操作 / Actions</th>
            </tr>
          </thead>
          <tbody>
  `;

  if (items.length === 0) {
    html += `
      <tr>
        <td colspan="5" style="text-align: center; color: #999; padding: 20px;">
          暂无项目 / No items
        </td>
      </tr>
    `;
  } else {
    items.forEach(item => {
      const state = itemStates[item.key] || 'needed';
      const isPermanent = item.isPermanent || false;
      const permanentClass = isPermanent ? 'permanent-item' : '';
      
      html += `
        <tr class="${item.storeClass} ${permanentClass}" data-item-key="${item.key}">
          <td class="item-name">
            <strong>${item.nameCn}${isPermanent ? ' 🔒' : ''}</strong><br>
            <small>${item.nameEn}${isPermanent ? ' (Permanent)' : ''}</small>
          </td>
          <td class="dish-list">${item.dishes}</td>
          <td class="store-name">${STORE_LABELS[item.store] || item.store}</td>
          <td class="item-price">${item.price}</td>
          <td class="item-actions">
            ${item.isRemoved ? `
            <button class="btn-action btn-restore" 
                    onclick='restoreIngredientToDish("${item.materialId}", ${JSON.stringify(item.dishesArray)})' 
                    data-tooltip="↩️ 恢复到菜谱 / Restore&#10;重新添加到菜谱 Add back to recipe"
                    style="background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
              </svg>
            </button>
            ` : `
            <button class="btn-action btn-confirm ${state === 'confirmed' ? 'active' : ''}" 
                    onclick="toggleItemState('${item.key}', 'confirmed')" 
                    data-tooltip="${(state === 'have' || isPermanent) ? '🛒 需要购买 / Need to Buy&#10;移回购物清单 Move back to shopping list' : '✓ 确认购买 / Confirm&#10;这次需要买 Need to buy this time'}">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </button>
            <button class="btn-action btn-have ${state === 'have' || isPermanent ? 'active' : ''}" 
                    onclick="toggleItemState('${item.key}', 'have')" 
                    data-tooltip="${(state === 'have' || isPermanent) ? '🛒 需要购买 / Need to Buy&#10;移回购物清单 Move back to shopping list' : '🏠 家里已有 / Already Have&#10;这次不用买 No need this time'}">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </button>
            ${!item.isManual && item.dishesArray && item.dishesArray.length > 0 ? `
            <button class="btn-action btn-remove-from-dish" 
                    onclick='removeIngredientFromDish(${JSON.stringify(item.materialId)}, ${JSON.stringify(item.dishesArray)})' 
                    data-tooltip="🗑️ 从菜谱移除 / Remove&#10;以后都不需要 Never need again&#10;⚠️ 永久生效 Permanent">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
            </button>
            ` : ''}
            ${item.isManual ? `
            <button class="btn-action btn-delete" 
                    onclick="deleteManualItem(${item.manualIndex})" 
                    data-tooltip="删除此手动添加的项目&#10;Delete manually added item">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
            </button>
            ` : ''}
            `}
          </td>
        </tr>
      `;
    });
  }

  html += `
          </tbody>
        </table>
      </div>
    </div>
  `;

  return html;
}

function toggleItemState(itemKey, newState) {
  const currentState = itemStates[itemKey] || 'needed';
  const isPermanent = permanentlyOwnedItems.has(itemKey);
  
  // Simplified "have" state - just toggle between needed and have (temporary, not saved until confirm)
  if (newState === 'have') {
    if (isPermanent) {
      // If permanent, unlock it temporarily (will need to confirm to save)
      permanentlyOwnedItems.delete(itemKey);
      delete itemStates[itemKey];
      showToast("🛒 已移回购物清单 (临时) / Moved to shopping list (temporary)", "success");
    } else if (currentState === 'have') {
      // If already "have", toggle back to needed
      delete itemStates[itemKey];
      showToast("🛒 已移回购物清单 (临时) / Moved to shopping list (temporary)", "success");
    } else {
      // Mark as "have" (temporary)
      itemStates[itemKey] = 'have';
      showToast("✓ 标记为已有 (临时) / Marked as already have (temporary)", "success");
    }
  } else if (newState === 'confirmed') {
    // Clicking confirm button
    if (isPermanent || currentState === 'have') {
      // Moving from "already have" back to "need to buy"
      if (isPermanent) {
        permanentlyOwnedItems.delete(itemKey);
      }
      delete itemStates[itemKey]; // Reset to default "needed" state
      showToast("🛒 已移回购物清单 (临时) / Moved to shopping list (temporary)", "success");
    } else if (currentState === 'confirmed') {
      // If already confirmed, reset to 'needed'
      delete itemStates[itemKey];
      showToast("已恢复 (临时) / Restored (temporary)", "success");
    } else {
      // Mark as confirmed
      itemStates[itemKey] = 'confirmed';
      showToast("✓ 确认购买 (临时) / Confirmed (temporary)", "success");
    }
  } else {
    // Other states: Toggle logic
    if (currentState === newState) {
      delete itemStates[itemKey];
      showToast("已恢复 (临时) / Restored (temporary)", "success");
    } else {
      itemStates[itemKey] = newState;
      showToast("状态已更新 (临时) / State updated (temporary)", "success");
    }
  }
  
  combineMaterials();
}

function togglePermanentState(itemKey) {
  if (permanentlyOwnedItems.has(itemKey)) {
    // Remove from permanent list
    permanentlyOwnedItems.delete(itemKey);
    delete itemStates[itemKey]; // Also clear any temporary state
    savePermanentItems();
    showToast("已解除永久标记 / Removed from always-have list", "success");
  } else {
    // Add to permanent list
    permanentlyOwnedItems.add(itemKey);
    itemStates[itemKey] = 'have'; // Set to "have" state
    savePermanentItems();
    showToast("🔒 永久标记为已有 / Permanently marked as always have", "success");
  }
  
  combineMaterials();
}

function confirmAllMaterials() {
  // Get all items currently in "Already Have" state and mark as permanent
  let alreadyHaveCount = 0;
  
  Object.keys(itemStates).forEach(itemKey => {
    if (itemStates[itemKey] === 'have' && !permanentlyOwnedItems.has(itemKey)) {
      // Mark as permanent
      permanentlyOwnedItems.add(itemKey);
      alreadyHaveCount++;
    }
  });
  
  // Count items with other state changes
  let otherStateChanges = Object.keys(itemStates).filter(key => itemStates[key] !== 'have').length;
  
  // Count removed ingredients from dishes
  let removedIngredientsCount = 0;
  Object.keys(removedIngredientsFromDishes).forEach(dishName => {
    removedIngredientsCount += removedIngredientsFromDishes[dishName].length;
  });
  
  if (alreadyHaveCount === 0 && removedIngredientsCount === 0 && otherStateChanges === 0) {
    showToast("⚠️ 没有需要确认的材料 / No materials to confirm", "warning");
    return;
  }
  
  // Save all current states to localStorage
  savePermanentItems(); // Save permanent items
  saveItemStates(); // Save temporary item states
  saveRemovedIngredients(); // Save removed ingredients
  
  let message = '✅ 已永久保存 / Permanently Saved:\n';
  if (alreadyHaveCount > 0) {
    message += `• ${alreadyHaveCount} 项永久已有 / items as permanently owned\n`;
  }
  if (otherStateChanges > 0) {
    message += `• ${otherStateChanges} 项状态变更 / item state changes\n`;
  }
  if (removedIngredientsCount > 0) {
    message += `• ${removedIngredientsCount} 项从菜谱移除 / items removed from recipes\n`;
  }
  
  showToast(message, "success");
  combineMaterials();
}

// Save item states to localStorage
function saveItemStates() {
  localStorage.setItem('itemStates', JSON.stringify(itemStates));
}

// Load item states from localStorage
function loadItemStates() {
  const saved = localStorage.getItem('itemStates');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      Object.assign(itemStates, parsed);
      console.log('Loaded item states from localStorage:', Object.keys(itemStates).length, 'items');
    } catch (e) {
      console.error('Failed to parse item states from localStorage:', e);
    }
  }
}

function removeIngredientFromDish(materialId, dishNames) {
  // Show confirmation dialog
  const dishList = dishNames.join(', ');
  const material = getMaterialById(materialId);
  const materialName = material ? material.nameCn : materialId;
  
  const confirmed = confirm(
    `确定要从以下菜谱中永久移除"${materialName}"吗？\n` +
    `Permanently remove "${materialName}" from these dishes?\n\n` +
    `菜品 / Dishes: ${dishList}\n\n` +
    `此操作不可撤销 / This cannot be undone.`
  );
  
  if (!confirmed) return;
  
  // Remove ingredient from each dish
  dishNames.forEach(dishName => {
    if (!removedIngredientsFromDishes[dishName]) {
      removedIngredientsFromDishes[dishName] = [];
    }
    if (!removedIngredientsFromDishes[dishName].includes(materialId)) {
      removedIngredientsFromDishes[dishName].push(materialId);
    }
  });
  
  saveRemovedIngredients();
  combineMaterials();
  showToast(`🚫 已从菜谱中移除 / Removed from dish recipe permanently`, "success");
}

function restoreIngredientToDish(materialId, dishNameOrArray) {
  const material = getMaterialById(materialId);
  const materialName = material ? material.nameCn : materialId;
  
  // Handle both single dish name (string) and array of dish names
  const dishNames = Array.isArray(dishNameOrArray) ? dishNameOrArray : [dishNameOrArray];
  const dishNamesStr = dishNames.join(', ');
  
  const confirmed = confirm(
    `确定要恢复"${materialName}"到"${dishNamesStr}"吗？\n` +
    `Restore "${material ? material.nameEn : materialId}" to "${dishNamesStr}"?`
  );
  
  if (!confirmed) return;
  
  // Remove from removed list for each dish
  dishNames.forEach(dishName => {
    if (removedIngredientsFromDishes[dishName]) {
      removedIngredientsFromDishes[dishName] = removedIngredientsFromDishes[dishName].filter(id => id !== materialId);
      if (removedIngredientsFromDishes[dishName].length === 0) {
        delete removedIngredientsFromDishes[dishName];
      }
    }
    
    // Add back to dish's materialIds
    const dish = DISHES.find(d => d.name === dishName);
    if (dish && !dish.materialIds.includes(materialId)) {
      dish.materialIds.push(materialId);
    }
  });
  
  // Save changes (temporary - will be permanent after confirmation)
  saveRemovedIngredients();
  saveAddedMaterialsToDishes();
  
  // Check if we're in dish detail modal context
  const modal = document.getElementById("dish-detail-modal");
  const isModalOpen = modal && modal.classList.contains("active");
  
  if (isModalOpen) {
    // Refresh the modal
    closeDishDetail();
    setTimeout(() => {
      const refreshedDish = DISHES.find(d => d.name === dishNames[0]);
      if (refreshedDish) {
        openDishDetail(refreshedDish);
      }
    }, 100);
  } else {
    // Called from grocery list - refresh the grocery list
    combineMaterials();
  }
  
  showToast(`✅ 已恢复到菜谱 (临时) / Restored to recipe (temporary)`, "success");
}

function openAddItemModal() {
  const modal = document.getElementById('add-item-modal');
  if (!modal) {
    createAddItemModal();
  } else {
    modal.style.display = 'flex';
  }
}

function closeAddItemModal() {
  const modal = document.getElementById('add-item-modal');
  if (modal) {
    modal.style.display = 'none';
    // Remove modal from DOM to clean up
    modal.remove();
  }
}

function createAddItemModal() {
  // Check if there are selected dishes
  if (dinnerSelection.length === 0) {
    showToast("请先添加菜品到晚餐计划 / Please add dishes to dinner plan first", "warning");
    return;
  }

  // Generate dish options
  const dishOptions = dinnerSelection.map(dish => 
    `<option value="${dish.name}">${dish.name}</option>`
  ).join('');

  const modalHTML = `
    <div id="add-item-modal" class="add-item-modal">
      <div class="add-item-content">
        <h2>添加购物项目 / Add Shopping Item</h2>
        <form id="add-item-form" onsubmit="submitManualItem(event)">
          <div class="form-group">
            <label for="item-name-cn">中文名称 / Chinese Name *</label>
            <input type="text" id="item-name-cn" required placeholder="例如：酱油">
          </div>
          <div class="form-group">
            <label for="item-name-en">English Name</label>
            <input type="text" id="item-name-en" placeholder="e.g., Soy Sauce">
          </div>
          <div class="form-group">
            <label for="item-dishes">用于菜品 / Used in Dishes *</label>
            <select id="item-dishes" required>
              <option value="">-- 选择菜品 / Select Dish --</option>
              ${dishOptions}
            </select>
            <p class="helper-text">只能选择已添加到晚餐计划的菜品 / Only dishes in dinner plan available</p>
          </div>
          <div class="form-group">
            <label for="item-store">商店 / Store *</label>
            <select id="item-store" required>
              <option value="Whole Foods">Whole Foods / 全食超市</option>
              <option value="Safeway">Safeway / 西夫韦</option>
              <option value="Ranch99">Ranch 99 / 大华超市</option>
              <option value="Trader Joe's">Trader Joe's / 乔氏超市</option>
            </select>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn-submit">添加 / Add</button>
            <button type="button" class="btn-cancel" onclick="closeAddItemModal()">取消 / Cancel</button>
          </div>
        </form>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  document.getElementById('add-item-modal').style.display = 'flex';
}

function submitManualItem(event) {
  event.preventDefault();
  
  const nameCn = document.getElementById('item-name-cn').value.trim();
  const nameEn = document.getElementById('item-name-en').value.trim();
  const dishName = document.getElementById('item-dishes').value.trim();
  const store = document.getElementById('item-store').value;
  
  if (!nameCn || !dishName) {
    showToast("请填写必填项 / Please fill required fields", "warning");
    return;
  }

  // Generate unique ID for the new material
  const materialId = `manual-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // Create new material object
  const newMaterial = {
    id: materialId,
    nameCn: nameCn,
    nameEn: nameEn || nameCn,
    brand: "手动添加 / Manual",
    store: store,
    price: 0.00,
    unit: "N/A",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-size='16' font-family='Arial'%3E" + encodeURIComponent(nameCn) + "%3C/text%3E%3C/svg%3E",
    isManuallyAdded: true
  };

  // Add to global MATERIALS array
  if (window.DATA && window.DATA.MATERIALS) {
    window.DATA.MATERIALS.push(newMaterial);
  }

  // Find the dish in dinner selection and add material to its recipe
  const dinnerDish = dinnerSelection.find(d => d.name === dishName);
  if (dinnerDish) {
    if (!dinnerDish.materialIds.includes(materialId)) {
      dinnerDish.materialIds.push(materialId);
    }
  }
  
  // Also update the original dish in DISHES array
  const originalDish = DISHES.find(d => d.name === dishName);
  if (originalDish) {
    if (!originalDish.materialIds.includes(materialId)) {
      originalDish.materialIds.push(materialId);
    }
  }

  // Save to localStorage for persistence
  saveManualMaterials();
  saveAddedMaterialsToDishes();

  closeAddItemModal();
  combineMaterials();
  
  showToast(`✅ 已添加到${dishName}菜谱 / Added to ${dishName} recipe!`, "success");
}

// Save manual materials to localStorage
function saveManualMaterials() {
  const manualMaterials = window.DATA.MATERIALS.filter(m => m.isManuallyAdded);
  localStorage.setItem('manualMaterials', JSON.stringify(manualMaterials));
}

// Load manual materials from localStorage on page load
function loadManualMaterials() {
  const saved = localStorage.getItem('manualMaterials');
  if (saved && window.DATA && window.DATA.MATERIALS) {
    const manualMaterials = JSON.parse(saved);
    // Add back manual materials that aren't already in the array
    manualMaterials.forEach(material => {
      if (!window.DATA.MATERIALS.find(m => m.id === material.id)) {
        window.DATA.MATERIALS.push(material);
      }
    });
  }
}

// Save added materials to dishes (modifications to recipes)
function saveAddedMaterialsToDishes() {
  const addedMaterials = {};
  
  // Store which manual materials were added to which dishes
  DISHES.forEach(dish => {
    const manualMaterialIds = dish.materialIds.filter(id => id.startsWith('manual-'));
    if (manualMaterialIds.length > 0) {
      addedMaterials[dish.name] = manualMaterialIds;
    }
  });
  
  localStorage.setItem('addedMaterialsToDishes', JSON.stringify(addedMaterials));
}

// Load added materials to dishes on page load
function loadAddedMaterialsToDishes() {
  const saved = localStorage.getItem('addedMaterialsToDishes');
  if (saved) {
    const addedMaterials = JSON.parse(saved);
    
    // Add manual material IDs back to dishes
    Object.entries(addedMaterials).forEach(([dishName, materialIds]) => {
      const dish = DISHES.find(d => d.name === dishName);
      if (dish) {
        materialIds.forEach(materialId => {
          if (!dish.materialIds.includes(materialId)) {
            dish.materialIds.push(materialId);
          }
        });
      }
    });
  }
}

function deleteManualItem(index) {
  if (confirm('确定要删除这个项目吗？ / Delete this item?')) {
    manualGroceryItems.splice(index, 1);
    combineMaterials();
    showToast("已删除 / Item deleted", "success");
  }
}

function handleAddDish() {
  const selectedDish = activeDish;
  if (!selectedDish) {
    showToast("请先选择一道菜 / Please select a dish first", "warning");
    return;
  }
  
  if (dinnerSelection.some((dish) => dish.name === selectedDish.name)) {
    showToast("⚠️ 已添加过此菜 / Already in your dinner plan", "warning");
    return;
  }
  
  dinnerSelection.push(selectedDish);
  updateSelectedDishes();
  showToast(`已成功添加：${selectedDish.name} / Successfully added!`, "success");
}

function handleClearDinner() {
  if (dinnerSelection.length === 0) {
    showToast("晚餐计划已经是空的 / Dinner plan is already empty", "warning");
    return;
  }
  
  dinnerSelection.length = 0;
  updateSelectedDishes();
  showToast("已清空晚餐计划 / Dinner plan cleared", "success");
}

function loadData() {
  const data = window.DATA || { DISHES: [], MATERIALS: [] };
  DISHES = Array.isArray(data.DISHES) ? data.DISHES : [];
  MATERIALS = Array.isArray(data.MATERIALS) ? data.MATERIALS : [];
  console.log('Loaded DISHES:', DISHES.length, 'MATERIALS:', MATERIALS.length);
}

function initPage() {
  console.log('=== initPage() called ===');
  loadData();
  console.log('After loadData - DISHES:', DISHES);
  console.log('After loadData - MATERIALS:', MATERIALS.length);
  console.log('dishGallery element:', dishGallery);
  
  // Load persistent data AFTER DISHES and MATERIALS are loaded
  loadPermanentItems();
  loadItemStates(); // Load saved item states (shopping list, already have, etc.)
  loadRemovedIngredients();
  loadManualMaterials();
  loadAddedMaterialsToDishes();
  console.log('Loaded persistent data');
  
  renderDishCards();

  if (!DISHES.length) {
    console.error('No DISHES found after loadData!');
    stepsList.innerHTML = "";
    materialsGrid.innerHTML = "";
    dishGallery.innerHTML = '<p style="color: red; padding: 20px;">❌ 数据加载失败：未找到菜品数据 / No dishes found. Please check console.</p>';
    return;
  }
  
  console.log('DISHES loaded successfully:', DISHES.length);

  activeDish = DISHES[0];

  // Attach event listeners
  if (clearDinnerButton) {
    clearDinnerButton.addEventListener("click", handleClearDinner);
  }
  
  // Initialize empty state message
  updateSelectedDishes();
}

// Extract time and visual cues from step text
function parseStepDetails(stepText) {
  // Extract time (matches: "15分钟", "3-4 minutes", "5 min", "10分", etc.)
  const timePatterns = [
    /(\d+[-~]\d+)\s*(分钟|分|minutes?|min)/gi,
    /(\d+)\s*(分钟|分|minutes?|min)/gi
  ];
  
  let time = null;
  for (const pattern of timePatterns) {
    const match = stepText.match(pattern);
    if (match) {
      time = match[0];
      break;
    }
  }
  
  // Extract visual cues (matches: "until golden", "when tender", "至金黄", etc.)
  const cuePatterns = [
    /until\s+[\w\s]+/gi,
    /when\s+[\w\s]+/gi,
    /至[\u4e00-\u9fa5]+/g,
    /变[\u4e00-\u9fa5]+/g,
    /about\s+\d+[-~]\d+\s+minutes/gi
  ];
  
  let cue = null;
  for (const pattern of cuePatterns) {
    const match = stepText.match(pattern);
    if (match) {
      // Get the first match and limit length
      cue = match[0].slice(0, 30);
      break;
    }
  }
  
  return { time, cue };
}

function formatStepWithDetails(stepText) {
  const { time, cue } = parseStepDetails(stepText);
  
  let html = '';
  
  if (time) {
    html += `<span class="step-time">⏱️ ${time}</span>`;
  }
  
  html += `<span class="step-text">${stepText}</span>`;
  
  if (cue) {
    html += `<span class="step-cue">👁️ ${cue}</span>`;
  }
  
  return html;
}

// Dish Detail Modal Functions
function openDishDetail(dish) {
  const modal = document.getElementById("dish-detail-modal");
  const body = document.getElementById("dish-detail-body");
  
  // Get removed ingredients for this dish
  const removedIds = removedIngredientsFromDishes[dish.name] || [];
  
  // Build ingredients list (active ingredients only)
  const ingredientsHTML = dish.materialIds.map(id => {
    const material = getMaterialById(id);
    if (!material) return '';
    return `
      <div class="ingredient-item">
        <span class="ingredient-name">${material.nameCn} / ${material.nameEn}</span>
        <span class="ingredient-amount">${material.unit || 'as needed'}</span>
      </div>
    `;
  }).filter(html => html).join('');
  
  // Build removed ingredients list
  const removedIngredientsHTML = removedIds.length > 0 ? removedIds.map(id => {
    const material = getMaterialById(id);
    if (!material) return '';
    return `
      <div class="ingredient-item removed-ingredient-item">
        <span class="ingredient-name">${material.nameCn} / ${material.nameEn}</span>
        <button class="btn-restore-ingredient" 
                onclick='restoreIngredientToDish("${id}", "${dish.name.replace(/'/g, "\\'")}");event.stopPropagation();'
                title="恢复到菜谱 / Restore to recipe">
          ↩️ 恢复
        </button>
      </div>
    `;
  }).filter(html => html).join('') : '';
  
  // Build steps by category with time and visual cues
  const stepCategories = [
    { key: 'preparation', title: '0. 事前准备 / Preparation beforehand', icon: '0', time: '10-15 min' },
    { key: 'main', title: '1. 主要制作 / Main part', icon: '1', time: '15-20 min' },
    { key: 'side', title: '2. 配菜制作 / Side part', icon: '2', time: '5-10 min' },
    { key: 'seasoning', title: '3. 调味收尾 / Seasoning and sauce', icon: '3', time: '3-5 min' }
  ];
  
  const stepsHTML = stepCategories.map(category => {
    const steps = dish.steps[category.key];
    if (!steps || steps.length === 0) return '';
    
    return `
      <div class="step-category">
        <h3 class="step-category-title">
          <span class="step-category-number">${category.icon}</span>
          ${category.title}
          <span class="step-time" style="margin-left: 12px;">${category.time}</span>
        </h3>
        <ol class="step-list">
          ${steps.map(step => `<li>${formatStepWithDetails(step)}</li>`).join('')}
        </ol>
      </div>
    `;
  }).join('');
  
  // Build materials by store - categorized by state
  const materialsByStore = {}; // Active (need to buy)
  const alreadyHaveMaterialsByStore = {}; // Already have
  const removedMaterialsByStore = {}; // Removed from recipe
  
  // Categorize active materials (exclude removed items)
  dish.materialIds.forEach(id => {
    // Skip if this material has been removed from this dish
    if (removedIds.includes(id)) {
      return;
    }
    
    const material = getMaterialById(id);
    if (!material) return;
    
    const itemKey = `material-${id}`;
    const isPermanent = permanentlyOwnedItems.has(itemKey);
    const state = itemStates[itemKey] || 'needed';
    
    // Check if already have (temporary or permanent)
    if (state === 'have' || isPermanent) {
      if (!alreadyHaveMaterialsByStore[material.store]) {
        alreadyHaveMaterialsByStore[material.store] = [];
      }
      alreadyHaveMaterialsByStore[material.store].push({
        ...material,
        isPermanent
      });
    } else {
      // Active materials (need to buy)
      if (!materialsByStore[material.store]) {
        materialsByStore[material.store] = [];
      }
      materialsByStore[material.store].push(material);
    }
  });
  
  // Build removed materials by store
  if (removedIds.length > 0) {
    removedIds.forEach(id => {
      const material = getMaterialById(id);
      if (material) {
        if (!removedMaterialsByStore[material.store]) {
          removedMaterialsByStore[material.store] = [];
        }
        removedMaterialsByStore[material.store].push(material);
      }
    });
  }
  
  // Get all unique stores
  const allStores = new Set([
    ...Object.keys(materialsByStore),
    ...Object.keys(alreadyHaveMaterialsByStore),
    ...Object.keys(removedMaterialsByStore)
  ]);
  
  // Build store cards with all three subsections
  const materialsHTML = Array.from(allStores).map(store => {
    const storeLabel = STORE_LABELS[store] || store;
    const activeItems = materialsByStore[store] || [];
    const haveItems = alreadyHaveMaterialsByStore[store] || [];
    const removedItems = removedMaterialsByStore[store] || [];
    
    return `
      <div class="material-store-card ${activeItems.length === 0 ? 'no-active-items' : ''}">
        <h4>${storeLabel}</h4>
        
        ${activeItems.length > 0 ? `
          <ul>
            ${activeItems.map(item => `
              <li>${item.nameCn} / ${item.nameEn} - $${item.price.toFixed(2)}</li>
            `).join('')}
          </ul>
        ` : '<p class="no-items-message">这次不需要购买 / Nothing to buy this time</p>'}
        
        ${haveItems.length > 0 ? `
          <div class="already-have-materials-in-store">
            <h5>✓ 已有 / Already Have</h5>
            <ul class="already-have-materials-list">
              ${haveItems.map(item => `
                <li class="already-have-material-item">
                  <span style="color: #5a9a5a;">
                    ${item.nameCn} / ${item.nameEn} - $${item.price.toFixed(2)}
                    ${item.isPermanent ? ' 🔒' : ''}
                  </span>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}
        
        ${removedItems.length > 0 ? `
          <div class="removed-materials-in-store">
            <h5>🗑️ 已移除 / Removed</h5>
            <ul class="removed-materials-list">
              ${removedItems.map(item => `
                <li class="removed-material-item">
                  <span style="text-decoration: line-through; color: #999;">
                    ${item.nameCn} / ${item.nameEn} - $${item.price.toFixed(2)}
                  </span>
                  <button class="btn-restore-small" 
                          onclick='restoreIngredientToDish("${item.id}", "${dish.name.replace(/'/g, "\\'")}");event.stopPropagation();'
                          title="恢复 / Restore">
                    ↩️
                  </button>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
  
  const allMaterialsHTML = materialsHTML;
  
  body.innerHTML = `
    <div class="dish-detail-hero">
      <img src="${dish.image}" alt="${dish.name}" onerror="this.src='${createFallbackImage(dish.name)}'">
    </div>
    <div class="dish-detail-body">
      <h1 class="dish-detail-title">${dish.name}</h1>
      <p class="dish-detail-tagline">${dish.tagline}</p>
      
      <div class="dish-detail-meta">
        <div class="dish-meta-item">
          <span class="dish-meta-icon">⏱️</span>
          <span>30-45 min</span>
        </div>
        <div class="dish-meta-item">
          <span class="dish-meta-icon">👥</span>
          <span>4 servings / 4人份</span>
        </div>
      </div>
      
      <div class="dish-ingredients">
        <h2 class="dish-section-title">Ingredients / 食材</h2>
        <div class="ingredients-grid">
          ${ingredientsHTML}
        </div>
      </div>
      
      ${removedIngredientsHTML ? `
      <div class="dish-removed-ingredients">
        <h2 class="dish-section-title removed-section-title">
          🗑️ 已移除的材料 / Removed Ingredients
          <span class="section-subtitle">这些材料已从此菜谱中移除 / Removed from this recipe</span>
        </h2>
        <div class="removed-ingredients-grid">
          ${removedIngredientsHTML}
        </div>
      </div>
      ` : ''}
      
      <div class="dish-steps">
        <h2 class="dish-section-title">Key Steps / 关键步骤</h2>
        ${stepsHTML}
      </div>
      
      <div class="dish-materials-section">
        <h2 class="dish-section-title">Materials by Store / 按超市分类的材料</h2>
        <div class="materials-store-grid">
          ${allMaterialsHTML}
        </div>
      </div>
      
      <div class="dish-detail-actions">
        <button class="btn-add-dinner" onclick="addDishFromDetail('${dish.name.replace(/'/g, "\\'")}')">
          加入晚餐 / Add to Dinner
        </button>
        <button class="btn-close-detail" onclick="closeDishDetail()">
          关闭 / Close
        </button>
      </div>
    </div>
  `;
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeDishDetail() {
  const modal = document.getElementById("dish-detail-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function addDishFromDetail(dishName) {
  const dish = findDishByName(dishName);
  if (!dish) return;
  
  if (dinnerSelection.some(d => d.name === dish.name)) {
    showToast("⚠️ 已添加过此菜 / Already in your dinner plan", "warning");
    return;
  }
  
  dinnerSelection.push(dish);
  updateSelectedDishes();
  
  // Close modal first
  closeDishDetail();
  
  // Show success notification after a short delay
  setTimeout(() => {
    showToast(`已成功添加：${dish.name} / Successfully added!`, "success");
  }, 300);
}

// Toast notification function
function showToast(message, type = "success") {
  const toast = document.getElementById("toast-notification");
  const toastMessage = toast.querySelector(".toast-message");
  const toastIcon = toast.querySelector(".toast-icon");
  
  // Set icon based on type
  if (type === "success") {
    toastIcon.textContent = "✅";
    toast.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  } else if (type === "warning") {
    toastIcon.textContent = "⚠️";
    toast.style.background = "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
  }
  
  toastMessage.textContent = message;
  
  // Show toast
  toast.classList.add("show");
  
  // Hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  const modal = document.getElementById("dish-detail-modal");
  if (e.target === modal) {
    closeDishDetail();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDishDetail();
  }
});

window.addEventListener("DOMContentLoaded", initPage);
