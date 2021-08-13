import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthEastAsiaComponent } from './south-east-asia.component';

describe('SouthEastAsiaComponent', () => {
  let component: SouthEastAsiaComponent;
  let fixture: ComponentFixture<SouthEastAsiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthEastAsiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthEastAsiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
