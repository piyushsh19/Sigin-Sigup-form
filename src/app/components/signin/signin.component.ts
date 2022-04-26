import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public signinForm!: FormGroup;
  constructor( private formBuilder : FormBuilder ,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: [""],
      password: ["", Validators.min(10)]
    })
  }
  signin() {
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res => {
      const user = res.find((a:any)=>{
        return a.email === this.signinForm.value.email && a.password === this.signinForm.value.password
      });
      if(user){
        alert("Login Sucess");
        this.signinForm.reset();
        this.router.navigate(['dashboard'])
      }else
      alert("User not found")
    }, err =>{
      alert("Something went wrong")
    }
    )
  }
}
