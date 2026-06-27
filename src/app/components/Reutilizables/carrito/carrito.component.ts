// carrito-global.component.ts

import { DecimalPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { PagoModalComponent } from '../pago-modal/pago-modal.component';

@Component({
  selector: 'app-carrito',
  imports: [DecimalPipe, PagoModalComponent],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  abierto = signal(false);
  pagoVisible = signal(false);

  constructor(public carrito: CarritoService) {}

  toggle() { this.abierto.update(v => !v); }
  cerrar() { this.abierto.set(false); }

  abrirPago() {
    this.abierto.set(false);
    this.pagoVisible.set(true);
  }

  cerrarPago() {
    this.pagoVisible.set(false);
  }
}