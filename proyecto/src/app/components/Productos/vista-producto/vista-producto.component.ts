// vista-producto.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

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

@Component({
  selector: 'app-vista-producto',
  imports: [CommonModule, RouterLink],
  templateUrl: './vista-producto.component.html',
  styleUrl: './vista-producto.component.css'
})
export class VistaProductoComponent implements OnInit {
  categoria!: CategoriaProducto;
  carritoAbierto = signal(false);
  agregados = signal<Set<string>>(new Set());

  private catalogo: CategoriaProducto[] = [
    {
      link: '1-top-hammer-drilling-tools',
      titulo: 'Herramientas de Perforación con Martillo en Cabeza',
      descripcion: 'Amplia gama de herramientas diseñadas para entregar una excelente fuerza de impacto a las rocas.',
      img: '/assets/products/pro_01.jpg',
      items: [
        { id: 'th-01', nombre: 'Barra Hexagonal T38 – 2.4m', descripcion: 'Acero 23CrNi3Mo, rosca T38, ideal para perforación en galería.', precio: 85.00, img: '/assets/products/pro_01.jpg' },
        { id: 'th-02', nombre: 'Barra Hexagonal T45 – 3.6m', descripcion: 'Mayor longitud para perforación profunda en banco.', precio: 120.00, img: '/assets/products/pro_01.jpg' },
        { id: 'th-03', nombre: 'Broca de Botón R32 – 38mm', descripcion: 'Botones balísticos WC-Co, roca media a dura.', precio: 48.00, img: '/assets/products/pro_01.jpg' },
        { id: 'th-04', nombre: 'Broca de Botón T38 – 45mm', descripcion: 'Alta penetración, geometría optimizada para roca dura.', precio: 62.00, img: '/assets/products/pro_01.jpg' },
        { id: 'th-05', nombre: 'Shank Adaptor HL38D', descripcion: 'Adaptador de alto rendimiento para perforadoras hidráulicas.', precio: 95.00, img: '/assets/products/pro_01.jpg' },
        { id: 'th-06', nombre: 'Shank Adaptor COP1038', descripcion: 'Compatible con Atlas Copco COP 1038 y similares.', precio: 110.00, img: '/assets/products/pro_01.jpg' },
        { id: 'th-07', nombre: 'Acoplador T38/T38', descripcion: 'Unión de barras, acero bonificado, rosca T38.', precio: 35.00, img: '/assets/products/pro_01.jpg' },
        { id: 'th-08', nombre: 'Broca Cruz R25 – 32mm', descripcion: 'Para roca blanda a media, alta velocidad de penetración.', precio: 28.00, img: '/assets/products/pro_01.jpg' },
      ]
    },
    {
      link: '2-dth-drilling-tools',
      titulo: 'Herramientas de Perforación DTH',
      descripcion: 'Proporcionan un rendimiento eficiente, reducen los costes operativos y las emisiones.',
      img: '/assets/products/pro_02.jpg',
      items: [
        { id: 'dth-01', nombre: 'Martillo DTH QL40 – 4"', descripcion: 'Para diámetros de 95–115mm, presión 6–25 bar.', precio: 420.00, img: '/assets/products/pro_02.jpg' },
        { id: 'dth-02', nombre: 'Martillo DTH QL50 – 5"', descripcion: 'Diámetros 115–140mm, alta eficiencia energética.', precio: 580.00, img: '/assets/products/pro_02.jpg' },
        { id: 'dth-03', nombre: 'Martillo DTH QL60 – 6"', descripcion: 'Para diámetros 140–175mm, uso en minería.', precio: 740.00, img: '/assets/products/pro_02.jpg' },
        { id: 'dth-04', nombre: 'Broca DTH Botón 95mm', descripcion: 'Cabeza de botones balísticos para martillo QL40.', precio: 95.00, img: '/assets/products/pro_02.jpg' },
        { id: 'dth-05', nombre: 'Broca DTH Botón 115mm', descripcion: 'Compatible con martillos QL50, roca dura.', precio: 130.00, img: '/assets/products/pro_02.jpg' },
        { id: 'dth-06', nombre: 'Broca DTH Botón 152mm', descripcion: 'Para martillo QL60, botones esféricos WC-Co.', precio: 185.00, img: '/assets/products/pro_02.jpg' },
      ]
    },
    {
      link: '2-4-overburden-drilling-system',
      titulo: 'Herramientas de Perforación en Sobrecarga',
      descripcion: 'Sistema ideal para perforar agujeros en formaciones rocosas complejas.',
      img: '/assets/products/pro_03.jpg',
      items: [
        { id: 'ob-01', nombre: 'Sistema OD Ø114mm – Kit completo', descripcion: 'Tubo exterior + piloto DTH + broca excéntrica.', precio: 890.00, img: '/assets/products/pro_03.jpg' },
        { id: 'ob-02', nombre: 'Sistema OD Ø168mm – Kit completo', descripcion: 'Para pozos de mayor diámetro en terreno mixto.', precio: 1250.00, img: '/assets/products/pro_03.jpg' },
        { id: 'ob-03', nombre: 'Tubo exterior Ø114 – tramo 3m', descripcion: 'Acero S355, rosca especial anti-giro.', precio: 180.00, img: '/assets/products/pro_03.jpg' },
        { id: 'ob-04', nombre: 'Broca excéntrica Ø114', descripcion: 'Broca piloto excéntrica de repuesto.', precio: 145.00, img: '/assets/products/pro_03.jpg' },
      ]
    },
    {
      link: '4-rotary-drill-bits',
      titulo: 'Brocas Rotatorias',
      descripcion: 'Brocas rotatorias para formaciones blandas como arena, arcilla o piedra blanda.',
      img: '/assets/products/pro_04.jpg',
      items: [
        { id: 'rb-01', nombre: 'Tricono Dientes Acero 6" API', descripcion: 'Para formaciones muy blandas, dientes largos.', precio: 220.00, img: '/assets/products/pro_04.jpg' },
        { id: 'rb-02', nombre: 'Tricono Dientes Acero 8.5" API', descripcion: 'Formaciones blandas a medias, alta ROP.', precio: 310.00, img: '/assets/products/pro_04.jpg' },
        { id: 'rb-03', nombre: 'Tricono Insertos WC 6"', descripcion: 'Carburo de tungsteno para roca media-dura.', precio: 285.00, img: '/assets/products/pro_04.jpg' },
        { id: 'rb-04', nombre: 'Tricono Insertos WC 8.5"', descripcion: 'Alta durabilidad en formaciones abrasivas.', precio: 390.00, img: '/assets/products/pro_04.jpg' },
        { id: 'rb-05', nombre: 'Tricono Insertos WC 12.25"', descripcion: 'Gran diámetro para pozos de agua y petróleo.', precio: 680.00, img: '/assets/products/pro_04.jpg' },
      ]
    },
    {
      link: '5-anchor-bolts',
      titulo: 'Bulones de Anclaje',
      descripcion: 'Solución básica para el atornillado en entornos inestables, ideales en zonas de fractura.',
      img: '/assets/products/pro_05.jpg',
      items: [
        { id: 'ab-01', nombre: 'Bulón Roscado Ø20 – 1.8m', descripcion: 'Acero ASTM A615 Gr.60, con placa y tuerca.', precio: 12.50, img: '/assets/products/pro_05.jpg' },
        { id: 'ab-02', nombre: 'Bulón Roscado Ø22 – 2.4m', descripcion: 'Mayor longitud, ideal para techos de galería.', precio: 18.00, img: '/assets/products/pro_05.jpg' },
        { id: 'ab-03', nombre: 'Bulón Roscado Ø25 – 3.0m', descripcion: 'Alta capacidad de carga para zonas críticas.', precio: 24.00, img: '/assets/products/pro_05.jpg' },
        { id: 'ab-04', nombre: 'Split Set Ø33 – 1.2m', descripcion: 'Instalación instantánea por fricción, sin lechada.', precio: 9.50, img: '/assets/products/pro_05.jpg' },
        { id: 'ab-05', nombre: 'Split Set Ø39 – 1.8m', descripcion: 'Mayor diámetro para taladros amplios.', precio: 13.00, img: '/assets/products/pro_05.jpg' },
        { id: 'ab-06', nombre: 'Placa de distribución 150x150mm', descripcion: 'Placa de acero para repartir la carga del bulón.', precio: 4.20, img: '/assets/products/pro_05.jpg' },
      ]
    },
    {
      link: '3-taphole-drilling-tools',
      titulo: 'Herramientas de Perforación de Piqueras',
      descripcion: 'Ideales para terrenos arcillosos, permiten controlar la profundidad y ángulo de perforación.',
      img: '/assets/products/pro_06.jpg',
      items: [
        { id: 'tp-01', nombre: 'Barra Piquera Hex22 – 3.0m', descripcion: 'Acero especial resistente a altas temperaturas.', precio: 65.00, img: '/assets/products/pro_06.jpg' },
        { id: 'tp-02', nombre: 'Barra Piquera Hex25 – 4.0m', descripcion: 'Para hornos de mayor profundidad de piquera.', precio: 88.00, img: '/assets/products/pro_06.jpg' },
        { id: 'tp-03', nombre: 'Broca Piquera Cruz 38mm', descripcion: 'Broca especial anti-adherente para masa fundida.', precio: 42.00, img: '/assets/products/pro_06.jpg' },
        { id: 'tp-04', nombre: 'Broca Piquera Cruz 42mm', descripcion: 'Mayor diámetro para alto hornos de gran caudal.', precio: 55.00, img: '/assets/products/pro_06.jpg' },
      ]
    },
    {
      link: '5-quarry-drilling-tools',
      titulo: 'Herramientas de Perforación de Granito y Mármol',
      descripcion: 'Taladro manual Y20 para perforar barrenos en rocas de dureza media a moderada.',
      img: '/assets/products/pro_07.jpg',
      items: [
        { id: 'qr-01', nombre: 'Perforadora Manual Y20', descripcion: 'Martillo neumático ligero, 20kg, para cantera.', precio: 780.00, img: '/assets/products/pro_07.jpg' },
        { id: 'qr-02', nombre: 'Perforadora Manual Y24', descripcion: 'Mayor potencia, 24kg, para granito duro.', precio: 950.00, img: '/assets/products/pro_07.jpg' },
        { id: 'qr-03', nombre: 'Broca Cruz Hex22 – 34mm', descripcion: 'Para perforadora Y20, roca de dureza media.', precio: 22.00, img: '/assets/products/pro_07.jpg' },
        { id: 'qr-04', nombre: 'Broca Cruz Hex25 – 38mm', descripcion: 'Mayor diámetro, granito y cuarcita.', precio: 28.00, img: '/assets/products/pro_07.jpg' },
        { id: 'qr-05', nombre: 'Barra Integral Hex22 – 400mm', descripcion: 'Barra corta para initiation en cantera.', precio: 18.00, img: '/assets/products/pro_07.jpg' },
      ]
    },
    {
      link: 'others',
      titulo: 'Otros Productos',
      descripcion: 'Rectificadoras para afilar los bordes de corte de las brocas y otros accesorios.',
      img: '/assets/products/pro_08.jpg',
      items: [
        { id: 'ot-01', nombre: 'Rectificadora Neumática XT-1', descripcion: 'Para botones Ø8–Ø16mm, 12,000 rpm, portátil.', precio: 340.00, img: '/assets/products/pro_08.jpg' },
        { id: 'ot-02', nombre: 'Muela Diamante Ø8mm', descripcion: 'Repuesto para rectificadora, CBN premium.', precio: 15.00, img: '/assets/products/pro_08.jpg' },
        { id: 'ot-03', nombre: 'Muela Diamante Ø12mm', descripcion: 'Para botones grandes, larga durabilidad.', precio: 22.00, img: '/assets/products/pro_08.jpg' },
        { id: 'ot-04', nombre: 'Aceite para Roca ISO VG 100 – 5L', descripcion: 'Lubricante especial para perforadoras neumáticas.', precio: 38.00, img: '/assets/products/pro_08.jpg' },
        { id: 'ot-05', nombre: 'Llave de Montaje T38', descripcion: 'Llave especial para montaje/desmontaje de barras T38.', precio: 28.00, img: '/assets/products/pro_08.jpg' },
        { id: 'ot-06', nombre: 'Kit Mantenimiento Martillo DTH', descripcion: 'Pistón + válvula + sellos para revisión completa.', precio: 95.00, img: '/assets/products/pro_08.jpg' },
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public carrito: CarritoService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.categoria = this.catalogo.find(c => c.link === slug) ?? this.catalogo[0];
  }

  agregarAlCarrito(item: ProductoItem) {
    this.carrito.agregar({
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      img: item.img,
      categoria: this.categoria.titulo
    });
    // feedback visual
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