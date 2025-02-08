// Sample User Data (Replace with data from your backend)
let users = [];

// DOM Elements
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

// Function to Handle Sign-Up
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    const newUser = { name, email, phone, password };
    users.push(newUser);
    alert('Account created successfully! Please login.');
    window.location.href = 'login.html';
  });
}

// Function to Handle Login
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      window.location.href = 'Profile.html';
     } else {
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'Profile.html';
    //   alert('Invalid email or password.');
     }
  });
}

// Function to Handle Logout
const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
  logoutButton.addEventListener('click', () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  });
}

// Function to Check if User is Logged In
function checkLoggedIn() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!loggedInUser && window.location.pathname.includes('profile.html')) {
    window.location.href = 'login.html';
  }
}

// Initial Check
checkLoggedIn();