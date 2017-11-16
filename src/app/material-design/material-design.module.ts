import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
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
    CommonModule,
    BrowserAnimationsModule,MatIconModule,
    MatButtonModule, MatCheckboxModule,MatToolbarModule,MatCardModule,MatFormFieldModule,
    MatInputModule,MatButtonModule,MatSelectModule,MatMenuModule,MatSidenavModule,MatListModule,
    MatTooltipModule,MatDialogModule
  ],
  declarations: [],
  exports:[
    BrowserAnimationsModule,MatIconModule,MatToolbarModule,MatCardModule,
    MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule,
    MatButtonModule,MatSelectModule,MatMenuModule,MatSidenavModule,MatListModule,
    MatTooltipModule,MatDialogModule
  ]
})
export class MaterialDesignModule { }
