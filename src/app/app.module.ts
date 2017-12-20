import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedService } from "./shared/services/shared.service";
import { routing } from './app.routing';
import {AuthService} from "./auth.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    SharedService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
