import { WordExtraComponent } from './../word-extra/word-extra.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core';
import { FilterWordsComponent } from 'src/app/shared';

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

  dataRoute: any;
  baseArray: any[] = []
  wordArray: any[] = [];
  @ViewChild('filter') filter!: FilterWordsComponent;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private storage: StorageService,
  ) {
    this.dataRoute = this.router.getCurrentNavigation()?.extras.state;
    console.log('dataRoute', this.dataRoute);
    this.refreshArray();
  }

  ngOnInit(): void {
  }

  openExtra(value?: any): void {
    console.log(value);
    const dialogRef = this.dialog.open(
      WordExtraComponent,{
      data: {
        name: value.name,
        extra: value.extra,
        buttonColor: this.dataRoute.buttonColor,
        fontButtonColor: this.dataRoute.fontButtonColor,
        iconColor: this.dataRoute.iconColor,
        titleColor: this.dataRoute.titleColor
      },
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
  refreshArray(fromFilter?: boolean){
    //console.log('sort',this.sortArray);
    this.baseArray = this.storage.listWords(this.dataRoute.id);
    this.sortAlphabeticaly();
    if(fromFilter){
      /*
      if(this.hasFilter){
        this.filter.filterArray();
        this.wordArray = this.filter.filteredArray;
        return;
      }*/
      this.wordArray = this.filter.filteredArray;
      return;
    }
    this.wordArray = this.baseArray;
  }
  sortAlphabeticaly(){
    this.baseArray =
    this.baseArray.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
}
