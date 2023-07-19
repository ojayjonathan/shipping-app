import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelComponent } from './parcel.component';

describe('ParcelComponent', () => {
  let component: ParcelComponent;
  let fixture: ComponentFixture<ParcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParcelComponent]
    });
    fixture = TestBed.createComponent(ParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
