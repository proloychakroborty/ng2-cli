import { Component, OnInit } from '@angular/core';
import { Logger } from 'angular2-log4ts/src/app/core';

@Component({
  selector: 'app-psi-news',
  templateUrl: './psi-news.component.html',
  styleUrls: ['./psi-news.component.css']
})
export class PsiNewsComponent implements OnInit {
  
  constructor(private logger:Logger) {
    this.logger.info("news constructor");
   }

  ngOnInit() {
    this.logger.info("news oninit");
  }

}
