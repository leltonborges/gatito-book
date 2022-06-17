import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Comentario, Comentarios } from "./comentarios";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";

@Injectable( {
  providedIn: 'root'
} )
export class ComentariosService {

  constructor(
    private httpClient : HttpClient
  ) {
  }

  findCommentById( idAnimal : number ) : Observable<Comentarios> {
    return this.httpClient.get<Comentarios>( `${ environment.urlBase }/photos/${ idAnimal }/comments` )
  }

  addNewComment( idAnimal : number, commentText : string ) : Observable<Comentario> {
    return this.httpClient.post<Comentario>(
      `${ environment.urlBase }/photos/${ idAnimal }/comments`,
      { commentText } )
  }
}
