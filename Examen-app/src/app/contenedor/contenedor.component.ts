import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tienda} from "../Models/tienda";

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {
  @Input() listaTienda: Tienda[];
  @Output() tiendaseleccionada: EventEmitter<Tienda> = new EventEmitter<Tienda>();
  constructor() { }

  ngOnInit() {
  }

  seleccionarTienda(tienda){
    this.tiendaseleccionada.emit(tienda);
  }
}
