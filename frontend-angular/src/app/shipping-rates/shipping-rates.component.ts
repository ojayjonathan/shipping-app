import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shipping-rates',
  templateUrl: './shipping-rates.component.html',
  styleUrls: ['./shipping-rates.component.css'],
})
export class ShippingRatesComponent {
  @Input() rates: any;
}
