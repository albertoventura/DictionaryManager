import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }
  listAll() {
  	const st = this.storage;
    let array: any[] = [];
    for (var i = 0; i < st.length; i++) {
      let key: any = st.key(i);
      //var value = localStorage.getItem(key);
         array.push(this.get(key));
       }
  	return array;
  }
  listWords(dicKey: number) {
  	const st = this.storage;
    let array: any[] = [];
    for (var i = 0; i < st.length; i++) {
      let key: any = st.key(i);
      //var value = localStorage.getItem(key);
      let obj = this.get(key)
      if(obj.idDic){
        if(obj.idDic == dicKey){
          array.push(obj);
        }
      }
    }
  	return array;
  }
  listDic() {
  	const st = this.storage;
    let array: any[] = [];
    for (var i = 0; i < st.length; i++) {
      let key: any = st.key(i);
      //var value = localStorage.getItem(key);
      let obj = this.get(key)
      if(!obj.idDic){
        array.push(obj);
      }
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
  update(value: any): void {
    const array: any[] = this.listAll();
    array.forEach((obj, index, objs) => {
      if (value.id === obj.id) {
        objs[index] = value;
      }
    });
    this.storage[0] = JSON.stringify(array);
  }
  remove(key: number): boolean {
    if (this.storage) {
      this.storage.removeItem(key.toString());
      return true;
    }
    return false;
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
  }
}
