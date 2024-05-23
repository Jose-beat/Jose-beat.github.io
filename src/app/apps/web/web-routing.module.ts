import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { BriefPageComponent } from "./pages/brief-page/brief-page.component";
import { ResumePageComponent } from "./pages/resume-page/resume-page.component";

const routes : Routes = [
    {
      path: '',
      component: HomePageComponent,
      children: [
        {
          path: 'resume',
          component: ResumePageComponent
        },
        {
          path: 'briefCase',
          component: BriefPageComponent
        },
        {
          path: 'contact',
          component: ContactPageComponent
        },
        {
          path: '**',
          redirectTo: 'resume'
        }
      ]
    }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebRoutingModule{

}
