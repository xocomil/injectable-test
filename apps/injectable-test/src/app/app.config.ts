import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/lazy-component/lazy-component.component').then(
        (m) => m.LazyComponentComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
