import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm:any = FormGroup;
  submitted = false;
  router:any = Router;
  constructor( private formBuilder: FormBuilder){}

  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      if(this.loginForm.value.email == "test@test.com" && this.loginForm.value.password == "pass"){
        alert("Success!!"); 
      }
      else {
        alert("Invalid Username or Password");
      }
    }
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
    });
  }
}