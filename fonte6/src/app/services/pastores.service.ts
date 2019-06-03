import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class PastoresService {

  listaDePregadores:any;

  constructor(
    private http: HttpClient
  ) { 
    this.todosPastores();
  }

  todosPastores(){
    return this.http.get("assets/data/teacher.json").subscribe((res:any) => {
      this.listaDePregadores = res;
    }) 
  }

}
