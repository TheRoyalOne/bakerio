import { TestBed } from '@angular/core/testing';

import { Registrom2Service } from './registrom2.service';

describe('Registrom2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Registrom2Service = TestBed.get(Registrom2Service);
    expect(service).toBeTruthy();
  });
});
