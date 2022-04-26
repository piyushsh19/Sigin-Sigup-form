import { Component, OnInit } from '@angular/core';
import {  ToastrService } from 'ngx-toastr';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any;

  constructor(private userService: UserService, private toastr: ToastrService ){}
  
  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (user: any) => {
        this.user = user.results[0];
      },
      (err) =>{
        this.toastr.error(err.status,"Opps")
      }
    )
  } 
}