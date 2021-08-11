import { Component, OnInit } from '@angular/core';
import homeJsonData from "src/app/constants/home.json"
import financialHighlightsJsonData from "src/app/constants/financial-highlights.json";

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
    this.homeData = homeJsonData;
    // this.value = Object.values(financialHighlightsJsonData);
    this.value = financialHighlightsJsonData;

    console.log("this.homeData >>> ",homeJsonData,"\nfinancialHighlights >>> ",financialHighlightsJsonData,"\nvalue >>> ",this.value)
  }

}
