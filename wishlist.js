// Sample Wishlist Data (Replace with data from your backend or state management)
let wishlist = [
    { id: 1, name: 'Baluchari Silk Saree', price: 4500, image: 'saree1.jpg' },
    { id: 2, name: 'Kantha Stitch Saree', price: 2500, image: 'saree3.jpg' },
  ];
  
  // DOM Elements
  const wishlistItemsContainer = document.querySelector('.wishlist-items');
  
  // Function to Render Wishlist Items
  function renderWishlistItems() {
    wishlistItemsContainer.innerHTML = ''; // Clear existing items
  
    wishlist.forEach((item) => {
      const wishlistItem = document.createElement('div');
      wishlistItem.classList.add('wishlist-item');
      wishlistItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
        <button onclick="removeFromWishlist(${item.id})">Remove</button>
      `;
      wishlistItemsContainer.appendChild(wishlistItem);
    });
  }
  
  // Function to Remove Item from Wishlist
  function removeFromWishlist(productId) {
    wishlist = wishlist.filter((item) => item.id !== productId);
    renderWishlistItems();
  }
  
  // Initial Render
  renderWishlistItems();