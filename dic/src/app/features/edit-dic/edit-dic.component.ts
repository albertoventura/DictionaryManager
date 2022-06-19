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

  dicData: any;
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
      this.dicData = data;
      if(data == undefined) {
        this.isNewDic = true;
      }
      this.dicForm.patchValue({ ...data});
  }

  ngOnInit(): void {
  }

  submit() {
    if(!this.dicForm.valid){
      return;
    }
    const dic = this.dataManager.dicDTO(this.dicForm.value, this.isNewDic)
    console.log(dic);
    this.dialogRef.close(dic);
  }
  close(){
    this.dialogRef.close();
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
