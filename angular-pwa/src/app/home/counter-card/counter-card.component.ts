
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import counterCardsJsonData from "src/app/constants/counterCards.json";
import * as $ from 'jquery';

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
    console.log("this.data.counter-card : ", counterCardsJsonData);
    console.log("currency : ", this.currency);
    console.log("money : ", this.money);
    console.log("letter : ", this.letter);
    this.numberCounter();
  }

  numberCounter() {
    var currentNumber = $('#dynamic-number').text();

    $({ numberValue: currentNumber }).animate({ numberValue: 31.6 }, {
      duration: 2000,
      easing: 'linear',
      step: function (now) {
        $('#dynamic-number').text(now.toFixed(1));
      }
    });
  }
}
