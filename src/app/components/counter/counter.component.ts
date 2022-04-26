import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title:string = 'Counter App ';

  count: number = 0;

  handleIncrease = () => {
    if (this.count === 10){
     this.handleReset();
    }
    this.count = this.count + 1;
  };

  handleDecrease = () => {
    if (this.count <= 0){
      this.count= this.count +1
    }
    this.count = this.count -1;
  };

  handleReset = () => {
    this.count = 0;
  };

}
