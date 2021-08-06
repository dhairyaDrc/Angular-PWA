
import { Component, Input, OnInit } from '@angular/core';
// import * as $ from "jquery";

declare var $: any;

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


  constructor() { }

  ngOnInit(): void {
    console.log("this.data.counter-card : ",this.data);
    console.log("currency : ",this.currency);
    console.log("money : ",this.money);
    console.log("letter : ",this.letter);
  }

}
