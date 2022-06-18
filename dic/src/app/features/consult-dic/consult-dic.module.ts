import { MaterialModule } from 'src/app/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultDicComponent } from './consult-dic.component';



@NgModule({
  declarations: [
    ConsultDicComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class ConsultDicModule { }
