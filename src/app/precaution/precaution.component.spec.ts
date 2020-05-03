import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecautionComponent } from './precaution.component';
import { NewsService } from '../services/news.service';
import { HttpClientModule } from '@angular/common/http';
import { empty } from 'rxjs';

describe('PrecautionComponent', () => {
  let component: PrecautionComponent;
  let fixture: ComponentFixture<PrecautionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecautionComponent ],
      imports: [
        HttpClientModule
      ],
      providers : [NewsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check Component ',() => {
    expect(component).toBeTruthy;
  });

  it('should check precaution liest not to be Empty',() => {
    expect(component.getPrecautions).not.toBe(empty);
  });
});
