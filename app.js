/* Kyboot Shop � app.js
   Single-file product data + UI logic
*/

/* ---------- Sample product data ----------
   Edit this array to add/remove products.
   Each product: id,title,price,cat  document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (state.cart.length === 0) {
      showNotification('Your cart is empty.', 'error');
      return;
    }
    // Mock checkout – in a real app you'd connect to payment & backend
    const total = calcSubtotal();
    if (confirm(`Proceed to checkout? Subtotal: ${total.toFixed(2)} QAR`)) {
      // Clear cart after mock checkout
      state.cart = [];
      saveCart();
      renderCart();
      toggleCartPanel(false);
      showNotification('Thank you! Your order has been placed (mock).', 'success');
    }
  });n,image
-----------------------------------------*/
const PRODUCTS = [
  {
    id: 'kb-001',
    title: 'Kyboot CloudRunner Sneaker',
    price: 349,
    category: 'Sneakers',
    description: 'Lightweight everyday sneaker with ergonomic sole and breathable mesh.',
    image: 'https://us.kybun.swiss/cdn/shop/files/66d9800507301KY512A_a_46f42217-8c04-4d81-b455-7949bbf7f4bc.png?v=1754918322&width=533'
  },
  {
    id: 'kb-002',
    title: 'Kyboot TrailMaster',
    price: 429,
    category: 'Boots',
    description: 'Rugged trail boot with reinforced toe and weather-resistant membrane.',
    image: 'https://shoewarehousenaples.com/cdn/shop/files/AM189A_Meilen_black_grey_a.png?v=1715849272&width=2048'
  },
  {
    id: 'kb-003',
    title: 'Kyboot Comfort Walk Loafer',
    price: 279,
    category: 'Casual',
    description: 'Smart-casual slip-on with memory-foam footbed for all-day comfort.',
    image: 'https://ch.kybun.swiss/cdn/shop/files/67448accd0c1665faed187531eAM001A_a.png?v=1754918245&width=1946'
  },
  {
    id: 'kb-004',
    title: 'Kyboot Mens Ruty White sneakers',
    price: 189,
    category: 'Kids',
    description: 'Colorful, flexible shoes for kids with easy-fastening straps.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNb9aQ4cH8VZB_AKDdCUqNWcyHM15Q9CbolQ&s'
  },
  {
    id: 'kb-005',
    title: 'Kyboot Sport Runner',
    price: 399,
    category: 'Running',
    description: 'Performance running shoe with cushioned midsole and responsive rebound.',
    image: 'https://us.kybun.swiss/cdn/shop/files/kybun-shoe_9.png?v=1708958472&width=1500'
  },
    {
        id: 'kb-006',
        title: 'Kyboot Mens Rolle Men Navy sneakers',
        price: 319,
        category: 'Casual',
        description: 'Versatile urban shoe with sleek design and all-day comfort.',
        image: 'https://static.wixstatic.com/media/15a1f3_d04a6db1eb0d4e7fb79482250cc233e3~mv2.jpg/v1/fill/w_1173,h_781,al_c,q_85/15a1f3_d04a6db1eb0d4e7fb79482250cc233e3~mv2.jpg'
    },
    {
        id: 'kb-007',
        title: 'Kyboot Meilen Gold sneakers Kybun',
        price: 199,
        category: 'Running',
        description: 'Durable and flexible sneakers for kids with vibrant colors.',
        image: 'https://static.wixstatic.com/media/15a1f3_2dd40ea0464f4f999472f258aec54eda~mv2.jpg/v1/fill/w_1173,h_781,al_c,q_85/15a1f3_2dd40ea0464f4f999472f258aec54eda~mv2.jpg'
    },
    {
        id: 'kb-008',
        title: 'Kyboot Almasa FG Ostrich Beige sandals',
        price: 459,
        category: 'sandals',
        description: 'All-terrain hiking boot with superior grip and ankle support.',
        image: 'https://static.wixstatic.com/media/4d4ede_2b91c798d3494416b50f10aa27e91950~mv2.jpg/v1/fill/w_782,h_782,al_c,q_85/4d4ede_2b91c798d3494416b50f10aa27e91950~mv2.jpg'
    },
    {
        id: 'kb-009',
        title: 'kyboot URI Men Black',
        price: 379,
        category: 'sandals',
        description: 'Lightweight trainer with breathable upper and energy-return sole.',
        image: 'https://static.wixstatic.com/media/15a1f3_064018b81c8f4bf0816f82c6b3633877~mv2.jpg/v1/fill/w_1173,h_781,al_c,q_85/15a1f3_064018b81c8f4bf0816f82c6b3633877~mv2.jpg'
    },
    {
        id: 'kb-010',
        title: 'Kyboot Tropics FG Brown sandals',
        price: 299,
        category: 'sandals',
        description: 'Timeless leather loafer with cushioned insole for everyday wear.',
        image: 'https://static.wixstatic.com/media/15a1f3_79f499159a9c4182bece764604db85d7~mv2.jpg/v1/fill/w_761,h_507,al_c,q_85,usm_0.66_1.00_0.01/15a1f3_79f499159a9c4182bece764604db85d7~mv2.jpg'
    },
    {
        id: 'kb-011',
        title: 'Kyboot Mens Ruty White sneakers',
        price: 189,
        category: 'Kids',
        description: 'Colorful, flexible shoes for kids with easy-fastening straps.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNb9aQ4cH8VZB_AKDdCUqNWcyHM15Q9CbolQ&s'
    
    },
    {
        id: 'kb-012',
        title: 'Kyboot Sport Runner',
        price: 399,
        category: 'Running',
        description: 'Performance running shoe with cushioned midsole and responsive rebound.',
        image: 'https://us.kybun.swiss/cdn/shop/files/kybun-shoe_9.png?v=1708958472&width=1500'
    
    }
  
];

/* ---------- App state ----------
---------------------------------*/
let state = {
  products: PRODUCTS.slice(),
  cart: loadCart(),
  filters: {
    query: '',
    category: 'all',
    sort: 'default'
  },
  activeProduct: null
};

/* ---------- Helper DOM refs ----------
------------------------------------*/
const productsGrid = document.getElementById('productsGrid');
const resultsCount = document.getElementById('resultsCount');
const cartCount = document.getElementById('cartCount');
const cartPanel = document.getElementById('cartPanel');
const cartItemsEl = document.getElementById('cartItems');
const cartSubtotalEl = document.getElementById('cartSubtotal');
const productModal = document.getElementById('productModal');

/* ---------- Init ----------
--------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  populateCategoryFilter();
  attachControls();
  renderProducts();
  renderCart();
  initScrollAnimations();
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Add page load animation
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});

/* ---------- Storage ----------
----------------------------*/
function saveCart() {
  localStorage.setItem('kyboot_cart_v1', JSON.stringify(state.cart));
}
function loadCart() {
  try {
    const raw = localStorage.getItem('kyboot_cart_v1');
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

/* ---------- UI: filters & controls ----------
-------------------------------------------*/
function attachControls() {
  document.getElementById('searchInput').addEventListener('input', (e) => {
    state.filters.query = e.target.value.trim().toLowerCase();
    renderProducts();
  });

  document.getElementById('categoryFilter').addEventListener('change', (e) => {
    state.filters.category = e.target.value;
    renderProducts();
  });

  document.getElementById('sortSelect').addEventListener('change', (e) => {
    state.filters.sort = e.target.value;
    renderProducts();
  });

  document.getElementById('viewCatalogBtn').addEventListener('click', () => {
    window.scrollTo({top: document.getElementById('productsGrid').offsetTop - 20, behavior:'smooth'});
  });

  document.getElementById('cartBtn').addEventListener('click', () => {
    toggleCartPanel(true);
  });

  document.getElementById('closeCart').addEventListener('click', () => toggleCartPanel(false));
  document.getElementById('closeModal').addEventListener('click', () => closeProductModal());
  document.getElementById('addToCartModal').addEventListener('click', addFromModal);
  document.getElementById('buyNow').addEventListener('click', buyNowFromModal);

  document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (state.cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    // Mock checkout � in a real app you'd connect to payment & backend
    const total = calcSubtotal();
    if (confirm(`Proceed to checkout? Subtotal: ${total.toFixed(2)} QAR`)) {
      // Clear cart after mock checkout
      state.cart = [];
      saveCart();
      renderCart();
      toggleCartPanel(false);
      alert('Thank you! Your order has been placed (mock).');
    }
  });

  document.getElementById('clearCart').addEventListener('click', () => {
    if (confirm('Clear cart?')) {
      state.cart = [];
      saveCart();
      renderCart();
    }
  });
}

/* ---------- Rendering products ----------
--------------------------------------*/
function populateCategoryFilter(){
  const categories = Array.from(new Set(PRODUCTS.map(p => p.category)));
  const sel = document.getElementById('categoryFilter');
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    sel.appendChild(opt);
  });
}

function renderProducts(){
  const { query, category, sort } = state.filters;
  let list = PRODUCTS.slice();

  if (category !== 'all') list = list.filter(p => p.category === category);
  if (query) list = list.filter(p => (p.title + ' ' + p.description + ' ' + p.category).toLowerCase().includes(query));

  if (sort === 'price-asc') list.sort((a,b) => a.price - b.price);
  if (sort === 'price-desc') list.sort((a,b) => b.price - a.price);

  // Add loading animation
  productsGrid.classList.add('loading');
  productsGrid.innerHTML = '';
  
  // Simulate loading delay for smooth animation
  setTimeout(() => {
    productsGrid.classList.remove('loading');
    list.forEach((p, index) => {
      const card = document.createElement('article');
      card.className = 'card';
      card.style.animationDelay = `${index * 0.1}s`;
      card.innerHTML = `
        <img loading="lazy" src="${p.image}" alt="${escapeHtml(p.title)}" />
        <h3>${escapeHtml(p.title)}</h3>
        <div class="meta">
          <div>${escapeHtml(p.category)}</div>
          <div class="price">${p.price.toFixed(2)} QAR</div>
        </div>
        <p style="color:var(--muted);font-size:13px;margin:8px 0">${escapeHtml(p.description)}</p>
        <div style="display:flex;gap:8px">
          <button class="btn" data-action="view" data-id="${p.id}">Quick view</button>
          <button class="btn primary" data-action="add" data-id="${p.id}">Add to cart</button>
        </div>
      `;
      productsGrid.appendChild(card);
    });

    resultsCount.textContent = list.length;

    // attach card buttons with enhanced animations
    productsGrid.querySelectorAll('button[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const action = e.currentTarget.dataset.action;
        
        // Add click animation
        e.currentTarget.style.transform = 'scale(0.95)';
        setTimeout(() => {
          e.currentTarget.style.transform = '';
        }, 150);
        
        if (action === 'view') openProductModal(id);
        if (action === 'add') {
          addToCart(id, 1);
          renderCart();
          // Enhanced cart button animation
          const cartEl = document.getElementById('cartBtn');
          cartEl.style.animation = 'none';
          cartEl.offsetHeight; // Trigger reflow
          cartEl.style.animation = 'pulse 0.6s ease-in-out';
          
          // Show success feedback
          showNotification('Added to cart!', 'success');
        }
      });
    });
  }, 200);
}

/* ---------- Product modal ----------
---------------------------------*/
function openProductModal(productId){
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  state.activeProduct = p;
  productModal.setAttribute('aria-hidden','false');
  document.getElementById('modalImage').src = p.image;
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalDesc').textContent = p.description;
  document.getElementById('modalPrice').textContent = `${p.price.toFixed(2)} QAR`;
  document.getElementById('modalQty').value = 1;
  document.getElementById('modalSize').value = '42';
  productModal.focus();
}
function closeProductModal(){
  productModal.setAttribute('aria-hidden','true');
  state.activeProduct = null;
}
function addFromModal(){
  const qty = Math.max(1, parseInt(document.getElementById('modalQty').value || '1', 10));
  addToCart(state.activeProduct.id, qty);
  renderCart();
  closeProductModal();
}
function buyNowFromModal(){
  addFromModal();
  toggleCartPanel(true);
}

/* ---------- Cart logic ----------
--------------------------------*/
function addToCart(productId, qty = 1){
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = state.cart.find(i => i.id === productId);
  if (existing) existing.qty += qty;
  else state.cart.push({ id: productId, qty });
  saveCart();
  renderCart();
}

function updateCartItem(productId, qty){
  if (qty <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  } else {
    const item = state.cart.find(i => i.id === productId);
    if (item) item.qty = qty;
  }
  saveCart();
  renderCart();
}

function removeCartItem(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  renderCart();
}

function calcSubtotal(){
  return state.cart.reduce((sum, it) => {
    const p = PRODUCTS.find(x => x.id === it.id);
    return sum + (p ? p.price * it.qty : 0);
  }, 0);
}

function renderCart(){
  // update cart count
  const totalItems = state.cart.reduce((s,i) => s + i.qty, 0);
  cartCount.textContent = totalItems;
  cartCount.dataset.count = totalItems;

  // items list
  cartItemsEl.innerHTML = '';
  if (state.cart.length === 0){
    cartItemsEl.innerHTML = '<p style="color:var(--muted);padding:10px">Your cart is empty</p>';
  } else {
    state.cart.forEach(it => {
      const p = PRODUCTS.find(x => x.id === it.id);
      if (!p) return;
      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <img src="${p.image}" alt="${escapeHtml(p.title)}" />
        <div class="info">
          <div style="font-weight:700">${escapeHtml(p.title)}</div>
          <div style="color:var(--muted);font-size:13px">${p.price.toFixed(2)} QAR</div>
          <div class="qty" style="margin-top:6px">
            <button class="btn" data-action="dec" data-id="${p.id}">-</button>
            <input class="cart-qty" data-id="${p.id}" type="number" min="1" value="${it.qty}" style="width:56px;padding:6px;border-radius:8px;border:1px solid rgba(15,23,42,0.06)" />
            <button class="btn" data-action="inc" data-id="${p.id}">+</button>
            <button class="btn" style="margin-left:8px" data-action="remove" data-id="${p.id}">Remove</button>
          </div>
        </div>
      `;
      cartItemsEl.appendChild(row);
    });

    // attach cart item events
    cartItemsEl.querySelectorAll('button[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const action = e.currentTarget.dataset.action;
        const item = state.cart.find(i => i.id === id);
        if (!item) return;
        if (action === 'inc') updateCartItem(id, item.qty + 1);
        if (action === 'dec') updateCartItem(id, Math.max(1, item.qty - 1));
        if (action === 'remove') removeCartItem(id);
      });
    });
    cartItemsEl.querySelectorAll('input.cart-qty').forEach(inp => {
      inp.addEventListener('change', (e) => {
        const id = e.target.dataset.id;
        let q = parseInt(e.target.value || '1', 10);
        if (isNaN(q) || q < 1) q = 1;
        updateCartItem(id, q);
      });
    });
  }

  cartSubtotalEl.textContent = `${calcSubtotal().toFixed(2)} QAR`;
}

/* ---------- Cart panel toggle ----------
-------------------------------------*/
function toggleCartPanel(open = true){
  cartPanel.setAttribute('aria-hidden', open ? 'false' : 'true');
}

/* ---------- Utilities ----------
--------------------------------*/
function escapeHtml(str = ''){
  return String(str).replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}

// Enhanced notification system
function showNotification(message, type = 'info', duration = 3000) {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 20px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#1f6feb'};
    color: white;
    border-radius: 8px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    z-index: 9999;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    font-weight: 500;
  `;
  
  document.body.appendChild(notification);
  
  // Slide in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Slide out and remove
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, duration);
}

// Enhanced scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements that should animate on scroll
  document.querySelectorAll('.card, .hero, .controls').forEach(el => {
    observer.observe(el);
  });
}
