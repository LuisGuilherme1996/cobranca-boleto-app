import { AfterViewInit, Component, DestroyRef, Inject, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MessageService } from "primeng/api";
import { FormBuilder, FormGroup } from '@angular/forms';
import { CLIENTES_FILTRO_PADRAO, ICliente } from '../model/clientesFiltros';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { ClientesFormularioComponent } from './clienteFormulario/clientesFormulario';
import { ModalService } from '../../../../../services/modal.service';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

@Component({
    selector: 'app-clientes-component',
    templateUrl: './clientesComponent.html',
    standalone: false
   
})

export class ClientesComponent implements OnInit, OnDestroy, AfterViewInit {
    public clienteFiltrosForm: FormGroup;
    public destroyed = Inject(DestroyRef);
    public clientes$ = new Subscription();
    public mostrarModal: boolean = false;
    public modoEditar: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public modoEditar$ = this.modoEditar.asObservable();
    public cliente: ICliente;

    @ViewChild('modalClienteCadastro') modalClienteCadastro!: ModalComponent;

    constructor(
        private messageService: MessageService,
        private fb: FormBuilder,
        private modalService: ModalService,
    ) {}
    ngOnInit(): void {
        this.iniciarFormulario();
    }

    ngOnDestroy(): void {
        this.mostrarModal = false;
        this.modoEditar.next(false);
    }

    ngAfterViewInit(): void {
        this.modalService.registerModal('modalClienteCadastro', this.modalClienteCadastro);
        
    }

    public iniciarFormulario() {
        this.clienteFiltrosForm = this.fb.group(CLIENTES_FILTRO_PADRAO);
    }
   
    public limparFiltros() {
        this.clienteFiltrosForm.patchValue(CLIENTES_FILTRO_PADRAO);
    }

    public onSelecionou(cliente: any) {
         this.messageService.add({ severity: 'info', summary: 'Cliente Selecionado', detail: cliente.data.nome,});
    }

    editarCliente(cliente: ICliente) {
        this.mostrarModal = true;
        this.modoEditar.next(true);
        this.cliente = cliente;
        this.modalService.openModal('modalClienteCadastro', 'grande');
    }

    deletarCliente(id: number) {
    }

    public abrirModal() {
        this.mostrarModal = true;
        this.modoEditar.next(false);
        this.modalService.openModal('modalClienteCadastro', 'grande');
    }

    public fecharModal() {
        this.mostrarModal = false;
        this.cliente = null;
        this.modalService.closeModal('modalClienteCadastro');
    }
}