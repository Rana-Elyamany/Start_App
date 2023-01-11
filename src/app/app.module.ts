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
import { ListStudentComponent } from './Student/list-student/list-student.component';
import { CreateStudentComponent } from './Student/create-student/create-student.component';
import { UpdateStudentComponent } from './Student/update-student/update-student.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowStudentComponent } from './Student/show-student/show-student.component';
import { ListTeacherComponent } from './taechers/list-teacher/list-teacher.component';
import { CreateTeacherComponent } from './taechers/create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './taechers/update-teacher/update-teacher.component';
import { LoginComponent } from './users/login/login.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { CustomFormsModule } from 'ng2-validation';


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
    ListStudentComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    ShowStudentComponent,
    ListTeacherComponent,
    CreateTeacherComponent,
    UpdateTeacherComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
