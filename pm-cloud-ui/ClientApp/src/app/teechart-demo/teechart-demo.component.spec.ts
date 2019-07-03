import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeechartDemoComponent } from './teechart-demo.component';

describe('TeechartDemoComponent', () => {
  let component: TeechartDemoComponent;
  let fixture: ComponentFixture<TeechartDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeechartDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeechartDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
