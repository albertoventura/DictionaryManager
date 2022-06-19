import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-word-extra',
  templateUrl: './word-extra.component.html',
  styleUrls: ['./word-extra.component.scss']
})
export class WordExtraComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WordExtraComponent>,
  ) {}

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }
}
