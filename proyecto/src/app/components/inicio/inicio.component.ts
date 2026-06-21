import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  productos = [
    {
      nombre: 'Sombreros Artesanales',
      imagen: '/producto/sombrero.png',
      link: '/productos/sombreros',
    },
    {
      nombre: 'Lentes Artesanales',
      imagen: '/producto/lente.png',
      link: '/productos/lentes',
    },
    {
      nombre: 'Sandalias de Coco',
      imagen: '/producto/zandalias.png',
      link: '/productos/sandalias',
    },
    {
      nombre: 'Maceteros Decorativos',
      imagen: '/producto/macetero.png',
      link: '/productos/maceteros',
    },
    {
      nombre: 'Llaveros Personalizados',
      imagen: '/producto/llavero.png',
      link: '/productos/llaveros',
    },
    // {
    //   nombre: 'Souvenirs Turísticos',
    //   imagen: 'assets/images/souvenirs.jpg',
    //   link: '/productos/souvenirs',
    // },
    // {
    //   nombre: 'Artículos Decorativos',
    //   imagen: 'assets/images/decorativos.jpg',
    //   link: '/productos/decorativos',
    // },
    // {
    //   nombre: 'Productos Personalizados',
    //   imagen: 'assets/images/personalizados.jpg',
    //   link: '/productos/personalizados',
    // },
  ];

  industrias = [
    { nombre: 'Minería', imagen: 'assets/images/indus_01.jpg', link: '/industrias/mineria' },
    { nombre: 'Túneles', imagen: 'assets/images/indus_02.jpg', link: '/industrias/tuneles' },
    { nombre: 'Canteras', imagen: 'assets/images/indus_03.jpg', link: '/industrias/canteras' },
    { nombre: 'Pozos de Agua', imagen: 'assets/images/indus_04.jpg', link: '/industrias/pozos' },
    {
      nombre: 'Construcción',
      imagen: 'assets/images/indus_05.jpg',
      link: '/industrias/construccion',
    },
  ];
}
