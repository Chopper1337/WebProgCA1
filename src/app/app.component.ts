import { Component } from '@angular/core';
import { article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles:article[];

  constructor(){
    this.articles=[
      new article('Angular', 'https://angular.io', 5),
      new article('Google', 'https://google.ie', 5),
      new article('TikTok', 'https://tiktok.com', 5)
    ];
  }
  addArticle(title:HTMLInputElement, link:HTMLInputElement):Boolean{
    this.articles.push(new article(title.value, link.value, 0))
    title.value=""
    link.value=""
    console.log(`${title.value} ${link.value}`)
    return false;
  }
}
