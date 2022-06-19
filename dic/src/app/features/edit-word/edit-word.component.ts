import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-word',
  templateUrl: './edit-word.component.html',
  styleUrls: ['./edit-word.component.scss']
})
export class EditWordComponent implements OnInit {

  wordData: any;

  wordForm = new FormGroup({
    name: new FormControl('', Validators.required),
    definition: new FormControl('', Validators.required),
    extra: new FormControl(''),
  });
  get name() {
    return this.wordForm.get('name');
  }
  get definition() {
    return this.wordForm.get('definition');
  }
  get definitionExtra() {
    return this.wordForm.get('definitionExtra');
  }
  constructor(public dialogRef: MatDialogRef<EditWordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WordData) {
      this.wordData = data;
      console.log('data word', data);
      this.wordForm.patchValue({ ...data});
  }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }
  submit() {
    console.log('form', this.wordForm.value);
    if(!this.wordForm.valid){
      return;
    }
    this.dialogRef.close(this.wordForm.value);
  }
}
export interface WordData {
  id: number;
  dicName: string;
  buttonColor: string;
  fontButtonColor: string;
  titleColor: string;
  iconColor: string;
}
