import { Component } from '@angular/core';
import {CartService} from './cart.service';
import {ProdServiceService} from './prod-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-wp';
  len:any;
  login:boolean = false;
  constructor(private ser3:CartService, private prodser:ProdServiceService) {
    this.len = this.ser3.len();
    this.login = prodser.isLoggedin();
    // console.log(this.login);
    // console.log('In the constructor' + this.login);
      // this.rout.navigate['/main']
  }
  set(val){
    this.len = val;
  }
  
}
