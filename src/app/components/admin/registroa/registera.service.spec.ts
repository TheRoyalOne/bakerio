import { TestBed } from '@angular/core/testing';

import { RegisteraService } from './registera.service';

describe('RegisteraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisteraService = TestBed.get(RegisteraService);
    expect(service).toBeTruthy();
  });
});
