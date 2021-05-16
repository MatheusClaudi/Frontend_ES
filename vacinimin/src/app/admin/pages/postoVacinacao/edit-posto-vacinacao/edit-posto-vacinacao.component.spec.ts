import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostoVacinacaoComponent } from './edit-posto-vacinacao.component';

describe('EditPostoVacinacaoComponent', () => {
  let component: EditPostoVacinacaoComponent;
  let fixture: ComponentFixture<EditPostoVacinacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPostoVacinacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostoVacinacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
