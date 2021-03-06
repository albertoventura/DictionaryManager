import { Injectable } from '@angular/core';
import { Dictionary, Word } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor() { }

  dicDTO(
    data: any,
    isNew: boolean,
    buttonColor: string,
    fontButtonColor: string,
    titleColor: string,
    iconColor: string
  ){
    if(isNew){
      data.id = this.generateId()
    }
    let dic: Dictionary = new Dictionary(
      data.id,
      data.name,
      buttonColor,
      fontButtonColor,
      titleColor,
      iconColor
    );
    return dic;
  }
  wordDTO(data: any, isNew: boolean){
    if(isNew){
      data.id = this.generateId()
    }
    let word: Word = new Word(
      data.id,
      data.idDic,
      data.name,
      data.definition,
      data.extra
    );
    return word;
  }
  generateId(){
    return new Date().getTime();
  }
  sortAlphabeticaly(baseArray: any[]){
    return baseArray.sort(function(a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
}
