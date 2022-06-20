import { Dictionary } from 'src/app/core/';
import { EditDicComponent } from './../edit-dic/edit-dic.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { routerLabels, StorageService } from 'src/app/core/';
import { DeleteComponent } from 'src/app/shared/components/delete';

@Component({
  selector: 'app-list-dic',
  templateUrl: './list-dic.component.html',
  styleUrls: ['./list-dic.component.scss']
})
export class ListDicComponent implements OnInit {

  baseArray: Dictionary[] = [];
  dicArray: Dictionary[] = [];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private storage: StorageService,
  ) {
    this.refreshArray();
  }

  ngOnInit(): void {
  }

  openEdit(value?: any): void {
    const dialogRef = this.dialog.open(
      EditDicComponent,{
      data: value,
      panelClass: 'dialog-edit-dic'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined){
        let dic = result;
        this.storage.set(dic.id,dic);
        this.refreshArray();
      }
    });
  }

  openWords(value: any){
    this.router.navigate([routerLabels.listWords],{ state: value });
  }
  openConsult(value: any){
    this.router.navigate([routerLabels.consultDic],{ state: value });
  }
  remove(value: any){
    const dialogRef = this.dialog.open(
      DeleteComponent,{
      data: value,
      panelClass: 'dialog-remove'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined && result == true){
        if(this.storage.remove(value.id)){
          this.refreshArray();
        }
      }
    });


  }
  refreshArray(){
    this.baseArray = this.storage.listDic();
    this.sortAlphabeticaly();
    this.dicArray = this.baseArray;
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
