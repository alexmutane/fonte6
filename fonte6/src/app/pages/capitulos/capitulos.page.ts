import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibliaService } from 'src/app/services/biblia.service';

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.page.html',
  styleUrls: ['./capitulos.page.scss'],
})
export class CapitulosPage implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    public bibliaService: BibliaService
  ) { 
    
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => { console.log(params)
      if( params.testamento == "nt"){
        this.bibliaService.livrosNT(params.livro)
      }

      if( params.testamento == "at"){
        this.bibliaService.livrosAT(params.livro)
      }
    });
  }

  tocarCapitulo(livroSelecionado){
    console.log('ls',livroSelecionado)
  }

}
