import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from 'ng2-formly';

import { Logger } from 'angular2-log4ts/src/app/core';
import { RegisterFromService } from '../shared/services/register-form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  template: `
    <form class="formly" role="form" novalidate [formGroup]="form" (ngSubmit)="submit(user)">
        <formly-form [model]="user" [fields]="fields">
            <button type="submit" class="btn btn-default">Register</button>
        </formly-form>
    </form>
  `, 

  styleUrls: ['./register.component.css'],
  providers: [RegisterFromService]
})


export class RegisterComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  fields:FormlyFieldConfig= [];
  user = {
    email: 'email@gmail.com',
    password: 0
  };
 
  submit(user) {
    console.log(user);
  }

    constructor(private registerFormService: RegisterFromService, private logger: Logger) { }

   ngOnInit() {
    this.registerFormService.getFormIds().subscribe(
      (data) => this.fields = data
    );
    this.logger.info(this.fields);
  }

}

