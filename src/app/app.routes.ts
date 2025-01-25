import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/container/login.component';
import { HomeComponent } from './core/pages/home/container/home.component';
import { ClientesComponent } from './core/pages/clientes/container/clientesComponent';

export const routes: Routes = [
    {
        path: 'auth',
        component: LoginComponent
    },
    {
        path: 'teste',
        loadChildren: () => import('./core/pages/navigation/navigation.module').then((m) => m.NavigationModule)
    },
    // {
    //     path: 'clientes',
    //     loadChildren: () => import('./core/pages/clientes/clientes.module').then((m) => m.ClientesModule)
    // }
    

];
 