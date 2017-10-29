import { Component, OnInit } from '@angular/core';
import { ServiceFactory } from '../service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    policy : ""
  };

  errorMessage;
  constructor(private serviceFactory: ServiceFactory, private router : Router) { }

  ngOnInit() {
  }

  /**
   * Function called on submitting sign up form. Calls createUser service.
   */
  createUser = () => {
    this.errorMessage = "";
    console.log('Inside Create User method', this.user);
    this.serviceFactory.createUser(this.user).subscribe((response) => {
      console.log("Inside resp", response);
      alert('User created successfully!');
      this.router.navigate(["/home"]);
    }, (error) => {
      if (error) {
        console.log('Inside Error : ', error);
        this.errorMessage = JSON.parse(error._body).errorMsg;
      }
    });

  }
}
