import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoTableComponent } from './agendamento-table.component';

describe('AgendamentoTableComponent', () => {
  let component: AgendamentoTableComponent;
  let fixture: ComponentFixture<AgendamentoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendamentoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
