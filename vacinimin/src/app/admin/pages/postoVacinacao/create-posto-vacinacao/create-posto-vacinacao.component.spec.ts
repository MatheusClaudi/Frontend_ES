import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostoVacinacaoComponent } from './create-posto-vacinacao.component';

describe('CreatePostoVacinacaoComponent', () => {
  let component: CreatePostoVacinacaoComponent;
  let fixture: ComponentFixture<CreatePostoVacinacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostoVacinacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostoVacinacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
