import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpvComponent } from './gpv.component';

describe('GpvComponent', () => {
  let component: GpvComponent;
  let fixture: ComponentFixture<GpvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
