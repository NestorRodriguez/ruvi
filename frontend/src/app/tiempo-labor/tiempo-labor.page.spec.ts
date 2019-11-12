import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoLaborPage } from './tiempo-labor.page';

describe('TiempoLaborPage', () => {
  let component: TiempoLaborPage;
  let fixture: ComponentFixture<TiempoLaborPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiempoLaborPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiempoLaborPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
