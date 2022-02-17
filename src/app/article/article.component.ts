import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  votes:number;
  title:string;
  link:string;

  constructor() {
    this.title="Angular";
    this.link="https://angular.ioo"
      this.votes=10;
  }
  
  ngOnInit(): void {
  }

  voteUp():Boolean {
    this.votes ++;  
    return false;
  }

  voteDown():Boolean {
    this.votes --;  
    return false;
  }
}
