/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DxDemoComponent } from './dx-demo.component';

describe('DxDemoComponent', () => {
  let component: DxDemoComponent;
  let fixture: ComponentFixture<DxDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
