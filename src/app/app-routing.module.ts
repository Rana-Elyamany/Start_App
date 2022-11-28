import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './main/about/about.component';
import { ClientsComponent } from './main/clients/clients.component';
import { ContactComponent } from './main/contact/contact.component';
import { CountsComponent } from './main/counts/counts.component';
import { CtaComponent } from './main/cta/cta.component';
import { FeaturesComponent } from './main/features/features.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { ServicesComponent } from './main/services/services.component';
import { TeamComponent } from './main/team/team.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';


const routes: Routes = [
  {path:"home",component:HeroComponent},
  {path:"",component:HeroComponent},
  {path:"about",component:AboutComponent},
  {path:"clients",component:ClientsComponent},
  {path:"contact",component:ContactComponent},
  {path:"counts",component:CountsComponent},
  {path:"cta",component:CtaComponent},
  {path:"features",component:FeaturesComponent},
  {path:"portfolio",component:PortfolioComponent},
  {path:"services",component:ServicesComponent},
  {path:"team",component:TeamComponent},
  {path:"testimonials",component:TestimonialsComponent},
  {path:"404" , component:NotfoundComponent},
  {path:"**" , component:NotfoundComponent}








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
