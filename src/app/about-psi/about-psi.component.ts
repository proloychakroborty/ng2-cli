import { Component, OnInit } from '@angular/core';
import { BookingService } from '../shared/services/booking.service';
import * as model from "../shared/model/model";

@Component({
  selector: 'app-about-psi',
  templateUrl: './about-psi.component.html',
  styleUrls: ['./about-psi.component.css']
})
export class AboutPsiComponent implements OnInit {

  data: model.BookingRequest;
  tests:model.BookingResponse;

  constructor(private bookingService: BookingService) {

   }

  ngOnInit() {
    this.data = {
      applicationId: '2323',
      clientId: 'abc1234',
      candidateDetails: {},
      eligibilityStartDate: '02-12-2016',
      eligibilityEndDate: '10-12-2016',
      testId: 'testid1',
      testPortions: []
    };
  }

  createBooking(){
    this.bookingService.createBooking('psiuniqueid1234', this.data, 'Sunil').subscribe(
      (data) => this.tests = data
    );
  }

}
