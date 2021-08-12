import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import homeJsonData from "src/app/constants/home.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeData: any;
  constructor(
    private router:Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.homeData = homeJsonData;
    console.log("this.homeJsonData ",homeJsonData)
  }

  goToReport(id:number){
    // if(this.homeData){}
    this.router.navigate(['/report'], { queryParams: { id: id } });
  }
  

  goToFinancialHighlights(){
    this.router.navigate(['/financial-highlights'])
  }

  goToSideMenu(id: number){
    this.route.queryParams
      .subscribe(params => {
        console.log(params.id);

        if(id == 1){
          console.log("id = 1");
        } else if(id == 2){
          console.log("id = 2");          
        } else if (id == 3){
          this.router.navigate(['/financial-highlights']);
        }
      }
    )
  }

}
