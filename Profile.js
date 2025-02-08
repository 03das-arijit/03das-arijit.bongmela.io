// Sample Data (Replace with data from your backend)
let user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    addresses: [
      {
        id: 1,
        street: "123 Main Street",
        city: "Kolkata",
        state: "West Bengal",
        zip: "700001",
      },
      {
        id: 2,
        street: "456 Park Avenue",
        city: "Howrah",
        state: "West Bengal",
        zip: "711101",
      },
    ],
    orders: [
      {
        id: 1,
        date: "2023-10-01",
        total: 4500,
        items: ["Baluchari Silk Saree"],
      },
      {
        id: 2,
        date: "2023-10-05",
        total: 1200,
        items: ["Tant Cotton Saree"],
      },
    ],
  };
  
  // DOM Elements
  const personalInfoForm = document.getElementById("personal-info-form");
  const addressList = document.querySelector(".address-list");
  const orderList = document.querySelector(".order-list");
  const addAddressButton = document.querySelector(".add-address-button");
  
  // Function to Render Addresses
  function renderAddresses() {
    addressList.innerHTML = ""; // Clear existing addresses
    user.addresses.forEach((address) => {
      const addressItem = document.createElement("div");
      addressItem.classList.add("address-item");
      addressItem.innerHTML = `
        <p>${address.street}, ${address.city}, ${address.state} - ${address.zip}</p>
        <button onclick="deleteAddress(${address.id})">Delete</button>
      `;
      addressList.appendChild(addressItem);
    });
  }
  
  // Function to Render Orders
  function renderOrders() {
    orderList.innerHTML = ""; // Clear existing orders
    user.orders.forEach((order) => {
      const orderItem = document.createElement("div");
      orderItem.classList.add("order-item");
      orderItem.innerHTML = `
        <p><strong>Date:</strong> ${order.date}</p>
        <p><strong>Total:</strong> ₹${order.total}</p>
        <p><strong>Items:</strong> ${order.items.join(", ")}</p>
      `;
      orderList.appendChild(orderItem);
    });
  }
  
  // Function to Delete Address
  function deleteAddress(addressId) {
    user.addresses = user.addresses.filter((address) => address.id !== addressId);
    renderAddresses();
  }
  
  // Function to Add New Address
  addAddressButton.addEventListener("click", () => {
    const newAddress = {
      id: user.addresses.length + 1,
      street: "789 New Street",
      city: "Kolkata",
      state: "West Bengal",
      zip: "700002",
    };
    user.addresses.push(newAddress);
    renderAddresses();
  });
  
  // Function to Update Personal Information
  personalInfoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.phone = document.getElementById("phone").value;
    alert("Personal information updated successfully!");
  });
  
  // Initial Render
  renderAddresses();
  renderOrders();