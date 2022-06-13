import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../autenticacao/usuario/usuario.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor(
    private usuarioServivce: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  user$ = this.usuarioServivce.getUsuario()

  logout(): void{
    this.usuarioServivce.logout()
    this.router.navigate([''])
  }
}
