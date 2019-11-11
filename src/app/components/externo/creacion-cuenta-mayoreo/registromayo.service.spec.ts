import { TestBed } from '@angular/core/testing';

import { RegistromayoService } from './registromayo.service';

describe('RegistromayoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistromayoService = TestBed.get(RegistromayoService);
    expect(service).toBeTruthy();
  });
});
