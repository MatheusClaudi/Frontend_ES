import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoteComponent } from './create-lote.component';

describe('CreateLoteComponent', () => {
  let component: CreateLoteComponent;
  let fixture: ComponentFixture<CreateLoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
