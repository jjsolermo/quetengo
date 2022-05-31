import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeveraPage } from './nevera.page';

const routes: Routes = [
  {
    path: '',
    component: NeveraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeveraPageRoutingModule {}
