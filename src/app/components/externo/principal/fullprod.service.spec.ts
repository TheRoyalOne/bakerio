import { TestBed } from '@angular/core/testing';

import { FullprodService } from './fullprod.service';

describe('FullprodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FullprodService = TestBed.get(FullprodService);
    expect(service).toBeTruthy();
  });
});
