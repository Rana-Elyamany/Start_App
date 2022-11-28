import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './main/about/about.component';
import { ClientsComponent } from './main/clients/clients.component';
import { FeaturesComponent } from './main/features/features.component';
import { ServicesComponent } from './main/services/services.component';
import { CtaComponent } from './main/cta/cta.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { CountsComponent } from './main/counts/counts.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { TeamComponent } from './main/team/team.component';
import { ContactComponent } from './main/contact/contact.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ClientsComponent,
    FeaturesComponent,
    ServicesComponent,
    CtaComponent,
    PortfolioComponent,
    CountsComponent,
    TestimonialsComponent,
    TeamComponent,
    ContactComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
