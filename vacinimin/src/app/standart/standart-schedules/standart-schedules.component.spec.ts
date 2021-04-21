import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandartSchedulesComponent } from './standart-schedules.component';

describe('StandartSchedulesComponent', () => {
  let component: StandartSchedulesComponent;
  let fixture: ComponentFixture<StandartSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandartSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandartSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
