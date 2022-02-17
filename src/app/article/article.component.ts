import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  article:article;

  constructor() {
    this.article=new article("Angular", "https://angular.io", 5);
  }
  
  ngOnInit(): void {
  }

  voteUp():Boolean {
    this.article.voteUp();
    return false;
  }

  voteDown():Boolean {
    this.article.voteDown();
    return false;
  }
}
