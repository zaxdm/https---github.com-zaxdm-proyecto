// carrito.service.ts
import { Injectable, signal, computed, effect } from '@angular/core';

export interface ItemCarrito {
  id: string;
  nombre: string;
  precio: number;
  img: string;
  cantidad: number;
  categoria: string;
}

const STORAGE_KEY = 'maxdrill_carrito';

@Injectable({ providedIn: 'root' })
export class CarritoService {

  private _items = signal<ItemCarrito[]>(this.cargarDesdeStorage());

  items       = this._items.asReadonly();
  totalItems  = computed(() => this._items().reduce((s, i) => s + i.cantidad, 0));
  totalPrecio = computed(() => this._items().reduce((s, i) => s + i.precio * i.cantidad, 0));

  constructor() {
    // Cada vez que cambie el carrito, guarda en localStorage
    effect(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._items()));
    });
  }

  private cargarDesdeStorage(): ItemCarrito[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  agregar(item: Omit<ItemCarrito, 'cantidad'>) {
    this._items.update(lista => {
      const existe = lista.find(i => i.id === item.id);
      if (existe) {
        return lista.map(i => i.id === item.id ? { ...i, cantidad: i.cantidad + 1 } : i);
      }
      return [...lista, { ...item, cantidad: 1 }];
    });
  }

  quitar(id: string) {
    this._items.update(lista => {
      const item = lista.find(i => i.id === id);
      if (!item) return lista;
      if (item.cantidad === 1) return lista.filter(i => i.id !== id);
      return lista.map(i => i.id === id ? { ...i, cantidad: i.cantidad - 1 } : i);
    });
  }

  eliminar(id: string) {
    this._items.update(lista => lista.filter(i => i.id !== id));
  }

  vaciar() {
    this._items.set([]);
  }
}