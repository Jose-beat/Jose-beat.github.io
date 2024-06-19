import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';
import { AuthActivateGuard, AuthMatchGuard } from './apps/auth/guards/auth.guard';
import { PublicActivateGuard, PublicMatchGuard } from './apps/auth/guards/public.guard';

const routes: Routes = [
  {
    path: 'web',
    loadChildren: () => import('./apps/web/web.module').then(m => m.WebModule),
    canActivate: [PublicActivateGuard],
    canMatch: [PublicMatchGuard]
  },
  {
    path: 'admin',
    loadChildren: ()=> import('./apps/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./apps/auth/auth.module').then(m => m.AuthModule),
    canActivate: [AuthActivateGuard],
    canMatch: [AuthMatchGuard]

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
