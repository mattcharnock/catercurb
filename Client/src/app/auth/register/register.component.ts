import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  firstName: any;
  lastName: any;
  email: any;
  password: any;
  credentials = false;

  ngOnInit(): void {
  }

  registerAuth() {
    const authInfo = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }
  }

}
