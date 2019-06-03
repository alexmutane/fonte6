import { TestBed } from '@angular/core/testing';

import { PregacoesService } from './pregacoes.service';

describe('PregacoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PregacoesService = TestBed.get(PregacoesService);
    expect(service).toBeTruthy();
  });
});
