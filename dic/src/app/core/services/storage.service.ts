import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }
  list() {
  	const st = this.storage;
    let array: any[] = [];
    for (var i = 0; i < st.length; i++) {
      let key: any = st.key(i);
      //var value = localStorage.getItem(key);
         array.push(this.get(key));
       }
  	return array;
  }
  set(key: number, value: any){
    this.storage.setItem(key.toString(), JSON.stringify(value));
  }
  get(key: number){
    return JSON.parse(this.storage.getItem(key.toString())!);
  }
  clear(){
    this.storage.clear();
  }
  checkLength(){
    if(Object.keys(localStorage).length > 0){
      return true;
    }
    return false;
  }
  getWithoutId(){
    let item
    return this.get(Number(Object.keys(localStorage)[0]));
    Object.keys(localStorage).forEach(data =>
      {
        item = localStorage.getItem(data);
        return item;
      });
  }
}
