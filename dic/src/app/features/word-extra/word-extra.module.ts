import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordExtraComponent } from './word-extra.component';
import { MaterialModule } from 'src/app/core';



@NgModule({
  declarations: [
    WordExtraComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class WordExtraModule { }
