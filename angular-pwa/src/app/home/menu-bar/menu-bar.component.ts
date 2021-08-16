import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  closePrompt(){}

  openSocialMenu(){
    var ele = document.getElementById('social-pop');
    console.log("ele >>>> ",ele);
    
    if(ele.style.display === "none"){
      ele.style.display = "block";
    console.log("none");
        }
  }

}
