import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpvSchedulesDataComponent } from './gpv-schedules-data.component';

describe('GpvSchedulesDataComponent', () => {
  let component: GpvSchedulesDataComponent;
  let fixture: ComponentFixture<GpvSchedulesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpvSchedulesDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpvSchedulesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
