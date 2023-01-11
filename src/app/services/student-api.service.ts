import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from '../models/student';
import { ApifunctionService } from './apifunction.service';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService extends ApifunctionService<student> {

  constructor(http:HttpClient) {
      super(http, "http://localhost:3000/student" )
   }
}
