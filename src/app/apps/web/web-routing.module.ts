import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ContactPageComponent } from "./pages/contact-page/contact-page.component";
import { BriefPageComponent } from "./pages/brief-page/brief-page.component";

const routes : Routes = [
    {
      path: 'home',
      component: HomePageComponent
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
      redirectTo: 'home'
    }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WebRoutingModule{

}
