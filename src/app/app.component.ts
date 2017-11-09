import { Component } from '@angular/core';
import {UserAuthService} from './common/services/user-auth.service'
import {Router} from '@angular/router'
import {EventService} from './services/event.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  headerHide:boolean=true
  constructor(private userAuthService:UserAuthService,private router:Router,private eventService:EventService){
    eventService.subscribe("login",() => {
      this.headerHide=false;
      this.router.navigate(['home'],{replaceUrl:true});   
    });
    eventService.subscribe("logout",() => {
      this.headerHide=true;
      localStorage.clear();
      this.router.navigate(['login'],{replaceUrl:true});   
    });
  }

  ngOnInit(){
    this.userAuthService.isLogin().then((data) => {
      this.eventService.broadcast("login"); 
    }).catch((error) => {
      this.eventService.broadcast("logout"); 
    });
  }

  logout(){
       this.eventService.broadcast("logout");      
  }

}
