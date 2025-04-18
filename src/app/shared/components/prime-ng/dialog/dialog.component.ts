import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from "primeng/button";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { NgTemplateOutlet } from "@angular/common";

@Component({
    selector: 'primeNg-dialog',
    templateUrl: './dialog.component.html',
    standalone: true,
    imports: [DialogModule, ButtonModule, DynamicDialogModule,  NgTemplateOutlet],
    exportAs: 'primeNgDialogComponent',
})

export class DialogComponent implements OnInit {

    @Input() public mostrarModal: boolean = false;
    @Input() public titulo: string = '';
    @Input() public icon: string = '';
    @Input() public carregando: boolean = false;
    @Input() public contentTemplate: any;
    @Input() public contentData: any;

    @Output() public onFechar = new EventEmitter();
    @Output() public onSalvar = new EventEmitter();

    
    constructor() {}

    ngOnInit(): void {
     }
}