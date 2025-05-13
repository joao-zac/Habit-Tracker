import { Routes } from '@angular/router';
import { LoginComponent } from '../Pages/login/login.component';
import { DashboardComponent } from '../Pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, title: 'dashboard' },
];
