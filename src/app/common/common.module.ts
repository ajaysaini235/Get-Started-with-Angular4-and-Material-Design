import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route } from '@angular/router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

// Modules
import { MaterialDesignModule } from '../material-design/material-design.module';

// Services
import {UserAuthService} from './services/user-auth.service'

// Components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';


// Guards
import { UserAuthGuard } from '../guards/user-auth.guard'

const routes:Route[] =[
  { path:"login", component:LoginComponent},
  { path:"**", component:PageNotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[MaterialDesignModule],
  declarations: [PageNotFoundComponent,LoginComponent],
  providers: [UserAuthService],
  
})
export class TestCommonModule { }
