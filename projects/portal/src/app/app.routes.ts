import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'inventory',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'inventory',
        exposedModule: './Component'
      }).then(m => m.AppComponent)
  },
  {
    path: 'maintenance',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'maintenance',
        exposedModule: './Component'
      }).then(m => m.AppComponent)
  },
  {
    path: 'security',
    loadComponent: () =>
      loadRemoteModule({
        remoteName: 'security',
        exposedModule: './Component'
      }).then(m => m.AppComponent)
  },
  {
    path: '',
    redirectTo: 'inventory',
    pathMatch: 'full'
  }
];
