import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IgrejasService {

  listaDeIgrejas:any;

  constructor(
    private http: HttpClient
  ) { 
    this.todasIgrejas();
  }

  todasIgrejas(){
    return this.http.get("assets/data/organization.json").subscribe(res => {
      this.listaDeIgrejas = res;
      console.log(this.listaDeIgrejas)
    })
  }
}
