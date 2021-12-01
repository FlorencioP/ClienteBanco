import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BancoPichinchaPage } from './banco-pichincha.page';

const routes: Routes = [
  {
    path: '',
    component: BancoPichinchaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BancoPichinchaPageRoutingModule {}
