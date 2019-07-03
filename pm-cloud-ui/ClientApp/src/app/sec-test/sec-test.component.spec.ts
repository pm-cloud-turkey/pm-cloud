import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecTestComponent } from './sec-test.component';

describe('SecTestComponent', () => {
  let component: SecTestComponent;
  let fixture: ComponentFixture<SecTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
