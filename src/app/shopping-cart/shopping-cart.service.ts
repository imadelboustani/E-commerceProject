import {EventEmitter, Injectable} from '@angular/core';
import {Product} from '../products/product.model';

export class ShoppingCartService {
  cartProducts: Map<Product, number>;
  cartChanged: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.cartProducts = new Map<Product, number>();
  }
  updateProduct(product: Product, count: number) {
    for (const  product1 of Array.from(this.getAllProducts().keys())) {
      if(product1.name === product.name) {
        const tmp = this.cartProducts.get(product1);
         this.cartProducts.set(product1, tmp + count);
         return;
      }

    }
    return;
      }

  addProduct(product: Product, count: number) {
    console.log(this.existProduct(product));
     if (this.existProduct(product)) {
       this.updateProduct(product, count); }
     else { this.cartProducts.set(product, count); }
     this.cartChanged.emit(this.sumItems());
  }

  getProductCount(product: Product) {
    return this.cartProducts.get(product);
  }

  existProduct(product: Product) {
    let tr = false;
    for (let product1 of Array.from(this.getAllProducts().keys())) {
      if (product1.name === product.name) {
         tr = true;
      }
    }
    return tr;
  }
  deleteProduct(product: Product) {
    this.cartProducts.delete(product);
    this.cartChanged.emit(this.sumItems());
  }
  sumItems() {
    let sum = 0 ;
    for (const val of Array.from(this.cartProducts.values())) {
      sum += val;
    }
    return sum;
  }
  getAllProducts() {
    return this.cartProducts;
  }
  getPrice(product: Product) {
    return product.prix * this.getProductCount(product);
  }
  getTotalPrice() {
    let sum = 0;
    for (const key of Array.from(this.cartProducts.keys())) {
      sum += this.getPrice(key);
    }
    return sum;
  }
  clearCart() {
    this.cartProducts.clear();
    this.cartChanged.emit(this.sumItems());
  }
}
