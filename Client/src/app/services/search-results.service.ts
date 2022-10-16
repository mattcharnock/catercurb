import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchResultsService {

  constructor() { }

  getListings(x:any) {
    const listings = [
      {
        businessName: 'Cabillos Barbecue',
        businessState: 'California',
        businessCounty: 'Orange County',
        city: 'Irvine',
        zip: '92618',
        tags: ['BBQ', 'Drinks'],
        price: {
          one: true,
          two: false,
          three: false,
          four: false,
        },
        img: 'https://images.pexels.com/photos/2518078/pexels-photo-2518078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        businessName: 'Cabillos Barbecue',
        businessState: 'California',
        businessCounty: 'Orange County',
        city: 'Irvine',
        zip: '92618',
        tags: ['BBQ', 'Drinks'],
        price: {
          one: true,
          two: false,
          three: false,
          four: false,
        },
        img: 'https://images.pexels.com/photos/2518078/pexels-photo-2518078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        businessName: 'Cabillos Barbecue',
        businessState: 'California',
        businessCounty: 'Orange County',
        city: 'Irvine',
        zip: '92618',
        tags: ['BBQ', 'Drinks'],
        price: {
          one: true,
          two: false,
          three: false,
          four: false,
        },
        img: 'https://images.pexels.com/photos/2518078/pexels-photo-2518078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      {
        businessName: 'Cabillos Barbecue',
        businessState: 'California',
        businessCounty: 'Orange County',
        city: 'Irvine',
        zip: '92618',
        tags: ['BBQ', 'Drinks'],
        price: {
          one: true,
          two: false,
          three: false,
          four: false,
        },
        img: 'https://images.pexels.com/photos/2518078/pexels-photo-2518078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
    ]
    return listings
  }

}
