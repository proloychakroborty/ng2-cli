import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psi-bookstore',
  templateUrl: './psi-bookstore.component.html',
  styleUrls: ['./psi-bookstore.component.css']
})
export class PsiBookstoreComponent implements OnInit {

  books: book[];
  constructor() { }

  ngOnInit() {
    this.books = [{ author:"Sunil", pages:100 },{ author: "Proloy", pages:150 },{ author: "Abhijeet", pages:200 }];
  }

}

interface book {
  author : string;
  pages : number;
}
