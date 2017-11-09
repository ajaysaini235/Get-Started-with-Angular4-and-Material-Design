import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule, 
  MatCheckboxModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule,
  MatMenuModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,MatIconModule,
    MatButtonModule, MatCheckboxModule,MatToolbarModule,MatCardModule,MatFormFieldModule,
    MatInputModule,MatButtonModule,MatSelectModule,MatMenuModule
  ],
  declarations: [],
  exports:[
    BrowserAnimationsModule,MatIconModule,MatToolbarModule,MatCardModule,
    MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule,
    MatButtonModule,MatSelectModule,MatMenuModule
  ]
})
export class MaterialDesignModule { }
