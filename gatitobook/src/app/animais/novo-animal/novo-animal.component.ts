import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: [ './novo-animal.component.css' ]
})
export class NovoAnimalComponent implements OnInit {
  private _formAnimal ! : FormGroup;
  private _file! : File;
  private _preview ! : string;
  private _percentualConcluido = 0;

  constructor() {
  }

  ngOnInit() : void {
  }

  upload() {
  }

  gravaArquivo(arquivo : any) {
  }

  get formAnimal() : FormGroup {
    return this._formAnimal;
  }

  set formAnimal(value : FormGroup) {
    this._formAnimal = value;
  }

  get file() : File {
    return this._file;
  }

  set file(value : File) {
    this._file = value;
  }

  get preview() : string {
    return this._preview;
  }

  set preview(value : string) {
    this._preview = value;
  }

  get percentualConcluido() : number {
    return this._percentualConcluido;
  }

  set percentualConcluido(value : number) {
    this._percentualConcluido = value;
  }
}
