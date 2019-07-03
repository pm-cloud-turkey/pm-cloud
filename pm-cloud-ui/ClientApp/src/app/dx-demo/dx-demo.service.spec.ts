/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DxDemoService } from './dx-demo.service';

describe('Service: DxDemo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DxDemoService]
    });
  });

  it('should ...', inject([DxDemoService], (service: DxDemoService) => {
    expect(service).toBeTruthy();
  }));
});
