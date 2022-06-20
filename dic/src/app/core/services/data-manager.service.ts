import { Injectable } from '@angular/core';
import { Dictionary, Word } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor() { }

  dicDTO(data: any, isNew: boolean){
    if(isNew){
      data.id = this.generateId()
    }
    let dic: Dictionary = new Dictionary(
      data.id,
      data.name,
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
}
