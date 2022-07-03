import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import { AnimaisService } from "../animais.service";
import { UsuarioService } from "../../autenticacao/usuario/usuario.service";
import { Animais } from "../animal";

@Injectable({
  providedIn: 'root'
})
export class ListaAnimaisResolver implements Resolve<Animais> {
  constructor(
    private animaisService : AnimaisService,
    private usuarioService : UsuarioService
  ) {
  }

  resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<Animais> {
    return this.usuarioService
      .getUsuario()
      .pipe(
        switchMap((user) => this.animaisService.listDoUsuario(user.name ?? '')),
        take(1)
      );
  }
}

