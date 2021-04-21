import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandartScedulesDataComponent } from './standart-scedules-data.component';

describe('StandartScedulesDataComponent', () => {
  let component: StandartScedulesDataComponent;
  let fixture: ComponentFixture<StandartScedulesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandartScedulesDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandartScedulesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
