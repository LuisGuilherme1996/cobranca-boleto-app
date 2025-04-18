import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ICliente } from "../../model/clientesFiltros";

@Component({
    selector: 'app-clientes-formulario',
    templateUrl: './clientesFormulario.html',
    standalone: false,

})

export class ClientesFormularioComponent implements OnInit, OnDestroy {
    public clienteFormulario: FormGroup;

    @Input() public mostrarModal: boolean;
    @Input() public cliente: ICliente;
    constructor(
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void { 
        this.iniciarFormulario();
        this.preencherFormulario()
    };
    ngOnDestroy(): void { };

    public iniciarFormulario() {
        this.clienteFormulario = this.fb.group({
            nome: [''],
            email: [''],
            cpf_cnpj: [''],
            cep: [''],
            telefone: [''],
            cidade: [''],
            bairro: [''],
            numero: [''],
            logradouro: [''],
            UF: [''],
            complemento: [''],
        })
    }

    public preencherFormulario() {
        if (this.cliente) {
            this.clienteFormulario.patchValue(this.cliente);
        }
        return;
    }
}