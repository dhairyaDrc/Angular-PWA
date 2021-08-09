import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() image;
  constructor() { }

  ngOnInit(): void {
    console.log(">>>>>",this.image)
  }

}
