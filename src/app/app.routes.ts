import { Routes } from '@angular/router';
import { LoginComponent } from './+components/login/login.component';

export const routes: Routes = [
  { path: 'Login', component: LoginComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/Login', pathMatch: 'full' }
];
