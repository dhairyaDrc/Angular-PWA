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
    this.chapter2Data = chapter2CardJsonData;
    
    console.log("chapter1JsonData >>>> ",chapter1JsonData,"\nthis.buttonJsonData : ",buttonJsonData,"\nchapter2 cards >>>>> ",chapter2CardJsonData);

  // constructor(private route: ActivatedRoute) { }

    this.route.queryParams
      .subscribe(params => {
        console.log(params.id); // { order: "popular" }

        if (params.id == 1) {
          this.chapter1Data=chapter1JsonData;
        } else if (params.id == 4) {
          this.chapter2Data=chapter2CardJsonData;
        }if (params.id == 4) {
          this.data=chapter4;
        } else if (params.id == 1) {
          this.data=chapter1;
        }else if (params.id == 3) {
          this.data=chapter3;
        }

        // this.order = params.order;
        // console.log(this.order); // popular
      }
    );

    this.button = buttonText;
    console.log("this.data : ",this.button);
  }

  goToRegions(id: number){

    this.route.queryParams
      .subscribe(params => {
        console.log(params.id); // { order: "popular" }

        if (id == 1) {
          this.router.navigate(['/central-west-asia'], { queryParams: { id: id } });
          // this.chapter1Data=chapter1JsonData;
        } else if (id == 2) {
          this.router.navigate(['/east-asia'], { queryParams: { id: id } });
        } else if(id == 3){
          this.router.navigate(['/pacific'], { queryParams: { id: id } });
        }else if(id == 4){
          this.router.navigate(['/south-asia'], { queryParams: { id: id } });
        }else {
          this.router.navigate(['/south-east-asia'], { queryParams: { id: id } });
        }

        // this.order = params.order;
        // console.log(this.order); // popular
      }
    );
    
    // this.data=chapter1
    
    
  }


}
