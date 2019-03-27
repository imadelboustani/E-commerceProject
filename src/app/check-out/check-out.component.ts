import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from '../shopping-cart/shopping-cart.service';
import {Product} from '../products/product.model';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
    ps = new Map<Product, number>();
    products: Product[];
  constructor(private ss: ShoppingCartService) { }

  ngOnInit() {
this.ps = this.ss.getAllProducts();
   this.products = Array.from( this.ps.keys());
  }

}
