import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxDataGridComponent } from './dx-data-grid.component';

describe('DxDataGridComponent', () => {
  let component: DxDataGridComponent;
  let fixture: ComponentFixture<DxDataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxDataGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
