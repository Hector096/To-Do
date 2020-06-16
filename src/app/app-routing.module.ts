import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TaskComponent } from './components/task/task.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PendingComponent } from './components/pending/pending.component'


const routes: Routes = [
      {path: '', component: LoginComponent  },
      {path: 'login', component: LoginComponent  },
      {path: 'signup', component: SignupComponent},
      {path: 'task', component: TaskComponent}, 
      {path: 'pending',component:PendingComponent},
      { path: "**", component: PageNotFoundComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  PageRoutingModule = [ LoginComponent,SignupComponent,TaskComponent,PageNotFoundComponent,PendingComponent]