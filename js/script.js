/* Menu data is also used by the order API for server-side price validation. */
const menuItems = [
  {id:'special-biryani', name:'Special Biryani', category:'Biryani', description:'Fragrant biryani with a generous portion.', price:299, image:'assets/images/menu/category-biryani.jpg'},
  {id:'village-style-biryani', name:'Village Style Biryani', category:'Biryani', description:'Rustic, aromatic and full of character.', price:280, image:'assets/images/menu/category-biryani.jpg'},
  {id:'basmati-biryani', name:'Basmati Biryani', category:'Biryani', description:'Long-grain basmati with genuine flavour.', price:260, image:'assets/images/menu/category-biryani.jpg'},
  {id:'chicken', name:'Chicken', category:'Chicken', description:'Fresh chicken dishes with balanced spice.', price:260, image:'assets/images/menu/category-chicken.jpg'},
  {id:'chicken-65-existing', name:'Chicken 65', category:'Starters', description:'A crisp, flavourful favourite.', price:180, image:'assets/images/menu/category-starters.jpg'},
  {id:'abu-dhabi-fish-existing', name:'Abu Dhabi Fish', category:'Fish & Seafood', description:'Fresh fish with a bold finish.', price:320, image:'assets/images/menu/category-fish-seafood.jpg'},
  {id:'gidda-massore', name:'Gidda Massore', category:'Andhra Specials', description:'A memorable house highlight.', price:260, image:'assets/images/menu/category-andhra-specials.jpg'},
  {id:'rice-meals', name:'Rice & Meals', category:'Rice & Meals', description:'Comforting food for a complete meal.', price:220, image:'assets/images/menu/category-rice-meals.jpg'},
  {id:'beverages', name:'Beverages', category:'Beverages', description:'A refreshing finish to your meal.', price:80, image:'assets/images/menu/category-beverages.jpg'},
  {id:'veg-sweet-corn', name:'Veg Sweet Corn', category:'Veg Soups', description:'Silky sweet corn soup with fresh vegetables.', price:50, image:'assets/images/menu/category-veg-soups.jpg'},
  {id:'hot-and-sour', name:'Hot and Sour', category:'Veg Soups', description:'A warming soup with a lively hot and sour finish.', price:50, image:'assets/images/menu/category-veg-soups.jpg'},
  {id:'chicken-sweet-corn', name:'Chicken Sweet Corn', category:'Non-Veg Soups', description:'Comforting sweet corn soup with tender chicken.', price:60, image:'assets/images/menu/category-non-veg-soups.jpg'},
  {id:'chicken-hot-and-sour', name:'Chicken Hot and Sour', category:'Non-Veg Soups', description:'A robust hot and sour soup with chicken.', price:60, image:'assets/images/menu/category-non-veg-soups.jpg'},
  {id:'chilli-paneer', name:'Chilli Paneer', category:'Veg Starters', description:'Paneer tossed with peppers in a bold chilli glaze.', price:220, image:'assets/images/menu/category-veg-starters.jpg'},
  {id:'paneer-65', name:'Paneer 65', category:'Veg Starters', description:'Crisp paneer bites seasoned with aromatic spices.', price:220, image:'assets/images/menu/category-veg-starters.jpg'},
  {id:'paneer-manchurian', name:'Paneer Manchurian', category:'Veg Starters', description:'Crisp paneer in a savoury Manchurian sauce.', price:230, image:'assets/images/menu/category-veg-starters.jpg'},
  {id:'paneer-majestic', name:'Paneer Majestic', category:'Veg Starters', description:'Tender paneer with a rich, spiced coating.', price:200, image:'assets/images/menu/category-veg-starters.jpg'},
  {id:'paneer-555', name:'Paneer 555', category:'Veg Starters', description:'A signature paneer starter with deep flavour.', price:230, image:'assets/images/menu/category-veg-starters.jpg'},
  {id:'chilli-mushroom', name:'Chilli Mushroom', category:'Veg Starters', description:'Mushrooms and peppers in a bright chilli sauce.', price:230, image:'assets/images/menu/category-veg-starters.jpg'},
  {id:'mushroom-65', name:'Mushroom 65', category:'Veg Starters', description:'Crisp spiced mushrooms with a satisfying bite.', price:220, image:'assets/images/menu/category-veg-starters.jpg'},
  {id:'mushroom-manchurian', name:'Mushroom Manchurian', category:'Veg Starters', description:'Golden mushrooms coated in Manchurian sauce.', price:230, image:'assets/images/menu/category-veg-starters.jpg'},
  {id:'dry-mushroom', name:'Dry Mushroom', category:'Veg Starters', description:'Dry-fried mushrooms with fragrant Indian spices.', price:220, image:'assets/images/menu/category-veg-starters.jpg'},
  {id:'pepper-mushroom', name:'Pepper Mushroom', category:'Veg Starters', description:'Mushrooms finished with aromatic cracked pepper.', price:230, image:'assets/images/menu/category-veg-starters.jpg'},
  {id:'crispy-baby-corn', name:'Crispy Baby Corn', category:'Veg Starters', description:'Crunchy baby corn with a light seasoned coating.', price:220, image:'assets/images/menu/category-veg-starters.jpg'},
  {id:'chilli-baby-corn', name:'Chilli Baby Corn', category:'Veg Starters', description:'Baby corn tossed with peppers and chilli.', price:220, image:'assets/images/menu/category-veg-starters.jpg'},
  {id:'chilli-chicken', name:'Chilli Chicken', category:'Non-Veg Starters', description:'Juicy chicken tossed in a bold chilli sauce.', price:250, image:'assets/images/menu/category-non-veg-starters.jpg'},
  {id:'chicken-555', name:'Chicken 555', category:'Non-Veg Starters', description:'A richly seasoned chicken starter with character.', price:250, image:'assets/images/menu/category-non-veg-starters.jpg'},
  {id:'chicken-majestic', name:'Chicken Majestic', category:'Non-Veg Starters', description:'Tender chicken with a fragrant spiced coating.', price:250, image:'assets/images/menu/category-non-veg-starters.jpg'},
  {id:'chicken-lollipop', name:'Chicken Lollipop', category:'Non-Veg Starters', description:'Crisp, juicy chicken lollipops made to share.', price:300, image:'assets/images/menu/category-non-veg-starters.jpg'},
  {id:'chicken-wings', name:'Chicken Wings', category:'Non-Veg Starters', description:'Seasoned chicken wings with a satisfying finish.', price:300, image:'assets/images/menu/category-non-veg-starters.jpg'},
  {id:'chicken-manchurian', name:'Chicken Manchurian', category:'Non-Veg Starters', description:'Chicken tossed in a savoury Manchurian glaze.', price:230, image:'assets/images/menu/category-non-veg-starters.jpg'},
  {id:'pepper-chicken', name:'Pepper Chicken', category:'Non-Veg Starters', description:'Tender chicken with a generous pepper kick.', price:250, image:'assets/images/menu/category-non-veg-starters.jpg'},
  {id:'abu-dhabi-chicken', name:'Abu Dhabi Chicken', category:'Non-Veg Starters', description:'A house-style chicken starter with bold flavour.', price:280, image:'assets/images/menu/category-non-veg-starters.jpg'},
  {id:'rr-chicken', name:'RR Chicken', category:'Non-Veg Starters', description:'A signature chicken preparation with deep spice.', price:280, image:'assets/images/menu/category-non-veg-starters.jpg'},
  {id:'chilli-egg', name:'Chilli Egg', category:'Egg Items', description:'Egg tossed with peppers in a lively chilli sauce.', price:180, image:'assets/images/menu/category-egg-items.jpg'},
  {id:'egg-65', name:'Egg 65', category:'Egg Items', description:'Crisp, spiced egg bites with a rich flavour.', price:180, image:'assets/images/menu/category-egg-items.jpg'},
  {id:'egg-manchurian', name:'Egg Manchurian', category:'Egg Items', description:'Egg coated in a savoury Manchurian glaze.', price:180, image:'assets/images/menu/category-egg-items.jpg'},
  {id:'single-egg-omelette', name:'Single Egg Omelette', category:'Egg Items', description:'A simple, freshly cooked single egg omelette.', price:20, image:'assets/images/menu/category-egg-items.jpg'},
  {id:'double-egg-omelette', name:'Double Egg Omelette', category:'Egg Items', description:'A hearty two-egg omelette cooked to order.', price:35, image:'assets/images/menu/category-egg-items.jpg'},
  {id:'chilli-prawns', name:'Chilli Prawns', category:'Prawns', description:'Prawns tossed with peppers in a bright chilli glaze.', price:300, image:'assets/images/menu/category-prawns.jpg'},
  {id:'prawns-65', name:'Prawns 65', category:'Prawns', description:'Crisp prawns with a fragrant spiced coating.', price:300, image:'assets/images/menu/category-prawns.jpg'},
  {id:'prawns-manchurian', name:'Prawns Manchurian', category:'Prawns', description:'Prawns finished in a savoury Manchurian sauce.', price:300, image:'assets/images/menu/category-prawns.jpg'},
  {id:'abu-dhabi-prawns', name:'Abu Dhabi Prawns', category:'Prawns', description:'Boldly seasoned prawns with a house-style finish.', price:350, image:'assets/images/menu/category-prawns.jpg'},
  {id:'rr-prawns', name:'RR Prawns', category:'Prawns', description:'A signature prawn preparation with deep flavour.', price:350, image:'assets/images/menu/category-prawns.jpg'},
  {id:'loose-prawns', name:'Loose Prawns', category:'Prawns', description:'Crisp, flavourful prawns served loose and dry.', price:300, image:'assets/images/menu/category-prawns.jpg'},
  {id:'chilli-fish', name:'Chilli Fish', category:'Fish & Seafood', description:'Fresh fish tossed with peppers and chilli.', price:250, image:'assets/images/menu/category-fish-seafood.jpg'},
  {id:'apollo-fish', name:'Apollo Fish', category:'Fish & Seafood', description:'A popular fish starter with a spicy finish.', price:280, image:'assets/images/menu/category-fish-seafood.jpg'},
  {id:'fish-65', name:'Fish 65', category:'Fish & Seafood', description:'Crisp fish pieces with aromatic seasoning.', price:250, image:'assets/images/menu/category-fish-seafood.jpg'},
  {id:'chicken-fry-half', name:'Chicken Fry Half', category:'Fry Items', description:'Spiced chicken fry in a satisfying half portion.', price:100, image:'assets/images/menu/category-fry-items.jpg'},
  {id:'chicken-fry-full', name:'Chicken Fry Full', category:'Fry Items', description:'A generous full portion of crisp chicken fry.', price:180, image:'assets/images/menu/category-fry-items.jpg'},
  {id:'prawns-fry', name:'Prawns Fry', category:'Fry Items', description:'Seasoned prawns fried for a crisp, rich bite.', price:250, image:'assets/images/menu/category-fry-items.jpg'},
  {id:'fish-fry-single-piece', name:'Fish Fry (Single Piece)', category:'Fry Items', description:'A single piece of freshly spiced fish fry.', price:50, image:'assets/images/menu/category-fry-items.jpg'},
  {id:'dry-joint', name:'Dry Joint', category:'Joint / Kebab', description:'A dry, flavourful chicken joint with aromatic spices.', price:80, image:'assets/images/menu/category-joint-kebab.jpg'},
  {id:'dry-kebab', name:'Dry Kebab', category:'Joint / Kebab', description:'Tender kebab with a richly seasoned dry finish.', price:60, image:'assets/images/menu/category-joint-kebab.jpg'},
  {id:'chilli-joint', name:'Chilli Joint', category:'Joint / Kebab', description:'Chicken joint tossed with a bold chilli seasoning.', price:100, image:'assets/images/menu/category-joint-kebab.jpg'},
  {id:'chilli-kebab', name:'Chilli Kebab', category:'Joint / Kebab', description:'Tender kebab with peppers and a lively chilli glaze.', price:80, image:'assets/images/menu/category-joint-kebab.jpg'},
  {id:'abu-dhabi-joint', name:'Abu Dhabi Joint', category:'Joint / Kebab', description:'A house-style chicken joint with bold flavour.', price:120, image:'assets/images/menu/category-joint-kebab.jpg'},
  {id:'abu-dhabi-kebab', name:'Abu Dhabi Kebab', category:'Joint / Kebab', description:'A richly spiced kebab with a satisfying finish.', price:100, image:'assets/images/menu/category-joint-kebab.jpg'},
  {id:'chicken-ghee-roast', name:'Chicken Ghee Roast', category:'Joint / Kebab', description:'Tender chicken roasted in aromatic ghee and spices.', price:250, image:'assets/images/menu/category-joint-kebab.jpg'},
  {id:'tandoori-half', name:'Tandoori Half', category:'Joint / Kebab', description:'Half tandoori chicken with smoky, balanced spice.', price:230, image:'assets/images/menu/category-joint-kebab.jpg'},
  {id:'tandoori-full', name:'Tandoori Full', category:'Joint / Kebab', description:'A full tandoori chicken made for sharing.', price:450, image:'assets/images/menu/category-joint-kebab.jpg'},
  {id:'tikka', name:'Tikka', category:'Joint / Kebab', description:'Tender tikka pieces with a smoky spiced finish.', price:250, image:'assets/images/menu/category-joint-kebab.jpg'},
  {id:'tangidi-kebab-4-pieces', name:'Tangidi Kebab 4 Pieces', category:'Joint / Kebab', description:'Four pieces of tender, aromatic Tangidi kebab.', price:250, image:'assets/images/menu/category-joint-kebab.jpg'}
];

const menuGrid = document.querySelector('#menu-grid');
const favoritesGrid = document.querySelector('#favorites-grid');
const specialsGrid = document.querySelector('#specials-grid');
const galleryGrid = document.querySelector('#gallery-grid');
const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxCaption = document.querySelector('#lightbox-caption');
const filters = document.querySelectorAll('.filter');
const orderModal = document.getElementById('order-modal');
const orderMenuList = document.getElementById('order-menu-list');
const orderCartItems = document.getElementById('order-cart-items');
const orderSubtotal = document.getElementById('order-subtotal');
const orderDelivery = document.getElementById('order-delivery');
const orderTotal = document.getElementById('order-total');
const orderValidation = document.getElementById('order-validation');
const orderForm = document.getElementById('order-form');
const orderTypeInputs = document.querySelectorAll('input[name="orderType"]');
const orderAddressField = document.getElementById('order-address-field');
const orderButtons = document.querySelectorAll('.cart-order-button');
const onlineTriggers = document.querySelectorAll('.order-online-trigger');
const platformModal = document.getElementById('platform-modal');
const formatCurrency = (value) => new Intl.NumberFormat('en-IN', {style:'currency', currency:'INR', maximumFractionDigits:0}).format(value);
let cart = {};
let selectedOrderType = 'Delivery';

const favoriteItemIds = ['chicken-65-existing', 'chicken-lollipop', 'chicken-majestic', 'apollo-fish', 'prawns-65', 'tandoori-full'];
const specialItemIds = ['special-biryani', 'chicken-ghee-roast', 'abu-dhabi-fish-existing', 'tandoori-full'];
const galleryImages = [
  {id:'restaurant-exterior', image:'assets/images/restaurant-exterior.jpg', label:'Illustrative South Indian restaurant entrance'},
  {id:'restaurant-interior', image:'assets/images/restaurant-interior.jpg', label:'Illustrative South Indian dining room'},
  {id:'dining-area', image:'assets/images/dining-area.jpg', label:'Illustrative Indian restaurant dining experience'},
  {id:'food-1', image:'assets/images/menu/category-biryani.jpg', label:'Aromatic biryani'},
  {id:'food-2', image:'assets/images/menu/category-veg-starters.jpg', label:'Chilli paneer starter'},
  {id:'food-3', image:'assets/images/menu/category-non-veg-starters.jpg', label:'Spiced chicken starter'},
  {id:'food-4', image:'assets/images/menu/category-rice-meals.jpg', label:'Indian vegetarian meals'}
];
const categoryImagePaths = {
  Biryani: 'assets/images/menu/category-biryani.jpg',
  Chicken: 'assets/images/menu/category-chicken.jpg',
  Starters: 'assets/images/menu/category-starters.jpg',
  'Fish & Seafood': 'assets/images/menu/category-fish-seafood.jpg',
  'Andhra Specials': 'assets/images/menu/category-andhra-specials.jpg',
  'Rice & Meals': 'assets/images/menu/category-rice-meals.jpg',
  Beverages: 'assets/images/menu/category-beverages.jpg',
  'Veg Soups': 'assets/images/menu/category-veg-soups.jpg',
  'Non-Veg Soups': 'assets/images/menu/category-non-veg-soups.jpg',
  'Veg Starters': 'assets/images/menu/category-veg-starters.jpg',
  'Non-Veg Starters': 'assets/images/menu/category-non-veg-starters.jpg',
  'Egg Items': 'assets/images/menu/category-egg-items.jpg',
  Prawns: 'assets/images/menu/category-prawns.jpg',
  'Fry Items': 'assets/images/menu/category-fry-items.jpg',
  'Joint / Kebab': 'assets/images/menu/category-joint-kebab.jpg'
};
const categoryImageDescriptions = {
  Biryani: 'Biryani with basmati rice, saffron and herbs',
  Chicken: 'Andhra-style chicken curry with curry leaves',
  Starters: 'Chicken 65 with curry leaves, onion and lime',
  'Fish & Seafood': 'Spiced Indian fish fry with lemon and curry leaves',
  'Andhra Specials': 'Andhra special curry with rice',
  'Rice & Meals': 'Vegetarian Indian meal with rice, dal, vegetables and accompaniments',
  Beverages: 'Chilled Indian mango lassi and lime soda',
  'Veg Soups': 'Indian vegetable sweet corn soup',
  'Non-Veg Soups': 'Indian chicken sweet corn soup',
  'Veg Starters': 'Chilli paneer with peppers and onion',
  'Non-Veg Starters': 'Spiced Indian chicken starter with peppers and curry leaves',
  'Egg Items': 'Indian chilli egg starter',
  Prawns: 'Chilli prawns with curry leaves',
  'Fry Items': 'Andhra chicken fry with curry leaves',
  'Joint / Kebab': 'Tandoori chicken kebab with onion and lemon'
};

function getMenuImagePath(item) {
  return categoryImagePaths[item.category] || item.image;
}

function getMenuImageAlt(item) {
  return `AI-generated photo illustrating ${categoryImageDescriptions[item.category] || `freshly prepared ${item.name}`}`;
}

function getCartEntries() {
  return Object.entries(cart)
    .map(([name, quantity]) => ({
      item: menuItems.find((menuItem) => menuItem.name === name),
      quantity,
    }))
    .filter(({ item }) => item);
}

function getMenuItem(id) {
  return menuItems.find((item) => item.id === id);
}

function renderFeatureCard(item, index, className = 'favorite-card') {
  if (!item) return '';
  return `<article class="${className} reveal"><div class="feature-image image-fallback" data-image="${getMenuImagePath(item)}" data-alt="${getMenuImageAlt(item)}"><span>${item.name}</span></div><div class="feature-body"><div class="feature-heading"><h3>${item.name}</h3><span class="price">${formatCurrency(item.price)}</span></div><p>${item.description}</p><button type="button" class="feature-action" data-add-item="${item.name}">Add to order <span>+</span></button></div></article>`;
}

function renderFavorites() {
  if (!favoritesGrid) return;
  favoritesGrid.innerHTML = favoriteItemIds.map((id) => renderFeatureCard(getMenuItem(id))).join('');
  hydrateImages(favoritesGrid);
}

function renderSpecials() {
  if (!specialsGrid) return;
  specialsGrid.innerHTML = specialItemIds.map((id, index) => renderFeatureCard(getMenuItem(id), index, `special-card${index === 0 ? ' special-feature' : ''}`)).join('');
  hydrateImages(specialsGrid);
}

function renderGallery() {
  if (!galleryGrid) return;
  galleryGrid.innerHTML = galleryImages.map((item) => `<button type="button" class="gallery-item image-fallback" data-lightbox-image="${item.image}" data-lightbox-alt="AI-generated image: ${item.label}" aria-label="Enlarge ${item.label}"><span>${item.label}</span></button>`).join('');
  hydrateImages(galleryGrid);
}

function openLightbox(imagePath, altText) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.className = 'lightbox-image image-fallback';
  lightboxImage.innerHTML = `<span>${altText}</span>`;
  lightboxImage.dataset.image = imagePath;
  lightboxImage.dataset.alt = altText;
  hydrateImages(lightboxImage.parentElement);
  if (lightboxCaption) lightboxCaption.textContent = altText;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function renderMenu(category = 'All') {
  const visibleItems = category === 'All' ? menuItems : menuItems.filter((item) => item.category === category);
  menuGrid.innerHTML = visibleItems.map((item) => `<article class="menu-item"><div class="menu-item-image image-fallback" data-image="${getMenuImagePath(item)}" data-alt="${getMenuImageAlt(item)}"><span>${item.name}</span></div><div class="menu-item-body"><span class="item-category">${item.category}</span><div class="menu-item-heading"><h3>${item.name}</h3><span class="price">${formatCurrency(item.price)}</span></div><p>${item.description}</p><button type="button" class="menu-add-button" data-add-item="${item.name}">Add to order</button></div></article>`).join('');
  hydrateImages(menuGrid);
}

function hydrateImages(root = document) {
  root.querySelectorAll('[data-image]:not(.image-ready)').forEach((container) => {
    container.classList.add('image-ready');
    const image = new Image();
    image.alt = container.closest('.hero')
      ? 'AI-generated illustration of aromatic biryani with basmati rice and herbs'
      : container.classList.contains('location-visual')
        ? 'AI-generated illustrative concept of a South Indian restaurant entrance, not a photograph of RK Restaurant'
        : container.dataset.alt || 'RK Restaurant food';
    image.className = 'loaded-image';
    const isHeroImage = Boolean(container.closest('.hero'));
    image.loading = isHeroImage ? 'eager' : 'lazy';
    image.decoding = 'async';
    if (isHeroImage) {
      image.fetchPriority = 'high';
      container.parentElement.setAttribute('aria-label', image.alt);
    }
    image.addEventListener('load', () => container.classList.add('has-image'));
    image.addEventListener('error', () => image.remove());
    container.appendChild(image);
    image.src = container.dataset.image;
  });
}

function renderOrderMenu() {
  if (!orderMenuList) return;

  orderMenuList.innerHTML = menuItems.map((item) => {
    const qtyInCart = cart[item.name] || 0;
    return `
      <article class="order-menu-item">
        <div class="order-menu-copy">
          <h4>${item.name}</h4>
          <p>${item.description}</p>
        </div>
        <div class="order-menu-actions">
          <span>${formatCurrency(item.price)}</span>
          <button type="button" class="order-add-button" data-add-item="${item.name}">${qtyInCart ? `Add (+${qtyInCart})` : 'Add'}</button>
        </div>
      </article>
    `;
  }).join('');
}

function renderOrderCart() {
  if (!orderCartItems) return;

  const entries = getCartEntries();
  const subtotal = entries.reduce((sum, { item, quantity }) => sum + (item.price * quantity), 0);
  const deliveryFee = selectedOrderType === 'Delivery' ? 40 : 0;
  const total = subtotal + deliveryFee;

  if (!entries.length) {
    orderCartItems.innerHTML = '<div class="empty-cart">Your cart is empty. Choose menu items to begin your order.</div>';
    orderSubtotal.textContent = formatCurrency(0);
    orderDelivery.textContent = formatCurrency(0);
    orderTotal.textContent = formatCurrency(0);
    return;
  }

  orderCartItems.innerHTML = entries.map(({ item, quantity }) => `
    <div class="cart-item">
      <div class="cart-item-copy">
        <h4>${item.name}</h4>
        <p>${formatCurrency(item.price)} each</p>
      </div>
      <div class="cart-item-controls">
        <div class="qty-control" aria-label="Quantity controls for ${item.name}">
          <button type="button" data-qty-change="${item.name}" data-delta="-1" aria-label="Decrease quantity for ${item.name}">−</button>
          <span>${quantity}</span>
          <button type="button" data-qty-change="${item.name}" data-delta="1" aria-label="Increase quantity for ${item.name}">+</button>
        </div>
        <button type="button" class="remove-item" data-remove-item="${item.name}">Remove</button>
      </div>
    </div>
  `).join('');

  orderSubtotal.textContent = formatCurrency(subtotal);
  orderDelivery.textContent = formatCurrency(deliveryFee);
  orderTotal.textContent = formatCurrency(total);
}

function updateOrderType(type) {
  selectedOrderType = type;
  orderTypeInputs.forEach((input) => {
    input.checked = input.value === type;
  });

  if (orderAddressField) {
    orderAddressField.style.display = type === 'Delivery' ? 'block' : 'none';
  }

  renderOrderCart();
}

function openOrderModal() {
  if (!orderModal) return;
  orderModal.classList.add('open');
  orderModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeOrderModal() {
  if (!orderModal) return;
  orderModal.classList.remove('open');
  orderModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function openPlatformModal() {
  if (!platformModal) return;
  platformModal.classList.add('open');
  platformModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closePlatformModal() {
  if (!platformModal) return;
  platformModal.classList.remove('open');
  platformModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function addItemToCart(name) {
  const item = menuItems.find((menuItem) => menuItem.name === name);
  if (!item) return;

  cart[name] = (cart[name] || 0) + 1;
  renderOrderMenu();
  renderOrderCart();
}

function handleAddItemClick(event) {
  const addButton = event.target.closest('[data-add-item]');
  if (!addButton) return;
  addItemToCart(addButton.dataset.addItem);
  openOrderModal();
}

function changeQuantity(name, delta) {
  if (!cart[name]) return;

  cart[name] += delta;

  if (cart[name] <= 0) {
    delete cart[name];
  }

  renderOrderMenu();
  renderOrderCart();
}

function removeItemFromCart(name) {
  delete cart[name];
  renderOrderMenu();
  renderOrderCart();
}

function validateOrderForm() {
  const entries = getCartEntries();
  if (!entries.length) {
    return 'Your cart is empty. Add at least one item before placing the order.';
  }

  const customerName = (new FormData(orderForm).get('customerName') || '').toString().trim();
  if (!customerName) {
    return 'Please enter your name.';
  }

  const mobile = (new FormData(orderForm).get('mobile') || '').toString().trim();
  const cleanedPhone = mobile.replace(/[^\d+]/g, '');
  if (!/^\+?91\d{10}$/.test(cleanedPhone) && !/^\d{10}$/.test(cleanedPhone)) {
    return 'Please enter a valid 10-digit mobile number.';
  }

  const orderType = (new FormData(orderForm).get('orderType') || 'Delivery').toString();
  if (orderType === 'Delivery') {
    const address = (new FormData(orderForm).get('address') || '').toString().trim();
    if (!address) {
      return 'Please enter the delivery address.';
    }
  }

  return '';
}

function generateWhatsAppMessage(orderId) {
  const formData = new FormData(orderForm);
  const customerName = (formData.get('customerName') || '').toString().trim();
  const mobile = (formData.get('mobile') || '').toString().trim();
  const orderType = (formData.get('orderType') || 'Delivery').toString();
  const address = (formData.get('address') || '').toString().trim();
  const instructions = (formData.get('instructions') || '').toString().trim();
  const entries = getCartEntries();
  const subtotal = entries.reduce((sum, { item, quantity }) => sum + (item.price * quantity), 0);
  const deliveryFee = orderType === 'Delivery' ? 40 : 0;
  const total = subtotal + deliveryFee;

  const lines = [
    'RK RESTAURANT - NEW ORDER',
    `Order reference: ${orderId}`,
    '',
    `Customer: ${customerName}`,
    `Phone: ${mobile}`,
    '',
    'Order:',
    ...entries.map(({ item, quantity }, index) => `${index + 1}. ${item.name} x ${quantity} = ${formatCurrency(item.price * quantity)}`),
    '',
    `Subtotal: ${formatCurrency(subtotal)}`,
    `Order Type: ${orderType}`,
    ...(orderType === 'Delivery' ? [`Address: ${address}`] : []),
    '',
    'Special Instructions:',
    instructions || 'None',
    '',
    `Delivery Charge: ${formatCurrency(deliveryFee)}`,
    `Total: ${formatCurrency(total)}`,
    '',
    'Please confirm this order.'
  ];

  return lines.join('\n');
}

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((button) => { button.classList.remove('active'); button.setAttribute('aria-selected', 'false'); });
    filter.classList.add('active');
    filter.setAttribute('aria-selected', 'true');
    renderMenu(filter.dataset.category);
  });
});
renderFavorites();
renderSpecials();
renderGallery();
renderMenu();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });

  navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
  }));
}

hydrateImages();

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), {threshold: 0.12});
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

orderButtons.forEach((button) => {
  button.addEventListener('click', openOrderModal);
});

onlineTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    openPlatformModal();
  });
});

if (orderModal) {
  orderModal.addEventListener('click', (event) => {
    if (event.target === orderModal || event.target.matches('[data-close-order]')) {
      closeOrderModal();
    }
  });
}

if (platformModal) {
  platformModal.addEventListener('click', (event) => {
    if (event.target === platformModal || event.target.matches('[data-close-platform]')) {
      closePlatformModal();
    }
  });
}

if (orderMenuList) {
  orderMenuList.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-add-item]');
    if (addButton) {
      addItemToCart(addButton.dataset.addItem);
    }
  });
}

if (menuGrid) {
  menuGrid.addEventListener('click', handleAddItemClick);
}

if (favoritesGrid) {
  favoritesGrid.addEventListener('click', handleAddItemClick);
}

if (specialsGrid) {
  specialsGrid.addEventListener('click', handleAddItemClick);
}

if (galleryGrid) {
  galleryGrid.addEventListener('click', (event) => {
    const galleryItem = event.target.closest('[data-lightbox-image]');
    if (galleryItem) openLightbox(galleryItem.dataset.lightboxImage, galleryItem.dataset.lightboxAlt);
  });
}

if (lightbox) {
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox || event.target.matches('[data-close-lightbox]')) closeLightbox();
  });
}

if (orderCartItems) {
  orderCartItems.addEventListener('click', (event) => {
    const removeButton = event.target.closest('[data-remove-item]');
    if (removeButton) {
      removeItemFromCart(removeButton.dataset.removeItem);
    }

    const qtyButton = event.target.closest('[data-qty-change]');
    if (qtyButton) {
      changeQuantity(qtyButton.dataset.qtyChange, Number(qtyButton.dataset.delta));
    }
  });
}

orderTypeInputs.forEach((input) => {
  input.addEventListener('change', (event) => {
    updateOrderType(event.target.value);
  });
});

if (orderForm) {
  orderForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (orderValidation) {
      orderValidation.textContent = '';
      orderValidation.classList.remove('show');
    }

    const validationError = validateOrderForm();
    if (validationError) {
      if (orderValidation) {
        orderValidation.textContent = validationError;
        orderValidation.classList.add('show');
      }
      return;
    }

    const formData = new FormData(orderForm);
    const submitButton = orderForm.querySelector('[type="submit"]');
    const whatsappWindow = window.open('about:blank', '_blank');
    if (whatsappWindow) whatsappWindow.document.title = 'Sending your order to RK Restaurant';
    submitButton.disabled = true;
    submitButton.textContent = 'Saving order...';

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: formData.get('customerName'),
          mobile: formData.get('mobile'),
          orderType: formData.get('orderType'),
          address: formData.get('address'),
          instructions: formData.get('instructions'),
          items: getCartEntries().map(({ item, quantity }) => ({ id: item.id, quantity })),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Your order could not be saved. Please try again.');

      const whatsappMessage = generateWhatsAppMessage(result.id);
      const whatsappUrl = `https://wa.me/919848643747?text=${encodeURIComponent(whatsappMessage)}`;
      cart = {};
      orderForm.reset();
      updateOrderType('Delivery');
      renderOrderMenu();
      renderOrderCart();

      if (whatsappWindow) {
        whatsappWindow.location.replace(whatsappUrl);
        closeOrderModal();
      } else {
        const continueLink = document.createElement('a');
        continueLink.href = whatsappUrl;
        continueLink.target = '_blank';
        continueLink.rel = 'noopener noreferrer';
        continueLink.textContent = 'Open WhatsApp to send it';
        orderValidation.replaceChildren(document.createTextNode(`Order ${result.id} saved. `), continueLink);
        orderValidation.classList.add('show');
      }
    } catch (error) {
      if (whatsappWindow) whatsappWindow.close();
      if (orderValidation) {
        orderValidation.textContent = error.message || 'Unable to reach the order service. Please try again.';
        orderValidation.classList.add('show');
      }
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Place Order';
    }
  });
}

if (orderModal) {
  updateOrderType('Delivery');
  renderOrderMenu();
  renderOrderCart();
}

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (lightbox && lightbox.classList.contains('open')) {
    closeLightbox();
  } else if (platformModal && platformModal.classList.contains('open')) {
    closePlatformModal();
  } else if (orderModal && orderModal.classList.contains('open')) {
    closeOrderModal();
  }
});