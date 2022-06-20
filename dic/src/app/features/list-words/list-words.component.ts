import { EditWordComponent } from './../edit-word/edit-word.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { routerLabels, StorageService } from 'src/app/core';
import { FilterWordsComponent } from 'src/app/shared';

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.scss']
})
export class ListWordsComponent implements OnInit {

  baseArray: any[] = []
  wordArray: any[] = [];
  dataRoute: any;
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

  openEdit(value?: any): void {
    const dialogRef = this.dialog.open(
      EditWordComponent,{
      data: {word: value, idDic: this.dataRoute.id},
      panelClass: 'dialog-edit-word'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined){
        let word = result;
        this.storage.set(word.id,word);
        this.filter.resetFilter();
        this.refreshArray();
      }
    });
  }
  remove(value: any){
    if(this.storage.remove(value.id)){
      this.refreshArray();
    }
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
