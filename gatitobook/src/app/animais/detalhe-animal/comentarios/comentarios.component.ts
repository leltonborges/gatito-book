import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Comentarios } from "./comentarios";

@Component( {
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: [ './comentarios.component.css' ]
} )
export class ComentariosComponent implements OnInit {

  private _comentarios$ !: Observable<Comentarios>;

  constructor() {
  }

  ngOnInit() : void {
  }


  get comentarios$() : Observable<Comentarios> {
    return this._comentarios$;
  }

  set comentarios$( value : Observable<Comentarios> ) {
    this._comentarios$ = value;
  }
}
