// Product Class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// ShoppingCartItem Class
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate the total price of the item based on its quantity
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// ShoppingCart Class
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  // Method to add item to cart
  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem = new ShoppingCartItem(product, quantity);
      this.items.push(newItem);
    }
  }

  // Method to remove item from cart
  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  // Method to get the total number of items in the cart
  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // Method to display cart items
  displayCart() {
    if (this.items.length === 0) {
      console.log("Your cart is empty.");
      return;
    }

    console.log("Cart Items:");
    this.items.forEach(item => {
      console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total: $${item.getTotalPrice().toFixed(2)}`);
    });
    
    const totalCartPrice = this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    console.log(`Total Price of Cart: $${totalCartPrice.toFixed(2)}`);
  }
}

// Testing the Shopping Cart Functionality
// Create some products
const product1 = new Product(1, "Laptop", 999.99);
const product2 = new Product(2, "Phone", 499.99);
const product3 = new Product(3, "Headphones", 199.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

// Display cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2); // Remove the Phone (product id 2)

// Display cart after removing an item
cart.displayCart();
