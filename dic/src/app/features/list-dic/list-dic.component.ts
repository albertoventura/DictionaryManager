import { EditDicComponent } from './../edit-dic/edit-dic.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { routerLabels } from 'src/app/core/';

@Component({
  selector: 'app-list-dic',
  templateUrl: './list-dic.component.html',
  styleUrls: ['./list-dic.component.scss']
})
export class ListDicComponent implements OnInit {
  dicList: any[] = [
    {name: 'Lorem Ipsum Dolor'},
    {name: 'Parangarico tirimico'},
    {name: 'Toma chavinho'},
  ];
  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) { }

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

  openWords(value: any){
    this.router.navigate([routerLabels.listWords],{ state: value });
  }
  openConsult(value: any){
    this.router.navigate([routerLabels.consultDic],{ state: value });
  }

}
