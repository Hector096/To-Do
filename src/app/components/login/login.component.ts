import { Component, OnInit } from '@angular/core';
// import { TaskService } from '../task.service';
import { FormBuilder, Validators} from '@angular/forms';
import { Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor( public fb :FormBuilder, public route : Router ) { }
  loginform = this.fb.group({
    username:['',Validators],
    password:['',Validators]
 });
  

  ngOnInit() {
  }
    login(){
                 console.log(this.loginform.value)     
      // this.route.navigate(['/task']);

            }
    }


