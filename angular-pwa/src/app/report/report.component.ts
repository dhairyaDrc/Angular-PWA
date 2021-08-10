import { Component, OnInit } from '@angular/core';
import { chapter1 } from "src/app/constants/chapter1";
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }
  data:any;
  ngOnInit(): void {
    this.data=chapter1
    
  }


}
