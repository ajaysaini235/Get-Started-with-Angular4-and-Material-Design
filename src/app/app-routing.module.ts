import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route } from '@angular/router';

// Modules
import { MaterialDesignModule } from './material-design/material-design.module';

// Components
import { HomeComponent } from './home/home.component';
import { CardViewComponent } from './components/card-view/card-view.component';

// Guards
import { UserAuthGuard } from './guards/user-auth.guard'

//  Service 
import { EventService } from './services/event.service';

const routes:Route[] =[
  { path:'',redirectTo:"home",pathMatch:"full"},
  { path:'home',component:HomeComponent,canActivate:[UserAuthGuard]},
  {
    path: 'dynamiclink',
    loadChildren: './dynamiclink/dynamiclink.module#DynamiclinkModule'
  }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: [
    HomeComponent,CardViewComponent
  ],
  providers: [UserAuthGuard,EventService]
})
export class AppRoutingModule { }
