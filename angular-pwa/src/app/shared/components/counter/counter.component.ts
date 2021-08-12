import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  @Input() title;
  @Input() gender;
  @Input() digit;
  @Input() data;
@Input() sign
  constructor() { }

  ngOnInit(): void {
    // this.animateValue("count1", 0, this.digit, 4000);
    

  }
  // animateValue(id, start, end, duration) {
  //   if (start === end) return;
  //   var range = end - start;
  //   var current = start;
  //   var increment = end > start ? 1 : -1;
  //   var stepTime = Math.abs(Math.floor(duration / range));
  //   var obj = document.getElementById(id);
  //   var timer = setInterval(function () {
  //     current += increment;
  //     obj.innerHTML = current;
  //     if (current == end) {
  //       clearInterval(timer);
  //     }
  //   }, stepTime);
  // }

}
