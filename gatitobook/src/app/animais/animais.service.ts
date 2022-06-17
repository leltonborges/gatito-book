import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Animais, Animal } from "./animal";
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
      return this.httpClient.get<Animais>(
        `${ environment.urlBase }/${ nomeUsuario }/photos` )
    }
    return new Observable<Animais>()
  }

  findById( id : number ) : Observable<Animal> {
    return this.httpClient.get<Animal>(
      `${ environment.urlBase }/photos/${ id }` )
  }

}
