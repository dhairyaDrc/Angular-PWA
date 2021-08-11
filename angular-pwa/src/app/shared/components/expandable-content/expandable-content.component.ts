import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandable-content',
  templateUrl: './expandable-content.component.html',
  styleUrls: ['./expandable-content.component.css']
})
export class ExpandableContentComponent implements OnInit {

  @Input() data
  @Input() title

  constructor() { }

  ngOnInit(): void {
  }

}
