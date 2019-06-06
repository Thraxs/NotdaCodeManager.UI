import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedalCalculatorComponent } from './medal-calculator.component';

describe('MedalCalculatorComponent', () => {
  let component: MedalCalculatorComponent;
  let fixture: ComponentFixture<MedalCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedalCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedalCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
