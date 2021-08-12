import { Component, Input, OnInit } from '@angular/core';
import { chapter1 } from "src/app/constants/chapter1";
import { buttonText } from "src/app/constants/button"
import { chapter4 } from "src/app/constants/chapter4";
import { chapter3 } from "src/app/constants/chapter3";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  @Input() data:any;
  @Input() button: any;
  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        console.log(params.id); // { order: "popular" }

        if (params.id == 4) {
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


    // this.data=chapter1
    
    this.button = buttonText;
    console.log("this.data : ",this.button);
  }


}
