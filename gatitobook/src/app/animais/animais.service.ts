import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
      const token = this.getToken();
      const headers = this.addHeader( token, 'x-access-token' );
      return this.httpClient.get<Animais>(
        `${ environment.urlBase }/${ nomeUsuario }/photos`,
        { headers } )
    }
    return new Observable<Animais>()
  }

  findById( id : number ) : Observable<Animal> {
    const token = this.getToken();
    const headers = this.addHeader( token, 'x-access-token' );
    return this.httpClient.get<Animal>(
      `${ environment.urlBase }/photos/${ id }`,
      { headers } )
  }

  private addHeader( token : string, nameHeader : string ) {
    return new HttpHeaders().append( nameHeader, token )
  }

  private getToken() {
    return this.tokenService.getToken()
  }
}
