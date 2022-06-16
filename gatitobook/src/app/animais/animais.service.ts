import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Animais } from "./animal";
import { TokenService } from "../autenticacao/token.service";
import { environment } from "../../environments/environment";

@Injectable( {
  providedIn: 'root'
} )
export class AnimaisService {

  constructor(
    private httpClient : HttpClient,
    private tokenService : TokenService
  ) {
  }

  listDoUsuario( nomeUsuario : String ) : Observable<Animais> {
    if ( nomeUsuario ) {
      const token = this.tokenService.getToken()
      const headers = new HttpHeaders().append( 'x-access-token', token )
      return this.httpClient.get<Animais>(
        `${ environment.urlBase }/${ nomeUsuario }/photos`,
        { headers } )
    }
    return new Observable<Animais>()
  }
}
