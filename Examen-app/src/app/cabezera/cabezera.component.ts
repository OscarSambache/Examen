import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {Tienda} from "../Models/tienda";

@Component({
  selector: 'app-cabezera',
  templateUrl: './cabezera.component.html',
  styleUrls: ['./cabezera.component.css']
})
export class CabezeraComponent implements OnInit {
  tienda: Tienda;
  @Output() tiendaInsertada: EventEmitter <Tienda> = new EventEmitter<Tienda>();

  constructor() { }

  ngOnInit() {
  }
  aplicarClase(valorInputNombre: string, valorInputDireccion:string, valorInputFechaApertura: string, valorInputRUC: number, valorInputEsMatriz: boolean,) {
    this.tienda = new Tienda();
    this.tienda.nombre= valorInputNombre;
    this.tienda.direccion = valorInputDireccion;
    this.tienda.fechaApertura = valorInputFechaApertura;
    this.tienda.RUC= valorInputRUC;
    this.tienda.esMatriz= valorInputEsMatriz;
    this.tienda.imagen='http://d3ustg7s7bf7i9.cloudfront.net/mmediafiles/pl/ee/eee060b0-296f-4463-8429-542adef7bb6b_749_499.jpg';

    this.tiendaInsertada.emit(this.tienda);
  }

}
