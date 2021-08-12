import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralWestAsiaComponent } from './central-west-asia.component';

describe('CentralWestAsiaComponent', () => {
  let component: CentralWestAsiaComponent;
  let fixture: ComponentFixture<CentralWestAsiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralWestAsiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralWestAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
