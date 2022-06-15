import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NovoUsuario } from "./novo-usuario";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable( {
  providedIn: 'root'
} )
export class NovoUsuarioService {

  constructor(
    private httpClient : HttpClient
  ) {}

  cadastraNovoUsuario( novoUsario : NovoUsuario ) : Observable<NovoUsuario> {
    return this.httpClient.post<NovoUsuario>( `${ environment.urlBase }/user/signup`, novoUsario )
  }

  verificaUsuarioExistente( nomeUsuario : string ): Observable<NovoUsuario> {
    return this.httpClient.get<NovoUsuario>( `${ environment.urlBase }/user/exists/${nomeUsuario}` )
  }
}
