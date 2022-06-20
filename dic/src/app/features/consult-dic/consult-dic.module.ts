import { MaterialModule } from 'src/app/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultDicComponent } from './consult-dic.component';
import { FilterWordsModule } from 'src/app/shared';



@NgModule({
  declarations: [
    ConsultDicComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FilterWordsModule,
  ]
})
export class ConsultDicModule { }
