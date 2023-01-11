import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { student } from 'src/app/models/student';
import { ApifunctionService } from 'src/app/services/apifunction.service';
import { StudentApiService } from 'src/app/services/student-api.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent  {
  student:student =new student;
  message="";
  constructor(private serv:StudentApiService ,private router:Router) { 

  }

  onSubmit(){
    this.serv.post(this.student).subscribe(data=>{
      
      this.message="Data inserted successfuly";
    this,this.router.navigateByUrl("listStudent");
  }
      );
  }
  print(studentName){
    console.log(studentName);
    

  }
}
