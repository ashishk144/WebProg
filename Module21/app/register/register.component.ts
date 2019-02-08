import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import { ProdServiceService } from '../prod-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
username: String;
  email: String;
  phonenumber: Number;
  password: String;
  confirmpassword: String;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private prodser: ProdServiceService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phonenumber: ['', [Validators.required, Validators.minLength(10)]]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }
  get f() { return this.registerForm.controls; }

    register() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    if(this.confirmpassword === this.password) {
        var user = {
            name: this.username,
            email: this.email,
            pwd: this.confirmpassword,
            phone: this.phonenumber,
            address: "",
            balance: 0,
            cart:[]
        };
        this.prodser.register(user);
        } else {
        console.log("Password's do not match");
        }
    }
}
