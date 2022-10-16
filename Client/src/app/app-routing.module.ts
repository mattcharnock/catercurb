import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListingComponent } from './routes/listing/listing.component';
import { ResultsComponent } from './routes/results/results.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { SearchViewComponent } from './views/search-view/search-view.component';

const routes: Routes = [
  {
    path: '', component: AuthViewComponent, children: [
      {
        path: '', component: HomeViewComponent
      },
      {
        path: 'results', component: ResultsComponent
      },
      {
        path: 'listing', component: ListingComponent
      }
    ]
  },
  {
    path: '', component: AuthViewComponent, children: [
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
