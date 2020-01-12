import { TestBed } from '@angular/core/testing';

import { ServicesGeralService } from './services-geral.service';

describe('ServicesGeralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesGeralService = TestBed.get(ServicesGeralService);
    expect(service).toBeTruthy();
  });
});
