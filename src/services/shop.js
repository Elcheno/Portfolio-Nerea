import products from "./products.json";

class Shop {

  constructor() {
    this.cart = new Cart();
    this.products = [];
  }

  addProduct(product) {
    this.cart.addProduct(product);
  }

  removeProduct(product) {
    this.cart.removeProduct(product);
  }

  getProducts() {
    products.forEach(product => {
      this.products.push(new Product(product.id, product.uuid, product.name, product.price, product.description));
    });
    return this.products;
  }

}


class Cart {

  constructor() {
    this.items = new Map();
  }

  addProduct(product) {
    const id = product.id ?? (Math.random() * 10000);
    if (this.items.has(id)) {
      this.items.get(id).quantity + product.quantity;
      return;
    }
    this.items.set(id, product);
    window.localStorage.setItem("CART", JSON.stringify(this.getProducts()));
  }

  removeProduct(product) {
    this.items.delete(product.id);
  }

  getProducts() {
    return Array.from(this.items.values());
  }

}


class Product {

  constructor(id, uuid, name, price, description) {
    this.id = id;
    this.uuid = uuid;
    this.name = name ?? "";
    this.price = price ?? 0;
    this.description = description ?? "";
  }

}

class ProductItem extends Product {

  constructor({ id, uuid, name, price, description }, quantity) {
    super(id, uuid, name, price, description);
    this.quantity = quantity ?? 1;
  }

}

export {Shop, Cart, Product, ProductItem};
