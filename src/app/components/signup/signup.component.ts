import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task_Service/task.service';
import { Signupdata } from './signup.model';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   signupform = this.fb.group({
    username:['',Validators.required],
         emailid: ['',Validators.required],
         password : ['',Validators.required],
        mobile: ['',Validators.required],
        accountno: ['',Validators.required],
        country: ['',Validators.required]
   });
   
   
   
   
  
   
  //  postdata: Signupdata;
   
  constructor(public signup1:TaskService , public fb: FormBuilder, public route:Router) { 

  }

  ngOnInit() {
    
  
  }
  signup(){

    this.signup1.signup(this.signupform.value).subscribe(
      response => console.log('Success Register',response),
      error => console.log("Error", error)
      
      );
    
  }
  register(){
    this.route.navigate(['/login']);
  }
}
