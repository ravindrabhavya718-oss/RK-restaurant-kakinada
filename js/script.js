/* EDITABLE MENU DATA: replace names, descriptions and prices when the restaurant menu is confirmed. */
const menuItems = [
  {name:'Special Biryani', category:'Biryani', description:'Fragrant biryani with a generous portion.', price:'Add price'},
  {name:'Village Style Biryani', category:'Biryani', description:'Rustic, aromatic and full of character.', price:'Add price'},
  {name:'Basmati Biryani', category:'Biryani', description:'Long-grain basmati with genuine flavour.', price:'Add price'},
  {name:'Chicken', category:'Chicken', description:'Fresh chicken dishes with balanced spice.', price:'Add price'},
  {name:'Chicken 65', category:'Starters', description:'A crisp, flavourful favourite.', price:'Add price'},
  {name:'Abu Dhabi Fish', category:'Fish & Seafood', description:'Fresh fish with a bold finish.', price:'Add price'},
  {name:'Gidda Massore', category:'Andhra Specials', description:'A memorable house highlight.', price:'Add price'},
  {name:'Rice & Meals', category:'Rice & Meals', description:'Comforting food for a complete meal.', price:'Add price'},
  {name:'Beverages', category:'Beverages', description:'A refreshing finish to your meal.', price:'Add price'}
];

const menuGrid = document.querySelector('#menu-grid');
const filters = document.querySelectorAll('.filter');

function renderMenu(category = 'All') {
  const visibleItems = category === 'All' ? menuItems : menuItems.filter((item) => item.category === category);
  menuGrid.innerHTML = visibleItems.map((item) => `<article class="menu-item"><h3>${item.name}</h3><span class="price">${item.price}</span><p>${item.description}</p></article>`).join('');
}

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((button) => { button.classList.remove('active'); button.setAttribute('aria-selected', 'false'); });
    filter.classList.add('active');
    filter.setAttribute('aria-selected', 'true');
    renderMenu(filter.dataset.category);
  });
});
renderMenu();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
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

document.querySelectorAll('[data-image]').forEach((container) => {
  const image = new Image();
  image.src = container.dataset.image;
  image.alt = container.dataset.alt || 'RK Restaurant food';
  image.className = 'loaded-image';
  image.loading = container.classList.contains('hero-art') ? 'eager' : 'lazy';
  image.addEventListener('load', () => { container.appendChild(image); container.classList.add('has-image'); });
});

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), {threshold: 0.12});
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelector('.order-button').addEventListener('click', () => {
  alert('Online ordering will be available here soon. Please call the restaurant to order today.');
});