import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegistroVacinacaoComponent } from './create-registro-vacinacao.component';

describe('CreateRegistroVacinacaoComponent', () => {
  let component: CreateRegistroVacinacaoComponent;
  let fixture: ComponentFixture<CreateRegistroVacinacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRegistroVacinacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRegistroVacinacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
