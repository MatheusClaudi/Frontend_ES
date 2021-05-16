import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostoVacinacaoTableComponent } from './posto-vacinacao-table.component';

describe('PostoVacinacaoTableComponent', () => {
  let component: PostoVacinacaoTableComponent;
  let fixture: ComponentFixture<PostoVacinacaoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostoVacinacaoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostoVacinacaoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
