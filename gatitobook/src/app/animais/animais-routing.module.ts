import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAnimaisComponent } from "./lista-animais/lista-animais.component";
import { DetalheAnimalComponent } from "./detalhe-animal/detalhe-animal.component";
import { ListaAnimaisResolver } from "./lista-animais/lista-animais.resolver";
import { NovoAnimalComponent } from "./novo-animal/novo-animal.component";

const routes : Routes = [
  {
    path: '',
    component: ListaAnimaisComponent,
    resolve: {
      resolveAnimais: ListaAnimaisResolver
    }
  },
  {
    path: 'novo',
    component: NovoAnimalComponent
  },
  {
    path: ':animaId',
    component: DetalheAnimalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
