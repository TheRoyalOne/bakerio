import { TestBed } from '@angular/core/testing';

import { PreparadosService } from './preparados.service';

describe('PreparadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
//a
  it('should be created', () => {
    const service: PreparadosService = TestBed.get(PreparadosService);
    expect(service).toBeTruthy();
  });
});
