import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelesEducacionPage } from './niveles-educacion.page';

describe('NivelesEducacionPage', () => {
  let component: NivelesEducacionPage;
  let fixture: ComponentFixture<NivelesEducacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NivelesEducacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelesEducacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
