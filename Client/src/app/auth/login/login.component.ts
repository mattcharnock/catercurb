import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  authForm: any;
  credentials = false;
  invalidEmail = false;
  invalidPassword = false


  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }


  loginAuth() {
    if (this.authForm.invalid) {
      if(this.authForm.controls.email.errors) {
        this.invalidEmail = true
      } else {}
      if (this.authForm.controls.password.errors) {
        this.invalidPassword = true
      }

    }
    console.log(this.authForm)
  }


}
