import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { NewsService } from '../services/news.service';
import { News } from '../model/News';

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class NewsEditorComponent implements OnInit {

  public addNewsSuccess : boolean = false;
  newsForm: FormGroup;
  submitted = false;

  constructor(private newsService : NewsService) { }

  ngOnInit() {
    this.newsForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      summary: new FormControl(''),
      message: new FormControl('', [Validators.required])
    });
  }

  get f() { return this.newsForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.newsForm.invalid) {
        return;
    }

    this.newsService.getNews().subscribe( newsList => { 
      this.newsService.addNews(new News(this.newsForm.value.title, this.newsForm.value.description,
      this.newsForm.value.summary, this.newsForm.value.message ), newsList)
      .subscribe(a => {
        this.newsForm.reset();
        this.submitted = false;
        this.showNewsSuccessMessage();
      });
    });   
    
  }

  showNewsSuccessMessage() {
    this.addNewsSuccess = true
    window.scroll(0,0);
    setTimeout(() => {
      this.addNewsSuccess = false;
    }, 3000)
  }
}
