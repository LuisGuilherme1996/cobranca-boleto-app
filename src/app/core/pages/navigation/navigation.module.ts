import { NgModule } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { NavigationComponent } from "./navigation";
import { CommonModule } from "@angular/common";
import { navigationRoutes } from "./navigation.routing";

@NgModule({
    declarations: [NavigationComponent],
    imports: [
        RouterModule.forChild(navigationRoutes),
        RouterOutlet,
        CommonModule
    ],
    exports: []
})
export class NavigationModule {}