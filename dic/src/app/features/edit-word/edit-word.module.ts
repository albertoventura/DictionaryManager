import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditWordComponent } from './edit-word.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core';



@NgModule({
  declarations: [
    EditWordComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    EditWordComponent
  ]
})
export class EditWordModule { }
