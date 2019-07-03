import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalRDemoComponent } from './signalrdemo.component';

describe('SignalRDemoComponent', () => {
  let component: SignalRDemoComponent;
  let fixture: ComponentFixture<SignalRDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalRDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalRDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
