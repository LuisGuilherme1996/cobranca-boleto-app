import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, Signal } from "@angular/core";
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from "primeng/button";

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html',
    imports: [DynamicDialogModule, DialogModule, ButtonModule],
    standalone: true,
})

export class ModalComponent implements OnInit, OnDestroy {
    @Input() titulo: string
    @Input() btnSalvar: boolean = false;
    @Input() btnCancelar: boolean = true;
    @Input() btnSalvarNome: string = 'Salvar'
    @Input() btnCancelarNome: string = 'Cancelar'
    @Input() carregando: boolean = false;

    @Output() onFechar = new EventEmitter()

    
    public modalTamanho: Signal<string>;
    public tamanhoModal = {
        "pequeno": "small",
        "medio": "medium",
        "grande": "large",
        "extra-grande": "xlarge",
    }
    public size: keyof typeof this.tamanhoModal = 'medio';
    public visible: boolean = false;
    constructor() { }


    get modalWidthClass(): string {
        const widthMap: Record<string, string> = {
          small: 'w-[10rem]',
          medium: 'w-[25rem]',
          large: 'w-[50rem]',
          xlarge: 'w-[75rem]',
        };
        const tamanho = this.tamanhoModal[this.size];
        return widthMap[tamanho] || 'w-[25rem]';
    }

    ngOnInit(): void { 
    }
    ngOnDestroy(): void { }
}