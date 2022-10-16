import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-search-bar',
  templateUrl: './listing-search-bar.component.html',
  styleUrls: ['./listing-search-bar.component.css']
})
export class ListingSearchBarComponent implements OnInit {

  constructor() { }

  breadcrumbs:any

  ngOnInit(): void {
    this.breadcrumbs = {
      state: 'California',
      county: 'Orange County',
      listing: ''
    }
  }

}
