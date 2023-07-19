import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingRatesComponent } from './shipping-rates.component';

describe('ShippingRatesComponent', () => {
  let component: ShippingRatesComponent;
  let fixture: ComponentFixture<ShippingRatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingRatesComponent]
    });
    fixture = TestBed.createComponent(ShippingRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
