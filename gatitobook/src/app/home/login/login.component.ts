import {Component, OnInit} from '@angular/core';
import {Autenticacao} from "../../../models/autenticacao.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _usuario: Autenticacao;

  constructor() {
    this._usuario = new Autenticacao();
    this._usuario.login = '222'
  }

  get usuario(): Autenticacao {
    return this._usuario;
  }

  set usuario(value: Autenticacao) {
    this._usuario = value;
  }

  ngOnInit(): void {
  }

  login() {
    console.log(`
    login: ${this._usuario.login}
    senha: ${this.usuario.senha}
    `)
  }
}
