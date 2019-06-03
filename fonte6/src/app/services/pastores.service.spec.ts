import { TestBed } from '@angular/core/testing';

import { PastoresService } from './pastores.service';

describe('PastoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PastoresService = TestBed.get(PastoresService);
    expect(service).toBeTruthy();
  });
});
