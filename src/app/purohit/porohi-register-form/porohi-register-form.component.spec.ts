import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorohiRegisterFormComponent } from './porohi-register-form.component';

describe('PorohiRegisterFormComponent', () => {
  let component: PorohiRegisterFormComponent;
  let fixture: ComponentFixture<PorohiRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorohiRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorohiRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
