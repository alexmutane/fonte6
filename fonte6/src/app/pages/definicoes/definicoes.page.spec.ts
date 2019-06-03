import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinicoesPage } from './definicoes.page';

describe('DefinicoesPage', () => {
  let component: DefinicoesPage;
  let fixture: ComponentFixture<DefinicoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinicoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinicoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
