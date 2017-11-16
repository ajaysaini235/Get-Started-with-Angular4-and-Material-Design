import {Component, OnInit, ViewEncapsulation,EventEmitter,Output}from '@angular/core'; 
import {EventService} from '../../services/event.service'

@Component( {
selector:'app-header', 
templateUrl:'./app-header.component.html', 
styleUrls:['./app-header.component.css'], 
encapsulation:ViewEncapsulation.None
})
export class AppHeaderComponent implements OnInit {
@Output() toggleMenu = new EventEmitter();
constructor(private eventService:EventService) {}

ngOnInit() {
}

logout(confirm) {
  if ( confirm )
  this.eventService.broadcast("logout"); 
}

toggleSideMenu(){
  this.toggleMenu.emit();
}

}
