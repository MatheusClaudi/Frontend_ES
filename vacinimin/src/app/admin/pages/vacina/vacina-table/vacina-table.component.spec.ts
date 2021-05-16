import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacinaTableComponent } from './vacina-table.component';

describe('VacinaTableComponent', () => {
  let component: VacinaTableComponent;
  let fixture: ComponentFixture<VacinaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacinaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacinaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
