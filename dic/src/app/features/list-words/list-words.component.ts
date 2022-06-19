import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.scss']
})
export class ListWordsComponent implements OnInit {
  wordList: any[] = [
    {name: 'Lorem Ipsum Dolor'},
    {name: 'Parangarico tirimico'},
    {name: 'Toma chavinho'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
