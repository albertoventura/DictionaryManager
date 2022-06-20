import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteComponent } from './delete.component';
import { MaterialModule } from 'src/app/core';



@NgModule({
  declarations: [
    DeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DeleteComponent
  ]
})
export class DeleteModule { }
