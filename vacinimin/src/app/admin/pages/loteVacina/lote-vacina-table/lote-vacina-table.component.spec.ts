import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteVacinaTableComponent } from './lote-vacina-table.component';

describe('LoteVacinaTableComponent', () => {
  let component: LoteVacinaTableComponent;
  let fixture: ComponentFixture<LoteVacinaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoteVacinaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteVacinaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
