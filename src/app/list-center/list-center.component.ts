import { Component, OnInit } from '@angular/core';
import { Logger } from 'angular2-log4ts/src/app/core';

import { TestCenterService } from '../test-center.service';

@Component({
  templateUrl: './list-center.component.html',
  styleUrls: ['./list-center.component.css'],
  providers: [TestCenterService]
})
export class ListCenterComponent implements OnInit {
  tests = [];
  testCentersData = [];
  centerConfig = {
    itemStart: 0,
    itemSize: 2
  };
  ngbPaginationConfig = {
    totalItems: 0,
    itemsPerPage: 2,
    page: 1,
    previousPage: 1
  }
  searchObj = {
    testId: ""
  };

  constructor(private testCenterService: TestCenterService, private logger: Logger) { }

  searchSuccess(data) {
    this.testCentersData = data;
    this.ngbPaginationConfig.totalItems = this.testCentersData.length;
  }

  search(newValue) {
    this.searchObj.testId = newValue;
    this.testCenterService.searchCenter().subscribe(
      (data) => this.searchSuccess(data)
    );
    this.logger.info('TestID', newValue);
  }

  onPageChage(newPage) {
    if(newPage > this.ngbPaginationConfig.previousPage) {

      this.centerConfig.itemStart += this.ngbPaginationConfig.itemsPerPage;
      this.centerConfig.itemSize += this.ngbPaginationConfig.itemsPerPage;

    } else if (newPage < this.ngbPaginationConfig.previousPage) {

      this.centerConfig.itemStart -= this.ngbPaginationConfig.itemsPerPage;
      this.centerConfig.itemSize -= this.ngbPaginationConfig.itemsPerPage;

    }

    this.ngbPaginationConfig.previousPage = newPage;
  }

  ngOnInit() {
    this.testCenterService.getTestIds().subscribe(
      (data) => this.tests = data
    );
  }

}
