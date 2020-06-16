import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task_Service/task.service';
import {Task } from './task'
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
      taskdata = {};
      tasklist:Task[];
      histlist:Task[];
      signupform = this.fb.group({
        accountno:['',Validators],
        amount:['',Validators]
     });
  constructor(public send: TaskService ,public fb: FormBuilder,public route : Router ) { }

  ngOnInit() {
  }
register(){
  

  

}
  add(){
       this.send.add(this.taskdata).subscribe(

           response => {
           if(response!=null){
               alert('Success');

           }
           },
           error => alert('failed'+ error)
       );
  }
  pending(){
      this.send.gettask().subscribe(
        response => {
          if (response!=null){
           this.tasklist = response;
           
           
          }

        },error => alert('failed'+ error)
      );
 
    }
    hist(){
       this.send.history().subscribe(
        response=>{
         if(response!=null){
           this.histlist = response;
           console.log(this.histlist);
           
         } else {
           alert('No History');
         }
         
        },
        error=> alert('Error' + error)       

       )


    }
    transfer(){
         

    }
}
