import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  registerForm:any;
  credentials = false;
  invalidFirstName = false;
  invalidLastName = false;
  invalidEmail = false;
  invalidPassword = false;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  registerAuth() {
    if (this.registerForm.invalid) {
      if (this.registerForm.controls.firstName.errors) {
        this.invalidFirstName = true
      } else {}
      if (this.registerForm.controls.lastName.errors) {
        this.invalidLastName = true
      } else {}
      if (this.registerForm.controls.email.errors) {
        this.invalidEmail = true
      } else {}
      if (this.registerForm.controls.password.errors) {
        this.invalidPassword = true
      } else {}
    }
    console.log(this.registerForm)
  }

}
