import { Component } from '@angular/core';
import * as _ from 'underscore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  homeLinks;

  constructor(
    private router: Router
  ) {
    this.homeLinks = [
      { "nome": "BÍBLIA - ANTIGO TESTAMENTO", "icone": "headset", "pagina": "biblia/at" },
      { "nome": "BÍBLIA - NOVO TESTAMENTO", "icone": "headset", "pagina": "biblia/nt" },
      { "nome": "PREGAÇÕES", "icone": "mic", "pagina": "pregacoes" },
      { "nome": "LIVROS", "icone": "book", "pagina": "livros" }
    ]
    this.homeLinks = _.shuffle(this.homeLinks);
  } 

  irPara(pagina:any){
    this.router.navigateByUrl("/"+pagina);
  }

  abrirDefinicoes(){
    this.router.navigate(['definicoes']);
  }

} 
