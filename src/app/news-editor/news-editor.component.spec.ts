import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEditorComponent } from './news-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsService } from '../services/news.service';
import { HttpClientModule } from '@angular/common/http';

describe('NewsEditorComponent', () => {
  let component: NewsEditorComponent;
  let fixture: ComponentFixture<NewsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsEditorComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers : [NewsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  });

  it('should check Component ',() => {
    expect(component).toBeTruthy;
  });

  it('should not show the add news success message',() => {
    expect(component.addNewsSuccess).not.toBe(true);
  });

});
