import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import {ProdServiceService} from '../prod-service.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
// import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  email:String;
  password:String;
  angForm: FormGroup;
  submitted = false;
  constructor(private serv: ProdServiceService,
    private formBuilder: FormBuilder) {
     }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }
  get f() { return this.registerForm.controls; }

    validate() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var obj = {mail: this.email, pwd: this.password}
        this.serv.validate(obj);
    }
  // validate(){
  //   console.log(this.email);
  //   var obj = {mail: this.email, pwd: this.password}
  //   this.serv.validate(obj);    
  // }
  // createForm() {
  //   this.angForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //      password: ['', Validators.required ]
  //   });
  // }
}
