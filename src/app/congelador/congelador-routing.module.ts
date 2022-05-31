import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongeladorPage } from './congelador.page';

const routes: Routes = [
  {
    path: '',
    component: CongeladorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongeladorPageRoutingModule {}
