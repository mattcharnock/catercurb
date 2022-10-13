import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  email: any;
  password: any;
  credentials = false;
  user = {
    email: 'mrcharnock01@gmail.com',
    password: 'Mc7412369!'
  }

  ngOnInit(): void {
  }


  loginAuth() {
    const authInfo = {
      email: this.email,
      password: this.password
    }
    if (authInfo.email.length === 0 || authInfo.password.length === 0) {
      this.credentials = true
    }
    else {
      if (authInfo.email === this.user.email && authInfo.password === this.user.password) {
        console.log('confirmed')
        this.credentials = false
      }
      else {
        this.credentials = true
      }
    }
  }


}
