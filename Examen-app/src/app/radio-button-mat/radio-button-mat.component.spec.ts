import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonMatComponent } from './radio-button-mat.component';

describe('RadioButtonMatComponent', () => {
  let component: RadioButtonMatComponent;
  let fixture: ComponentFixture<RadioButtonMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
