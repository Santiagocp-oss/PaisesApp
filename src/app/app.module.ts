import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PaisesModule } from './Paises/paises.module';
import { SharedModule } from './Shared/shared.module';
import { appRoutingModule } from './app-roating.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    PaisesModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
