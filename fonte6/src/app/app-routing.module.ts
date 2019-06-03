import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'pregacoes', loadChildren: './pages/pregacoes/pregacoes.module#PregacoesPageModule' },
  { path: 'livros', loadChildren: './pages/livros/livros.module#LivrosPageModule' },
  { path: 'biblia/:testamento', loadChildren: './pages/biblia/biblia.module#BibliaPageModule' },
  { path: 'definicoes', loadChildren: './pages/definicoes/definicoes.module#DefinicoesPageModule' },
  { path: 'biblia/:testamento/:livro', loadChildren: './pages/capitulos/capitulos.module#CapitulosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
