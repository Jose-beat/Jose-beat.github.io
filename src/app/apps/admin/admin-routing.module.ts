import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashPageComponent } from './pages/dash-page/dash-page.component';
import { CatalogPageComponent } from './pages/catalog-page/catalog-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { VerificationAccountPageComponent } from './pages/verification-account-page/verification-account-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'dashboard',
        component: DashPageComponent
      },
      {
        path: 'experience',
        component: ExperiencePageComponent
      },
      {
        path: 'catalog',
        component: CatalogPageComponent
      },
      {
        path: 'project',
        component: ProjectPageComponent
      },
      {
        path: 'profile',
        component: ProfilePageComponent
      },
      {
        path: 'verify',
        component: VerificationAccountPageComponent
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
