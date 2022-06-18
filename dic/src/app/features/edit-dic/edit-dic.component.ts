import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-dic',
  templateUrl: './edit-dic.component.html',
  styleUrls: ['./edit-dic.component.scss']
})
export class EditDicComponent implements OnInit {

  dicForm = new FormGroup({
    dicName: new FormControl('', Validators.required)
  });
  get dicName() {
    return this.dicForm.get('dicName');
  }
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    if(!this.dicForm.valid){
      return;
    }


  }

}
