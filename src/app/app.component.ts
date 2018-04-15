import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { GithubService } from './services/github.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  value:string;
  user:Object;
  userLoaded:boolean;
  notFound:boolean;
  emailFormControl = new FormControl('', [
    Validators.required,
    // Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
  constructor(private git:GithubService){
    this.userLoaded=false;
    this.notFound=false;
  }

  getUserInfo(){
    this.userLoaded=false;
    this.notFound=false;
  	this.git.getUserProfile(this.value).subscribe(data=>{
      if (data){
        this.user=data;
        this.userLoaded=true;
        this.notFound=false;
      }
      else{
        alert("Not found");
      }
    })
    setTimeout(()=>{
      if (this.userLoaded===false && this.notFound===false){
        this.notFound=true;
        this.userLoaded=false;
      }
    },3000)
  }
}
