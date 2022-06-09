import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NovoUsuarioService } from "./novo-usuario.service";
import { NovoUsuario } from "./novo-usuario";
import { minusculoValidator } from "./minusculo.validator";

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuariForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService
  ) { }

  ngOnInit(): void {
    this.novoUsuariForm = this.formBuilder
      .group({
        email: ['', [
          Validators.required,
          Validators.email
        ]],
        fullName: ['', [
          Validators.required,
          Validators.minLength(5)
        ]],
        userName: ['', [
          minusculoValidator
        ]],
        password: ['']
      })
  }

  cadastrar(){
    const novoUsuario = this.novoUsuariForm.getRawValue() as NovoUsuario
    console.log(novoUsuario)
  }
}
