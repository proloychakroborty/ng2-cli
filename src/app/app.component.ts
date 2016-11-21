import { Component, OnInit } from '@angular/core';
import { TestCenterService } from './test-center.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestCenterService]
})
export class AppComponent implements OnInit {
  testCentersData = [];
  tests = []
  currentDate = new Date();
  money = "500";
  totalItems: number = 0;
  itemsPerPage: number = 2;
  currentPage: number = 0;
  page = 1;
  searchObj = {
    testId: undefined
  };

  constructor(private testCenterService: TestCenterService) {}

  searchSuccess(data) {
    this.testCentersData = data;
    this.totalItems = this.testCentersData.length;
  }

  search(newValue) {
    this.searchObj.testId = newValue;
    this.testCenterService.searchCenter().subscribe(
      (data) => this.searchSuccess(data)
    );
  }

  onPageChage(newPage) {
    console.log(newPage);
  }

  ngOnInit() {
    this.testCenterService.getTestIds().subscribe(
      (data) => this.tests = data
    );
  }
}
