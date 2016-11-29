import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class TestCenterService {

  constructor(private http: Http) { }

  searchCenter() {
    return this.http.get('/assets/data/test.centers.json').map(
      (res) => res.json()
    );
  }

  getTestIds() {
    return this.http.get('/assets/data/test.ids.json').map(
      (res) => res.json()
    );
  }
}
