import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegistroVacinacaoComponent } from './edit-registro-vacinacao.component';

describe('EditRegistroVacinacaoComponent', () => {
  let component: EditRegistroVacinacaoComponent;
  let fixture: ComponentFixture<EditRegistroVacinacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRegistroVacinacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRegistroVacinacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
