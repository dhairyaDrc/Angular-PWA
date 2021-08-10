import { Component, Input, OnInit } from '@angular/core';
import { chapter1 } from "src/app/constants/chapter1";
import { buttonText } from "src/app/constants/button"
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
    this.data=chapter1;
    this.button = buttonText;
    console.log("this.data : ",this.button);
  }

}
