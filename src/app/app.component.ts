import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wrench';
  customerDetails: FormGroup;
  vehicleDetails: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.customerDetails = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      creditCard: ['', Validators.required]
    });
    this.vehicleDetails = this.formBuilder.group({
      carMake: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      mileage: ['', Validators.required],
    });
  }

  get customer() { return this.customerDetails.controls; }
  get vehicle() { return this.vehicleDetails.controls; }
}
