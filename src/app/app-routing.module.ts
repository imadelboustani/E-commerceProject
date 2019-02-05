import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingCardComponent} from './shopping-card/shopping-card.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'shopping-card', component: ShoppingCardComponent },
  {path: '', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
