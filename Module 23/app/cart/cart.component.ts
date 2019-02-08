import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  temp1: any = [];
  total: any =0;
  len:any;
  constructor(private ser2:CartService) {
    this.temp1 = this.ser2.get();
    this.len = this.ser2.len();
    this.total = this.ser2.total();
   }

  ngOnInit() {
  }
  del(i){
    this.ser2.del(i);
    this.temp1 = this.ser2.get();
    this.total = this.ser2.total();
  }
  out(){
    
  }
  increase(val){
    this.ser2.inc(val);
    this.total = this.ser2.total();
    this.temp1 = this.ser2.get();
  }
  decrease(val){
    this.ser2.dec(val);
    this.total = this.ser2.total();
    this.temp1 = this.ser2.get();
  }
}
