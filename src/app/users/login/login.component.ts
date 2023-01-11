import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name;
  password;
  errorlogin;
  allData:users[];
  constructor(private serv:UsersService ,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.serv.get().subscribe((data:any)=>{
       let user=data.find(allData=>{
        return allData.name==this.name && allData.password == this.password;
       })
       if(user){
        console.log("hello admin");
        this.router.navigateByUrl(`home/${this.name}`);
        
       }else{
        this.errorlogin="try again";
        
       }
    })
  }
}
