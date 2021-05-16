import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleSlotComponent } from './controle-slot.component';

describe('ControleSlotComponent', () => {
  let component: ControleSlotComponent;
  let fixture: ComponentFixture<ControleSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControleSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
