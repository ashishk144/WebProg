import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {ProdServiceService} from '../prod-service.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  len:any;
  user: any;
  constructor( private ser1:CartService, private ser2: ProdServiceService) { 

  }

  ngOnInit() {
    this.len = this.ser1.len();
    if(this.user !== null) {
      this.ser2.getUser().subscribe((x)=>{
      this.user = x;
    });}
  }

}
