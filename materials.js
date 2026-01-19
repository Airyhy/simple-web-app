function initPage() {
  const materialsGrid = document.getElementById("materials-grid");
  const storeFilter = document.getElementById("store-filter");
  const storeButtons = storeFilter.querySelectorAll(".store-button");

  const DATA = window.DATA || { MATERIALS: [] };
  const { MATERIALS } = DATA;

  console.log('Materials.js initializing, found materials:', MATERIALS.length);

  const STORE_LABELS = {
    "Whole Foods": "Whole Foods / 全食超市",
    Safeway: "Safeway / 西夫韦",
    Ranch99: "Ranch 99 / 大华超市"
  };

  let currentStore = "all";

  function formatPrice(price) {
    return `$${price.toFixed(2)}`;
  }

  function renderMaterialsGrid(items) {
    if (!items || items.length === 0) {
      materialsGrid.innerHTML =
        "<p>未加载到材料数据，请刷新页面 / No materials data loaded, please refresh.</p>";
      return;
    }

    materialsGrid.innerHTML = items
      .map(
        (item) => `
        <article class="material-card" data-store="${item.store}">
          <img src="${item.image}" alt="${item.nameEn}" />
          <div class="material-body">
            <h3>${item.nameCn} / ${item.nameEn}</h3>
            <p class="material-brand">${item.brand || ""} ${item.unit ? `· ${item.unit}` : ""}</p>
            <p class="material-store">${STORE_LABELS[item.store] || item.store}</p>
            <p class="material-price">${formatPrice(item.price)}</p>
          </div>
        </article>
      `
      )
      .join("");
  }

  function applyFilter(store) {
    currentStore = store;
    const filtered =
      store === "all"
        ? MATERIALS
        : MATERIALS.filter((item) => item.store === store);
    renderMaterialsGrid(filtered);

    // Update active button
    storeButtons.forEach(btn => {
      if (btn.dataset.store === store) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // Add click handlers to buttons
  storeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const store = button.dataset.store;
      applyFilter(store);
    });
  });

  renderMaterialsGrid(MATERIALS);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPage);
} else {
  initPage();
}
