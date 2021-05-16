import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotContentComponent } from './slot-content.component';

describe('SlotContentComponent', () => {
  let component: SlotContentComponent;
  let fixture: ComponentFixture<SlotContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
