import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pwa';

  data;

  constructor(private http: HttpClient){
  }
  
  ngOnInit(){
    this.data = this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data => {
      console.log("api data : ",data);
    });
  }
}
