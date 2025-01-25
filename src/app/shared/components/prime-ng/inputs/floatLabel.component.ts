import { Component, Input, OnInit } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
    selector: 'primeNg-floatLabel',
    templateUrl: './floatLabel.component.html',
    imports: [FloatLabelModule]
})

export class FloatLabelComponent implements OnInit{
    @Input() public label!: string;
    @Input() public typeInput!: string
    constructor() {}
    ngOnInit(): void {
        
    }
}