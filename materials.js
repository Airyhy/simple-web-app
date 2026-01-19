function initPage() {
  const materialsGrid = document.getElementById("materials-grid");
  const storeFilter = document.getElementById("store-filter");
  const storeButtons = storeFilter.querySelectorAll(".sidebar-filter");
  
  // Add status filter to section links
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update active state
      document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // Set status filter from data attribute
      currentStatus = link.dataset.status || 'all';
      
      // Apply filters
      applyFilters();
    });
  });

  // Check if data is loaded
  if (!window.DATA || !window.DATA.MATERIALS) {
    console.error('Materials.js: DATA not loaded yet!');
    materialsGrid.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; color: #d32f2f;">
        <div style="font-size: 3rem; margin-bottom: 16px;">⚠️</div>
        <h3 style="font-size: 1.2rem; margin: 0 0 8px 0;">数据未加载 / Data Not Loaded</h3>
        <p style="font-size: 0.9rem; color: #9e9186;">请刷新页面 / Please refresh the page</p>
        <button onclick="location.reload()" style="margin-top: 20px; padding: 12px 24px; background: linear-gradient(135deg, #4a3f35 0%, #2c2416 100%); color: white; border: none; border-radius: 10px; font-weight: 600; cursor: pointer;">
          🔄 刷新页面 / Refresh Page
        </button>
      </div>
    `;
    return;
  }

  const DATA = window.DATA;
  
  // Load manual materials from localStorage
  const savedManualMaterials = localStorage.getItem('manualMaterials');
  if (savedManualMaterials && DATA.MATERIALS) {
    try {
      const manualMaterials = JSON.parse(savedManualMaterials);
      manualMaterials.forEach(material => {
        if (!DATA.MATERIALS.find(m => m.id === material.id)) {
          DATA.MATERIALS.push(material);
        }
      });
    } catch (e) {
      console.error('Error loading manual materials:', e);
    }
  }
  
  const { MATERIALS } = DATA;

  console.log('Materials.js initializing, found materials:', MATERIALS ? MATERIALS.length : 0);
  
  // Validate MATERIALS array
  if (!MATERIALS || MATERIALS.length === 0) {
    console.warn('Materials.js: MATERIALS array is empty');
  }

  const STORE_LABELS = {
    "Whole Foods": "Whole Foods / 全食超市",
    Safeway: "Safeway / 西夫韦",
    Ranch99: "Ranch 99 / 大华超市",
    "Trader Joe's": "Trader Joe's / 乔氏超市"
  };

  // Load removed ingredients from localStorage
  let removedIngredientsFromDishes = {};
  const saved = localStorage.getItem('removedIngredientsFromDishes');
  if (saved) {
    removedIngredientsFromDishes = JSON.parse(saved);
  }

  // Get all removed material IDs
  const allRemovedIds = new Set();
  Object.values(removedIngredientsFromDishes).forEach(ids => {
    ids.forEach(id => allRemovedIds.add(id));
  });

  // Load "already have" items from localStorage
  let permanentlyOwnedItems = new Set();
  const savedPermanent = localStorage.getItem('permanentlyOwnedItems');
  if (savedPermanent) {
    try {
      permanentlyOwnedItems = new Set(JSON.parse(savedPermanent));
    } catch (e) {
      console.error('Failed to parse permanentlyOwnedItems:', e);
    }
  }

  let itemStates = {};
  const savedItemStates = localStorage.getItem('itemStates');
  if (savedItemStates) {
    try {
      itemStates = JSON.parse(savedItemStates);
    } catch (e) {
      console.error('Failed to parse itemStates:', e);
    }
  }

  // Function to check if a material is marked as "already have"
  function isAlreadyHave(materialId) {
    const itemKey = `material-${materialId}`;
    const isPermanent = permanentlyOwnedItems.has(itemKey);
    const state = itemStates[itemKey];
    return isPermanent || state === 'have';
  }

  // Function to check if permanently owned
  function isPermanentlyOwned(materialId) {
    const itemKey = `material-${materialId}`;
    return permanentlyOwnedItems.has(itemKey);
  }

  let currentStore = "all";
  let currentStatus = "all"; // Track current status filter

  function formatPrice(price) {
    return `$${price.toFixed(2)}`;
  }

  function renderMaterialsGrid(items) {
    // Check if data is completely missing (error state)
    if (!items) {
      materialsGrid.innerHTML =
        "<p style='text-align: center; color: #d32f2f; padding: 40px;'>❌ 数据加载失败，请刷新页面 / Data failed to load, please refresh.</p>";
      return;
    }
    
    // Check if filter resulted in no items (normal state)
    if (items.length === 0) {
      const statusMessages = {
        'all': '暂无材料 / No materials available',
        'available': '🎉 没有需要购买的材料！/ No items to buy!',
        'have': '暂无已有材料 / No items marked as owned yet',
        'removed': '暂无移除材料 / No items removed from recipes'
      };
      
      const message = statusMessages[currentStatus] || statusMessages['all'];
      
      materialsGrid.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; color: #8a7f6f;">
          <div style="font-size: 3rem; margin-bottom: 16px;">🔍</div>
          <h3 style="font-size: 1.2rem; color: #5a4f42; margin: 0 0 8px 0;">${message}</h3>
          <p style="font-size: 0.9rem; color: #9e9186;">Try selecting a different filter combination</p>
        </div>
      `;
      return;
    }

    // Split materials into three categories
    const availableMaterials = items.filter(item => 
      !allRemovedIds.has(item.id) && !isAlreadyHave(item.id)
    );
    const alreadyHaveMaterials = items.filter(item => 
      !allRemovedIds.has(item.id) && isAlreadyHave(item.id)
    );
    const removedMaterials = items.filter(item => allRemovedIds.has(item.id));

    let html = '';

    // Need to Buy materials section
    if (availableMaterials.length > 0) {
      html += `
        <div id="need-to-buy" class="materials-section available-section">
          <div class="section-header">
            <div class="section-icon">🛒</div>
            <div class="section-info">
              <h2 class="section-title">Need to Buy / 需要购买</h2>
              <p class="section-count">${availableMaterials.length} items · Items to purchase</p>
            </div>
          </div>
          <div class="materials-grid-inner">
            ${availableMaterials.map(item => renderMaterialCard(item, 'available')).join('')}
          </div>
        </div>
      `;
    }

    // Already Have materials section
    if (alreadyHaveMaterials.length > 0) {
      html += `
        <div id="already-have" class="materials-section already-have-section">
          <div class="section-header">
            <div class="section-icon">🏠</div>
            <div class="section-info">
              <h2 class="section-title">Already Have / 已有</h2>
              <p class="section-count">${alreadyHaveMaterials.length} items · Items you own at home</p>
            </div>
          </div>
          <div class="materials-grid-inner">
            ${alreadyHaveMaterials.map(item => renderMaterialCard(item, 'have')).join('')}
          </div>
        </div>
      `;
    }

    // Removed materials section
    if (removedMaterials.length > 0) {
      html += `
        <div id="removed" class="materials-section removed-section">
          <div class="section-header">
            <div class="section-icon">🗑️</div>
            <div class="section-info">
              <h2 class="section-title">Removed / 已移除</h2>
              <p class="section-count">${removedMaterials.length} items · Removed from dish recipes</p>
            </div>
          </div>
          <div class="materials-grid-inner">
            ${removedMaterials.map(item => renderMaterialCard(item, 'removed')).join('')}
          </div>
        </div>
      `;
    }

    materialsGrid.innerHTML = html;
  }

  function renderMaterialCard(item, status) {
    const isPermanent = isPermanentlyOwned(item.id);
    const dishesUsingMaterial = status === 'removed' ? getDishesUsingMaterial(item.id) : [];
    
    return `
      <article class="material-card card-${status}" data-store="${item.store}">
        ${status === 'have' && isPermanent ? `
          <div class="status-badge permanent-badge">
            🔒 永久已有
          </div>
        ` : status === 'have' ? `
          <div class="status-badge have-badge">
            ✓ 已有
          </div>
        ` : ''}
        <img src="${item.image}" alt="${item.nameEn}" />
        <div class="material-body">
          <h3>${item.nameCn} / ${item.nameEn}</h3>
          <p class="material-brand">${item.brand || ""} ${item.unit ? `· ${item.unit}` : ""}</p>
          <p class="material-store">${STORE_LABELS[item.store] || item.store}</p>
          <p class="material-price">${formatPrice(item.price)}</p>
          ${status === 'removed' ? `
            <div class="removed-info">
              <p class="removed-from">从以下菜谱移除 / Removed from:</p>
              <p class="removed-dishes">${dishesUsingMaterial.join(', ')}</p>
              <button class="btn-restore-material" onclick="restoreMaterial('${item.id}')">
                ↩️ 恢复 / Restore
              </button>
            </div>
          ` : ''}
        </div>
      </article>
    `;
  }

  function getDishesUsingMaterial(materialId) {
    const dishes = [];
    Object.entries(removedIngredientsFromDishes).forEach(([dishName, ids]) => {
      if (ids.includes(materialId)) {
        dishes.push(dishName);
      }
    });
    return dishes;
  }

  window.restoreMaterial = function(materialId) {
    if (!confirm('确定要恢复此材料到所有菜谱吗？\nRestore this ingredient to all recipes?')) {
      return;
    }

    // Remove from all dishes
    Object.keys(removedIngredientsFromDishes).forEach(dishName => {
      removedIngredientsFromDishes[dishName] = removedIngredientsFromDishes[dishName].filter(id => id !== materialId);
      if (removedIngredientsFromDishes[dishName].length === 0) {
        delete removedIngredientsFromDishes[dishName];
      }
    });

    // Save to localStorage
    localStorage.setItem('removedIngredientsFromDishes', JSON.stringify(removedIngredientsFromDishes));

    // Update the removed IDs set
    allRemovedIds.delete(materialId);

    // Re-render
    applyFilter(currentStore);

    // Show confirmation
    alert('✅ 材料已恢复 / Material restored to all recipes');
  };

  function applyFilters() {
    // Filter by store first
    let filtered = currentStore === "all" 
      ? MATERIALS 
      : MATERIALS.filter((item) => item.store === currentStore);
    
    // Then filter by status if needed
    if (currentStatus !== 'all') {
      filtered = filtered.filter(item => {
        const isRemoved = allRemovedIds.has(item.id);
        const hasItem = isAlreadyHave(item.id);
        
        if (currentStatus === 'available') {
          return !isRemoved && !hasItem;
        } else if (currentStatus === 'have') {
          return !isRemoved && hasItem;
        } else if (currentStatus === 'removed') {
          return isRemoved;
        }
        return true;
      });
    }
    
    renderMaterialsGrid(filtered);

    // Update active store button
    storeButtons.forEach(btn => {
      if (btn.dataset.store === currentStore) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }
  
  // Legacy function for backwards compatibility
  function applyFilter(store) {
    currentStore = store;
    applyFilters();
  }

  // Add click handlers to filter pills
  storeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const store = button.dataset.store;
      applyFilter(store);
    });
  });

  renderMaterialsGrid(MATERIALS);
}

// Wait for both DOM and data to be ready
function tryInitPage() {
  console.log('Attempting to initialize materials page...');
  console.log('window.DATA exists:', !!window.DATA);
  console.log('window.DATA.MATERIALS exists:', !!(window.DATA && window.DATA.MATERIALS));
  console.log('MATERIALS count:', window.DATA && window.DATA.MATERIALS ? window.DATA.MATERIALS.length : 0);
  
  if (window.DATA && window.DATA.MATERIALS) {
    initPage();
  } else {
    console.warn('Data not ready yet, retrying in 100ms...');
    setTimeout(tryInitPage, 100);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", tryInitPage);
} else {
  tryInitPage();
}
