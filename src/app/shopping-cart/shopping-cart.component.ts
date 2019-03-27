import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service';
import {Product} from '../products/product.model';
import {Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppedProducts: Map<Product, number> ;
  keys: Product[];
  constructor(private cartService: ShoppingCartService, private router: Router) { }

  ngOnInit() {
    this.shoppedProducts =  this.cartService.getAllProducts();
    this.keys = Array.from(this.shoppedProducts.keys());
    console.log(this.keys);
  }
  onClearCart() {
    this.keys = [];
    this.shoppedProducts.clear();
    this.cartService.clearCart();
  }
  onChange() {
this.router.navigate(['/check-out']);
  }

}
