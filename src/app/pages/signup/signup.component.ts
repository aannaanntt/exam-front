import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { userNameValidator } from 'src/app/restrictedNameDirective';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registrationForm: FormGroup;

  formFields = ['userName','password', 'firstName', 'lastName', 'email', 'phone'];

 enteredUserName:string;
enteredPasswordEn:string;
enteredFirstName:string;
enteredLastName:string;
enteredEmail:any;
enteredPhone:number;


  constructor(private fb : FormBuilder,
              private userService:UserServiceService,
              private snackbar  : MatSnackBar) { }

  ngOnInit() {

    this.buildForm();
  }
  buildForm() {
   this.registrationForm= this.fb.group({
      userName: new FormControl('', [Validators.required,userNameValidator]),
      password: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10)])

    });

  }


  onSubmit(){
console.log(this.registrationForm);
     this.userService.addUser(this.registrationForm.value).subscribe((data)=>{
     console.log(data);
      this.snackbar.open('User is registered','',{
        duration:3000,
        verticalPosition:'top'
      });
     }, (error)=>{
   
this.snackbar.open('Something went wrong','',{
        duration:3000,
        verticalPosition:'top'
      });
     })

   }





}

