import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLoteComponent } from './edit-lote.component';

describe('EditLoteComponent', () => {
  let component: EditLoteComponent;
  let fixture: ComponentFixture<EditLoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
