import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/services/listing.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(
    private listingService: ListingService,
    private location : Location
  ) { }

  listing: any;
  listingId: any

  ngOnInit(): void {
    this.listing = this.listingService.getListings(this.listingId)
  }
  back() {
    this.location.back()
  }

}
