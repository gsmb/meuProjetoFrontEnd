import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoalControllerComponent } from './pessoal-controller.component';

describe('PessoalControllerComponent', () => {
  let component: PessoalControllerComponent;
  let fixture: ComponentFixture<PessoalControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoalControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoalControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
