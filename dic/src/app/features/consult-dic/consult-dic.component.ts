import { WordExtraComponent } from './../word-extra/word-extra.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-consult-dic',
  templateUrl: './consult-dic.component.html',
  styleUrls: ['./consult-dic.component.scss']
})
export class ConsultDicComponent implements OnInit {
  wordList: any[] = [
    {name: 'Aaaaaa', definition: 'Lorem ipsum dolor sit amet', extra: '' },
    {name: 'Bbbb', definition: 'Sit amet dolor pog', extra: 'asd' },
    {name: 'Cccc', definition: 'Sit amet dolor pog', extra: 'asd' },
  ];

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openExtra(value?: any): void {
    console.log(value);
    const dialogRef = this.dialog.open(
      WordExtraComponent,{
      data: value,
      panelClass: 'dialog-word-extra'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == undefined){
        //this.user = this.backupUser;
      }else{
        console.log('volta do dialog', result);
        //this.user = result;
        //this.backupUser = result;
        //this.updateUser(this.user);
        //this.saveLocalStorage(this.user);
      }
    });
  }

}
