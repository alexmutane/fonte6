import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore';


@Injectable({
  providedIn: 'root'
})

export class BibliaService {

  listaDeLivros:any;
  livroSelecionado:any;
  numeroDeCapitulos:number[];

  constructor(
    private http: HttpClient
  ) {

  }

  livrosNT(livroIndex?:number){
    this.http.get('assets/data/nt_books.json').subscribe((res:any) => {
      this.listaDeLivros = res;
      
      if( livroIndex ){
        this.listarCapitulos(livroIndex, res);
      }
    })
  }

  livrosAT(livroIndex?:number){
    this.http.get('assets/data/ot_books.json').subscribe(res => {
      this.listaDeLivros = res;

      if( livroIndex ){
        this.listarCapitulos(livroIndex, res);
      }
    })
  }

  listarCapitulos(livroIndex, res){
    for(let livro of res){
      if( livro.Index == livroIndex ){
        this.livroSelecionado = livro;
        this.numeroDeCapitulos = [];
        for(let index=1; index <= livro.numChapters; index++){
          this.numeroDeCapitulos.push(index);
        }
        this.numeroDeCapitulos;
      }
    }
  }
}
