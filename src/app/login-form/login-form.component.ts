import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthHandlerService} from "../auth-handler.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],

})
export class LoginFormComponent implements OnInit {
  loginSuccess:string
  name:string
  password:string
  constructor(private router:Router,private authService:AuthHandlerService) { }
  onSubmit(){
    this.authService.login(this.name,this.password, (status)=> {
        console.log('Status is: ' + status)
        if (status) {
          console.log("After cb " + this.authService.authStatus.token)
          console.log("Readonly = " + this.authService.authStatus.readonly)
          this.loginSuccess = "GOOD"
          this.router.navigate(['/stores'])
        } else {
          this.loginSuccess = "LoginFailed"
        }
      }
    )

  }
  getToken(){
    console.log("In Token"+ this.authService.authStatus.token)
  }
  ngOnInit() {
    this.name="RMetzler"
    this.password="EmmaGrace816"
  }

}
