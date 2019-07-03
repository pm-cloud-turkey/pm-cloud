import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhtmlxDemoComponent } from './dhtmlx-demo.component';

describe('DhtmlxDemoComponent', () => {
  let component: DhtmlxDemoComponent;
  let fixture: ComponentFixture<DhtmlxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhtmlxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhtmlxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
