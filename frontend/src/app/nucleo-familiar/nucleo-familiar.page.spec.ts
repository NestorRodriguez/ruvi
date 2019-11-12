import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NucleoFamiliarPage } from './nucleo-familiar.page';

describe('NucleoFamiliarPage', () => {
  let component: NucleoFamiliarPage;
  let fixture: ComponentFixture<NucleoFamiliarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NucleoFamiliarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NucleoFamiliarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
