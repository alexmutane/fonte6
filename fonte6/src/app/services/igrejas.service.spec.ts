import { TestBed } from '@angular/core/testing';

import { IgrejasService } from './igrejas.service';

describe('IgrejasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IgrejasService = TestBed.get(IgrejasService);
    expect(service).toBeTruthy();
  });
});
