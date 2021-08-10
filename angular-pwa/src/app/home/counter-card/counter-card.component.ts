
import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';

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

  moneyCount = 36;

  @ViewChild("animatedDigit") animatedDigit: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log("this.data.counter-card : ", this.data);
    console.log("currency : ", this.currency);
    console.log("money : ", this.money);
    console.log("letter : ", this.letter);

    this.animateValue("count1", 0, this.moneyCount, 2000);
  }

  animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
      current += increment;
      obj.innerHTML = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
}
