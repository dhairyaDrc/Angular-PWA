import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expanable-content2',
  templateUrl: './expanable-content2.component.html',
  styleUrls: ['./expanable-content2.component.css']
})
export class ExpanableContent2Component implements OnInit {


 
  @Input() data;
  @Input() title;
  @Input() image;
  isExpand:boolean = false;


  constructor() { }

  ngOnInit(): void {
    
    
  }

  readMore(){
    
    this.isExpand =  this.isExpand ? this.isExpand=false : this.isExpand=true;
   
    
    
    
  }

}
