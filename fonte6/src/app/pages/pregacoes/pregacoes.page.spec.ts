import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregacoesPage } from './pregacoes.page';

describe('PregacoesPage', () => {
  let component: PregacoesPage;
  let fixture: ComponentFixture<PregacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregacoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
