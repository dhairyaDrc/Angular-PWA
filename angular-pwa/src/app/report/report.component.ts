import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import buttonJsonData from "src/app/constants/button.json";
import chapter1JsonData from "src/app/constants/chapter1.json";
import chapter2CardJsonData from "../constants/chapter2-cards.json"
// import { Component, Input, OnInit } from '@angular/core';
import { chapter1 } from "src/app/constants/chapter1";
import { buttonText } from "src/app/constants/button"
import { chapter4 } from "src/app/constants/chapter4";
import { chapter3 } from "src/app/constants/chapter3";
// import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  
  chapter1Data:any;
  button: any;
  chapter2Data = [];
  data:any;

  constructor(
    private router:Router,
    private route: ActivatedRoute
    ) { }
  
  ngOnInit(): void {
    this.chapter1Data=chapter1JsonData;
    this.button = buttonJsonData;
    // this.chapter2Data = chapter2CardJsonData;
    
    console.log("chapter1JsonData >>>> ",chapter1JsonData,"\nthis.buttonJsonData : ",buttonJsonData,"\nchapter2 cards >>>>> ",chapter2CardJsonData);

    this.route.queryParams
      .subscribe(params => {
        console.log(params.id);

        if (params.id == 1) {
          this.data=chapter1JsonData;
        }else if (params.id == 4) {
          this.data=chapter4;
        }else if (params.id == 3) {
          this.data=chapter3;
        }else if (params.id == 2){
          this.router.navigate(['/chapter-2']);
        }
      }
    );

    this.button = buttonText;
    console.log("this.data : ",this.button);
  }
}
