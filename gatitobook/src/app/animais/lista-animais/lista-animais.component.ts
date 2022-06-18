import { Component, OnInit } from '@angular/core';
import { Animais } from "../animal";
import { ActivatedRoute } from "@angular/router";

@Component( {
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: [ './lista-animais.component.css' ]
} )
export class ListaAnimaisComponent implements OnInit {

  private _animais ! : Animais

  constructor(
    private activatedRoute : ActivatedRoute
  ) {
  }

  ngOnInit() : void {
    this.activatedRoute
      .params
      .subscribe( () => {
        this.animais = this.activatedRoute.snapshot.data['resolveAnimais'];
      } )
  }

  get animais() : Animais {
    return this._animais;
  }

  set animais( value : Animais ) {
    this._animais = value;
  }
}
