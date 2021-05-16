import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVacinaComponent } from './create-vacina.component';

describe('CreateVacinaComponent', () => {
  let component: CreateVacinaComponent;
  let fixture: ComponentFixture<CreateVacinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVacinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVacinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
