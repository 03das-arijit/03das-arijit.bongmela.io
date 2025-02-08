// DOM Elements
const heroBanner = document.querySelector('.hero-banner');
const categoriesGrid = document.querySelector('.categories-grid');
const storiesCarousel = document.querySelector('.stories-carousel');
const newsletterForm = document.querySelector('.newsletter');
const navMenu = document.querySelector('nav ul');
const navToggle = document.createElement('div'); // For mobile navigation toggle

// Hero Banner Carousel
let currentBannerIndex = 0;
const banners = [
  { image: 'Herobanner1.jpg', text: 'Celebrate Durga Puja with BongBazaar!' },
  { image: 'Herobanner1.jpg', text: 'Exclusive Handloom Sarees Collection' },
  { image: 'Herobanner1.jpg', text: 'Traditional Bengali Sweets & Snacks' },
];

function updateHeroBanner() {
  const banner = banners[currentBannerIndex];
  heroBanner.innerHTML = `
    <img src="${banner.image}" alt="Banner">
    <div class="hero-text">
      <h1>${banner.text}</h1>
      <p>Shop exclusive collections for the festive season.</p>
      <a href="#" class="cta-button">Shop Now</a>
    </div>
  `;
  currentBannerIndex = (currentBannerIndex + 1) % banners.length;
}

setInterval(updateHeroBanner, 5000); // Change banner every 5 seconds

// Mobile Navigation Toggle
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '&#9776;'; // Hamburger icon
document.querySelector('header').appendChild(navToggle);

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Newsletter Form Validation
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = newsletterForm.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    alert('Thank you for subscribing!');
    emailInput.value = ''; // Clear input
  } else {
    alert('Please enter a valid email address.');
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Dynamic Product Categories (Example)
const categories = [
  { image: 'Herobanner1.jpg', title: 'Traditional Sarees' },
  { image: 'Herobanner1.jpg', title: 'Handicrafts' },
  { image: 'Herobanner1.jpg', title: 'Bengali Snacks' },
  { image: 'Herobanner1.jpg', title: 'Home Decor' },
];

categories.forEach((category) => {
  const categoryElement = document.createElement('div');
  categoryElement.classList.add('category');
  categoryElement.innerHTML = `
    <img src="${category.image}" alt="${category.title}">
    <h3>${category.title}</h3>
  `;
  categoriesGrid.appendChild(categoryElement);
});

// Dynamic Artisan Stories (Example)
const artisans = [
  { image: 'Herobanner1.jpg', name: 'Rina Das', description: 'Master weaver of Baluchari sarees.' },
  { image: 'Herobanner1.jpg', name: 'Arun Pal', description: 'Terracotta artist from Bishnupur.' },
  { image: 'Herobanner1.jpg', name: 'Mita Roy', description: 'Creator of Dokra metal crafts.' },
];

artisans.forEach((artisan) => {
  const artisanElement = document.createElement('div');
  artisanElement.classList.add('story');
  artisanElement.innerHTML = `
    <img src="${artisan.image}" alt="${artisan.name}">
    <h3>${artisan.name}</h3>
    <p>${artisan.description}</p>
  `;
  storiesCarousel.appendChild(artisanElement);
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// DOM Elements
const filters = document.querySelector('.filters');
const productGrid = document.querySelector('.product-grid');
const pagination = document.querySelector('.pagination');
const applyFiltersButton = document.querySelector('.apply-filters');

// Sample Product Data (Replace with data from your backend)
const products = [
  { id: 1, name: 'Baluchari Silk Saree', price: 4500, material: 'silk', color: 'red', image: 'saree1.jpg' },
  { id: 2, name: 'Tant Cotton Saree', price: 1200, material: 'cotton', color: 'blue', image: 'saree2.jpg' },
  { id: 3, name: 'Kantha Stitch Saree', price: 2500, material: 'cotton', color: 'green', image: 'saree3.jpg' },
  { id: 4, name: 'Jamdani Silk Saree', price: 6000, material: 'silk', color: 'red', image: 'saree4.jpg' },
  { id: 5, name: 'Tussar Silk Saree', price: 5500, material: 'silk', color: 'yellow', image: 'saree5.jpg' },
  { id: 6, name: 'Bhagalpuri Silk Saree', price: 7000, material: 'silk', color: 'purple', image: 'saree6.jpg' },
];

// Pagination Variables
const productsPerPage = 4;
let currentPage = 1;

// Function to Render Products
function renderProducts(filteredProducts, page = 1) {
  productGrid.innerHTML = ''; // Clear existing products
  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;
  const paginatedProducts = filteredProducts.slice(start, end);

  paginatedProducts.forEach((product) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <button>Add to Cart</button>
    `;
    productGrid.appendChild(productElement);
  });

  renderPagination(filteredProducts.length);
}

// Function to Render Pagination
function renderPagination(totalProducts) {
  pagination.innerHTML = ''; // Clear existing pagination links
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.classList.add('page-link');
    pageLink.textContent = i;
    if (i === currentPage) {
      pageLink.classList.add('active');
    }
    pageLink.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = i;
      applyFilters(); // Re-render products for the selected page
    });
    pagination.appendChild(pageLink);
  }

  // Add "Next" button
  if (currentPage < totalPages) {
    const nextLink = document.createElement('a');
    nextLink.href = '#';
    nextLink.classList.add('page-link');
    nextLink.textContent = 'Next';
    nextLink.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage++;
      applyFilters(); // Re-render products for the next page
    });
    pagination.appendChild(nextLink);
  }
}

// Function to Apply Filters
function applyFilters() {
  const selectedPrices = Array.from(document.querySelectorAll('input[name="price"]:checked')).map((cb) => cb.value);
  const selectedMaterials = Array.from(document.querySelectorAll('input[name="material"]:checked')).map((cb) => cb.value);
  const selectedColors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map((cb) => cb.value);

  const filteredProducts = products.filter((product) => {
    const priceMatch = selectedPrices.length === 0 || selectedPrices.some((range) => {
      const [min, max] = range.split('-').map(Number);
      return product.price >= min && product.price <= max;
    });

    const materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);

    return priceMatch && materialMatch && colorMatch;
  });

  renderProducts(filteredProducts, currentPage);
}

// Event Listeners
applyFiltersButton.addEventListener('click', applyFilters);

// Initial Render
renderProducts(products);
// DOM Elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const productsGrid = document.querySelector('.products-grid'); // Assuming this is where products are displayed

// Function to Filter Products
function filterProducts(searchTerm) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredProducts;
}

// Function to Render Filtered Products
function renderFilteredProducts(filteredProducts) {
  productsGrid.innerHTML = ''; // Clear existing products
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = '<p>No products found.</p>'; // Display message if no products match
  } else {
    filteredProducts.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productsGrid.appendChild(productCard);
    });
  }
}

// Event Listener for Search Button
searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    const filteredProducts = filterProducts(searchTerm);
    renderFilteredProducts(filteredProducts);
  } else {
    alert('Please enter a search term.');
  }
});

// Event Listener for Enter Key in Search Input
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      const filteredProducts = filterProducts(searchTerm);
      renderFilteredProducts(filteredProducts);
    } else {
      alert('Please enter a search term.');
    }
  }
});

// Function to Add Product to Cart (Example)
function addToCart(productId) {
  alert(`Product ${productId} added to cart!`);
}