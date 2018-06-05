import {Component, Input, OnInit} from '@angular/core';
import {Producto} from "../Models/producto";

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input() productos: Producto[];
  constructor() { }

  ngOnInit() {
  }

}
