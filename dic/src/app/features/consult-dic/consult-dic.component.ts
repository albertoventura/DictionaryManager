import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult-dic',
  templateUrl: './consult-dic.component.html',
  styleUrls: ['./consult-dic.component.scss']
})
export class ConsultDicComponent implements OnInit {
  wordList: any[] = [
    {name: 'Aaaaaa', definition: 'Lorem ipsum dolor sit amet', extra: '' },
    {name: 'Bbbb', definition: 'Sit amet dolor pog', extra: 'asd' },
    {name: 'Cccc', definition: 'Sit amet dolor pog', extra: 'asd' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
