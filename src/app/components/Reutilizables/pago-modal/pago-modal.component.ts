import { Component, EventEmitter, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';

type Paso = 'formulario' | 'cargando' | 'exito';

@Component({
  selector: 'app-pago-modal',
  standalone: true,
  imports: [FormsModule, DecimalPipe],
  templateUrl: './pago-modal.component.html',
  styleUrl: './pago-modal.component.css'
})
export class PagoModalComponent implements OnChanges {
  @Input() visible = false;
  @Output() cerrar = new EventEmitter<void>();

  paso = signal<Paso>('formulario');

  nombre = '';
  numero = '';
  vencimiento = '';
  cvv = '';

  constructor(public carrito: CarritoService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible']?.currentValue === true) {
      this.paso.set('formulario');
      this.nombre = '';
      this.numero = '';
      this.vencimiento = '';
      this.cvv = '';
    }
  }

  get formularioValido(): boolean {
    return (
      this.nombre.trim().length >= 3 &&
      this.numero.replace(/\s/g, '').length === 16 &&
      /^\d{2}\/\d{2}$/.test(this.vencimiento) &&
      this.cvv.length >= 3
    );
  }

  formatearNumero(event: Event) {
    const input = event.target as HTMLInputElement;
    let valor = input.value.replace(/\D/g, '').slice(0, 16);
    input.value = valor.replace(/(.{4})/g, '$1 ').trim();
    this.numero = input.value;
  }

  formatearVencimiento(event: Event) {
    const input = event.target as HTMLInputElement;
    let valor = input.value.replace(/\D/g, '').slice(0, 4);
    if (valor.length >= 3) {
      valor = valor.slice(0, 2) + '/' + valor.slice(2);
    }
    input.value = valor;
    this.vencimiento = input.value;
  }

  pagar() {
    if (!this.formularioValido) return;
    this.paso.set('cargando');
    setTimeout(() => {
      this.paso.set('exito');
      setTimeout(() => {
        this.carrito.vaciar();
        this.cerrar.emit();
      }, 2800);
    }, 2500);
  }

  onOverlayClick() {
    if (this.paso() === 'formulario') {
      this.cerrar.emit();
    }
  }
}
