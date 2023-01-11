import { HttpClient } from '@angular/common/http';
import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { Teacher } from 'src/app/models/teacher';
import { TeacherApiService } from 'src/app/services/teacher-api.service';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {
  teacher : Teacher = new Teacher();

  TeacherForm = new FormGroup({
  teacherName: new FormControl("",[Validators.required ,Validators.min(3)]),
  teacherPhone: new FormControl("",Validators.required),
  teacherAge: new FormControl("",Validators.required),
  teacherLevel: new FormControl("",Validators.required),
  teacherCourse: new FormControl("",Validators.required),
  teacherUrl: new FormControl("",[Validators.required ,CustomValidators.url]),
  })
  constructor(private serv:TeacherApiService,private router:Router) {

   }
   ngOnInit(): void {
     
   }
   onsubmit(){
    this.serv.post(this.TeacherForm.value).subscribe(data=>{
        this.router.navigateByUrl("listTeacher");
    })
   }
  get teacherName(){
   return this.TeacherForm.get('teacherName');
  }
  get teacherPhone(){
    return this.TeacherForm.get('teacherPhone');
   }
   get teacherAge(){
    return this.TeacherForm.get('teacherAge');
   }
   get teacherLevel(){
    return this.TeacherForm.get('teacherLevel');
   }
   get teacherCourse(){
    return this.TeacherForm.get('teacherCourse');
   }
   get teacherUrl(){
    return this.TeacherForm.get('teacherUrl');
   }
  
}
