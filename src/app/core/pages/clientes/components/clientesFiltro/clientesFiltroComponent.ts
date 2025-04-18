import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'clientes-filtro-component',
    templateUrl: './clientesFiltroComponent.html',
    styleUrls: ['./clientesFiltrosComponent.css'],
    standalone: false
})

export class ClientesFiltroComponent implements OnInit {
    @Input() public clienteFiltrosForm: FormGroup;

    @Output() public onLimparFiltro = new EventEmitter();
    @Output() public onCadastrar = new EventEmitter();
    constructor() {}
    ngOnInit(): void {
        
    }
}