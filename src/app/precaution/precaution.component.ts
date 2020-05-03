import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Precaution } from '../model/Precaution';

@Component({
  selector: 'app-precaution',
  templateUrl: './precaution.component.html',
  styleUrls: ['./precaution.component.css']
})
export class PrecautionComponent implements OnInit {

  precautionList : Precaution[];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getPrecautions();
  }

  getPrecautions(){
    this.newsService.getPrecautions().subscribe(precautionList => this.precautionList = precautionList)
  }
}
