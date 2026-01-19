console.log('materials-new.js loading...');

let currentStore = 'all';
let currentStatus = 'all';
let MATERIALS = [];
let allRemovedIds = new Set();
let permanentlyOwnedItems = new Set();
let itemStates = {};

function initPage() {
  console.log('Initializing new materials page...');
  
  // Check if data loaded
  if (!window.DATA || !window.DATA.MATERIALS) {
    console.error('DATA not loaded!');
    return;
  }
  
  MATERIALS = window.DATA.MATERIALS;
  console.log('Loaded materials:', MATERIALS.length);
  
  // Load localStorage data
  loadLocalStorageData();
  
  // Setup event listeners
  setupEventListeners();
  
  // Initial render
  renderAll();
}

function loadLocalStorageData() {
  // Load removed ingredients
  const savedRemoved = localStorage.getItem('removedIngredientsFromDishes');
  if (savedRemoved) {
    const removed = JSON.parse(savedRemoved);
    Object.values(removed).forEach(ids => {
      ids.forEach(id => allRemovedIds.add(id));
    });
  }
  
  // Load permanently owned items
  const savedPermanent = localStorage.getItem('permanentlyOwnedItems');
  if (savedPermanent) {
    permanentlyOwnedItems = new Set(JSON.parse(savedPermanent));
  }
  
  // Load item states
  const savedStates = localStorage.getItem('itemStates');
  if (savedStates) {
    itemStates = JSON.parse(savedStates);
  }
}

function isAlreadyHave(materialId) {
  const itemKey = `material-${materialId}`;
  return permanentlyOwnedItems.has(itemKey) || itemStates[itemKey] === 'have';
}

function setupEventListeners() {
  // Status radio buttons
  document.querySelectorAll('input[name="status"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      currentStatus = e.target.value;
      renderAll();
    });
  });
  
  // Store filter buttons
  document.querySelectorAll('.store-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      document.querySelectorAll('.store-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      currentStore = btn.dataset.store;
      renderAll();
    });
  });
}

function renderAll() {
  const availableMaterials = [];
  const ownedMaterials = [];
  const removedMaterials = [];
  
  MATERIALS.forEach(material => {
    const isRemoved = allRemovedIds.has(material.id);
    const isOwned = isAlreadyHave(material.id);
    
    // Filter by store
    if (currentStore !== 'all' && material.store !== currentStore) {
      return;
    }
    
    // Categorize
    if (isRemoved) {
      removedMaterials.push(material);
    } else if (isOwned) {
      ownedMaterials.push(material);
    } else {
      availableMaterials.push(material);
    }
  });
  
  // Update counts
  updateCounts(availableMaterials.length, ownedMaterials.length, removedMaterials.length);
  
  // Render columns based on status filter
  if (currentStatus === 'all' || currentStatus === 'available') {
    renderColumn('available-grid', availableMaterials, 'available');
  } else {
    document.getElementById('available-grid').innerHTML = '';
  }
  
  if (currentStatus === 'all' || currentStatus === 'owned') {
    renderColumn('owned-grid', ownedMaterials, 'owned');
  } else {
    document.getElementById('owned-grid').innerHTML = '';
  }
  
  if (currentStatus === 'all' || currentStatus === 'removed') {
    renderColumn('removed-grid', removedMaterials, 'removed');
  } else {
    document.getElementById('removed-grid').innerHTML = '';
  }
}

function updateCounts(available, owned, removed) {
  document.getElementById('count-all').textContent = available + owned + removed;
  document.getElementById('count-available').textContent = available;
  document.getElementById('count-owned').textContent = owned;
  document.getElementById('count-removed').textContent = removed;
}

function renderColumn(gridId, items, type) {
  const grid = document.getElementById(gridId);
  
  if (items.length === 0) {
    const messages = {
      'available': { icon: '🎉', text: 'Nothing to buy!' },
      'owned': { icon: '🏠', text: 'No items owned yet' },
      'removed': { icon: '✨', text: 'No items removed' }
    };
    const msg = messages[type];
    grid.innerHTML = `
      <div class="empty-column">
        <div class="empty-column-icon">${msg.icon}</div>
        <div class="empty-column-text">${msg.text}</div>
      </div>
    `;
    return;
  }
  
  grid.innerHTML = items.map(material => createCard(material, type)).join('');
}

function createCard(material, type) {
  const storeColors = {
    'Whole Foods': '#00674f',
    'Safeway': '#e31837',
    'Ranch99': '#ff9500',
    "Trader Joe's": '#007A87'
  };
  
  const storeLabels = {
    'Whole Foods': 'WF',
    'Safeway': 'S',
    'Ranch99': '99',
    "Trader Joe's": 'TJ'
  };
  
  const statusButtons = {
    'available': '<button class="card-status-btn btn-available">Available</button>',
    'owned': '<button class="card-status-btn btn-owned">● Owned</button>',
    'removed': `<button class="card-status-btn btn-restore" onclick="restoreMaterial('${material.id}')">⟲ Restore</button>`
  };
  
  return `
    <div class="material-card-new">
      <img src="${material.image}" alt="${material.nameEn}" />
      <div class="card-store-badge" style="background: ${storeColors[material.store]};">
        ${storeLabels[material.store]}
      </div>
      <div class="card-body-new">
        <h3 class="card-title-new">${material.nameCn} / ${material.nameEn}</h3>
        <p class="card-subtitle-new">${material.brand || ''} ${material.unit ? '· ' + material.unit : ''}</p>
        <div class="card-store-tag">${material.store}</div>
        <div class="card-price-new">$${material.price.toFixed(2)}</div>
        ${statusButtons[type]}
      </div>
    </div>
  `;
}

window.restoreMaterial = function(materialId) {
  if (confirm('Restore this material to all recipes?')) {
    // Remove from localStorage
    const savedRemoved = localStorage.getItem('removedIngredientsFromDishes');
    if (savedRemoved) {
      const removed = JSON.parse(savedRemoved);
      Object.keys(removed).forEach(dishName => {
        removed[dishName] = removed[dishName].filter(id => id !== materialId);
        if (removed[dishName].length === 0) {
          delete removed[dishName];
        }
      });
      localStorage.setItem('removedIngredientsFromDishes', JSON.stringify(removed));
    }
    
    // Update local state
    allRemovedIds.delete(materialId);
    
    // Re-render
    renderAll();
    alert('✅ Material restored!');
  }
};

// Wait for data to load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initPage, 100);
  });
} else {
  setTimeout(initPage, 100);
}
