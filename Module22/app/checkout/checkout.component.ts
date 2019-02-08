import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  arr:any=[];
  quan:number;
  total:number;
  flag:boolean = false;
  username: String;
  email: String;
  phonenumber: Number;
  address:string;
  registerForm: FormGroup;
  submitted = false;
  constructor(private cser:CartService,private formBuilder: FormBuilder) {
    this.arr = cser.get();
    this.quan = cser.len();
    this.total = cser.total();
   }

  ngOnInit() {
    this.arr = this.cser.get();
    this.quan = this.cser.len();
    this.total = this.cser.total();
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.minLength(10)]],
      address: ['', [Validators.required, Validators.minLength(20)]]
  });
  }
  
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
  }
}
