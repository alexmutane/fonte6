import { Component } from '@angular/core';
import { BibliaService } from '../services/biblia.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  //toogle dos livros e capitulos -- funcionando na mesma pagina
  mostrarLivros:boolean;
  mostrarCapitulos:boolean;

  //nr de capitulos de acordo com o livro selecionado
  testamentoSelecionado:string;
  testamentoCheckIcon = {"nt": false, "ot": false};
  livroSelecionado:string;
  capitulosLivro: number;

  constructor(
    public bibleService: BibliaService,
    public translateService: TranslateService
  ){
    //chamar e mostar a lista de livros
    this.trocarTestamento('nt');
    this.mostrarLivros = true;
  }

  verCapitulos(livro:any){
    console.log(livro.bookName, livro.numChapters)
    this.mostrarLivros = false;
    this.mostrarCapitulos = true;
    //...
    this.bibleService.capitulosDoLivroSelecionado(livro)
  }

  voltar(){
    this.mostrarCapitulos = false;
    this.mostrarLivros = true;
  }

  trocarTestamento(testamento:string){
    if(testamento == "nt"){
      this.bibleService.listarLivrosdaBiblia('nt');
      this.testamentoSelecionado = "Novo Testamento";
      this.testamentoCheckIcon = {"nt": true, "ot": false}
    }
    else{
      this.bibleService.listarLivrosdaBiblia('ot');
      this.testamentoSelecionado = "Antigo Testamento";
      this.testamentoCheckIcon = {"nt": false, "ot": true};
    }
  }

}
