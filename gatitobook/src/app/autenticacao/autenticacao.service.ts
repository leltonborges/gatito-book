import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { UsuarioService } from "./usuario/usuario.service";
import { environment } from "../../environments/environment";

@Injectable( {
  providedIn: 'root'
} )
export class AutenticacaoService {

  constructor(
    private httpClient : HttpClient,
    private usuarioService: UsuarioService
  ) {
  }

  autentica( usuario : string, senha : string ) : Observable<HttpResponse<any>> {
    return this.httpClient.post( `${ environment.urlBase }/user/login`, {
        userName: usuario,
        password: senha
      },
      { observe: 'response' }
    ).pipe(
      tap((response) => {
        const token = response.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(token);
      })
    )
  }
}
