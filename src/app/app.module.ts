import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { TestCommonModule } from './common/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    TestCommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
