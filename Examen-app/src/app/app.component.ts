import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arregloTienda: Tienda[];
  tienda:Tienda;
  title = 'app';

  guardarNombre(nombre){
    this.tienda.nombre=nombre;
    console.log('Evento: ', nombre);
  }
  guardarDireccion(direccion){
    this.tienda.direccion=direccion;
    console.log('Evento: ', direccion);
  }
  guardarFechaApertura(fechaApertura){
    this.tienda.fechaApertura=fechaApertura;
    console.log('Evento: ', fechaApertura);
  }
  guardarRUC(RUC){
    this.tienda.RUC= RUC;
    console.log('Evento: ', RUC);
  }
  guardarEsMatriz(esMatriz){
    this.tienda.esMatriz=esMatriz;
    console.log('Evento: ', esMatriz);
    this.guardarTienda();
  }
  guardarTienda (){
    this.arregloTienda.push(this.tienda);
    console.log(this.tienda);
  }

}
interface Tienda{
  nombre: string;
  direccion: string;
  fechaApertura: string;
  RUC: number;
  esMatriz: boolean;
  imagen?: string;
  producto?: {
    numeroProducto:number;
    nombreProducto: string;
    descipcionProducto:string;
    precioProducto: number;
    fechaLanzamientoProducto: string;
    aniosGarantia: number;
    tiendaId: string
  }
}
