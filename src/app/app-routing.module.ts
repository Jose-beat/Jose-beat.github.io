import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';

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
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: '',
    redirectTo: 'web',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
