import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';
import { ApifunctionService } from './apifunction.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherApiService extends ApifunctionService<Teacher>{

  constructor(http:HttpClient) { 
    super(http,"http://localhost:3000/teacher")
  }
}
