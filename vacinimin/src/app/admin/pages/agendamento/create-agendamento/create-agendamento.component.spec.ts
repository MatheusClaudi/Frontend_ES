import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgendamentoComponent } from './create-agendamento.component';

describe('CreateAgendamentoComponent', () => {
  let component: CreateAgendamentoComponent;
  let fixture: ComponentFixture<CreateAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAgendamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
