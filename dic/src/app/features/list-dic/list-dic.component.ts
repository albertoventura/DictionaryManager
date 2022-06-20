import { Dictionary } from 'src/app/core/';
import { EditDicComponent } from './../edit-dic/edit-dic.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { routerLabels, StorageService } from 'src/app/core/';
import { DataManagerService } from 'src/app/core/services/data-manager.service';

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
  dicArray: Dictionary[] = []
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private storage: StorageService,
  ) {
    console.log('list',storage.listAll());
    this.refreshArray();
    console.log('teste sto', this.storage.get(1655685070681));
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
  refreshArray(){
    this.dicArray = this.storage.listDic();
  }

}
