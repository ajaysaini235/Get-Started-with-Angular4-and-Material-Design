import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service'
import { FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private userAuthService: UserAuthService,private router:Router) { }

  ngOnInit() {
    this.userAuthService.isLogin().then((data) => {
      if(data){
        this.router.navigate(['home'],{replaceUrl:true});          
      }
    })
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  login() {
    this.userAuthService.login("https://api.myjson.com/bins/f2xqf").subscribe((data) => {
        if(data){
          this.router.navigate(['home'],{replaceUrl:true});          
        }
    })
  }

}
