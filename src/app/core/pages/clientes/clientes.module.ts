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
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CardResponsiveTableComponent } from "../../../shared/components/responsive/resonsiveTable/responsiveTable";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DialogModule } from 'primeng/dialog';
import { DialogComponent } from "../../../shared/components/prime-ng/dialog/dialog.component";
import { ClientesFormularioComponent } from "./container/clienteFormulario/clientesFormulario";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { ModalService } from "../../../../services/modal.service";
import { ModalComponent } from "../../../shared/components/modal/modal.component";
import { ButtonModule } from "primeng/button";

@NgModule({
    declarations: [
        ClientesComponent, 
        ClientesFiltroComponent,
        ClienteListagemComponent,
        ClientesFormularioComponent
        
    ],
    imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(clientesRouting),
    SharedModule,
    CardMainResponsiveComponent,
    CardContentResponsiveSmComponent,
    CardResponsiveTableComponent,
    TableModule,
    ToastModule,
    DialogModule,
    DialogComponent,
    DynamicDialogModule,
    ModalComponent,
    ButtonModule,
],
    providers: [
        MessageService,
        ModalService,
]   ,
    exports: [
        ClientesComponent, 
        ClientesFiltroComponent,
        ClienteListagemComponent,
        ClientesFormularioComponent,
    ]
})

export class ClientesModule {}