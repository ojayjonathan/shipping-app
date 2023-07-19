import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  shipmentForm!: FormGroup;
  rates: any[] = [];
  isLoading = false;

  constructor(private formBuilder: FormBuilder) {
    this.shipmentForm = this.formBuilder.group({
      // From Address
      fromAddress: this.formBuilder.group({
        country: ['US', Validators.required],
        city: ['San Francisco', Validators.required],
        state: ['CA', Validators.required],
        zip: ['94104', Validators.required],
        street1: ['417 Montgomery St', Validators.required],
        street2: ['Floor 5'],
        name: ['Hiro Protagonist'],
        phone: ['415-123-4567', Validators.required],
        email: ['example@example.com'],
      }),

      // To Address
      toAddress: this.formBuilder.group({
        country: ['US', Validators.required],
        city: ['New York', Validators.required],
        state: ['NY', Validators.required],
        zip: ['10001', Validators.required],
        street1: ['123 Broadway', Validators.required],
        name: ['John Doe'],
        phone: ['212-555-7890', Validators.required],
      }),

      // Parcel
      parcel: this.formBuilder.group({
        length: [null, Validators.required],
        width: [null, Validators.required],
        height: [null, Validators.required],
        weight: [null, Validators.required],
      }),
    });
  }
  get toAddress(): FormGroup {
    return this.shipmentForm.get('toAddress') as FormGroup;
  }
  get fromAddress(): FormGroup {
    return this.shipmentForm.get('fromAddress') as FormGroup;
  }
  get parcel(): FormGroup {
    return this.shipmentForm.get('parcel') as FormGroup;
  }
  async handleSubmit() {
    if (this.shipmentForm.invalid) {
      return;
    }

    this.isLoading = true;
    const data = this.shipmentForm.value;

    try {
      const response = await fetch('http://127.0.0.1:5000/shipment_price', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log(responseData);
      this.rates = responseData;
      this.scrollToBottom();
    } catch (error: any) {
      console.error('Error:', error);
      window.alert(error.error);
    } finally {
      this.isLoading = false;
    }
  }

  scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
