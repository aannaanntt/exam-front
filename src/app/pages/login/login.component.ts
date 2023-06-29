import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormGroup ,FormControl, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { userNameValidator } from 'src/app/restrictedNameDirective';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

  constructor(private fb : FormBuilder) { }
 ngOnInit() {

    this.buildForm();
  }
  buildForm() {
   this.loginForm= this.fb.group({
      userName: new FormControl('', [Validators.required,userNameValidator]),
      password: new FormControl('', Validators.required),
      

    });



}
onSubmit(){
  console.log(this.loginForm)
}
}
