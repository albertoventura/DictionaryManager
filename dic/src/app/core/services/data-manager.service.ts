import { Injectable } from '@angular/core';
import { Dictionary, Word } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  constructor() { }

  dicDTO(data: any){
    if(!data.id){
      console.log('não tem id');
      data.id = new Date().getTime();
    }
    let dic: Dictionary = new Dictionary(
      data.id,
      data.name,
    );
    return dic;
  }
  wordDTO(data: any){
    let word: Word = new Word(
      data.id,
      data.idDic,
      data.name,
      data.definition,
      data.extra
    );
    return word;
  }

}
