import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor() { }

  getListings(x:any) {
    const listing = {
      _id: '123',
      businessName: 'Cabillos Barbecue',
      businessState: 'California',
      businessCounty: 'Orange County',
      businessCity: 'Irvine',
      businessZip: '92618',
      businessWebsite: 'www.cacillo.com',
      backgroundImage: 'https://images.pexels.com/photos/2518078/pexels-photo-2518078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featuredImage: 'https://images.pexels.com/photos/2518078/pexels-photo-2518078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      holidays: true,
      businessHours: {
        monday: {
          open: '7:00am',
          close: '7:00pm'
        },
        tuesday: {
          open: '7:00am',
          close: '7:00pm'
        },
        wednesday: {
          open: '7:00am',
          close: '7:00pm'
        },
        thursday: {
          open: '7:00am',
          close: '7:00pm'
        },
        friday: {
          open: '7:00am',
          close: '7:00pm'
        },
        saturday: {
          open: '7:00am',
          close: '7:00pm'
        },
        sunday: {
          open: '7:00am',
          close: '7:00pm'
        },
      },
      menu: [
        {
          category: 'Burgers',
          items: [
              {
                name: 'Double Stacker',
                description: '100% grass-fed beef with cheese, lettuce, pickles and a slab of mayo.'
              },
              {
                name: 'Double Stacker',
                description: '100% grass-fed beef with cheese, lettuce, pickles and a slab of mayo.'
              },
              {
                name: 'Double Stacker',
                description: '100% grass-fed beef with cheese, lettuce, pickles and a slab of mayo.'
              },
          ]
        },
        {
          category: 'Sandwiches',
          items: [
              {
                name: 'Double Stacker',
                description: '100% grass-fed beef with cheese, lettuce, pickles and a slab of mayo.'
              },
              {
                name: 'Double Stacker',
                description: '100% grass-fed beef with cheese, lettuce, pickles and a slab of mayo.'
              },
              {
                name: 'Double Stacker',
                description: '100% grass-fed beef with cheese, lettuce, pickles and a slab of mayo.'
              },
          ]
        }
      ],
      images: [URL, URL],
    }
    return listing
  }

}
