import { NgModule } from "@angular/core";
import { ClientesComponent } from "./container/clientesComponent";
import { ClientesFiltroComponent } from "./components/clientesFiltro/clientesFiltroComponent";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { clientesRouting } from "./clientes.routing";
import { SharedModule } from "../../../shared/shared.module";
import { ClienteListagemComponent } from "./components/clientesListagem/clientesListagem";
import { CardMainResponsiveComponent } from "../../../shared/components/responsive/responsiveCardMain/responsiveCardMain";
import { CardContentResponsiveSmComponent } from "../../../shared/components/responsive/responsiveCardContent/sm/responsiveCardContentSm";

@NgModule({
    declarations: [
        ClientesComponent, 
        ClientesFiltroComponent,
        ClienteListagemComponent,
        
    ],
    imports: [
    CommonModule,
    RouterModule.forChild(clientesRouting),
    SharedModule,
    CardMainResponsiveComponent,
    CardContentResponsiveSmComponent
],
    exports: [
        ClientesComponent, 
        ClientesFiltroComponent,
        ClienteListagemComponent
    ]
})

export class ClientesModule {}