import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamisasPage } from './camisas.page';

const routes: Routes = [
  {
    path: '',
    component: CamisasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamisasPageRoutingModule {}
