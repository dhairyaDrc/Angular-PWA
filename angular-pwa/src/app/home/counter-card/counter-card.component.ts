
import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as jQuery from "jquery";

declare var jQuery: any;

@Component({
  selector: 'app-counter-card',
  templateUrl: './counter-card.component.html',
  styleUrls: ['./counter-card.component.css']
})
export class CounterCardComponent implements OnInit {

  @Input() data;
  @Input() currency;
  @Input() money;
  @Input() letter;
  @Input() duration;
  @Input() digit;
  @Input() steps: number;
  
  @ViewChild("animatedDigit") animatedDigit: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log("this.data.counter-card : ",this.data);
    console.log("currency : ",this.currency);
    console.log("money : ",this.money);
    console.log("letter : ",this.letter);

    document.addEventListener("DOMContentLoaded", () => {
      function counter(id, start, end, duration) {
       let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
         current += increment;
         obj.textContent = current;
         if (current == end) {
          clearInterval(timer);
         }
        }, step);
      }
      counter("count1", 0, 36, 3000);
     });
  }


  // animateCount() {
  //   if (!this.duration) {
  //     this.duration = 1500;
  //   }

  //   if (typeof this.digit === "number") {
  //     this.counterFunc(this.digit, this.duration, this.animatedDigit);
  //   }
  // }

  // counterFunc(endValue, durationMs, element) {
  //   if (!this.steps) {
  //     this.steps = 12;
  //   }

  //   const stepCount = Math.abs(durationMs / this.steps);
  //   const valueIncrement = (endValue - 0) / stepCount;
  //   const sinValueIncrement = Math.PI / stepCount;

  //   let currentValue = 0;
  //   let currentSinValue = 0;

  //   function step() {
  //     currentSinValue += sinValueIncrement;
  //     currentValue += valueIncrement * Math.sin(currentSinValue) ** 2 * 2;

  //     element.nativeElement.textContent = Math.abs(Math.floor(currentValue));

  //     if (currentSinValue < Math.PI) {
  //       window.requestAnimationFrame(step);
  //     }
  //   }

  //   step();
  // }

  // ngAfterViewInit() {
  //   if (this.digit) {
  //     this.animateCount();
  //   }
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes["digit"]) {
  //     this.animateCount();
  //   }
  // }

}
