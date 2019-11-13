import { TestBed } from '@angular/core/testing';

import { RegistronService } from './registron.service';

describe('RegistronService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistronService = TestBed.get(RegistronService);
    expect(service).toBeTruthy();
  });
});
