import { Component, OnInit } from '@angular/core';
import { home } from 'src/app/constants/home.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData: any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.homeData = home;
    console.log("this.homeData ",home)
  }

  goToReport(id:number){
    // if(this.homeData){}
    this.router.navigate(['/report'], { queryParams: { id: id } });
  }
  

  goToFinancialHighlights(){
    this.router.navigate(['/financial-highlights'])
  }

}
