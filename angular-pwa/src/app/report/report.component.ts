import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  constructor(
    private router:Router,
    private route: ActivatedRoute
    ) { }
  
  ngOnInit(): void {
    this.chapter1Data=chapter1JsonData;
    this.button = buttonJsonData;
    this.chapter2Data = chapter2CardJsonData;
    
    console.log("chapter1JsonData >>>> ",chapter1JsonData,"\nthis.buttonJsonData : ",buttonJsonData,"\nchapter2 cards >>>>> ",chapter2CardJsonData);

    this.route.queryParams
      .subscribe(params => {
        console.log(params.id); // { order: "popular" }

        if (params.id == 1) {
          this.chapter1Data=chapter1JsonData;
        } else if (params.id == 4) {
          this.chapter2Data=chapter2CardJsonData;
        }

        // this.order = params.order;
        // console.log(this.order); // popular
      }
    );


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
    
  }

}
