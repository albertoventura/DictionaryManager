import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDicComponent } from './edit-dic.component';
import { MaterialModule } from 'src/app/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditDicComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    EditDicComponent
  ]
})
export class EditDicModule { }
