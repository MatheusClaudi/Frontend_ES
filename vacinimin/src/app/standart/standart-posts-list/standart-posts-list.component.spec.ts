import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StandartPostListsComponent } from './standart-posts-list.component';


describe('StandartComponent', () => {
  let component: StandartPostListsComponent;
  let fixture: ComponentFixture<StandartPostListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandartPostListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandartPostListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
