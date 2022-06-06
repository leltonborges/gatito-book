import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BASE} from "../../config/app.config";

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    private httpClient: HttpClient
  ) {}

  autentica(usuario: string, senha: string): Observable<any>{
    return this.httpClient.post(`${BASE.urlBase}/user/login`, {
      userName: usuario,
      password: senha  
    })
  }
}
