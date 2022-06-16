import { Component, Input, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";

@Component( {
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: [ './animal.component.css' ]
} )
export class AnimalComponent implements OnInit {
  private urlOriginal : string = '';
  private _descricao : string = '';

  constructor() {
  }

  ngOnInit() : void {
  }

  @Input()
  set url( value : string ) {
    if ( value.startsWith( 'data' ) ) this.urlOriginal = value;
    else this.urlOriginal = `${ environment.urlBase }/imgs/${ value }`
  }

  get url() : string {
    return this.urlOriginal;
  }

  get descricao() : string {
    return this._descricao;
  }

  @Input()
  set descricao( value : string ) {
    this._descricao = value;
  }
}
