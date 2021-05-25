import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffairePage } from './affaire.page';

const routes: Routes = [
  {
    path: '',
    component: AffairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AffairePageRoutingModule {}
