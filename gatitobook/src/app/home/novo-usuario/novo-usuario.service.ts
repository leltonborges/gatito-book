import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NovoUsuario } from "./novo-usuario";
import { BASE } from "../../../config/app.config";
import { Observable } from "rxjs";

@Injectable( {
  providedIn: 'root'
} )
export class NovoUsuarioService {

  constructor(
    private httpClient : HttpClient
  ) {}

  cadastraNovoUsuario( novoUsario : NovoUsuario ) : Observable<NovoUsuario> {
    return this.httpClient.post<NovoUsuario>( `${ BASE.urlBase }/user/signup`, novoUsario )
  }

  verificaUsuarioExistente( nomeUsuario : string ): Observable<NovoUsuario> {
    return this.httpClient.get<NovoUsuario>( `${ BASE.urlBase }/user/exists/${nomeUsuario}` )
  }
}
