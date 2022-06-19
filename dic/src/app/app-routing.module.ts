import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ConsultDicComponent,
  EditDicComponent,
  EditWordComponent,
  ListDicComponent,
  ListWordsComponent,
  WordExtraComponent,
} from 'src/app/features';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ListDicComponent,
  },
  {
    path: 'edit-dic',
    pathMatch: 'full',
    component: EditDicComponent,
  },
  {
    path: 'edit-word',
    pathMatch: 'full',
    component: EditWordComponent,
  },
  {
    path: 'list-dic',
    pathMatch: 'full',
    component: ListDicComponent,
  },
  {
    path: 'list-words',
    pathMatch: 'full',
    component: ListWordsComponent,
  },
  {
    path: 'consult-dic',
    pathMatch: 'full',
    component: ConsultDicComponent,
  },
  {
    path: 'extra-definition',
    pathMatch: 'full',
    component: WordExtraComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
