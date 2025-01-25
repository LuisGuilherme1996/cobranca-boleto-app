import { Routes } from "@angular/router";
import { NavigationComponent } from "./navigation";

export const navigationRoutes: Routes = [
    {
        path: '',
        component: NavigationComponent,
        children: [
            {
                path: 'home', 
                loadChildren: () => import('../home/home.module').then((m) => m.HomeModule)
            }
        ]
    }
]