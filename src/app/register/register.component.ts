import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from 'ng2-formly';

@Component({
  selector: 'app-register',
  // templateUrl: './register.component.html',
  template: `
    <form class="formly" role="form" novalidate [formGroup]="form" (ngSubmit)="submit(user)">
        <formly-form [model]="user" [fields]="userFields">
            <button type="submit" class="btn btn-default">Button</button>
        </formly-form>
    </form>
  `, 
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  form: FormGroup = new FormGroup({});
  userFields: FormlyFieldConfig = [{
    className: 'row',
    fieldGroup: [{
        className: 'col-xs-6',
        key: 'email',
        type: 'input',
        templateOptions: {
            type: 'email',
            label: 'Email address',
            placeholder: 'Enter email'
        },
        validators: {
          validation: Validators.compose([Validators.required])
        }
    }, {
        className: 'col-xs-6',
        key: 'password',
        type: 'input',
        templateOptions: {
            type: 'password',
            label: 'Password',
            placeholder: 'Password',
            pattern: ''
        },
        validators: {
          validation: Validators.compose([Validators.required])
        }
    }]
  }];
 
  user = {
    email: 'email@gmail.com',
    checked: false
  };
 
  submit(user) {
    console.log(user);
  }
}

