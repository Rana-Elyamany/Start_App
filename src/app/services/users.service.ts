import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from '../models/users';
import { ApifunctionService } from './apifunction.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApifunctionService<users> {

  constructor(http:HttpClient) {
    super(http,"http://localhost:3000/users");
   }
}
