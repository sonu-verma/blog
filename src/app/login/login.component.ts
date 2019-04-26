import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { LoginService } from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : any={};
  errorMessage : string;
  constructor( private router: Router, private LoginService: LoginService ) { }

  ngOnInit() {
    sessionStorage.removeItem('UserName');
    sessionStorage.clear();
  }

  login(){

      this.LoginService.Login(this.model).subscribe(
          data => {
              if(data.status)
              {
                  console.log(data);
                  localStorage.setItem('token', data.token);
                  this.router.navigate(['/dashboard']);

              }
              else{
                  this.errorMessage = data.Message;
              }
          },
          error => {
              this.errorMessage = error.message;
          });
  };

}


