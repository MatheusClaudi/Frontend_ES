import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLoteVacinaComponent } from './edit-lote-vacina.component';

describe('EditLoteVacinaComponent', () => {
  let component: EditLoteVacinaComponent;
  let fixture: ComponentFixture<EditLoteVacinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLoteVacinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLoteVacinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
