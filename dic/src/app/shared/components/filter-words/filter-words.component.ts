import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { general } from 'src/app/core';

@Component({
  selector: 'filter-words',
  templateUrl: './filter-words.component.html',
  styleUrls: ['./filter-words.component.scss']
})
export class FilterWordsComponent implements OnInit {
  letterList: string[] = general.alphabet.split('');
  pickedLetter: string = '';
  hasFilter: boolean = false;
  @Input('array') array: any[] = [];
  @Output() pick = new EventEmitter<boolean>();
  filteredArray: any[] = [];

  constructor(
  ) { }

  ngOnInit(): void {
  }

  pickLetter(value: string){
    this.pickedLetter = value.toLowerCase();
    this.filterArray();
  }

  filterArray(){
    if(this.pickedLetter == ''){
      this.filteredArray = this.array;
      this.pick.emit(true);
      return;
    }
    this.filteredArray = [];
    for (let i = 0; i < this.array.length; i++) {
      let name: string = this.array[i].name.toLowerCase();
      if(name.startsWith(this.pickedLetter)){
        let value = this.array[i];
        this.filteredArray.push(value);
      }

    }
    this.pick.emit(true);
  }
  resetFilter(){
    this.pickedLetter = '';
    this.filterArray();
  }
}
