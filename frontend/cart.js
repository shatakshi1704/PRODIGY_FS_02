// Function to retrieve cart items from localStorage
function getCartItems() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// Function to display cart items in cart.html
function displayCartItems() {
  const cartItems = getCartItems(); 
  const cartContainer = document.querySelector('.cart-items'); 


// If cart is empty, display a message
  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty</p>';
    updateCartSummary([], 0); 
    return;
  }

 // Iterate over cart items and display product ID
  cartItems.forEach(productId => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.textContent = `Product ID: ${productId}`;
    cartContainer.appendChild(cartItem);
  });

// Update cart summary with current cart items
  updateCartSummary(cartItems);
}

// Function to update cart summary
function updateCartSummary(cartItems) {
  const summaryDetails = document.querySelector('.summary-details');
  const totalItems = cartItems.length;
  const totalPrice = calculateTotalPrice(cartItems);

// Display total items and total price in cart summary
  summaryDetails.innerHTML = `
    <p>Total Items: <span id="totalItems">${totalItems}</span></p>
    <p>Total Price: <span id="totalPrice">$${totalPrice.toFixed(2)}</span></p>
  `;
}

// Function to calculate total price of items in the cart
function calculateTotalPrice(cartItems) {
  let totalPrice = 0;

  
  cartItems.forEach(productId => {
    totalPrice += 10;
  });

  return totalPrice;
}

// Function to clear the cart
function clearCart() {
  localStorage.removeItem('cart'); 
  displayCartItems(); 
}

// Event listener for when the "Proceed to Checkout" button is clicked
document.querySelector('.checkout-btn').addEventListener('click', () => {
  clearCart(); 
});

// Event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  displayCartItems(); 
});
