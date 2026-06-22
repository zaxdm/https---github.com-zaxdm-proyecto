import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';
import { CATALOGO, CategoriaProducto, ProductoItem } from '../../../data/catalogo.data';

@Component({
  selector: 'app-vista-producto',
  imports: [CommonModule],
  templateUrl: './vista-producto.component.html',
  styleUrl: './vista-producto.component.css'
})
export class VistaProductoComponent implements OnInit {
  categoria!: CategoriaProducto;
  carritoAbierto = signal(false);
  agregados = signal<Set<string>>(new Set());

  // ya no es necesario declarar 'catalogo' aquí, usamos CATALOGO importado

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public carrito: CarritoService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.categoria = CATALOGO.find(c => c.link === slug) ?? CATALOGO[0];
  }

  agregarAlCarrito(item: ProductoItem) {
    this.carrito.agregar({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      img: item.img,
      categoria: this.categoria.titulo
    });
    this.agregados.update(set => new Set(set).add(item.id));
    setTimeout(() => {
      this.agregados.update(set => {
        const next = new Set(set);
        next.delete(item.id);
        return next;
      });
    }, 1200);
  }

  estaAgregado(id: string): boolean {
    return this.agregados().has(id);
  }

  toggleCarrito() {
    this.carritoAbierto.update(v => !v);
  }

  volver() {
    this.router.navigate(['/productos']);
  }
}