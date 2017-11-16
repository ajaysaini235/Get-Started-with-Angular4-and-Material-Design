import { NgModule } from '@angular/core';
import { DynamiclinkComponent } from './dynamiclink/dynamiclink.component';
import { AppRouting } from './dynamiclink.routing';
import {MaterialDesignModule} from '../material-design/material-design.module';
import { RoleService } from './role.service';

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule, 
  MatCheckboxModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule,
  MatMenuModule,MatSidenavModule,
  MatListModule,MatTooltipModule
} from '@angular/material';

@NgModule({
  imports: [
    AppRouting,
    MatIconModule,
    MatButtonModule, MatCheckboxModule,MatToolbarModule,MatCardModule,MatFormFieldModule,
    MatInputModule,MatButtonModule,MatSelectModule,MatMenuModule,MatSidenavModule,MatListModule,
    MatTooltipModule
  ],
  declarations: [DynamiclinkComponent],
  providers:[RoleService]
})

export class DynamiclinkModule { }
