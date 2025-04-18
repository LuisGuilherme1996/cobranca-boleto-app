import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
@Component({
  selector: 'app-root',
  imports: [
    CommonModule, 
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private primeng: PrimeNG) {}
  title = 'cobranca-boleto-app';
  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }
}
