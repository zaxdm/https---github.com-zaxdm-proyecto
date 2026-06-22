import { Injectable, signal, computed, effect, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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

  private isBrowser = false;
  private _items = signal<ItemCarrito[]>([]);

  items       = this._items.asReadonly();
  totalItems  = computed(() => this._items().reduce((s, i) => s + i.cantidad, 0));
  totalPrecio = computed(() => this._items().reduce((s, i) => s + i.precio * i.cantidad, 0));

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    
    // Cargar datos iniciales solo en el navegador
    if (this.isBrowser) {
      this._items.set(this.obtenerStorage());
    }
    
    // Guardar cambios solo en el navegador
    effect(() => {
      if (this.isBrowser) {
        this.guardarStorage(this._items());
      }
    });
  }

  private obtenerStorage(): ItemCarrito[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private guardarStorage(items: ItemCarrito[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
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