import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cabezera',
  templateUrl: './cabezera.component.html',
  styleUrls: ['./cabezera.component.css']
})
export class CabezeraComponent implements OnInit {
  nombre: string;
  direccion: string;
  fechaApertura: string;
  RUC: number;
  esMatriz: boolean;

  @Output() obtenerNombre: EventEmitter<string> = new EventEmitter();
  @Output() obtenerDireccion: EventEmitter<string> = new EventEmitter();
  @Output() obtenerFechaApertura: EventEmitter<string> = new EventEmitter();
  @Output() obtenerRUC: EventEmitter<number> = new EventEmitter();
  @Output() obtenerEsMatriz: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  aplicarClase(valorInputNombre: string, valorInputDireccion:string, valorInputFechaApertura: string, valorInputRUC: number, valorInputEsMatriz: boolean) {
    this.nombre=valorInputNombre;
    this.direccion= valorInputDireccion;
    this.fechaApertura=valorInputFechaApertura;
    this.RUC = valorInputRUC;
    this.esMatriz=valorInputEsMatriz;
    this.obtenerNombre.emit(this.nombre);
    this.obtenerDireccion
      .emit(this.direccion);
    this.obtenerFechaApertura.emit(this.fechaApertura);
    this.obtenerRUC.emit(this.RUC);
    this.obtenerEsMatriz.emit(this.esMatriz);

  }
  ObtenerDatosTienda() {
    this.obtenerNombre.emit(this.nombre);
    this.obtenerDireccion
      .emit(this.direccion);
    this.obtenerFechaApertura.emit(this.fechaApertura);
    this.obtenerRUC.emit(this.RUC);
    this.obtenerEsMatriz.emit(this.esMatriz);
  }

}
