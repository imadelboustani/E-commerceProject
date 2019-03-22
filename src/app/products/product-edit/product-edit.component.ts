import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Product} from '../product.model';

import {NgForm} from '@angular/forms';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: number;
  product: Product;
  tmp: Product[];
  @ViewChild('title') title;
  @ViewChild('f') form: NgForm;
  categories;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['i'];
    this.product = this.productService.getProduct(this.id);
    console.log(this.product);
    this.categories = this.productService.getCategories();
    this.route.params.subscribe((parms: Params) => {
      this.id = +parms['id'];
      this.product = this.productService.getProduct(this.id);
      this.categories = this.productService.getCategories();
      console.log(this.categories);
      //  this.form.setValue({title: 'hamid'}); } );
      console.log(this.form);
    });
  }

  onSubmit(f: NgForm) {
    console.log(f);
    this.tmp = this.productService.updateProduct(this.id, new Product(f.value.name, f.value.prix, f.value.imagePath, f.value.category));
    this.productService.storeProducts(this.tmp).subscribe(response => console.log(response));
  }
  onDeleteProduct() {
    this.productService.deleteProduct(this.id).subscribe(response => console.log(response));
  }
}
