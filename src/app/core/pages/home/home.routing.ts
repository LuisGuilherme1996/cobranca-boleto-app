import { Routes } from '@angular/router';
import { HomeComponent } from './container/home.component';
import { ClientesComponent } from '../clientes/container/clientesComponent';

export const homeRouting: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'clientes',
    component: ClientesComponent,
  },
];
