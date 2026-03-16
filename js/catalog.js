// ===== PRODUCTS DATA =====
const products = [
  {
    id: 1,
    name: 'Air Zoom Running Pro',
    brand: 'Nike',
    category: 'Calzado Deportivo',
    categoryKey: 'calzado',
    price: 89990,
    oldPrice: 119990,
    badge: 'Nuevo',
    desc: 'Zapatilla de running de alta performance con tecnología Air Zoom. Suela de goma con grip extremo, plantilla ergonómica removible y upper de mesh transpirable.',
    features: ['Tecnología Air Zoom', 'Upper mesh transpirable', 'Suela antideslizante', 'Plantilla ergonómica'],
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    whatsapp: '5493515000000'
  },
  {
    id: 2,
    name: 'Ultraboost Speed X',
    brand: 'Adidas',
    category: 'Calzado Deportivo',
    categoryKey: 'calzado',
    price: 95000,
    oldPrice: null,
    badge: 'Destacado',
    desc: 'La tecnología Boost devuelve energía en cada paso. Diseño aerodinámico Y2K con detalles en cromo y upper de Primeknit adaptativo.',
    features: ['Entresuela Boost', 'Primeknit adaptativo', 'Continental rubber', 'Peso ultraligero'],
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80',
    whatsapp: '5493515000000'
  },
  {
    id: 3,
    name: 'Crew Runner Elite',
    brand: 'Puma',
    category: 'Calzado Deportivo',
    categoryKey: 'calzado',
    price: 67000,
    oldPrice: 82000,
    badge: 'Oferta',
    desc: 'Running trail con amortiguación NITRO. Ideal para superficies mixtas, con suela Grip Control y cierre BOA precision.',
    features: ['Tecnología NITRO', 'Grip Control', 'Trail & Road', 'Sistema BOA'],
    img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80',
    whatsapp: '5493515000000'
  },
  {
    id: 4,
    name: 'Cloud Slide Pro',
    brand: 'Nike',
    category: 'Playero',
    categoryKey: 'playero',
    price: 28000,
    oldPrice: null,
    badge: null,
    desc: 'Ojotas premium con tira ajustable y plantilla de foam memory. Perfectas para playa, pileta o uso casual.',
    features: ['Foam memory', 'Tira ajustable', 'Resistente al agua', 'Antideslizante'],
    img: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=600&q=80',
    whatsapp: '5493515000000'
  },
  {
    id: 5,
    name: 'Classic Clog Arctic',
    brand: 'Crocs',
    category: 'Playero',
    categoryKey: 'playero',
    price: 32500,
    oldPrice: 40000,
    badge: 'HotSale',
    desc: 'El icónico clásico en nueva colorway Artic Blue. Material Croslite™ ultraliviano, ventilación superior y sistema de hebilla giratoria.',
    features: ['Material Croslite™', 'Ventilación 360°', 'Sistema giratoria', 'Ultra liviano'],
    img: 'https://images.unsplash.com/photo-1620155142340-4ae8ad9f6e82?w=600&q=80',
    whatsapp: '5493515000000'
  },
  {
    id: 6,
    name: 'DryFit Run Tee',
    brand: 'Nike',
    category: 'Remeras',
    categoryKey: 'remeras',
    price: 18500,
    oldPrice: null,
    badge: null,
    desc: 'Remera de running con tecnología Dri-FIT que aleja la humedad de la piel. Corte aerodinámico y costuras planas para máxima libertad de movimiento.',
    features: ['Tecnología Dri-FIT', 'Corte aerodinámico', 'Costuras planas', 'UPF 40+'],
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    whatsapp: '5493515000000'
  },
  {
    id: 7,
    name: 'Buzo Climawarm Pro',
    brand: 'Adidas',
    category: 'Buzos',
    categoryKey: 'buzos',
    price: 52000,
    oldPrice: 68000,
    badge: 'Oferta',
    desc: 'Buzo con tecnología COLD.RDY que regula tu temperatura corporal. Tejido doble con interior polar y acabado water-repellent.',
    features: ['COLD.RDY tech', 'Tejido doble', 'Water-repellent', 'Capucha ajustable'],
    img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80',
    whatsapp: '5493515000000'
  },
  {
    id: 8,
    name: 'Cycling Bib Pro',
    brand: 'Kappa',
    category: 'Ciclismo',
    categoryKey: 'ciclismo',
    price: 43000,
    oldPrice: null,
    badge: 'Nuevo',
    desc: 'Pantalón ciclista con tiradores elásticos y acolchado 3D anatómico. Tejido compresivo Lycra Pro con paneles de malla.',
    features: ['Acolchado 3D', 'Tiradores elásticos', 'Lycra Pro', 'Costuras flatlock'],
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80',
    whatsapp: '5493515000000'
  },
  {
    id: 9,
    name: 'Sprint Short Flex',
    brand: 'Puma',
    category: 'Shorts',
    categoryKey: 'shorts',
    price: 24000,
    oldPrice: 30000,
    badge: null,
    desc: 'Short deportivo con tejido Dry Cell de secado ultra rápido. Diseño Y2K con insert lateral reflectivo y cintura ajustable.',
    features: ['Tejido Dry Cell', 'Insert reflectivo', 'Bolsillo con cierre', 'Forro interno'],
    img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80',
    whatsapp: '5493515000000'
  },
  {
    id: 10,
    name: 'Vaporfly Street',
    brand: 'Nike',
    category: 'Calzado Deportivo',
    categoryKey: 'calzado',
    price: 112000,
    oldPrice: null,
    badge: 'Premium',
    desc: 'Lo mejor de la tecnología Nike para calle. Placa de carbono ZoomX, upper Vaporweave y la amortiguación más eficiente del mercado.',
    features: ['Placa de carbono', 'Foam ZoomX', 'Upper Vaporweave', 'Para competencia'],
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
    whatsapp: '5493515000000'
  },
  {
    id: 11,
    name: 'Penalty Training Set',
    brand: 'Penalty',
    category: 'Remeras',
    categoryKey: 'remeras',
    price: 31000,
    oldPrice: 38000,
    badge: 'Oferta',
    desc: 'Remera de entrenamiento técnico con tejido micro perforado. Ideal para fútbol y deportes de equipo con sistema de ventilación lateral.',
    features: ['Micro perforado', 'Cuello redondo reforzado', 'Ventilación lateral', 'Secado rápido'],
    img: 'https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?w=600&q=80',
    whatsapp: '5493515000000'
  },
  {
    id: 12,
    name: 'Umbro Ciclista Elite',
    brand: 'Umbro',
    category: 'Ciclismo',
    categoryKey: 'ciclismo',
    price: 38500,
    oldPrice: null,
    badge: null,
    desc: 'Remera ciclista de compresión con paneles de gradiente. Tejido Coolmax que mantiene la temperatura ideal, con bolsillos posteriores.',
    features: ['Compresión graduada', 'Tejido Coolmax', 'Bolsillos traseros', 'Manga corta/larga'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    whatsapp: '5493515000000'
  }
];

// ===== RENDER PRODUCTS =====
const grid = document.getElementById('productsGrid');
const countEl = document.getElementById('productsCount');
let activeFilters = { categories: [], brands: [] };
let searchQuery = '';

function formatPrice(n) {
  return '$' + n.toLocaleString('es-AR');
}

function renderProducts(list) {
  if (!grid) return;
  grid.innerHTML = '';
  if (countEl) countEl.textContent = list.length;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="products-empty">
        <div class="products-empty-icon">◇</div>
        <div class="products-empty-title">Sin resultados</div>
        <div class="products-empty-text">Intenta con otros filtros</div>
      </div>`;
    return;
  }

  list.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card animate-in';
    card.style.animationDelay = `${i * 60}ms`;
    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <span class="product-brand-badge">${p.brand}</span>
      </div>
      <div class="product-info">
        <div class="product-cat">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc-short">${p.desc.substring(0, 80)}...</div>
        <div class="product-footer">
          <div class="product-price">
            ${formatPrice(p.price)}
            ${p.oldPrice ? `<span style="font-size:12px;color:var(--steel);text-decoration:line-through;font-family:var(--font-ui);font-weight:400;margin-left:6px;">${formatPrice(p.oldPrice)}</span>` : ''}
          </div>
          <button class="product-btn" onclick="openModal(${p.id})">Ver más</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  // Re-trigger animations
  setTimeout(() => {
    document.querySelectorAll('.animate-in').forEach(el => el.classList.add('visible'));
  }, 50);
}

// ===== FILTER =====
function getFiltered() {
  return products.filter(p => {
    const matchCat = activeFilters.categories.length === 0 ||
      activeFilters.categories.includes(p.categoryKey);
    const matchBrand = activeFilters.brands.length === 0 ||
      activeFilters.brands.includes(p.brand.toLowerCase());
    const matchSearch = searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery) ||
      p.brand.toLowerCase().includes(searchQuery) ||
      p.category.toLowerCase().includes(searchQuery);
    return matchCat && matchBrand && matchSearch;
  });
}

function applyFilters() {
  renderProducts(getFiltered());
}

// Checkboxes
document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', () => {
    const type = cb.dataset.type;
    const val = cb.value;
    if (cb.checked) {
      activeFilters[type].push(val);
    } else {
      activeFilters[type] = activeFilters[type].filter(v => v !== val);
    }
    applyFilters();
  });
});

// Search
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    applyFilters();
  });
}

// Clear
const clearBtn = document.getElementById('clearFilters');
if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    activeFilters = { categories: [], brands: [] };
    searchQuery = '';
    document.querySelectorAll('.filter-option input').forEach(cb => cb.checked = false);
    if (searchInput) searchInput.value = '';
    applyFilters();
  });
}

// Sort
const sortSel = document.getElementById('sortSelect');
if (sortSel) {
  sortSel.addEventListener('change', () => {
    const val = sortSel.value;
    const list = getFiltered();
    if (val === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (val === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (val === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    renderProducts(list);
  });
}

// ===== MODAL =====
const modal = document.getElementById('productModal');

function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p || !modal) return;

  modal.querySelector('#modalImg').src = p.img;
  modal.querySelector('#modalCat').textContent = p.category;
  modal.querySelector('#modalName').textContent = p.name;
  modal.querySelector('#modalBrand').textContent = p.brand;
  modal.querySelector('#modalDesc').textContent = p.desc;
  modal.querySelector('#modalPrice').textContent = formatPrice(p.price);

  const oldPriceEl = modal.querySelector('#modalOldPrice');
  if (p.oldPrice) {
    oldPriceEl.textContent = formatPrice(p.oldPrice);
    oldPriceEl.style.display = 'block';
  } else {
    oldPriceEl.style.display = 'none';
  }

  const features = modal.querySelector('#modalFeatures');
  features.innerHTML = p.features.map(f =>
    `<div class="modal-feature">${f}</div>`
  ).join('');

  const msg = encodeURIComponent(`Hola! Me interesa el producto: *${p.name} - ${p.brand}*\nPrecio: ${formatPrice(p.price)}\n¿Está disponible?`);
  modal.querySelector('#modalBuyBtn').href = `https://wa.me/${p.whatsapp}?text=${msg}`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

window.openModal = openModal;
window.closeModal = closeModal;

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== INIT =====
renderProducts(products);