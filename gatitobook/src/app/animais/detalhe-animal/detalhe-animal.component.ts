import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Animal } from "../animal";
import { AnimaisService } from "../animais.service";
import { ActivatedRoute, Router } from "@angular/router";

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
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) {
  }

  ngOnInit() : void {
    this._animalId = this.activatedRoute.snapshot.params?.["animaId"];
    this._animal$ = this.animaisService.findById( this._animalId )
  }

  likePhoto() {
    this.animaisService.likePhoto( this._animalId )
      .subscribe( curtir => {
        if ( curtir ) {
          this._animal$ = this.animaisService.findById( this._animalId );
        }
      } )

  }

  deletePhoto() {
    this.animaisService.deleteById( this.animalId )
      .subscribe({
        next: () => this.router.navigate(['/animais/']),
        error: err => console.error(err)
      })
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
