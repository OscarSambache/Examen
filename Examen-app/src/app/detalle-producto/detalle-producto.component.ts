import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tienda} from "../Models/tienda";
import {Producto} from "../Models/producto";

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  @Input() tienda: Tienda;
  producto: Producto;
  @Output() productoInsertada: EventEmitter <Producto> = new EventEmitter<Producto>();

  constructor() { }
  ngOnInit() {
    this.producto= new Producto();
  }

  leerDatos(){
    this.productoInsertada.emit(this.producto);
    console.log('producto', this.producto);
    this.producto= new Producto();
  }
}
