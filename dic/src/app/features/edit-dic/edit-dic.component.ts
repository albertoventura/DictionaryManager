import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataManagerService } from 'src/app/core/services/data-manager.service';

@Component({
  selector: 'app-edit-dic',
  templateUrl: './edit-dic.component.html',
  styleUrls: ['./edit-dic.component.scss']
})
export class EditDicComponent implements OnInit {

  buttonColor: any = "#fff";
  fontButtonColor: any = "#fff";
  titleColor: any = "#fff";
  iconColor: any = "#fff";


  isNewDic: boolean = false;
  dicForm = new FormGroup({
    id: new FormControl(this.isNewDic ? this.data.id : ''),
    name: new FormControl('', Validators.required)
  });

  get name() {
    return this.dicForm.get('name');
  }


  constructor(
    public dialogRef: MatDialogRef<EditDicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DicData,
    private dataManager: DataManagerService,
  ) {
      if(data == undefined) {
        this.isNewDic = true;
        this.buttonColor = "#264399";
        this.fontButtonColor = "#fff";
        this.titleColor = "#264399";
        this.iconColor = "#264399";
      }else{
        this.buildColor();
        this.dicForm.patchValue({ ...data});
      }
  }

  ngOnInit(): void {
  }

  submit() {
    if(!this.dicForm.valid){
      return;
    }
    const dic = this.dataManager
      .dicDTO(
        this.dicForm.value,
        this.isNewDic,
        this.buttonColor,
        this.fontButtonColor,
        this.titleColor,
        this.iconColor,
      )
    console.log(dic);
    this.dialogRef.close(dic);
  }
  close(){
    this.dialogRef.close();
  }
  /*
  getColor(){
    console.log('buttonColor',this.buttonColor);
    console.log('fontButtonColor',this.fontButtonColor);
    console.log('titleColor',this.titleColor);
    console.log('iconColor',this.iconColor);
  }
  */
  buildColor(){
    this.buttonColor = this.data.buttonColor;
    this.fontButtonColor = this.data.fontButtonColor;
    this.titleColor = this.data.titleColor;
    this.iconColor = this.data.iconColor;
  }
}
export interface DicData {
  id: number;
  name: string;
  buttonColor: string;
  fontButtonColor: string;
  titleColor: string;
  iconColor: string;
}
