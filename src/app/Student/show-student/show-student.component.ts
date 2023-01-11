import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { student } from 'src/app/models/student';
import { ApifunctionService } from 'src/app/services/apifunction.service';
import { StudentApiService } from 'src/app/services/student-api.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {
  student:student;
  id;
  constructor(private serv:StudentApiService , private activeRoute:ActivatedRoute) {
    this.id=this.activeRoute.snapshot.paramMap.get("id");
    this.serv.getByID(this.id).subscribe(data =>{
      this.student = data
      console.log(this.student);
    })
   }

  ngOnInit(): void {
  }

}
