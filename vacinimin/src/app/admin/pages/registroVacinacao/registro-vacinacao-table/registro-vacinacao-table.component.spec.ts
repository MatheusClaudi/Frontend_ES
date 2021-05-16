import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVacinacaoTableComponent } from './registro-vacinacao-table.component';

describe('RegistroVacinacaoTableComponent', () => {
  let component: RegistroVacinacaoTableComponent;
  let fixture: ComponentFixture<RegistroVacinacaoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVacinacaoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVacinacaoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
