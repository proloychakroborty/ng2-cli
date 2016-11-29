import { Component, OnInit } from '@angular/core';
import { Logger } from 'angular2-log4ts/src/app/core';

import { TestCenterService } from '../shared/services/test-center.service';

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
    currentPage: 1,
    previousPage: 1
  }
  searchObj = {
    testId: ""
  };

  constructor(private testCenterService: TestCenterService, private logger: Logger) { }

  search(newValue) {
    this.searchObj.testId = newValue;
    this.testCenterService.searchCenter().subscribe(
      (data) => {
        this.testCentersData = data;
        this.ngbPaginationConfig.totalItems = this.testCentersData.length;
        this.logger.info("ngbPaginationConfig", this.ngbPaginationConfig);
      }
    );
    this.logger.info('TestID', newValue);
  }

  onPageChage(e) {
    if(e.page > this.ngbPaginationConfig.previousPage) {

      this.centerConfig.itemStart += e.itemsPerPage;
      this.centerConfig.itemSize += e.itemsPerPage;

    } else if (e.page < this.ngbPaginationConfig.previousPage) {

      this.centerConfig.itemStart -= e.itemsPerPage;
      this.centerConfig.itemSize -= e.itemsPerPage;

    }

    this.ngbPaginationConfig.previousPage = e.page;
  }

  ngOnInit() {
    this.testCenterService.getTestIds().subscribe(
      (data) => this.tests = data
    );
  }

}
