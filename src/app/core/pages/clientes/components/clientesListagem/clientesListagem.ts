import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-clientes-listagem',
    templateUrl: './clientesListagem.html',
    standalone: false,
    styleUrls: ['./clientesListagem.css']
})

export class ClienteListagemComponent implements OnInit {
    public testes = [
        {nome: 'Luis', cnpj: '74.512.631/00001-21', status: 'Ativo'},
        {nome: 'Marcela', cnpj: '22.512.631/00001-21', status: 'Ativo'},
    ]
    public selectedProduct: any

    constructor() {}

    ngOnInit() {
       
    }

   
}