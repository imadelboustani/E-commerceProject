import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ShoppingCartService} from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   countItems: number;
  constructor(private auth: AuthService, private shoppingService: ShoppingCartService) { }

  ngOnInit() {
     this.shoppingService.cartChanged.subscribe((val) => this.countItems = val );
    console.log(this.countItems);
  }
  onLogout() {
    this.auth.logOut();
  }

}
