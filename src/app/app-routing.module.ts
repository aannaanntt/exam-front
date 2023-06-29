import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import {LoginComponent} from '../app/pages/login/login.component'
import {HomeComponent} from '../app/pages/home/home.component'


const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
