import { Component, Input, OnInit } from '@angular/core';
import buttonJsonData from "src/app/constants/button.json";
import chapter1JsonData from "src/app/constants/chapter1.json";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }
  @Input() data:any;
  @Input() button: any;
  ngOnInit(): void {
    this.data=chapter1JsonData;
    this.button = buttonJsonData;
    console.log("chapter1JsonData >>>> ",chapter1JsonData,"\nthis.buttonJsonData : ",buttonJsonData);
  }

}
