import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'button-shared',
    templateUrl: './button.shared.html',
    standalone: true,
    imports: [ButtonModule]
})
export class ButtonComponentShared {}