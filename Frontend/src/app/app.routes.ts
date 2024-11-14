import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { HousingPageComponent } from './housing/housing-page/housing-page.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'house', component: HousingPageComponent },
    ],
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];
