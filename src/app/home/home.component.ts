import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {ShoppingCartService} from '../shopping-cart/shopping-cart.service';
import {Product} from '../products/product.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories = [];
  products = [];
  show = [];
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute, private shoppingService: ShoppingCartService) {
  }

  ngOnInit() {

    this.productService.getAllProducts().subscribe( (response) => {
     this.products = response.json() ;
      const tab = this.products.map((product) => product.category);
      this.categories = Array.from(new Set(tab));
      this.show = this.products.map((product) => false);
    console.log(this.categories);  } );

    this.route.queryParams.subscribe(value => { if (value.category === 'header') {
       this.productService.getAllProducts().subscribe( (response) => this.products = response.json() ); }
      else { this.products = this.productService.getProductByCategory(value.category); }
    } );
  }

  affiche(event) {
    document.querySelectorAll('.list-group-item').forEach(val => val.className = 'list-group-item');
    document.getElementById(event).className += ' active ';
    this.router.navigate(['/'], { queryParams: {'category': event}} );
  }
  onAddCart(i: number){
    this.show[i] = true;
  }
  addItem(product: Product) {
  let tmp = this.shoppingService.getProductCount(product);
    if(tmp === undefined) {
    this.shoppingService.addProduct(product, 1); } else {
      this.shoppingService.addProduct(product, tmp + 1);
    }
    }
    deleteItem(product: Product, indice: number) {
      let tmp = this.shoppingService.getProductCount(product);
      if (tmp === undefined || tmp < 2) {
        this.shoppingService.deleteProduct(product);
        this.show[indice] = false;
    } else {
      this.shoppingService.addProduct(product, tmp-1);
      }
    }
}
