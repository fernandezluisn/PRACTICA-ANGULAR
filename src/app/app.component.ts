import { Component } from '@angular/core';
import {Producto} from '../../src/app/clases/producto';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'practicaParcial';

  listadoProductos: Producto[];

  constructor(){
    this.listadoProductos=[
      {id:1, descripcion:"Es muy feo", tipo:"líquido", fechaDeVencimiento: "11/05/2020", precio:11.3, rutaDeFoto:"../assets/y1.jpg"},
      {id:2, descripcion:"Es muy rico", tipo:"líquido", fechaDeVencimiento: "13/05/2020", precio:13, rutaDeFoto:"../assets/y2.jpg"},
      {id:3, descripcion:"Es aceptable", tipo:"solido", fechaDeVencimiento: "15/03/2021", precio:15.89, rutaDeFoto:"../assets/y3.jpg"}
    ]    
  }

}
