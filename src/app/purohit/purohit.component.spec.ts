import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurohitComponent } from './purohit.component';

describe('PurohitComponent', () => {
  let component: PurohitComponent;
  let fixture: ComponentFixture<PurohitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurohitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurohitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
