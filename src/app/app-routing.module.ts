import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'banco-pichincha',
    loadChildren: () => import('./pages/banco-pichincha/banco-pichincha.module').then( m => m.BancoPichinchaPageModule)
  },
  {
    path: 'coppjep',
    loadChildren: () => import('./pages/coppjep/coppjep.module').then( m => m.CoppjepPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
