import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  save(data:any){
    localStorage.setItem(
      'students',
      JSON.stringify(data)
    );
  }
  load(){
    return JSON.parse(
      localStorage.getItem('students')||'[]'
    );
  }
}
