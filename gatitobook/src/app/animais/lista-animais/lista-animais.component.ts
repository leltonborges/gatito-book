import { Component, OnInit } from '@angular/core';
import { Animais } from "../animal";
import { UsuarioService } from "../../autenticacao/usuario/usuario.service";
import { AnimaisService } from "../animais.service";

@Component( {
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: [ './lista-animais.component.css' ]
} )
export class ListaAnimaisComponent implements OnInit {

  private _animais ! : Animais;

  constructor(
    private usuarioService : UsuarioService,
    private animaisService : AnimaisService
  ) {
  }

  ngOnInit() : void {
    this.usuarioService.getUsuario().subscribe((user) => {
      const userName = user.name ?? '';
      this.animaisService.listDoUsuario(userName).subscribe( animais => {
        this.animais = animais
      })
    })
  }

  get animais() : Animais {
    return this._animais;
  }

  set animais( value : Animais ) {
    this._animais = value;
  }
}
