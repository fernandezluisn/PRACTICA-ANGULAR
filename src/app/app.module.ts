import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
