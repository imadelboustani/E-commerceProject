import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';
import {Product} from '../products/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppedProducts: Map<Product, number> ;
  keys;
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppedProducts =  this.cartService.getAllProducts();
    this.keys = Array.from(this.shoppedProducts.keys());
  }
  onClearCart(){
    this.keys = [];
    this.shoppedProducts.clear();
    this.cartService.clearCart();
  }

}
