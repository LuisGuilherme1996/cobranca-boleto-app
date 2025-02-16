import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ITEMS_NAV_OPTIONS } from './model/items';
import { PrimeIcons } from 'primeng/api';

@Component({
    selector: 'primeNg-pop-up-menu-items',
    templateUrl: './popUp.html',
    styleUrls: ['./popUp.css'],
    standalone: true,
    imports: [Menu, ButtonModule],
})

export class PopUpPrimeNgComponent implements OnInit {
    public items: MenuItem[] = ITEMS_NAV_OPTIONS
    public primeIcons = PrimeIcons
    constructor() {}
    ngOnInit(): void {
        
    }
}