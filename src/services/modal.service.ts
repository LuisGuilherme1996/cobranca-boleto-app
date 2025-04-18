import { Injectable } from '@angular/core';
import { ModalComponent } from '../app/shared/components/modal/modal.component';
// import { CucaModalComponent } from '@components/cuca-modal/cuca-modal.component';

@Injectable({
 providedIn: 'root'
})

export class ModalService {

 private modals: { [key: string]: ModalComponent } = {};

 registerModal(modalID: string, modal: ModalComponent) {
 this.modals[modalID] = modal;
 }

 public openModal(modalID: string, tamanho: 'pequeno' | 'medio' | 'grande' | 'extra-grande' = 'medio') {
 const modal = this.modals[modalID];
   if (modal) {
      modal.size = tamanho;
      modal.visible = true;
   }
 }
 
 public closeModal(modalID: string) {
   const modal = this.modals[modalID];
   if (modal) {
   modal.visible = false;
   }
 }

}