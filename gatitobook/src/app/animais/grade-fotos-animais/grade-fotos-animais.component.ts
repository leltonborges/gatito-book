import { Component, Input, OnInit } from '@angular/core';
import { Animais, Animal } from "../animal";

@Component( {
  selector: 'app-grade-fotos-animais',
  templateUrl: './grade-fotos-animais.component.html',
  styleUrls: [ './grade-fotos-animais.component.css' ]
} )
export class GradeFotosAnimaisComponent implements OnInit {

  private _animais : Animais;

  constructor() {
    this._animais = new Array<Animal>()
  }

  ngOnInit() : void {
  }

  get animais() : Animais {
    return this._animais;
  }

  @Input()
  set animais( value : Animais ) {
    this._animais = value;
  }
}
