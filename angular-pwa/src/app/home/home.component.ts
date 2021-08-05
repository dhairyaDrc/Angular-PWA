import { Component, OnInit } from '@angular/core';
import { home } from 'src/app/constants/home.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData: any;
  constructor() { }

  ngOnInit(): void {
    this.homeData = home;
    console.log(this.homeData)
  }

}
