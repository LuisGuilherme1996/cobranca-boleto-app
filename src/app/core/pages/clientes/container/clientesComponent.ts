import { Component, OnInit } from "@angular/core";
import { ClientesFiltroComponent } from "../components/clientesFiltro/clientesFiltroComponent";
import { SharedModule } from "primeng/api";
import { CardContentResponsiveComponent } from "../../../../shared/components/responsive/responsiveCardContent/responsiveCardContent";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'clientes-component.ts',
    templateUrl: './clientesComponent.html',
    standalone: false
   
})

export class ClientesComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {
        console.log('iniciou o component pai')    
    }
}