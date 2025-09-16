


// --- Sample Products Data ---
const products = {
  21: { title: "Men T-Shirt", price: "$30", oldPrice: "$40", image: "./images/men1.jpg", description: "Comfortable cotton t-shirt.", vendor: "mysite" },
  22: { title: "Men Jeans", price: "$45", oldPrice: "$60", image: "./images/men2.jpg", description: "Stylish denim jeans.", vendor: "mysite" },
  23: { title: "Men Jacket", price: "$99", oldPrice: "$120", image: "./images/men3.jpg", description: "Warm and stylish jacket.", vendor: "mysite" },
  24: { title: "Men Sneakers", price: "$65", oldPrice: "$80", image: "./images/men4.jpg", description: "Comfortable everyday sneakers.", vendor: "mysite" },
  25: { title: "Men Hoodie", price: "$50", oldPrice: "$70", image: "./images/men5.jpg", description: "Cozy hoodie for casual wear.", vendor: "mysite" },
  26: { title: "Men Shorts", price: "$25", oldPrice: "$35", image: "./images/men6.jpg", description: "Lightweight cotton shorts.", vendor: "mysite" },
  27: { title: "Men Cap", price: "$15", oldPrice: "$20", image: "./images/men7.jpg", description: "Classic cotton cap.", vendor: "mysite" },
  28: { title: "Men Belt", price: "$18", oldPrice: "$25", image: "./images/men8.jpg", description: "Leather belt for formal or casual wear.", vendor: "mysite" },
  29: { title: "Men Watch", price: "$120", oldPrice: "$150", image: "./images/men9.jpg", description: "Stylish wrist watch.", vendor: "mysite" },
  30: { title: "Men Sunglasses", price: "$45", oldPrice: "$60", image: "./images/men10.jpg", description: "UV-protection sunglasses.", vendor: "mysite" },
  31: { title: "Men Formal Shirt", price: "$40", oldPrice: "$55", image: "./images/men11.jpg", description: "Perfect formal shirt for office.", vendor: "mysite" },
  32: { title: "Men Polo Shirt", price: "$35", oldPrice: "$50", image: "./images/men12.jpg", description: "Casual polo shirt.", vendor: "mysite" },
  33: { title: "Men Loafers", price: "$70", oldPrice: "$90", image: "./images/men13.jpg", description: "Comfortable leather loafers.", vendor: "mysite" },
  34: { title: "Men Running Shoes", price: "$80", oldPrice: "$100", image: "./images/men14.jpg", description: "Perfect for jogging and running.", vendor: "mysite" },
  35: { title: "Men Sports Jacket", price: "$105", oldPrice: "$130", image: "./images/men15.jpg", description: "Lightweight and stylish sports jacket.", vendor: "mysite" },
  36: { title: "Men Hoodie Sweatshirt", price: "$60", oldPrice: "$75", image: "./images/men16.jpg", description: "Comfortable hoodie sweatshirt for casual wear.", vendor: "mysite" },
  37: { title: "Men Casual Shirt", price: "$38", oldPrice: "$50", image: "./images/men17.jpg", description: "Casual shirt perfect for everyday use.", vendor: "mysite" },
  38: { title: "Men Chinos", price: "$42", oldPrice: "$55", image: "./images/men18.jpg", description: "Stylish chino pants for office or casual wear.", vendor: "mysite" },
  39: { title: "Men Formal Pants", price: "$45", oldPrice: "$60", image: "./images/men19.jpg", description: "Classic formal pants for office or events.", vendor: "mysite" },
  40: { title: "Men Sneakers High", price: "$75", oldPrice: "$95", image: "./images/men20.jpg", description: "Trendy high-top sneakers for daily wear.", vendor: "mysite" }
};

// --- Get the product ID from the URL ---
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// --- Display product details ---
const productContainer = document.getElementById('product-details');

if (productId && products[productId]) {
  const product = products[productId];

  productContainer.innerHTML = `
    <div class="product-detail-card">
      <img src="${product.image}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p class="price"><span class="old-price">${product.oldPrice}</span> <span class="new-price">${product.price}</span></p>
      <p class="description">${product.description}</p>
      <p class="vendor"><strong>Vendor:</strong> ${product.vendor}</p>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  `;
} else {
  productContainer.innerHTML = `<p>Product not found.</p>`;
}

