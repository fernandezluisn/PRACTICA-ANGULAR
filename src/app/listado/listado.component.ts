import { Component, OnInit, Input } from '@angular/core';
import {Producto} from '../clases/producto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  
  @Input() listadoProductos: Producto[];
  
  
  

  constructor() { }
  
  eliminarFila(prod: Producto){ 
    var i=this.listadoProductos.indexOf(prod);
    this.listadoProductos.splice(i, 1);
  }
  

  ngOnInit(): void { 
    
  }

  
}
