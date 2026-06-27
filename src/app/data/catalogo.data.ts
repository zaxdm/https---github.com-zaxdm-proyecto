export interface ProductoItem {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  img: string;
}

export interface CategoriaProducto {
  link: string;
  titulo: string;
  descripcion: string;
  img: string;
  items: ProductoItem[];
}

export const CATALOGO: CategoriaProducto[] = [
  {
    link: 'sombreros',
    titulo: 'Sombreros Artesanales',
    descripcion: 'Sombreros elaborados a mano con materiales locales y diseños tradicionales.',
    img: '/producto/product6.jpeg',
    items: [
      { id: 'som-01', nombre: 'Sombrero de Paja Toquilla', descripcion: 'Sombrero tradicional tejido a mano con paja toquilla, ligero y transpirable.', precio: 45.00, img: '/producto/product6.jpeg' },
      { id: 'som-02', nombre: 'Sombrero de Fieltro Fino', descripcion: 'Elegante sombrero de fieltro 100% lana, ideal para ocasiones especiales.', precio: 65.00, img: '/producto/product7.jpeg' },
      { id: 'som-03', nombre: 'Sombrero Panamá Clásico', descripcion: 'Sombrero estilo Panamá, confeccionado con fibra natural y acabado fino.', precio: 55.00, img: '/producto/product6.jpeg' },
      { id: 'som-04', nombre: 'Sombrero de Paja con Cinta', descripcion: 'Diseño moderno con cinta decorativa, ideal para uso diario en clima cálido.', precio: 38.00, img: '/producto/product7.jpeg' },
      { id: 'som-05', nombre: 'Sombrero Campesino', descripcion: 'Sombrero rústico de ala ancha, perfecto para actividades al aire libre.', precio: 42.00, img: '/producto/product7.jpeg' },
    ]
  },
  {
    link: 'lentes',
    titulo: 'Lentes Artesanales',
    descripcion: 'Gafas únicas fabricadas artesanalmente con materiales de alta calidad.',
    img: '/producto/product8.jpeg',
    items: [
      { id: 'len-01', nombre: 'Gafas de Madera Negra', descripcion: 'Montura de madera natural con diseño minimalista y acabado pulido.', precio: 78.00, img: '/producto/product8.jpeg' },
      { id: 'len-02', nombre: 'Gafas de Carey', descripcion: 'Montura de acetato en tonos carey, elegante y duradera.', precio: 92.00, img: '/producto/product8.jpeg' },
      { id: 'len-03', nombre: 'Gafas de Metal Dorado', descripcion: 'Montura metálica dorada con detalles finos, diseño vintage.', precio: 85.00, img: '/producto/product8.jpeg' },
      { id: 'len-04', nombre: 'Gafas de Bambú', descripcion: 'Ecológicas y ligeras, fabricadas con bambú y bisagras de acero inoxidable.', precio: 68.00, img: '/producto/product8.jpeg' },
      { id: 'len-05', nombre: 'Gafas de Resina Colorida', descripcion: 'Monturas coloridas de resina, ideales para un look casual y juvenil.', precio: 55.00, img: '/producto/product8.jpeg' },
    ]
  },
  {
    link: 'sandalias',
    titulo: 'Sandalias de Coco',
    descripcion: 'Cómodas sandalias hechas con cáscara de coco y materiales ecológicos.',
    img: '/producto/product3.jpeg',
    items: [
      { id: 'san-01', nombre: 'Sandalias de Coco Natural', descripcion: 'Sandalias con suela de coco natural y tiras de cuero ecológico.', precio: 58.00, img: '/producto/product3.jpeg' },
      { id: 'san-02', nombre: 'Sandalias con Plataforma', descripcion: 'Diseño con plataforma de coco, tiras de algodón y cierre ajustable.', precio: 65.00, img: '/producto/product3.jpeg' },
      { id: 'san-03', nombre: 'Sandalias Tropicales', descripcion: 'Colores vibrantes y detalles con conchas marinas, estilo playa.', precio: 48.00, img: '/producto/product3.jpeg' },
      { id: 'san-04', nombre: 'Sandalias de Cocotero', descripcion: 'Fabricadas con fibra de coco reciclada y suela de caucho natural.', precio: 52.00, img: '/producto/product3.jpeg' },
      { id: 'san-05', nombre: 'Sandalias con Cuentas', descripcion: 'Decoradas con cuentas de madera y caracoles, diseño exclusivo.', precio: 72.00, img: '/producto/product3.jpeg' },
    ]
  },
  {
    link: 'maceteros',
    titulo: 'Maceteros Decorativos',
    descripcion: 'Macetas decorativas artesanales ideales para realzar cualquier espacio.',
    img: '/producto/product2.jpeg',
    items: [
      { id: 'mac-01', nombre: 'Macetero de Barro Clásico', descripcion: 'Maceta de barro cocido con diseño tradicional y acabado rústico.', precio: 28.00, img: '/producto/product2.jpeg' },
      { id: 'mac-02', nombre: 'Macetero Colgante de Cuerda', descripcion: 'Diseño colgante con soporte de cuerda natural, ideal para interiores.', precio: 35.00, img: '/producto/product2.jpeg' },
      { id: 'mac-03', nombre: 'Macetero Geométrico', descripcion: 'Forma geométrica de cerámica pintada a mano, moderna y elegante.', precio: 42.00, img: '/producto/product2.jpeg' },
      { id: 'mac-04', nombre: 'Macetero con Dibujos Tribales', descripcion: 'Decoración con motivos tribales tallados en el barro.', precio: 38.00, img: '/producto/product2.jpeg' },
      { id: 'mac-05', nombre: 'Macetero de Piedra Volcánica', descripcion: 'Maceta natural de piedra volcánica, porosa y ligera.', precio: 48.00, img: '/producto/product2.jpeg' },
    ]
  },
  {
    link: 'llaveros',
    titulo: 'Llaveros Personalizados',
    descripcion: 'Llaveros únicos y personalizados, perfectos como recuerdo o regalo.',
    img: '/producto/product9.jpeg',
    items: [
      { id: 'lla-01', nombre: 'Llavero de Madera Grabado', descripcion: 'Llavero de madera con grabado personalizado al láser.', precio: 12.00, img: '/producto/product9.jpeg' },
      { id: 'lla-02', nombre: 'Llavero de Cuero Repujado', descripcion: 'Llavero de cuero con diseño repujado y anilla metálica.', precio: 15.00, img: '/producto/product10.jpeg' },
      { id: 'lla-03', nombre: 'Llavero con Inicial', descripcion: 'Llavero metálico con inicial en relieve, disponible en varios colores.', precio: 10.00, img: '/producto/product9.jpeg' },
      { id: 'lla-04', nombre: 'Llavero de Macramé', descripcion: 'Llavero elaborado con técnica de macramé y cuentas de colores.', precio: 14.00, img: '/producto/product10.jpeg' },
      { id: 'lla-05', nombre: 'Llavero Recuerdo Turístico', descripcion: 'Llavero con motivos locales y paisajes pintados a mano.', precio: 8.00, img: '/producto/product9.jpeg' },
    ]
  }
];