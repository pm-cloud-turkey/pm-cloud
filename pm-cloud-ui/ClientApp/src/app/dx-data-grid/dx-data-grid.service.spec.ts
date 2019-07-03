import { TestBed } from '@angular/core/testing';

import { DxDataGridService } from './dx-data-grid.service';

describe('DxDataGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DxDataGridService = TestBed.get(DxDataGridService);
    expect(service).toBeTruthy();
  });
});
