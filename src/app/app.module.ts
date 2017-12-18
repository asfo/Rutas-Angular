import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SaludoComponent } from './saludo/saludo.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
