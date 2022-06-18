import { Component, OnInit } from '@angular/core';
import { general } from 'src/app/core';

@Component({
  selector: 'filter-words',
  templateUrl: './filter-words.component.html',
  styleUrls: ['./filter-words.component.scss']
})
export class FilterWordsComponent implements OnInit {
  letterList: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  buildLetters(){

  }

}
