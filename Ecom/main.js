let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(`${name} added to cart!`);
  localStorage.setItem('cart', JSON.stringify(cart));
}