import { Component, OnInit } from '@angular/core';
import { chapter1 } from "src/app/constants/chapter1";
import { chapter3 } from "src/app/constants/chapter3";
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }
  data:any;
  // chp3:any;
  ngOnInit(): void {
    // this.data=chapter1
    this.data=chapter3
    console.log(this.data)
  }

}
