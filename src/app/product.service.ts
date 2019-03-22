import  { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Product} from './products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories = [];
  products = [];
  constructor(private http: Http ) {
    this.getAllProducts().subscribe(response => this.products = response.json());
  }

  getProducts() {
    return this.products.slice();
  }
  storeProducts(products: Product[]) {
    return this.http.put('https://e-commerceproject-4404e.firebaseio.com/products.json', products );
}
  addProduct(product: Product) {
   this.products.push(product);
  return  this.storeProducts(this.products);  }
getAllProducts() {
    return this.http.get('https://e-commerceproject-4404e.firebaseio.com/products.json');
}

  getProduct(id: number) {
    this.getAllProducts().subscribe(response => this.products = response.json() );
    return this.products.slice()[id]; }
  updateProduct(ind: number, product: Product) {
    this.products[ind] = product;
    return this.products.slice();
  }

  getCategories() {
    console.log( 'here ');
    console.log(this.products);
    this.categories = this.products.map((product) => product.category);
    const arr = Array.from(new Set(this.categories));
    console.log(arr);
    return arr.slice();
  }
  deleteProduct(id: number) {
   return this.http.delete('https://e-commerceproject-4404e.firebaseio.com/products.json/' + id);
  }
  setProducts(products) {
    this.products = products;
  }
  getProductByCategory(category: string) {
   let arr1 = this.products.filter(product => product.category === category   );
    console.log(arr1);
    return arr1.slice();
  }
}
