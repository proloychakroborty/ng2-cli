import { Component, OnInit } from '@angular/core';
import { BookingService } from '../shared/services/booking.service';
import * as model from "../shared/model/model.d";

@Component({
  selector: 'app-about-psi',
  templateUrl: './about-psi.component.html',
  styleUrls: ['./about-psi.component.css']
})
export class AboutPsiComponent implements OnInit {

  data: model.BookingRequest;
  tests:any;

  constructor(private bookingService: BookingService) {

   }

  ngOnInit() {
    this.data = {};
  }

  createBooking(){
    this.bookingService.createBooking('psiuniqueid1234', this.data, 'Sunil').subscribe(
      (data) => this.tests = data
    );
  }

}
