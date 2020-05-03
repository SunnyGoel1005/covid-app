import { Injectable } from '@angular/core';
import { News } from '../model/News';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Precaution } from '../model/Precaution';

@Injectable()
export class NewsService{

  private baseUrl = 'https://my-covid-ap.herokuapp.com';
  private newsUrl = '/news';  
  private precautionUrl = '/precautions'

  newsList : News[];

  constructor( private http: HttpClient) { }

  ngOnInit() {
  }

  getNews(){
    return this.http.get<News[]>(this.baseUrl + this.newsUrl);
  }

  addNews(news:News, newsList : News[]){
    news.id = this.newsIdGenerator(newsList.length)
    return this.http.post(this.baseUrl + this.newsUrl, news , {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Method' : 'POST'
      })
    });
  }

  newsIdGenerator(id : number){
    return id + 1;
  }

  getPrecautions(){
    return this.http.get<Precaution[]>(this.baseUrl + this.precautionUrl);
  }
}