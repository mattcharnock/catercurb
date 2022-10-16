import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { SearchViewComponent } from './views/search-view/search-view.component';
import { AppViewComponent } from './views/app-view/app-view.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SearchBarComponent } from './tools/search-bar/search-bar.component';
import { SearchResultsComponent } from './tools/search-results/search-results.component';
import { ListingSearchBarComponent } from './tools/listing-search-bar/listing-search-bar.component';
import { ResultsComponent } from './routes/results/results.component';
import { ListingComponent } from './routes/listing/listing.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthViewComponent,
    HomeViewComponent,
    SearchViewComponent,
    AppViewComponent,
    LoginComponent,
    RegisterComponent,
    SearchBarComponent,
    SearchResultsComponent,
    ListingSearchBarComponent,
    ResultsComponent,
    ListingComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
