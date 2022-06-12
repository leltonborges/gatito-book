import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NovoUsuarioService } from "./novo-usuario.service";
import { NovoUsuario } from "./novo-usuario";
import { minusculoValidator } from "./minusculo.validator";
import { UsuarioExisteService } from "./usuario-existe.service";
import { usuarioSenhaIguaisValidator } from "./usuario-senha-iguais.validator";

@Component( {
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: [ './novo-usuario.component.css' ]
} )
export class NovoUsuarioComponent implements OnInit {

  novoUsuariForm! : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
    private novoUsuarioService : NovoUsuarioService,
    private usuarioExistenteService : UsuarioExisteService
  ) {
  }

  ngOnInit() : void {
    this.novoUsuariForm = this.formBuilder
      .group( {
          email: [ '', [
            Validators.required,
            Validators.email
          ] ],
          fullName: [ '', [
            Validators.required,
            Validators.minLength( 5 )
          ] ],
          userName: [ '',
            [ minusculoValidator ],
            [ this.usuarioExistenteService.usuarioJaExite() ]
          ],
          password: [ '' ]
        },
        {
          validators: [ usuarioSenhaIguaisValidator ]
        } )
  }

  cadastrar() {
    const novoUsuario = this.novoUsuariForm.getRawValue() as NovoUsuario
    console.log( novoUsuario )
  }
}
