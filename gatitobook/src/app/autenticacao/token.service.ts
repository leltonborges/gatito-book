import { Injectable } from '@angular/core';
import { keyframes } from "@angular/animations";
const KEY = 'ACESS_VALID';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {}

  getToken(){
    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: string){
    localStorage.setItem(KEY, token);
  }

  excluiToken(){
    localStorage.removeItem(KEY)
  }

  possuiToken(): Boolean{
    return !!this.getToken();
  }
}
