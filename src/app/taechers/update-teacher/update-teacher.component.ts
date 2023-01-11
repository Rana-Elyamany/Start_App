import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { TeacherApiService } from 'src/app/services/teacher-api.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  id;
  teacher:Teacher;
  constructor(private serv :TeacherApiService ,private activRoute:ActivatedRoute ,private route:Router) { 
    this.id=this.activRoute.snapshot.paramMap.get("id");
    this.serv.getByID(this.id).subscribe(data=>{
      this.teacher=data;
    });
  }
  edit(){
    this.serv.put(this.teacher,this.id).subscribe(data =>{
      this.route.navigateByUrl("listTeacher")
    })
  }
  ngOnInit(): void {
  }

}



