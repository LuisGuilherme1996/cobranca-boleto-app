import { Component, OnInit } from "@angular/core";
import { ButtonComponentShared } from "../../../shared/components/prime-ng/buttons/button.shared";
import { SharedModule } from "../../../shared/shared.module";

@Component({
    selector: 'app-login-component',
    templateUrl: 'login.component.html',
    standalone: true,
    imports: [ButtonComponentShared, SharedModule],
})

export class LoginComponent implements OnInit {
    constructor() {}
    ngOnInit(): void {
    }
}