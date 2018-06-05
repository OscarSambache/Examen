import {Component, Input, OnInit} from '@angular/core';
import {Tienda} from "../Models/tienda";

@Component({
  selector: 'app-tienda-card',
  templateUrl: './tienda-card.component.html',
  styleUrls: ['./tienda-card.component.css']
})
export class TiendaCardComponent implements OnInit {
  @Input() tienda: Tienda;
  constructor() { }

  ngOnInit() {
  }

}
