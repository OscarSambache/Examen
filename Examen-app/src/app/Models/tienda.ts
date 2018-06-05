import {Producto} from "./producto";
export class Tienda{
  nombre: string;
  direccion: string;
  fechaApertura: string;
  RUC: number;
  esMatriz: boolean;
  imagen: string;
  tiendaId: number;
  productos: Producto[] = [];
}
