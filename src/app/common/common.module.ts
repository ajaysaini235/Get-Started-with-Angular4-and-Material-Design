import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Route } from '@angular/router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

// Modules
import { MaterialDesignModule } from '../material-design/material-design.module';

// Services
import {UserAuthService} from './services/user-auth.service'
import { EventService } from '../services/event.service';

// Components
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AppHeaderComponent } from './app-header/app-header.component'

// Guards
import { UserAuthGuard } from '../guards/user-auth.guard';
import { ConfirmDirective } from './directives/confirm.directive';

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
  exports:[MaterialDesignModule,AppHeaderComponent],
  declarations: [PageNotFoundComponent,LoginComponent, AppHeaderComponent, ConfirmDirective],
  providers: [UserAuthService,EventService],
  
})
export class TestCommonModule { }
