import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  
  @Input() title;
  @Input() data;
  @Input() digit;
  @Input() percentage;
  @Input() sign;
  counter:any;
  constructor() { }

  ngOnInit(): void {
    console.log("/////// ",this.data);
    
  }

}
