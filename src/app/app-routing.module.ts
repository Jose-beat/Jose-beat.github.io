import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'web',
    loadChildren: () => import('./apps/web/web.module').then(m => m.WebModule)
  },
  {
    path: 'admin',
    loadChildren: ()=> import('./apps/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    redirectTo: 'web',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
