import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandable-content',
  templateUrl: './expandable-content.component.html',
  styleUrls: ['./expandable-content.component.css']
})
export class ExpandableContentComponent implements OnInit {

  @Input() data
  @Input() title
  isExpands:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  readMore(){
    this. isExpands ? this. isExpands=false:this. isExpands=true
    console.log("work", this.data);
    
    
    
  }

}
