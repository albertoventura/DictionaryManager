import { FilterWordsModule } from 'src/app/shared';
import { MaterialModule } from 'src/app/core/';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDicComponent } from './list-dic.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    ListDicComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FilterWordsModule
  ],
  exports: [
    ListDicComponent
  ]
})
export class ListDicModule { }
