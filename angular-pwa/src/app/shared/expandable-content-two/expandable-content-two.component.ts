import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandable-content-two',
  templateUrl: './expandable-content-two.component.html',
  styleUrls: ['./expandable-content-two.component.css']
})
export class ExpandableContentTwoComponent implements OnInit {

  constructor() { }
@Input() title;
@Input() data

isExpand:boolean = false;

  ngOnInit(): void {
  }

  readMore(){
    this.isExpand ? this.isExpand=false:this.isExpand=true
    
    
  }
}
