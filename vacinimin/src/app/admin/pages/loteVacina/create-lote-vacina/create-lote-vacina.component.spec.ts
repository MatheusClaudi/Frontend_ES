import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoteVacinaComponent } from './create-lote-vacina.component';

describe('CreateLoteVacinaComponent', () => {
  let component: CreateLoteVacinaComponent;
  let fixture: ComponentFixture<CreateLoteVacinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLoteVacinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLoteVacinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
