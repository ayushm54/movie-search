import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-search-app';
  keyword = "";
  send(keyword: any){
    this.keyword = keyword;
  }
}
