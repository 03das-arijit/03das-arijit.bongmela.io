// Sample Cart Data (Replace with data from your backend or state management)
let cart = [
    { id: 1, name: 'Baluchari Silk Saree', price: 4500, image: 'saree1.jpg', quantity: 1 },
    { id: 2, name: 'Tant Cotton Saree', price: 1200, image: 'saree2.jpg', quantity: 2 },
  ];
  
  // DOM Elements
  const cartItemsContainer = document.querySelector('.cart-items');
  const totalItemsElement = document.getElementById('total-items');
  const totalPriceElement = document.getElementById('total-price');
  
  // Function to Render Cart Items
  function renderCartItems() {
    cartItemsContainer.innerHTML = ''; // Clear existing items
    let totalItems = 0;
    let totalPrice = 0;
  
    cart.forEach((item) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h3>${item.name}</h3>
          <p>₹${item.price} x ${item.quantity}</p>
        </div>
        <div class="cart-item-actions">
          <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      `;
      cartItemsContainer.appendChild(cartItem);
  
      totalItems += item.quantity;
      totalPrice += item.price * item.quantity;
    });
  
    totalItemsElement.textContent = totalItems;
    totalPriceElement.textContent = totalPrice;
  }
  
  // Function to Remove Item from Cart
  function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    renderCartItems();
  }
  
  // Initial Render
  renderCartItems();