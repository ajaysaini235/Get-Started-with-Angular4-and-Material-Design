import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MaterialDesignModule } from './material-design/material-design.module';

// Guards
import { UserAuthGuard } from './guards/user-auth.guard'

const routes:Route[] =[
  { path:'',redirectTo:"home",pathMatch:"full"},
  { path:'home',component:HomeComponent,canActivate:[UserAuthGuard]}
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
    HomeComponent
  ],
  providers: [UserAuthGuard]
})
export class AppRoutingModule { }
