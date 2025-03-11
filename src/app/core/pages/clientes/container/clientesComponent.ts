import { Component, OnInit } from '@angular/core';
import { ClientesFiltroComponent } from "../components/clientesFiltro/clientesFiltroComponent";
import { SharedModule } from "primeng/api";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-clientes-component',
    templateUrl: './clientesComponent.html',
    standalone: false
   
})

export class ClientesComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {
        console.log('iniciou o component pai')    
    }
}