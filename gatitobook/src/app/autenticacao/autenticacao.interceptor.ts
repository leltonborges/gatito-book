import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from "./token.service";

@Injectable()
export class AutenticacaoInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.tokenService.possuiToken()){
      const token = this.tokenService.getToken()
      const headers = this.addHeader( token, 'x-access-token' );
      request = request.clone( { headers })
    }
    return next.handle(request);
  }

  private addHeader( token : string, nameHeader : string ) {
    return new HttpHeaders().append( nameHeader, token )
  }
}
