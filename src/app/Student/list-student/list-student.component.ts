import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/models/student';
import { ApifunctionService } from 'src/app/services/apifunction.service';
import { StudentApiService } from 'src/app/services/student-api.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
  allData:student[];
  constructor(private serv:StudentApiService) { 
    this.serv.get().subscribe((data:any)=>{
      this.allData=data;

    }
    )

  }

  onDelete(id){
    this.serv.delete(id).subscribe(data=>{
      if(confirm){
        console.log("Deleted Successfully");
      location.reload();
      }else{
        
      }
      
      
    })
  }

}
