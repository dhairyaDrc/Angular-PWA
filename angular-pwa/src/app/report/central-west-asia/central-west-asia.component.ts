import { Component, OnInit } from '@angular/core';
import centralWestAsiaJsonData from 'src/app/constants/central-west-asia.json'

@Component({
  selector: 'app-central-west-asia',
  templateUrl: './central-west-asia.component.html',
  styleUrls: ['./central-west-asia.component.css']
})
export class CentralWestAsiaComponent implements OnInit {

  data = [];

  constructor() { }

  ngOnInit(): void {
    this.data = centralWestAsiaJsonData;

    console.log("central-west-asia.json : ",this.data);
    
  }

}
