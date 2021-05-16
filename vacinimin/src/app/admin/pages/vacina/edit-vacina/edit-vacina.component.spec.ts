import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVacinaComponent } from './edit-vacina.component';

describe('EditVacinaComponent', () => {
  let component: EditVacinaComponent;
  let fixture: ComponentFixture<EditVacinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVacinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVacinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
