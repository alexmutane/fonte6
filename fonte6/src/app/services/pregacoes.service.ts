import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PastoresService } from './pastores.service';
import * as _ from 'underscore';
import { IgrejasService } from './igrejas.service';

@Injectable({
  providedIn: 'root'
})
export class PregacoesService {

  listaDePregacoes:any;

  constructor(
    private http: HttpClient,
    private pastoresService: PastoresService,
    private igrejasService: IgrejasService
  ) {
    
  }

  todasPregacoes(){

    this.http.get("assets/data/teaching.json").subscribe((res:any) => {
      this.listaDePregacoes = [];

      for(let pregacao of res){
        this.listaDePregacoes.push({
          id: pregacao.id,
          titulo: pregacao.pt_title,
          data: pregacao.created_at,
          url: pregacao.teaching_url,
          pregadorId: pregacao.teacher_id,
          pregador: this.selecionarPregador(pregacao.teacher_id),
          fotoPregador: pregacao.teacher_id,
          sobrePregador: pregacao.teacher_id,
          igreja: this.selecionarIgreja(pregacao.organization_id),
          fotoIgreja: pregacao.organization_id,
          sobreIgreja: pregacao.organization_id,
          licenca: pregacao.organization_id
        })
      }
      this.listaDePregacoes;
    })
    
  }

  selecionarPregador(preagadorID){
    for(let pregador of this.pastoresService.listaDePregadores){
      if(pregador.id == preagadorID){
        return pregador
      }
    }
  }

  selecionarIgreja(igrejaID){
    for(let igreja of this.igrejasService.listaDeIgrejas){
      if(igreja.id == igrejaID){
        return igreja
      }
    }
  }

}
