import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { student } from 'src/app/models/student';
import { ApifunctionService } from 'src/app/services/apifunction.service';
import { StudentApiService } from 'src/app/services/student-api.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id;
  student:student;
  constructor(private serv :StudentApiService ,private activRoute:ActivatedRoute ,private route:Router) { 
    this.id=this.activRoute.snapshot.paramMap.get("id");
    this.serv.getByID(this.id).subscribe(data=>{
      this.student=data;
    });
  }
  edit(){
    this.serv.put(this.student,this.id).subscribe(data =>{
      this.route.navigateByUrl("listStudent")
    })
  }
  ngOnInit(): void {
  }

}
