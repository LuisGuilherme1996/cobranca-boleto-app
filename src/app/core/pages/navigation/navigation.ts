import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-navigation-component',
    templateUrl: './navigation.html',
    standalone: false
})
export class NavigationComponent implements OnInit {
    constructor(private router: Router) {}
    public isHome: boolean = false;
    ngOnInit(): void {
        // this.telaHome();
    }

    /* private telaHome() {
        console.log(this.router.url, 'url')
        if (this.router.url == '/home') {
            this.isHome = true;
        }
    } */
}