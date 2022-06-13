import { Component, Input, OnInit } from '@angular/core';
import { BASE } from "../../../config/app.config";

@Component( {
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: [ './animal.component.css' ]
} )
export class AnimalComponent implements OnInit {
  private _url : string = '';
  private _descricao : string = '';

  constructor() {
  }

  ngOnInit() : void {
  }

  get url() : string {
    return this._url;
  }

  @Input()
  set url( value : string ) {
    if ( value.startsWith( 'data' ) ) this.url = value;
    else this.url = `${ BASE.urlBase }/imgs/${ value }`
  }

  get descricao() : string {
    return this._descricao;
  }

  @Input()
  set descricao( value : string ) {
    this._descricao = value;
  }
}
