import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  constructor(private router: Router) {}

  irAProducto(link: string) {
    this.router.navigate(['/productos', link]);
  }

  productos = [
  {
    titulo: 'Sombreros Artesanales',
    descripcion: 'Sombreros elaborados a mano con materiales locales y diseños tradicionales.',
    img: '/producto/sombrero.png',
    link: 'sombreros'
  },
  {
    titulo: 'Lentes Artesanales',
    descripcion: 'Gafas únicas fabricadas artesanalmente con materiales de alta calidad.',
    img: '/producto/lente.png',
    link: 'lentes'
  },
  {
    titulo: 'Sandalias de Coco',
    descripcion: 'Cómodas sandalias hechas con cáscara de coco y materiales ecológicos.',
    img: '/producto/zandalias.png',
    link: 'sandalias'
  },
  {
    titulo: 'Maceteros Decorativos',
    descripcion: 'Macetas decorativas artesanales ideales para realzar cualquier espacio.',
    img: '/producto/macetero.png',
    link: 'maceteros'
  },
  {
    titulo: 'Llaveros Personalizados',
    descripcion: 'Llaveros únicos y personalizados, perfectos como recuerdo o regalo.',
    img: '/producto/llavero.png',
    link: 'llaveros'
  }
];
}