import {Component, OnInit} from '@angular/core';
import {Tienda} from "./Models/tienda";
import {Producto} from "./Models/producto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  arregloTienda: Tienda[];
  tiendaSeleccionadd: Tienda;
  title = 'app';
  debeVerse=true;

constructor(){
}

ngOnInit(){
  this.arregloTienda =[];
}
  guardarTienda (evento: Tienda){
    this.arregloTienda.push(evento);
    console.log('[LISTA DE TIENDAS]', this.arregloTienda)
  }
  formatearTiendaSeleccionada(event: Tienda){
  this.tiendaSeleccionadd=event;
  console.log('tienda', this.tiendaSeleccionadd);
  }
  formatearProducto(event: Producto){
    this.tiendaSeleccionadd.productos.push(event);
    console.log('producto', this.tiendaSeleccionadd)
  }

}

