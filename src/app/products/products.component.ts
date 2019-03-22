import {DataSource} from '@angular/cdk/collections';
import {Component, OnInit, ViewChild} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

import {Router} from '@angular/router';
import {Product} from './product.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ProductService} from '../product.service';




export interface PeriodicElement {
  name: string ;
  prix: number;
  category: string;
  imagePath: string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource ;
  ELEMENT_DATA ;
 products: Product[];
  displayedColumns: string[] = ['name', 'prix', 'edit'];
 constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
     this.productService.getAllProducts().subscribe((response) => { this.products = response.json();
       this.ELEMENT_DATA =   this.products;
       this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort; });

 }
  onEditProduct(i: number) {
   console.log('its work');
   this.router.navigate(['/products', 'edit', i ]);
  }
  handleRow(element) {
   console.log(element);
  }
handleHeaderRow(element) {
console.log(element);
}
applyFilter(info: string) {
 this.dataSource.filter = info.trim().toLowerCase();
}

}

