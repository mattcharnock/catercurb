import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSearchBarComponent } from './listing-search-bar.component';

describe('ListingSearchBarComponent', () => {
  let component: ListingSearchBarComponent;
  let fixture: ComponentFixture<ListingSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
