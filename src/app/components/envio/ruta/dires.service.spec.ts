import { TestBed } from '@angular/core/testing';

import { DiresService } from './dires.service';

describe('DiresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiresService = TestBed.get(DiresService);
    expect(service).toBeTruthy();
  });
});
