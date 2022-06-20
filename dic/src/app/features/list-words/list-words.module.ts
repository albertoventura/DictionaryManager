import { MaterialModule } from 'src/app/core/';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWordsComponent } from './list-words.component';
import { FilterWordsModule } from 'src/app/shared';



@NgModule({
  declarations: [
    ListWordsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FilterWordsModule,
  ],
  exports: [
    ListWordsComponent
  ]
})
export class ListWordsModule { }
