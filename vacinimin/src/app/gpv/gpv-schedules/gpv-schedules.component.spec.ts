import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpvSchedulesComponent } from './gpv-schedules.component';

describe('GpvSchedulesComponent', () => {
  let component: GpvSchedulesComponent;
  let fixture: ComponentFixture<GpvSchedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpvSchedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpvSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
