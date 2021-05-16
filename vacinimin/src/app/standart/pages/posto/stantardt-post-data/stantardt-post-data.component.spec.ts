import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StantardtPostDataComponent } from './stantardt-post-data.component';

describe('StantardtPostDataComponent', () => {
  let component: StantardtPostDataComponent;
  let fixture: ComponentFixture<StantardtPostDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StantardtPostDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StantardtPostDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
