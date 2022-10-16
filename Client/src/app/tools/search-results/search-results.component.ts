import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchResultsService } from 'src/app/services/search-results.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchResultsService,
    private route: ActivatedRoute
  ) { }

  filtersPrice: any;
  filtersDiet: any;
  zip: any;
  listings: any;

  ngOnInit(): void {
    this.filtersPrice = this.formBuilder.group({
      one: [true, [Validators.required]],
      two: [true, [Validators.required]],
      three: [true, [Validators.required]],
      four: [true, [Validators.required]],
    });
    this.filtersDiet = this.formBuilder.group({
      vegan: [true, [Validators.required]],
      vegetarian: [true, [Validators.required]],
      all: [true, [Validators.required]],
    });
    if (this.route.url) {
      this.zip = '22323'
      // This is the zip in the parameter
    }
    else {
      this.zip='345345'
      // This is the zip in the current location
    }
    this.listings = this.searchService.getListings(this.zip)

  }

  filter() {
    console.log(this.filtersPrice)
    console.log(this.filtersDiet)
  }

}
