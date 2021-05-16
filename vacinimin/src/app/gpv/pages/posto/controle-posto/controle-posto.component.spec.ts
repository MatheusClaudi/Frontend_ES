import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlePostoComponent } from './controle-posto.component';

describe('ControlePostoComponent', () => {
  let component: ControlePostoComponent;
  let fixture: ComponentFixture<ControlePostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlePostoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlePostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
