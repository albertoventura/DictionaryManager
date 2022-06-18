import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-word',
  templateUrl: './edit-word.component.html',
  styleUrls: ['./edit-word.component.scss']
})
export class EditWordComponent implements OnInit {

  wordForm = new FormGroup({
    wordName: new FormControl('', Validators.required),
    wordDefinition: new FormControl('', Validators.required),
    definitionExtra: new FormControl(''),
  });
  get wordName() {
    return this.wordForm.get('wordName');
  }
  get wordDefinition() {
    return this.wordForm.get('wordDefinition');
  }
  get definitionExtra() {
    return this.wordForm.get('definitionExtra');
  }
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    if(!this.wordForm.valid){
      return;
    }


  }

}
