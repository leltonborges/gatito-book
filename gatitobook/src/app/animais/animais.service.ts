import { Injectable } from '@angular/core';
import { HttpClient, HttpStatusCode } from "@angular/common/http";
import { catchError, mapTo, Observable, of, throwError } from "rxjs";
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

  deleteById( id : number ) : Observable<Animal> {
    return this.httpClient.delete<Animal>( `${ environment.urlBase }/photos/${ id }` )
  }

  likePhoto( id : number ) : Observable<Boolean> {
    return this.httpClient.post(
      `${ environment.urlBase }/photos/${ id }/like`,
      {},
      { observe: 'response' })
      .pipe(
        mapTo(true),
        catchError(err => {
          return err.status === HttpStatusCode.NotModified ? of(false) : throwError(err)
        })
      )
  }

}
