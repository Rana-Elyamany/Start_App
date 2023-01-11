import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher';
import { TeacherApiService } from 'src/app/services/teacher-api.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent {
  allData:Teacher[];
  constructor( private serv:TeacherApiService) {
    this.serv.get().subscribe((data:any)=>{
      this.allData=data;
    })
   }
   onDelete(id){
    this.serv.delete(id).subscribe(data=>{
      if(confirm){
        console.log("Deleted Successfully");
      location.reload();
      }else{
        
      }
     } )}
      

}
