import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthAsiaComponent } from './south-asia.component';

describe('SouthAsiaComponent', () => {
  let component: SouthAsiaComponent;
  let fixture: ComponentFixture<SouthAsiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthAsiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
