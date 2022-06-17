import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Animal } from "../animal";
import { AnimaisService } from "../animais.service";
import { ActivatedRoute } from "@angular/router";

@Component( {
  selector: 'app-detalhe-animal',
  templateUrl: './detalhe-animal.component.html',
  styleUrls: [ './detalhe-animal.component.css' ]
} )
export class DetalheAnimalComponent implements OnInit {

  private _animalId! : number;
  private _animal$! : Observable<Animal>

  constructor(
    private animaisService : AnimaisService,
    private activatedRoute : ActivatedRoute
  ) {
  }

  ngOnInit() : void {
    this._animalId =  this.activatedRoute.snapshot.params?.["animaId"];
    this._animal$ = this.animaisService.findById(this._animalId)
  }


  get animalId() : number {
    return this._animalId;
  }

  set animalId( value : number ) {
    this._animalId = value;
  }

  get animal$() : Observable<Animal> {
    return this._animal$;
  }

  set animal$( value : Observable<Animal> ) {
    this._animal$ = value;
  }
}
