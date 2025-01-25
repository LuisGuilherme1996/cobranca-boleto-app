import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/container/login.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./core/pages/navigation/navigation.module').then(
        (m) => m.NavigationModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
  // {
  //     path: 'clientes',
  //     loadChildren: () => import('./core/pages/clientes/clientes.module').then((m) => m.ClientesModule)
  // }
];
