// Sample Data (Replace with data from your backend)
const featuredProducts = [
    { id: 1, name: 'Baluchari Silk Saree', price: 2500, image: 'saree1.jpg' },
    { id: 2, name: 'Tant Cotton Saree', price: 1200, image: 'saree2.jpg' },
    { id: 3, name: 'Kantha Stitch Saree', price: 2500, image: 'saree3.jpg' },
    { id: 4, name: 'Jamdani Silk Saree', price: 3000, image: 'saree4.jpg' },
  ];
  
  const categories = [
    { id: 1, name: 'Sarees', image: 'tradsaree.jpg' },
    { id: 2, name: 'Handicrafts', image: 'handicrafts.jpg' },
    { id: 3, name: 'Snacks', image: 'snacks.jpg' },
    { id: 4, name: 'Home Decor', image: 'decor.jpg' },
  ];
  
  const specialOffers = [
    { id: 1, name: 'Durga Puja Special', discount: '20% Off', image: 'Durga-puja.jpg' },
    { id: 2, name: 'Festive Combo', discount: 'Buy 1 Get 1 Free', image: 'festive-combo.jpg' },
    { id: 3, name: 'New Arrivals', discount: '15% Off', image: 'new-arrival.jpg' },
  ];
  
  // DOM Elements
  const productsGrid = document.querySelector('.products-grid');
  const categoriesGrid = document.querySelector('.categories-grid');
  const offersGrid = document.querySelector('.offers-grid');
  
  // Function to Render Featured Products
  function renderFeaturedProducts() {
    productsGrid.innerHTML = ''; // Clear existing products
    featuredProducts.forEach((product) => {
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
  
  // Function to Render Categories
  function renderCategories() {
    categoriesGrid.innerHTML = ''; // Clear existing categories
    categories.forEach((category) => {
      const categoryCard = document.createElement('div');
      categoryCard.classList.add('category-card');
      categoryCard.innerHTML = `
        <img src="${category.image}" alt="${category.name}">
        <h3>${category.name}</h3>
      `;
      categoriesGrid.appendChild(categoryCard);
    });
  }
  
  // Function to Render Special Offers
  function renderSpecialOffers() {
    offersGrid.innerHTML = ''; // Clear existing offers
    specialOffers.forEach((offer) => {
      const offerCard = document.createElement('div');
      offerCard.classList.add('offer-card');
      offerCard.innerHTML = `
        <img src="${offer.image}" alt="${offer.name}">
        <h3>${offer.name}</h3>
        <p>${offer.discount}</p>
        <button onclick="viewOffer(${offer.id})">View Offer</button>
      `;
      offersGrid.appendChild(offerCard);
    });
  }
  
  // Function to Add Product to Cart
  function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
  }
  
  // Function to View Offer
  function viewOffer(offerId) {
    alert(`Viewing offer ${offerId}`);
  }
  
  // Initial Render
  renderFeaturedProducts();
  renderCategories();
  renderSpecialOffers();