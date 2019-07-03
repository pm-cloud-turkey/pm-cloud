import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartsGanttComponent } from './highcharts-gantt.component';

describe('HighchartsGanttComponent', () => {
  let component: HighchartsGanttComponent;
  let fixture: ComponentFixture<HighchartsGanttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartsGanttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartsGanttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
