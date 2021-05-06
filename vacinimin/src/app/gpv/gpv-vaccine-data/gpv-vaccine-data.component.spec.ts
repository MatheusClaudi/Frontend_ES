import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpvVaccineDataComponent } from './gpv-vaccine-data.component';

describe('GpvVaccineDataComponent', () => {
  let component: GpvVaccineDataComponent;
  let fixture: ComponentFixture<GpvVaccineDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpvVaccineDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpvVaccineDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
