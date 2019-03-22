import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {ProductsComponent} from './products/products.component';
import {ProductEditComponent} from './products/product-edit/product-edit.component';
import {NewProductComponent} from './products/new-product/new-product.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: 'shopping-card', component: ShoppingCartComponent},
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'products/edit/:id', component: ProductEditComponent},
  {path: 'products', component: ProductsComponent },
  {path: 'shoppingCard', component: ShoppingCartComponent },
  {path: 'products/NewProduct', component: NewProductComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
