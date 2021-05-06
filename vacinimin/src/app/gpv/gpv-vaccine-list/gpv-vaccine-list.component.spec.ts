import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpvVaccineListComponent } from './gpv-vaccine-list.component';

describe('GpvVaccineListComponent', () => {
  let component: GpvVaccineListComponent;
  let fixture: ComponentFixture<GpvVaccineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpvVaccineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpvVaccineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
