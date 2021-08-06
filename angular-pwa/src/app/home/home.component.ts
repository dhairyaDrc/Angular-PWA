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
  chpt1:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.homeData = home;
    console.log(this.homeData)
  }

  goToReport(){
    this.router.navigate(['/report'])
    }

}
