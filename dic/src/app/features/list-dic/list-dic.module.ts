import { MaterialModule } from 'src/app/core/';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDicComponent } from './list-dic.component';



@NgModule({
  declarations: [
    ListDicComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ListDicComponent
  ]
})
export class ListDicModule { }
