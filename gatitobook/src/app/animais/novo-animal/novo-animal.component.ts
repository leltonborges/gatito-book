import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AnimaisService } from "../animais.service";
import { Router } from "@angular/router";
import { finalize } from "rxjs";
import { HttpEvent, HttpEventType } from "@angular/common/http";

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

  constructor(
    private animaisService : AnimaisService,
    private formBuilder : FormBuilder,
    private router : Router
  ) {
  }

  ngOnInit() : void {
    this.formAnimal = this.formBuilder.group({
      file: [ '', Validators.required ],
      description: [ '', Validators.maxLength(300) ],
      allowComments: [ true ]
    })
  }

  upload() {
    const allowComments = this.formAnimal.get('allowComments')?.value ?? false;
    const description = this.formAnimal.get('description')?.value ?? '';
    this.animaisService
      .uploadFile(description, allowComments, this.file)
      .pipe(
        finalize(() => this.router.navigate([ 'animais' ])))
      .subscribe({
        next: (event : HttpEvent<any>) => {
          if(event.type == HttpEventType.UploadProgress) {
            const total = event.total ?? 1;
            this.percentualConcluido = Math.round(100 * (event.loaded % total))
          }
        },
        error: console.error
      })
  }

  gravaArquivo(arquivo : any) : void {
    const [ file ] = arquivo?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (i : any) => this.preview = i.target.result
    reader.readAsDataURL(file);
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
