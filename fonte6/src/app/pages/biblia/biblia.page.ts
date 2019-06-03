import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BibliaService } from 'src/app/services/biblia.service';

@Component({
  selector: 'app-biblia',
  templateUrl: './biblia.page.html',
  styleUrls: ['./biblia.page.scss'],
})
export class BibliaPage implements OnInit {

  pageTitle:string;
  testamentoActivo:string;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private bibliaService:BibliaService,
  ) {
    
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => { console.log(params)
      if(params.testamento == 'at'){
        this.antigoTestamento();
      }
      else if(params.testamento == 'nt'){
        this.novoTestamento();
      }
      else{
        this.router.navigate(['home']);
      }
    });
  }

  abrirDefinicoes(){
    this.router.navigate(['definicoes']);
  }

  trocarTestamento(){
    if( this.testamentoActivo == 'at' ){
      this.router.navigateByUrl("/biblia/nt");
    }
    if( this.testamentoActivo == 'nt' ){
      this.router.navigateByUrl("/biblia/at");
    }
  }

  novoTestamento(){
    this.pageTitle = "NOVO TESTAMENTO";
    this.testamentoActivo = 'nt';
    this.bibliaService.livrosNT();
  }

  antigoTestamento(){
    this.pageTitle = "ANTIGO TESTAMENTO";
    this.testamentoActivo = 'at';
    this.bibliaService.livrosAT();
  }

  listarCapitulos(doLivro){
    this.router.navigateByUrl(this.router.url+"/"+doLivro.Index);
  }
}
