import { Component, OnInit , Input} from '@angular/core';
import {Tienda} from "../Models/tienda";

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit {
  @Input() listaTienda: Tienda[]

  constructor() {}
  ngOnInit() {

  }


}
