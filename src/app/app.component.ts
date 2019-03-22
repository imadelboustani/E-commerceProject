import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import 'hammerjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
 export class AppComponent implements OnInit{
  title = 'E-commerceProject';
  ngOnInit() {
    firebase.initializeApp({apiKey: "AIzaSyBq7HRA1_4C0YtleXvrng9F1SHbXjPbN0Y", authDomain: "e-commerceproject-4404e.firebaseapp.com"});
  }
}
