import { Injectable } from '@angular/core';
import { NovoUsuarioService } from "./novo-usuario.service";
import { AbstractControl } from "@angular/forms";
import { first, map, switchMap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(
    private novoUsuarioService: NovoUsuarioService
  ) { }

  usuarioJaExite(){
    return (control: AbstractControl) => {
      console.log(control)
      return control.valueChanges
        .pipe(
          switchMap((nomeUsuario) => this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)),
          map((existe) => existe ? {usuarioExistente: true} : null),
          first()
        )
    }
  }
}
