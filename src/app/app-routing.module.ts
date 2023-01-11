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
import { CreateStudentComponent } from './Student/create-student/create-student.component';
import { ListStudentComponent } from './Student/list-student/list-student.component';
import { ShowStudentComponent } from './Student/show-student/show-student.component';
import { UpdateStudentComponent } from './Student/update-student/update-student.component';
import { CreateTeacherComponent } from './taechers/create-teacher/create-teacher.component';
import { ListTeacherComponent } from './taechers/list-teacher/list-teacher.component';
import { UpdateTeacherComponent } from './taechers/update-teacher/update-teacher.component';
import { LoginComponent } from './users/login/login.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';


const routes: Routes = [
  {path:"home",component:HeroComponent},
  {path:"home/:name",component:HeroComponent},

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
  {path:"listStudent",component:ListStudentComponent},
  {path:"createStudent",component:CreateStudentComponent},
  {path:"showStudent/:id",component:ShowStudentComponent},
  {path:"editStudent/:id",component:UpdateStudentComponent},
  {path:"listTeacher",component:ListTeacherComponent},
  {path:"createTeacher",component:CreateTeacherComponent},
  {path:"editTeacher/:id",component:UpdateTeacherComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignUpComponent},
  {path:"404" , component:NotfoundComponent},
  {path:"**" , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
