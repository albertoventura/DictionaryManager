import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dic',
  templateUrl: './edit-dic.component.html',
  styleUrls: ['./edit-dic.component.scss']
})
export class EditDicComponent implements OnInit {

  dicData: any;

  dicForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  get name() {
    return this.dicForm.get('name');
  }


  constructor(
    public dialogRef: MatDialogRef<EditDicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DicData,
  ) {
      this.dicData = data;
      console.log('data dic', data);
      this.dicForm.patchValue({ ...data});
  }

  ngOnInit(): void {
  }

  submit() {
    console.log('form', this.dicForm.value);
    if(!this.dicForm.valid){
      return;
    }
    this.dialogRef.close(this.dicForm.value);
  }
  close(){
    this.dialogRef.close();
  }

}

export interface DicData {
  id: number;
  dicName: string;
  buttonColor: string;
  fontButtonColor: string;
  titleColor: string;
  iconColor: string;
}
