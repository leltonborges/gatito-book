import { Component, OnInit } from '@angular/core';
import { Animais } from "../animal";
import { UsuarioService } from "../../autenticacao/usuario/usuario.service";
import { AnimaisService } from "../animais.service";
import { Observable, switchMap } from "rxjs";

@Component( {
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: [ './lista-animais.component.css' ]
} )
export class ListaAnimaisComponent implements OnInit {

  private _animais$ ! : Observable<Animais>;

  constructor(
    private usuarioService : UsuarioService,
    private animaisService : AnimaisService
  ) {
  }

  ngOnInit() : void {
    this._animais$ = this.usuarioService.getUsuario().pipe(
      switchMap( ( usuario ) => {
        const username = usuario.name ?? '';
        return this.animaisService.listDoUsuario( username )
      } )
    )
  }

  get animais$() : Observable<Animais> {
    return this._animais$;
  }

  set animais$( value : Observable<Animais> ) {
    this._animais$ = value;
  }
}
