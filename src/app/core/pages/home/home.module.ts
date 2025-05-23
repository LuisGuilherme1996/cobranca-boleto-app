import { NgModule } from '@angular/core';
import { HomeComponent } from './container/home.component';
import { CommonModule } from '@angular/common';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import {
  Route,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  Routes,
} from '@angular/router';
import { SharedModule } from 'primeng/api';
import { homeRouting } from './home.routing';
import { ClientesModule } from '../clientes/clientes.module';
import { DialogService } from 'primeng/dynamicdialog';
import { ModalService } from '../../../../services/modal.service';

@NgModule({
  imports: [
    CommonModule,
    PanelMenuModule,
    DrawerModule,
    ButtonModule,
    Ripple,
    AvatarModule,
    StyleClass,
    SharedModule,
    RouterModule.forChild(homeRouting),
    RouterOutlet,
    RouterLink,
    ClientesModule,
  ],
  declarations: [HomeComponent],
  exports: [
    // HomeComponent,
    // RouterModule
  ],
  providers: [ModalService, DialogService],
})
export class HomeModule {}
