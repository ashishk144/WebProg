import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  len:any;
  constructor( private ser1:CartService) { 
    this.len = ser1.len();
  }

  ngOnInit() {
    this.len = this.ser1.len()
  }

}
