import { Component } from '@angular/core';
import {CartService} from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-wp';
  len:any;
  login:boolean = true;
  constructor(private ser3:CartService) {
    this.len = this.ser3.len();
  }
  set(val){
    this.len = val;
  }
  
}
