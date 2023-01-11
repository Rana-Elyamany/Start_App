import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class ApifunctionService<T> {
  constructor(private http:HttpClient,@Inject(String) public configUrl:string) {
   }
   get():Observable<T>{
    return this.http.get<T>(this.configUrl);

   }
   getByID(id):Observable<T>{
    return this.http.get<T>(this.configUrl+`/${id}`);
   }
   post(model:T):Observable<T>{
    return this.http.post<T>(this.configUrl,model)
   }
   put(model:T,id):Observable<T>{
    return this.http.put<T>(this.configUrl+`/${id}`,model)
   }
   delete(id):Observable<T>{
    return this.http.delete<T>(this.configUrl+`/${id}`)
   }
}
