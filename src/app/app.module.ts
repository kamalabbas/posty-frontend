import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderModule } from './Layout/header/header.module';
import { CommonInterceptor } from './common.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
