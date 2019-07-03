import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PflexDemoComponent } from './pflex-demo.component';

describe('PflexDemoComponent', () => {
  let component: PflexDemoComponent;
  let fixture: ComponentFixture<PflexDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PflexDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PflexDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
