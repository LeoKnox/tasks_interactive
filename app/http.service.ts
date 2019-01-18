import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {}
  
  getTasks(){
    console.log('inside http service')
    return this._http.get('/tasks');
  }

  getOne(id){
    console.log('whatever' +  id.task)
    return this._http.get(`/tasks/${id.task}`)
  }
}
