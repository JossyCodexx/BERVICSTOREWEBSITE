
// ----------------- CART FUNCTIONALITY -----------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update Cart Count (top navbar)
function updateCartCount() {
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = count;
  }
}
updateCartCount();

// Add Item to Cart
function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(product.title + " added to cart!");
}

// Render Cart Items on cart.html
function renderCartItems() {
  const cartList = document.getElementById("cart-items-list");
  if (!cartList) return; // Run only on cart.html

  cartList.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    const total = item.price * item.quantity;
    subtotal += total;

    cartList.innerHTML += `
      <div class="cart-row">
        <span><img src="${item.image}" width="50"></span>
        <span>${item.title}</span>
        <span>$${item.price.toFixed(2)}</span>
        <span>
          <button onclick="changeQuantity(${index}, -1)">-</button>
          ${item.quantity}
          <button onclick="changeQuantity(${index}, 1)">+</button>
        </span>
        <span>$${total.toFixed(2)}</span>
        <span><button onclick="removeFromCart(${index})">X</button></span>
      </div>
    `;
  });

  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total");

  if (subtotalEl) subtotalEl.textContent = subtotal.toFixed(2);
  if (totalEl) totalEl.textContent = subtotal.toFixed(2);
}

// Change Quantity
function changeQuantity(index, amount) {
  cart[index].quantity += amount;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartItems();
  updateCartCount();
}

// Remove from Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartItems();
  updateCartCount();
}

// Apply Promo Code
function applyPromo() {
  const codeInput = document.getElementById("promo-input");
  const totalEl = document.getElementById("total");

  if (!codeInput || !totalEl) return;

  const code = codeInput.value.trim();
  if (code === "DISCOUNT10") {
    let subtotal = parseFloat(document.getElementById("subtotal").textContent);
    let discounted = subtotal * 0.9; // 10% off
    totalEl.textContent = discounted.toFixed(2);
    alert("Promo code applied! 10% discount.");
  } else {
    alert("Invalid promo code.");
  }
}

// Proceed to Checkout
function proceedToCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  window.location.href = "checkout.html"; // Redirect to checkout
}

// Bind Events safely (only if element exists)
document.addEventListener("DOMContentLoaded", () => {
  renderCartItems();

  const promoBtn = document.getElementById("promo-btn");
  if (promoBtn) {
    promoBtn.addEventListener("click", applyPromo);
  }

  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", proceedToCheckout);
  }
});
