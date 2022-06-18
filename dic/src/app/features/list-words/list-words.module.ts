import { MaterialModule } from 'src/app/core/';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWordsComponent } from './list-words.component';



@NgModule({
  declarations: [
    ListWordsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ListWordsComponent
  ]
})
export class ListWordsModule { }
