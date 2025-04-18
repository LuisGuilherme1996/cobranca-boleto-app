import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ICliente } from "../../model/clientesFiltros";


@Component({
    selector: 'app-clientes-listagem',
    templateUrl: './clientesListagem.html',
    standalone: false,
    styleUrls: ['./clientesListagem.css']
})

export class ClienteListagemComponent implements OnInit {
    @Output() public onEditar = new EventEmitter();
    @Output() public onDeletar = new EventEmitter();
    
    public testes: ICliente[] = [
        {id: 1, nome: 'Luis', cpf_cnpj: '74.512.631/00001-21', status: 'Ativo', telefone: '3199131-3191', cidade: 'Marília', endereco: 'Nova Marília', numero: 12},
        {id: 2, nome: 'Marcela', cpf_cnpj: '22.512.631/00001-21', status: 'Ativo', telefone: '1499622-1108', cidade: 'Bauru', endereco: 'Novo Jardim', numero: 121},
    ]
    public selectedProduct: ICliente;

    constructor() {}

    ngOnInit() {
       
    }

   
}