import { TestBed } from '@angular/core/testing';

import { ScreenDimensionService } from './screen-dimension.service';

describe('ScreenDimensionService', () => {
  let service: ScreenDimensionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenDimensionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
