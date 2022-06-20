import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-word-extra',
  templateUrl: './word-extra.component.html',
  styleUrls: ['./word-extra.component.scss']
})
export class WordExtraComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WordExtraComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ExtraData,
  ) {
    console.log('data', data)
  }

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }
}
export interface ExtraData {
  id: number,
  idDic: number,
  name: string,
  definition: string,
  extra: string,
  word: string,
}
