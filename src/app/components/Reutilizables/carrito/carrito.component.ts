// carrito-global.component.ts
// Colócalo en: src/app/components/Reutilizables/carrito-global/

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  abierto = signal(false);

  constructor(public carrito: CarritoService) {}

  toggle() { this.abierto.update(v => !v); }
  cerrar() { this.abierto.set(false); }
}