import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms';
import {Product} from '../product.model';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }
  onAddProduct(form: NgForm) {
    this.productService.addProduct(new Product(form.value.name, form.value.prix, form.value.imagePath, form.value.category )).subscribe(response => console.log(response));
    form.reset();
  }

}
