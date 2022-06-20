import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataManagerService } from 'src/app/core/services/data-manager.service';

@Component({
  selector: 'app-edit-word',
  templateUrl: './edit-word.component.html',
  styleUrls: ['./edit-word.component.scss']
})
export class EditWordComponent implements OnInit {

  wordData: any;
  isNewWord: boolean = false;
  wordForm = new FormGroup({
    id: new FormControl(this.isNewWord ? this.data.id : ''),
    idDic: new FormControl(this.data.idDic ? this.data.idDic : ''),
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
  get extra() {
    return this.wordForm.get('extra');
  }
  constructor(
    public dialogRef: MatDialogRef<EditWordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WordData,
    private dataManager: DataManagerService,
  ) {
      this.wordData = data;
      if(data.word == undefined) {
        this.isNewWord = true;
      }
      //let wordData = data.word;
      console.log('isnew', this.isNewWord);
      console.log('data word', data.word);
      console.log('data dic', data.idDic);
      if(!this.isNewWord){
        this.wordForm.patchValue({ ...(data.word as Object)});
      }
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
    const word = this.dataManager.wordDTO(this.wordForm.value, this.isNewWord)
    console.log(word);
    this.dialogRef.close(word);
    //this.dialogRef.close(this.wordForm.value);
  }
}
export interface WordData {
  id: number,
  idDic: number,
  name: string,
  definition: string,
  extra: string,
  word: string,
}
