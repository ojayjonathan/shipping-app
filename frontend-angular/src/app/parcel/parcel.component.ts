import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parcel',
  templateUrl: './parcel.component.html',
  styleUrls: ['./parcel.component.css'],
})
export class ParcelComponent {
  @Input() parcel!: FormGroup;
  handleChange(field: string, event: any) {
    this.parcel.get(field)?.patchValue(event.target.value);
  }
}
