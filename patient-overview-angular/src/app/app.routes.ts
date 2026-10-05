import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'patients'
  },
  {
    path: 'patients',
    loadComponent: () =>
      import('./pages/patient-list/patient-list').then(m => m.PatientList)
  },
  {
    path: 'patients/:id',
    loadComponent: () =>
      import('./pages/patient-detail/patient-detail').then(m => m.PatientDetail)
  },
  {
    path: '**',
    redirectTo: 'patients'
  }
];