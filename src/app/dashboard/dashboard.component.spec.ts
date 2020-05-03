import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { DashBoardService } from '../services/dashboard.service';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports : [HttpClientModule],
      providers: [DashBoardService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should check Component ',() => {
    expect(component).toBeTruthy;
  });
      
  it('should check Covid data not to be null ',() => {
    expect(component.getCovidData).not.toBe(undefined);
  });

  it('should check variables have some value ',() => {
    expect(component.deaths).toBe(undefined);
  });
});
