import { Component, OnInit } from '@angular/core';
import { home } from 'src/app/constants/home.js';
import { financialHighlights } from 'src/app/constants/financial-highlights.js';

@Component({
  selector: 'app-financial-highlights',
  templateUrl: './financial-highlights.component.html',
  styleUrls: ['./financial-highlights.component.css']
})
export class FinancialHighlightsComponent implements OnInit {

  homeData: any;
  value: any;

  constructor() { }

  ngOnInit(): void {
    this.homeData = home;
    this.value = Object.values(financialHighlights);

    console.log("this.homeData >>> ",home,"\nfinancialHighlights >>> ",financialHighlights,"\nvalue >>> ",this.value)
  }

}
