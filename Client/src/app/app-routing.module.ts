import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';

const routes: Routes = [
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
