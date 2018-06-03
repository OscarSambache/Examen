import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-mat',
  templateUrl: './input-mat.component.html',
  styleUrls: ['./input-mat.component.css']
})
export class InputMatComponent implements OnInit {
  @Input() textoInput: string;
  @Output() enviarTextoInput = new EventEmitter();
  valorTextoInput: string;
  constructor() { }

  ngOnInit() {
  }

}
