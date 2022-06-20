import { Dictionary } from 'src/app/core/';
import { EditDicComponent } from './../edit-dic/edit-dic.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { routerLabels, StorageService } from 'src/app/core/';
import { DataManagerService } from 'src/app/core/services/data-manager.service';
import { FilterWordsComponent } from 'src/app/shared';

@Component({
  selector: 'app-list-dic',
  templateUrl: './list-dic.component.html',
  styleUrls: ['./list-dic.component.scss']
})
export class ListDicComponent implements OnInit {
  /*
  dicList: any[] = [
    {name: 'Lorem Ipsum Dolor'},
    {name: 'Parangarico tirimico'},
    {name: 'Toma chavinho'},
  ];
  */

  baseArray: Dictionary[] = []
  dicArray: Dictionary[] = []
  @ViewChild('filter') filter!: FilterWordsComponent;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private storage: StorageService,
  ) {
    //console.log('list',storage.listAll());
    this.refreshArray();
    //console.log('teste sto', this.storage.get(1655685070681));
  }

  ngOnInit(): void {
  }

  openEdit(value?: any): void {
    console.log(value);
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
    if(this.storage.remove(value.id)){
      this.refreshArray();
    }
  }
  refreshArray(fromFilter?: boolean){
    this.baseArray = this.storage.listDic();
    if(fromFilter){
      this.dicArray = this.filter.filteredArray;
      return;
    }
    this.dicArray = this.baseArray;
    console.log('dicArray', this.dicArray);
  }

}
