import {Component, OnInit} from '@angular/core';
import {Autenticacao} from "../../../models/autenticacao.model";
import {AutenticacaoService} from "../../autenticacao/autenticacao.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _usuario: Autenticacao = new Autenticacao();

  constructor(
    private authService: AutenticacaoService
  ) {
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
    this.authService.autentica(this.usuario.login, this.usuario.senha)
      .subscribe(result => {
        console.log("sucesso")
      }, error => console.log(error))
  }
}
