import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { TranslateService } from '@ngx-translate/core';
import { Biblia } from '../model/biblia';

@Injectable({
  providedIn: 'root'
})
export class BibliaService {

  listaLivros;
  livroSelecionado:string;
  listaCapitulos: number[];

  constructor(
    private http: HttpClient,
    public translateService: TranslateService
  ) { 
    
  }

  listarLivrosdaBiblia(testamento:string){
    //verificar o testamento passado por parametro, escolher o arquivo de biblia
    let arquivoDeBiblia:string;

    testamento == "nt" ? arquivoDeBiblia = "../assets/data/nt_books.json" : arquivoDeBiblia = "../assets/data/ot_books.json";

    this.http.get(arquivoDeBiblia, {}).subscribe( (res:Biblia) => {
      console.log(testamento, res);
      return this.listaLivros = this.padronizarDados(res);
    });
  }

  capitulosDoLivroSelecionado(livro:any){
    this.listaCapitulos = [];
    this.livroSelecionado = livro.bookName;
    for(let i=1; i <= livro.numChapters; i++){
      this.listaCapitulos.push(i);
    }
    return this.listaCapitulos;
  }

  padronizarDados(dados){
    let novaLista = [];
    for(let item of dados){     
      novaLista.push({
        "Index": item.Index,
        "bookCode": item.bookCode,
        "numChapters": item.numChapters,
        "bookName": this.translateService.currentLang == "pt" ? item.bookPT : item.bookEN
      });
    }
    return novaLista;
  }

}
