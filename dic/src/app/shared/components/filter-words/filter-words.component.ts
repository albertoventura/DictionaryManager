import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterService, general } from 'src/app/core';

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
    private filterService: FilterService,
  ) { }

  ngOnInit(): void {
    console.log('array base no filter', this.array);
  }

  pickLetter(value: string){
    console.log(value);
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
      console.log('leng', this.array.length);
      //const element = array[i];
      let name: string = this.array[i].name.toLowerCase();
      //console.log('ararara', this.array[i]);
      console.log('nananana', name);
      console.log('start', name.startsWith(this.pickedLetter));
      if(name.startsWith(this.pickedLetter)){
        console.log('ESCOOOOOO', name);
        let value = this.array[i];
        this.filteredArray.push(value);
      }

    }
    console.log('filteredArray', this.filteredArray);
    //this.hasFilter = true;
    if(!this.hasFilter){
      this.pick.emit(true);
    }
  }

}
