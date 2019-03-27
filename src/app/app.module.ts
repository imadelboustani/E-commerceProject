import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './auth/auth.service';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {HttpModule} from '@angular/http';
import { NewProductComponent } from './products/new-product/new-product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {ShoppingCartService} from './shopping-cart/shopping-cart.service';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    ProductsComponent,
    ProductEditComponent,
    NewProductComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    CdkTableModule,
    MatTableModule,
    HttpModule
  ],
  providers: [AuthService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
