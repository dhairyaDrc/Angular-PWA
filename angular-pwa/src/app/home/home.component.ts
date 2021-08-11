import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import homeJsonData from "src/app/constants/home.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.homeData = homeJsonData;
    console.log("this.homeJsonData ",homeJsonData)
  }

  goToReport(){
    // if(this.homeData){}
    this.router.navigate(['/report'])
    }

  goToFinancialHighlights(){
    this.router.navigate(['/financial-highlights'])
  }

}
