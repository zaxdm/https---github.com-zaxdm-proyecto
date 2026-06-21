import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: string;
  sku: string;
  name: string;
  desc: string;
  price: number;
  color: string;
  glyph: string;
}

interface CartLine {
  product: Product;
  qty: number;
}

const SHIPPING_FLAT = 4.5;
const FREE_SHIP_THRESHOLD = 60;

const PRODUCTS: Product[] = [
  { id: 'p1', sku: 'MER-001', name: 'Cuaderno de hilo', desc: 'Tapa de tela cruda, 120 hojas, cosido a mano.', price: 18.5, color: '#2D5A4A', glyph: 'C' },
  { id: 'p2', sku: 'MER-002', name: 'Pluma estilográfica', desc: 'Cuerpo de resina, plumín fino acero inoxidable.', price: 34.0, color: '#1C1B19', glyph: 'P' },
  { id: 'p3', sku: 'MER-003', name: 'Tinta sepia 30ml', desc: 'Pigmento mineral, frasco de vidrio soplado.', price: 12.0, color: '#A33B25', glyph: 'T' },
  { id: 'p4', sku: 'MER-004', name: 'Set de clips de latón', desc: 'Doce piezas, acabado envejecido a mano.', price: 9.5, color: '#8A7A4E', glyph: 'L' },
  { id: 'p5', sku: 'MER-005', name: 'Cortapapel de hueso', desc: 'Mango torneado, hoja roma de acero.', price: 22.0, color: '#5A564E', glyph: 'K' },
  { id: 'p6', sku: 'MER-006', name: 'Sello de cera personal', desc: 'Mango de nogal, sello intercambiable.', price: 28.0, color: '#C84B31', glyph: 'S' },
  { id: 'p7', sku: 'MER-007', name: 'Carpeta de archivo', desc: 'Cartón prensado, cierre con cordel encerado.', price: 15.0, color: '#3D4E63', glyph: 'F' },
  { id: 'p8', sku: 'MER-008', name: 'Regla de latón 20cm', desc: 'Grabado láser, biselado para tinta.', price: 11.5, color: '#6B6354', glyph: 'R' },
];

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class Cartcomponent {
  products = PRODUCTS;

  // id -> qty, como signal para reactividad automática
  cartMap = signal<Record<string, number>>({});

  isDrawerOpen = signal(false);
  toastMessage = signal<string | null>(null);
  private toastTimer?: ReturnType<typeof setTimeout>;
  recentlyAdded = signal<string | null>(null);
  private addedTimer?: ReturnType<typeof setTimeout>;

  // ---- Derivados (computed) ----
  cartLines = computed<CartLine[]>(() => {
    const map = this.cartMap();
    return Object.keys(map)
      .map((id) => {
        const product = this.products.find((p) => p.id === id);
        return product ? { product, qty: map[id] } : null;
      })
      .filter((line): line is CartLine => line !== null);
  });

  totalItems = computed(() =>
    Object.values(this.cartMap()).reduce((a, b) => a + b, 0)
  );

  subtotal = computed(() =>
    this.cartLines().reduce((sum, l) => sum + l.product.price * l.qty, 0)
  );

  shipping = computed(() => {
    const sub = this.subtotal();
    return sub === 0 || sub >= FREE_SHIP_THRESHOLD ? 0 : SHIPPING_FLAT;
  });

  total = computed(() => this.subtotal() + this.shipping());

  // ---- Acciones ----
  addToCart(id: string): void {
    this.cartMap.update((map) => ({
      ...map,
      [id]: (map[id] ?? 0) + 1,
    }));

    const product = this.products.find((p) => p.id === id);
    if (product) {
      this.showToast(`${product.name} añadido al carrito`);
    }

    this.recentlyAdded.set(id);
    clearTimeout(this.addedTimer);
    this.addedTimer = setTimeout(() => this.recentlyAdded.set(null), 900);
  }

  changeQty(id: string, delta: number): void {
    this.cartMap.update((map) => {
      const next = { ...map };
      const newQty = (next[id] ?? 0) + delta;
      if (newQty <= 0) {
        delete next[id];
      } else {
        next[id] = newQty;
      }
      return next;
    });
  }

  removeItem(id: string): void {
    this.cartMap.update((map) => {
      const next = { ...map };
      delete next[id];
      return next;
    });
  }

  openDrawer(): void {
    this.isDrawerOpen.set(true);
  }

  closeDrawer(): void {
    this.isDrawerOpen.set(false);
  }

  checkout(): void {
    if (this.totalItems() === 0) return;
    this.showToast('Pedido confirmado — gracias por tu compra');
    this.cartMap.set({});
    setTimeout(() => this.closeDrawer(), 1000);
  }

  private showToast(msg: string): void {
    clearTimeout(this.toastTimer);
    this.toastMessage.set(msg);
    this.toastTimer = setTimeout(() => this.toastMessage.set(null), 1800);
  }
}