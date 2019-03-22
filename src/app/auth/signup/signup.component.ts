import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authent: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form);
    this.authent.registerUSer(form.value.email, form.value.password);
   // this.authent.connecterUser(form.value.email, form.value.password);
  }

}
