// Proceed to Checkout
function proceedToCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  // Redirect to checkout page
  window.location.href = "checkout.html";
}
