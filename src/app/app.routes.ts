import { Routes } from '@angular/router';
import { LoginComponent } from './+components/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
