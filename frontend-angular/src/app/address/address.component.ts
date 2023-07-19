import { Component, Input } from '@angular/core';
import countriesData from './countries';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent {
  @Input() addressComponents!: FormGroup;
  countries: { name: string; code: string }[];
  constructor() {
    this.countries = [];
    
    Object.keys(countriesData).map((k) =>
      this.countries.push({
        name: (countriesData as any)[k] as any,
        code: k,
      })
    );
  }

  getValue(field: any): any {
    return (this.addressComponents.value as any)[field] ?? '';
  }
  handleChange(event: any, key: string) {
    this.addressComponents.get(key)?.patchValue(event.target.value);
  }
  getHelperText(field: string): string {
    switch (field) {
      case 'country':
        return 'ISO 3166 country code (e.g., US, CA, GB)';
      case 'city':
        return 'Full city name (e.g., San Francisco)';
      case 'state':
        return 'State or province (e.g., CA, NY, ON)';
      case 'zip':
        return 'ZIP or postal code (e.g., 94104)';
      case 'street1':
        return 'First line of the address (e.g., 417 Montgomery Street)';
      case 'street2':
        return 'Second line of the address (e.g., Floor 5)';
      case 'name':
        return 'Name of attention, if person (e.g., Hiro Protagonist)';
      case 'phone':
        return 'Phone number to reach the person or organization (e.g., 415-123-4567)';
      case 'email':
        return 'Email to reach the person or organization (e.g., example@example.com)';
      default:
        return '';
    }
  }
}
