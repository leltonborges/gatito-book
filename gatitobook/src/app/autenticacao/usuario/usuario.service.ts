import { Injectable } from '@angular/core';
import { TokenService } from "../token.service";
import jwtDecode from "jwt-decode";
import { Usuario } from "./usuario";
import { BehaviorSubject } from "rxjs";

@Injectable( {
  providedIn: 'root'
} )
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>({})
  constructor(
    private tokenService : TokenService
  ) {
    if(this.tokenService.getToken()){
      this.decodificaJWT();
    }
  }

  private decodificaJWT(){
    const token = this.tokenService.getToken();
    const usuario = jwtDecode(token) as Usuario
    this.usuarioSubject.next(usuario)
  }

  getUsuario(){
    return this.usuarioSubject.asObservable();
  }

  salvaToken(token: string){
    this.tokenService.salvaToken(token)
    this.decodificaJWT()
  }

  logout(){
    this.tokenService.excluiToken()
    this.usuarioSubject.next({})
  }

  logado(): Boolean{
    return this.tokenService.possuiToken()
  }
}
