const apiUrl = 'http://localhost:5000/api/products';

const productsSection = document.querySelector('.products');

// Function to create a product card
function createProductCard(product) {
  const productCard = document.createElement('div');
  productCard.classList.add('product');

  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>$${product.price}</p>
    <button onclick="addToCart('${product.id}')">Add to Cart</button>
    <p style="font-style:italic">${product.description}</p>
  `;

  productsSection.appendChild(productCard);
}

const productsData = [
  { id: '1', name: 'Primer', price: 10.00, image: src="primer.webp", description:"Used to smooth the skin, fill in lines and wrinkles, and create a less porous surface for your makeup." },
  { id: '2', name: 'Foundation', price: 10.00, image: src="foundation.avif" , description:"Applied to the face or neck to create an even, uniform color to the complexion, conceal blemishes and blur imperfections."},
  { id: '3', name: 'Concealer', price: 10.00, image: src="concealer.jpg" , description:"Evens skin tone, helps brighten the undereye areas to eliminate the look of dark circles and conceals blemishes"},
  { id: '4', name: 'Bronzer', price: 10.00, image: src="Bronzer.webp" , description:"Typically beige to deep brown in color, with a warm undertone to mimic a natural tan"},
  { id: '5', name: 'Contour', price: 10.00, image: src="contour.avif", description:" Involves using light and dark shades of makeup to sculpt and define the face. " },
  { id: '6', name: 'Brushes', price: 10.00, image: src="brushes.jpg", description:"Tool with bristles, used for the application of makeup or face painting. " },
  { id: '7', name: 'Setting Spray', price: 10.00, image: src="settingspray.webp" , description:"Designed to preserve applied make-up in place for long periods of time."},
  { id: '8', name: 'Lip Gloss', price: 10.00, image: src="lipgloss.avif" , description:"Gives that bit of extra shine "},
  { id: '9', name: 'Lip Oil', price: 10.00 ,image: src="lipoil.webp" , description:"Hybrid multitasking product that blurs the lines between makeup and skincare."},
  { id: '10', name: 'Lipstick', price: 10.00, image: src="lipstick.webp" , description:"Used to apply coloration and texture to lips, often made of wax and oil"},
  { id: '11', name: 'Body Paint', price: 10.00, image: src="bodypaint.jpg" , description:" Form of body art where artwork is painted directly onto the human skin."},
  { id: '12', name: 'Powder', price: 10.00, image: src="powder.jpg" , description:"Used to beautify the face either by absorbing excess oil or making the skin matte, smooth and velvety"},
];

productsData.forEach(product => {
  createProductCard(product);
});

// Function to add product to cart
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    if (!cart.includes(productId)) {
      cart.push(productId);
      localStorage.setItem('cart', JSON.stringify(cart)); 
      alert('Product added to cart!');
    } else {
      alert('Product is added again!');
    }
  }  

  
  