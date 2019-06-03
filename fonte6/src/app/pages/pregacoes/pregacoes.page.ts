import { Component, OnInit } from '@angular/core';
import { PregacoesService } from 'src/app/services/pregacoes.service';

@Component({
  selector: 'app-pregacoes',
  templateUrl: './pregacoes.page.html',
  styleUrls: ['./pregacoes.page.scss'],
})
export class PregacoesPage implements OnInit {

  constructor(
    private pregacoesService: PregacoesService
  ) { 
    pregacoesService.todasPregacoes();
  }

  ngOnInit() {
  }

}
