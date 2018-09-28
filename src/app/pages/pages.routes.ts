import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';

import { ProfileComponent } from './profile/profile.component';

// Guards
import { LoginGuardGuard } from '../services/service.index';
import { AdminGuard } from '../services/service.index';

import { VerificaTokenGuard } from '../services/guards/verifica-token.guard';

const pagesRoutes: Routes = [
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [ VerificaTokenGuard ],
      data: { titulo: 'Dashboard' }
    },
    { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes de tema' } },
    { path: 'profile', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
