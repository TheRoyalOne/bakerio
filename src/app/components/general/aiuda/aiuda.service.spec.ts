import { TestBed } from '@angular/core/testing';

import { AiudaService } from './aiuda.service';

describe('AiudaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AiudaService = TestBed.get(AiudaService);
    expect(service).toBeTruthy();
  });
});
