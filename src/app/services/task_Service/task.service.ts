import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../components/task/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public geturl:string = 'http://192.168.0.132:5000/viewtask';
  public loginurl:string = 'http://192.168.0.132:5000/login';
  public signupurl:string = 'http://192.168.0.132:5000/signup';
  public logouturl:string = 'http://192.168.0.132:5000/logout';
  public historyurl:string = 'http://192.168.0.132:5000/completed_list';
  public addurl:string ='http://192.168.0.132:5000/addtask';

  constructor(public http: HttpClient) {
   }
 gettask():Observable<Task[]>{
   return this.http.get<Task[]>(this.geturl);
   
 }
 gettoken(){return localStorage.getItem('authorization');}



 signup(form){
  return this.http.post<any>(this.signupurl,form);
 }
 
 login(form){
 return this.http.post<any>(this.loginurl,form);

 }
 history():Observable<Task[]>{
      return this.http.get<Task[]>(this.historyurl);
 }

 add(task){
   
    return   this.http.post<any>(this.addurl,task);
 }
 

}
