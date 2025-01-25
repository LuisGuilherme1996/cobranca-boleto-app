import { NgModule } from "@angular/core";
import { ClientesComponent } from "./container/clientesComponent";
import { ClientesFiltroComponent } from "./components/clientesFiltro/clientesFiltroComponent";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { clientesRouting } from "./clientes.routing";
import { SharedModule } from "../../../shared/shared.module";

@NgModule({
    declarations: [
        ClientesComponent, 
        ClientesFiltroComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(clientesRouting),
        SharedModule
    ]
})

export class ClientesModule {}