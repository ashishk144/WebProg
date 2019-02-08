import { Component, OnInit } from '@angular/core';
import {FileService} from '../file.service';
import {CartService} from '../cart.service';
import {ProdServiceService} from '../prod-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tem:any;
  // temp: any = [];
  len:number;
    constructor(private ser:ProdServiceService,
      private ser5:FileService,
      private ser1:CartService) { 
      this.len = ser1.len();
      // this.temp = ser5.getDetails();
      // this.ser.getProducts().subscribe(d=>this.tem);
        this.ser.getProducts().subscribe((data)=>{
        console.log("Main");
        console.log(data);
        this.tem = data;
      });
    }
  ngOnInit() {
    
    }
  cart(val){
    this.ser1.set(val);
    this.len = this.ser1.len();
  }
}
