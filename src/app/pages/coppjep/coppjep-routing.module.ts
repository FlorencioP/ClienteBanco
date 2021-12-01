import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoppjepPage } from './coppjep.page';

const routes: Routes = [
  {
    path: '',
    component: CoppjepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoppjepPageRoutingModule {}
