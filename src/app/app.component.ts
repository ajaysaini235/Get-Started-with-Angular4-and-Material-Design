import { Component } from '@angular/core';
import {UserAuthService} from './common/services/user-auth.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  headerHide:boolean=true
  constructor(private userAuthService:UserAuthService,private activatedRoute:ActivatedRoute){
  }

  ngOnInit(){
    this.userAuthService.isLogin().then((data) => {
      this.headerHide=false;
    }).catch((error) => {
      this.headerHide=true;
    });
  }

}
