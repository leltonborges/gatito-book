import { Component, Input, OnInit } from '@angular/core';
import { Observable, switchMap, tap } from "rxjs";
import { Comentarios } from "./comentarios";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ComentariosService } from "./comentarios.service";

@Component( {
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: [ './comentarios.component.css' ]
} )
export class ComentariosComponent implements OnInit {

  private _comentarios$ ! : Observable<Comentarios>;
  private _comentarioForm! : FormGroup
  private _idAnimal! : number

  constructor(
    private comentariosService : ComentariosService,
    private formBuilder : FormBuilder
  ) {
  }

  ngOnInit() : void {
    this._comentarios$ = this.comentariosService.findCommentById( this._idAnimal )
    this._comentarioForm = this.formBuilder.group( {
      comentario: [
        '',
        Validators.maxLength( 300 ) ]
    } )
  }

  save() : void {
    const comentario = this.comentarioForm.get( 'comentario' )?.value ?? '';
    this._comentarios$ = this.comentariosService
      .addNewComment( this._idAnimal, comentario )
      .pipe(
        switchMap( () => this.comentariosService.findCommentById( this._idAnimal ) ),
        tap( () => {
          this.comentarioForm.reset();
          alert( 'Comentário salvo' );
        } )
      )
  }

  get comentarios$() : Observable<Comentarios> {
    return this._comentarios$;
  }

  set comentarios$( value : Observable<Comentarios> ) {
    this._comentarios$ = value;
  }

  get comentarioForm() : FormGroup {
    return this._comentarioForm;
  }

  set comentarioForm( value : FormGroup ) {
    this._comentarioForm = value;
  }

  get idAnimal() : number {
    return this._idAnimal;
  }

  @Input()
  set idAnimal( value : number ) {
    this._idAnimal = value;
  }
}
