import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../model/News';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  heading : "Latest News";
  newsList : News[];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews(){
    this.newsService.getNews().subscribe( newsList => {
      this.newsList = newsList;
    });
  }
}
