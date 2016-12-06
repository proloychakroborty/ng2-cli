import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Logger } from 'angular2-log4ts/src/app/core';
import 'rxjs/Rx'

@Injectable()
export class RegisterFromService {

  constructor(private http: Http) {}

  getFormIds() {

   return this.http.get('/assets/data/form.ids.json').map(
      (res) => res.json()
    );
  }
}