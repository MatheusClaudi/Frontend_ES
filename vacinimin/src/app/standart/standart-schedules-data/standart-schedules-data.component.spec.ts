import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandartSchedulesDataComponent } from './standart-schedules-data.component';

describe('StandartSchedulesDataComponent', () => {
  let component: StandartSchedulesDataComponent;
  let fixture: ComponentFixture<StandartSchedulesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandartSchedulesDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandartSchedulesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
