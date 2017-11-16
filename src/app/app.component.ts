import { Component,ViewChild } from '@angular/core';
import {UserAuthService} from './common/services/user-auth.service'
import {Router} from '@angular/router'
import {EventService} from './services/event.service'
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  matsidenav_width:{full:number,small:number,current:number} =
  {full:230,small:65,current:230};
  headerHide:boolean=true
  groups:any = [
    {items:[
        {icon:'home',title:"Home",path:"home"}
      ]
    },
    {title:"Develop",items:[
        {icon:'equalizer',title:"Roles",path:"roles"},
        {icon:'group',title:"Users",path:"dynamiclink"}
      ]
    }
  ];

  @ViewChild(MatSidenav) bizsidenav: MatSidenav;
  constructor(private userAuthService:UserAuthService,private router:Router,private eventService:EventService){
    eventService.subscribe("login",() => {
      this.headerHide=false;
      if(location.pathname == "/login")
      this.router.navigate(['home'],{replaceUrl:true});   
    });
    eventService.subscribe("logout",() => {
      this.headerHide=true;
      this.userAuthService.logout();
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

  toggleMenu(){
    this.bizsidenav.toggle();
  }
  
  toggleSmallMenu(){
    if(this.matsidenav_width.current == this.matsidenav_width.full){
      this.matsidenav_width.current = this.matsidenav_width.small
    }else{
      this.matsidenav_width.current = this.matsidenav_width.full
    }
  }


}
