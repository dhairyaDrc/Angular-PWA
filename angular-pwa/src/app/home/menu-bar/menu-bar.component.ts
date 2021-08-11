import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // document.getElementById("social-share").addEventListener("click", this.share);
  }

  // hasClass(ele, cls) {
  //   return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  // }

  // addClass(ele, cls) {
  //   if (!this.hasClass(ele, cls)) ele.className += " " + cls;
  // }

  // removeClass(ele, cls) {
  //   if (this.hasClass(ele, cls)) {
  //     var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
  //     ele.className = ele.className.replace(reg, ' ');
  //   }
  // }

  // share() {
  //   var ele = document.getElementsByTagName('body')[0];
  //   if (!hasClass(ele, "social-open")) {
  //     addClass(ele, "social-open");
  //   } else {
  //     removeClass(ele, "social-open");
  //   }
  // }

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
