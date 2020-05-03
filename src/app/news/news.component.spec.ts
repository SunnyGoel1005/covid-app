import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';
import { NewsService } from '../services/news.service';
import { HttpClientModule } from '@angular/common/http';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent ],
      imports : [HttpClientModule],
      providers: [NewsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check Component ',() => {
    expect(component).toBeTruthy;
  });      

  it('should check News List not to be empty ',() => {
    expect(component.getNews).not.toBe(null);
  });

  it('should check News heading ',() => {
    expect(component.heading).not.toBe('Latest News');
  });

});
