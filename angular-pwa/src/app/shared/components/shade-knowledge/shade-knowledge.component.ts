import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shade-knowledge',
  templateUrl: './shade-knowledge.component.html',
  styleUrls: ['./shade-knowledge.component.css']
})
export class ShadeKnowledgeComponent implements OnInit {

  @Input()  data;
  @Input()  title;
  @Input() image;

  constructor() { }

  ngOnInit(): void {
  }

}
