import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-content',
  templateUrl: 'login-form.html',
  styleUrls: ['./login.component.css']
})

export class AppLoginContent {
  
   password: string;
   submitted:boolean = false;

   model = {};

  onSubmit(activeModal) {
    console.log(this.model);
    //REST TODO
    activeModal.close('Close click');
    this.submitted = true;    
  
 }


  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-login-component',
  templateUrl: 'login.component.html'
})
export class AppLoginComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(AppLoginContent);
  
  }
}
