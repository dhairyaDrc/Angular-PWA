import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shade-knowledge-two',
  templateUrl: './shade-knowledge-two.component.html',
  styleUrls: ['./shade-knowledge-two.component.css']
})
export class ShadeKnowledgeTwoComponent implements OnInit {

  constructor() { }
  @Input() title;
  @Input() data;
  @Input() image;
  ngOnInit(): void {
  }

}
