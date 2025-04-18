import { MenuItem } from "primeng/api";

export const ITEM_STATUS_CLIENTE = [
    {
        description: 'Ativo', value: true
    },
    {
        description: 'Inativo', value: false
    }
]

export interface ICliente {
    id?: number;
    nome: string;
    cpf_cnpj: string;
    status: boolean | string;
    telefone: string;
    cidade: string;
    endereco: string;
    numero: number | string;
}

export interface ClientesFiltro {
    nome: string;
    cnpj_cpf: string;
    status: boolean;
}

export const CLIENTES_FILTRO_PADRAO: ClientesFiltro = {
    nome: '',
    cnpj_cpf: '',
    status: null
}