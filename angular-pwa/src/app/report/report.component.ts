import { Component,OnInit } from '@angular/core';
import buttonJsonData from "src/app/constants/button.json";
import chapter1JsonData from "src/app/constants/chapter1.json";
import chapter2CardJsonData from "../constants/chapter2-cards.json"

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  
  chapter1Data:any;
  button: any;
  chapter2Data = [];
  
  constructor() { }
  
  ngOnInit(): void {
    this.chapter1Data=chapter1JsonData;
    this.button = buttonJsonData;
    this.chapter2Data = chapter2CardJsonData;
    
    console.log("chapter1JsonData >>>> ",chapter1JsonData,"\nthis.buttonJsonData : ",buttonJsonData,"\nchapter2 cards >>>>> ",chapter2CardJsonData);
  }

}
