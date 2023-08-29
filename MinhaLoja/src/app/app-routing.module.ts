import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'camisas', loadChildren: () => import('./camisas/camisas.module').then(m => m.CamisasPageModule) },
  { path: 'calcas', loadChildren: () => import('./calcas/calcas.module').then(m => m.CalcasPageModule) },
  { path: 'tenis', loadChildren: () => import('./tenis/tenis.module').then(m => m.TenisPageModule) },
  { path: 'acessorios', loadChildren: () => import('./acessorios/acessorios.module').then(m => m.AcessoriosPageModule) },
  { path: 'promocoes', loadChildren: () => import('./promocoes/promocoes.module').then(m => m.PromocoesPageModule) },
  { path: 'carrinho', loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoPageModule) },
  {
    path: 'carrinho',
    loadChildren: () => import('./carrinho/carrinho.module').then( m => m.CarrinhoPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
