import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutillagesPage } from './outillages.page';

const routes: Routes = [
  {
    path: '',
    component: OutillagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutillagesPageRoutingModule {}
