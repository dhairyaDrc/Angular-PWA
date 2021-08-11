import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanableContent2Component } from './expanable-content2.component';

describe('ExpanableContent2Component', () => {
  let component: ExpanableContent2Component;
  let fixture: ComponentFixture<ExpanableContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpanableContent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpanableContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
