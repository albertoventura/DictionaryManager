import { WordExtraComponent } from './../word-extra/word-extra.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { routerLabels, StorageService } from 'src/app/core';
import { FilterWordsComponent } from 'src/app/shared';

@Component({
  selector: 'app-consult-dic',
  templateUrl: './consult-dic.component.html',
  styleUrls: ['./consult-dic.component.scss']
})
export class ConsultDicComponent implements OnInit {
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
    if(this.dataRoute == undefined){
      this.router.navigate([routerLabels.listDic]);
    }
    this.refreshArray();
  }

  ngOnInit(): void {
  }

  openExtra(value?: any): void {
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
  }
  refreshArray(fromFilter?: boolean){
    this.baseArray = this.storage.listWords(this.dataRoute.id);
    this.sortAlphabeticaly();
    if(fromFilter){
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
