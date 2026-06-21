import { CommonModule, KeyValuePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

export interface Variante {
  nombre: string;
  descripcion: string;
  descripcionLarga?: string;
  img: string;
  imgDetalle?: string;
  specs?: { [key: string]: string };
}

export interface Aplicacion {
  nombre: string;
  descripcion: string;
  icono?: string;
}

export interface ProductoDetalle {
  titulo: string;
  descripcion: string;
  descripcionLarga: string;
  img: string;
  imgBanner?: string;
  link: string;
  puntosClave: string[];
  variantes?: Variante[];
  aplicaciones?: Aplicacion[];
}

@Component({
  selector: 'app-vista-producto',
  imports: [CommonModule, RouterLink, KeyValuePipe],
  templateUrl: './vista-producto.component.html',
  styleUrl: './vista-producto.component.css'
})
export class VistaProductoComponent implements OnInit {
  varianteActiva = 0;
  producto!: ProductoDetalle;

  // Catálogo completo — en un proyecto real esto vendría de un servicio
  private catalogo: ProductoDetalle[] = [
    {
      link: '1-top-hammer-drilling-tools',
      titulo: 'Herramientas de Perforación con Martillo en Cabeza',
      descripcion: 'Amplia gama de herramientas diseñadas para entregar una excelente fuerza de impacto a las rocas.',
      descripcionLarga:
        'Las herramientas de perforación con martillo en cabeza de Maxdrill están fabricadas con acero de alta aleación y carburo de tungsteno de grado superior, garantizando una vida útil prolongada y un rendimiento constante en las condiciones más exigentes. Son ideales para minería, construcción de túneles, canteras y obras civiles.',
      img: '/assets/products/pro_01.jpg',
      puntosClave: [
        'Fabricadas en acero de alta aleación y carburo de tungsteno',
        'Alta resistencia al desgaste y la corrosión',
        'Compatibles con los principales equipos del mercado',
        'Disponibles en múltiples diámetros y configuraciones',
        'Proceso de fabricación certificado ISO 9001'
      ],
      variantes: [
        {
          nombre: 'Barras de Perforación',
          descripcion: 'Barras hexagonales y redondas para perforación integrada.',
          descripcionLarga: 'Fabricadas con acero tratado térmicamente para máxima resistencia a torsión y flexión. Disponibles en longitudes de 1 a 6 metros.',
          img: '/assets/products/pro_01.jpg',
          specs: {
            'Material': 'Acero 23CrNi3Mo',
            'Diámetro': '22 – 39 mm',
            'Longitudes': '1.0 – 6.1 m',
            'Rosca': 'T38 / T45 / T51',
            'Norma': 'ISO 9001:2015'
          }
        },
        {
          nombre: 'Brocas de Botón',
          descripcion: 'Brocas con insertos de carburo esférico de alto rendimiento.',
          descripcionLarga: 'Insertos de carburo de tungsteno prensado en caliente para máxima penetración en roca dura y media.',
          img: '/assets/products/pro_01.jpg',
          specs: {
            'Material botones': 'WC-Co (grado K44)',
            'Diámetro': '32 – 89 mm',
            'Tipo rosca': 'R22 / R25 / T38 / T45',
            'Perforación': 'Roca dura / media',
            'Acabado': 'Cincado tricromático'
          }
        },
        {
          nombre: 'Shank Adaptors',
          descripcion: 'Adaptadores para unir la barra a la perforadora.',
          descripcionLarga: 'Mecanizados con tolerancias estrechas para transmitir la energía de impacto con mínimas pérdidas.',
          img: '/assets/products/pro_01.jpg',
          specs: {
            'Material': 'Acero bonificado 23CrNi3Mo',
            'Modelos': 'HL35 / HL38D / COP1038 / T38',
            'Tratamiento': 'Temple y revenido + nitruración',
            'Rosca salida': 'T38 / T45 / T51',
            'Garantía': '6 meses'
          }
        }
      ],
      aplicaciones: [
        { nombre: 'Minería Subterránea', descripcion: 'Perforación de bancos, galerías y chimeneas con alta precisión.' },
        { nombre: 'Canteras', descripcion: 'Extracción de bloques de granito, mármol y piedra caliza.' },
        { nombre: 'Obras Civiles', descripcion: 'Perforación para voladuras controladas en túneles y carreteras.' },
        { nombre: 'Pozos de Agua', descripcion: 'Perforación de pozos en formaciones rocosas de dureza variable.' }
      ]
    },
    {
      link: '2-dth-drilling-tools',
      titulo: 'Herramientas de Perforación DTH',
      descripcion: 'Proporcionan un rendimiento eficiente, reducen los costes operativos y las emisiones.',
      descripcionLarga:
        'Las herramientas DTH (Down-The-Hole) de Maxdrill transmiten el impacto directamente al fondo del pozo, logrando una perforación precisa y eficiente en roca dura. Diseñadas para minimizar la pérdida de energía y maximizar la velocidad de penetración.',
      img: '/assets/products/pro_02.jpg',
      puntosClave: [
        'Impacto directo en el fondo del pozo — mínima pérdida de energía',
        'Alta velocidad de penetración en roca dura y abrasiva',
        'Reducción de costes operativos y emisiones',
        'Diseño robusto para largas jornadas de trabajo',
        'Amplia gama de diámetros disponibles'
      ],
      variantes: [
        {
          nombre: 'Martillos DTH',
          descripcion: 'Martillos de alto rendimiento para perforación profunda.',
          descripcionLarga: 'Disponibles en presiones de trabajo de 6 a 35 bar, con pistones de alta resistencia para ciclos continuos de impacto.',
          img: '/assets/products/pro_02.jpg',
          specs: {
            'Presión de trabajo': '6 – 35 bar',
            'Diámetro': '76 – 254 mm',
            'Longitud': '600 – 1200 mm',
            'Material cuerpo': 'Acero aleado forjado',
            'Vida útil': '> 50,000 m perforados'
          }
        },
        {
          nombre: 'Brocas DTH',
          descripcion: 'Brocas de carburo para martillos DTH.',
          descripcionLarga: 'Botones balísticos y esféricos de carburo de tungsteno, con cabeza de acero forjado para máxima durabilidad.',
          img: '/assets/products/pro_02.jpg',
          specs: {
            'Diámetro': '76 – 254 mm',
            'Tipo botones': 'Balístico / Esférico',
            'Material': 'WC-Co premium',
            'Compatibilidad': 'Todos los martillos DTH estándar',
            'Acabado': 'Fosfatado + lubricado'
          }
        }
      ],
      aplicaciones: [
        { nombre: 'Perforación de Pozos', descripcion: 'Pozos de agua, petróleo y gas en formaciones duras.' },
        { nombre: 'Minería a Cielo Abierto', descripcion: 'Voladuras de gran diámetro con alta productividad.' },
        { nombre: 'Geotermia', descripcion: 'Perforación profunda para sistemas de energía geotérmica.' },
        { nombre: 'Cimentaciones', descripcion: 'Micropilotes y anclajes en terreno rocoso.' }
      ]
    },
    {
      link: '2-4-overburden-drilling-system',
      titulo: 'Herramientas de Perforación en Sobrecarga',
      descripcion: 'Sistema ideal para perforar agujeros en formaciones rocosas complejas con distintos tamaños disponibles.',
      descripcionLarga:
        'El sistema de perforación en sobrecarga (Overburden) de Maxdrill permite avanzar simultáneamente a través de suelos blandos y roca dura, entubando el pozo al mismo tiempo que se perfora, evitando derrumbes y garantizando la integridad del agujero.',
      img: '/assets/products/pro_03.jpg',
      puntosClave: [
        'Perforación y entubación simultáneas',
        'Ideal para terrenos mixtos blandos y duros',
        'Evita derrumbes durante la perforación',
        'Compatible con equipos DTH estándar',
        'Disponible en múltiples diámetros de entubación'
      ],
      variantes: [
        {
          nombre: 'Sistema OD',
          descripcion: 'Sistema de doble tubo para sobrecarga.',
          descripcionLarga: 'Tubo exterior e interior que trabajan en conjunto para penetrar la sobrecarga mientras protegen el pozo.',
          img: '/assets/products/pro_03.jpg',
          specs: {
            'Diámetro exterior': '114 – 406 mm',
            'Sistema': 'Doble tubo rotativo',
            'Compatibilidad': 'Martillos DTH Ø76 – 254',
            'Material tubería': 'Acero S355',
            'Longitudes tramo': '1.0 / 1.5 / 3.0 m'
          }
        }
      ],
      aplicaciones: [
        { nombre: 'Terrenos Mixtos', descripcion: 'Suelos con capas alternadas de arcilla, grava y roca.' },
        { nombre: 'Pozos de Agua', descripcion: 'Pozos profundos en zonas con riesgo de derrumbe.' },
        { nombre: 'Pilotaje', descripcion: 'Cimentaciones profundas en terreno inestable.' },
        { nombre: 'Rescate y Emergencias', descripcion: 'Perforación rápida en operaciones de rescate minero.' }
      ]
    },
    {
      link: '4-rotary-drill-bits',
      titulo: 'Brocas Rotatorias',
      descripcion: 'Brocas rotatorias para formaciones blandas como arena, arcilla o piedra blanda.',
      descripcionLarga:
        'Las brocas rotatorias de Maxdrill están diseñadas para perforación en formaciones de dureza baja a media. Su geometría optimizada y los materiales de corte de última generación garantizan alta tasa de penetración con mínimo desgaste.',
      img: '/assets/products/pro_04.jpg',
      puntosClave: [
        'Diseño optimizado para formaciones blandas a medias',
        'Alta tasa de penetración con bajo consumo energético',
        'Dientes de acero o insertos de carburo según la formación',
        'Amplia gama de conexiones API disponibles',
        'Resistentes a la abrasión y la fatiga'
      ],
      variantes: [
        {
          nombre: 'Brocas de Dientes de Acero',
          descripcion: 'Para formaciones muy blandas: arcilla, arena y yeso.',
          descripcionLarga: 'Dientes fresados en la propia masa del cono, con geometría agresiva para máxima velocidad de penetración en terrenos blandos.',
          img: '/assets/products/pro_04.jpg',
          specs: {
            'Tipo': 'Tricono dientes de acero',
            'Diámetro': '98 – 445 mm',
            'Formación IADC': 'M1 – M3',
            'Rodamiento': 'Sellado / lubricado',
            'Conexión': 'API REG / IF'
          }
        },
        {
          nombre: 'Brocas de Insertos de Carburo',
          descripcion: 'Para formaciones medias a duras: caliza, dolomita.',
          descripcionLarga: 'Insertos cilíndricos de carburo de tungsteno prensados en caliente para mayor durabilidad en formaciones abrasivas.',
          img: '/assets/products/pro_04.jpg',
          specs: {
            'Tipo': 'Tricono insertos WC',
            'Diámetro': '98 – 445 mm',
            'Formación IADC': 'H1 – H4',
            'Rodamiento': 'Sellado de alta temperatura',
            'Conexión': 'API REG / IF / NC'
          }
        }
      ],
      aplicaciones: [
        { nombre: 'Perforación de Petróleo y Gas', descripcion: 'Pozos en formaciones sedimentarias blandas.' },
        { nombre: 'Pozos de Agua', descripcion: 'Perforación en suelos arenosos y arcillosos.' },
        { nombre: 'Minería', descripcion: 'Tiros de voladura en roca blanda a media.' },
        { nombre: 'Geotecnia', descripcion: 'Sondeos de exploración y muestreo.' }
      ]
    },
    {
      link: '5-anchor-bolts',
      titulo: 'Bulones de Anclaje',
      descripcion: 'Solución básica para el atornillado en entornos inestables, ideales en zonas de fractura.',
      descripcionLarga:
        'Los bulones de anclaje de Maxdrill son elementos de sostenimiento fundamentales en minería subterránea y obras civiles. Fabricados en acero de alta resistencia, proporcionan estabilización efectiva en zonas de roca fracturada o con riesgo de desprendimientos.',
      img: '/assets/products/pro_05.jpg',
      puntosClave: [
        'Acero de alta resistencia: límite elástico ≥ 500 MPa',
        'Disponibles en versiones roscadas, split set y swellex',
        'Instalación rápida con equipos estándar de minería',
        'Alta capacidad de carga axial y de corte',
        'Resistentes a la corrosión con recubrimiento epoxi o galvanizado'
      ],
      variantes: [
        {
          nombre: 'Bulón Roscado',
          descripcion: 'Perno de roca con placa y tuerca de apriete.',
          descripcionLarga: 'Sistema de anclaje mecánico con expansión en el extremo interior, placa de distribución de carga y tuerca de apriete. Instalación en seco o con lechada de cemento.',
          img: '/assets/products/pro_05.jpg',
          specs: {
            'Diámetro': '20 – 32 mm',
            'Longitud': '1.2 – 6.0 m',
            'Acero': 'ASTM A615 Gr.60 / Gr.75',
            'Carga rotura': '≥ 200 kN',
            'Recubrimiento': 'Epoxi / galvanizado'
          }
        },
        {
          nombre: 'Split Set',
          descripcion: 'Tubo ranurado de fricción para instalación instantánea.',
          descripcionLarga: 'Tubo de acero ranurado que se introduce a presión en el taladro, creando una fricción uniforme a lo largo de toda su longitud. Sin lechada, instalación inmediata.',
          img: '/assets/products/pro_05.jpg',
          specs: {
            'Diámetro': '33 / 39 / 46 mm',
            'Longitud': '0.9 – 2.4 m',
            'Espesor pared': '3.5 mm',
            'Acero': 'Acero de alta resistencia',
            'Carga admisible': '80 – 120 kN'
          }
        }
      ],
      aplicaciones: [
        { nombre: 'Sostenimiento de Galerías', descripcion: 'Estabilización de techos y hastiales en minería subterránea.' },
        { nombre: 'Taludes', descripcion: 'Estabilización de cortes en roca fracturada para obras viales.' },
        { nombre: 'Túneles', descripcion: 'Sostenimiento primario durante la excavación.' },
        { nombre: 'Cavernas', descripcion: 'Anclaje en grandes excavaciones subterráneas.' }
      ]
    },
    {
      link: '3-taphole-drilling-tools',
      titulo: 'Herramientas de Perforación de Piqueras',
      descripcion: 'Ideales para terrenos arcillosos, permiten controlar la profundidad y ángulo de perforación.',
      descripcionLarga:
        'Las herramientas de piquera de Maxdrill están diseñadas para la apertura y cierre de los orificios de colada en hornos de fundición de hierro y acero. Fabricadas con materiales resistentes al calor extremo y a la abrasión del material fundido.',
      img: '/assets/products/pro_06.jpg',
      puntosClave: [
        'Resistencia a temperaturas de hasta 1600 °C',
        'Barras y brocas especiales para masa de piquera',
        'Alta resistencia a la abrasión por escoria fundida',
        'Compatible con pistolas de piquera estándar',
        'Vida útil optimizada para reducir paradas de producción'
      ],
      variantes: [
        {
          nombre: 'Barras de Piquera',
          descripcion: 'Barras hexagonales para apertura de hornos de fundición.',
          descripcionLarga: 'Fabricadas en acero especial resistente al calor con tratamiento superficial anti-adherente. Disponibles en diferentes secciones según la pistola utilizada.',
          img: '/assets/products/pro_06.jpg',
          specs: {
            'Material': 'Acero especial caliente',
            'Sección': 'Hexagonal 22 / 25 / 29 mm',
            'Longitud': '3.0 – 6.0 m',
            'Temperatura máx.': '1600 °C',
            'Aplicación': 'Alto horno / Horno eléctrico'
          }
        }
      ],
      aplicaciones: [
        { nombre: 'Altos Hornos', descripcion: 'Apertura y cierre de piqueras de hierro y escoria.' },
        { nombre: 'Hornos Eléctricos', descripcion: 'Perforación de orificios de colada en acerías.' },
        { nombre: 'Fundición de Metales', descripcion: 'Operaciones de colada en fundiciones de hierro.' },
        { nombre: 'Siderurgia', descripcion: 'Mantenimiento de piqueras en plantas siderúrgicas.' }
      ]
    },
    {
      link: '5-quarry-drilling-tools',
      titulo: 'Herramientas de Perforación de Granito y Mármol',
      descripcion: 'Taladro manual Y20 para perforar barrenos en rocas de dureza media a moderada.',
      descripcionLarga:
        'Las herramientas para cantera de Maxdrill están especialmente desarrolladas para la extracción de bloques de piedra natural de alta calidad. Su diseño minimiza las microfracturas en el material extraído, preservando el valor comercial del bloque.',
      img: '/assets/products/pro_07.jpg',
      puntosClave: [
        'Diseño que minimiza microfracturas en el bloque extraído',
        'Brocas especiales para granito, mármol y travertino',
        'Compatible con perforadoras manuales Y20 / Y24 / Y26',
        'Alta vida útil en roca abrasiva',
        'Disponible en geometrías de corte en cruz y de botón'
      ],
      variantes: [
        {
          nombre: 'Perforadora Manual Y20',
          descripcion: 'Martillo de columna neumático para barrenos de cantera.',
          descripcionLarga: 'Perforadora de pierna neumática ligera, ideal para barrenos verticales e inclinados en granito y roca dura. Peso reducido para fácil maniobrabilidad.',
          img: '/assets/products/pro_07.jpg',
          specs: {
            'Modelo': 'Y20',
            'Peso': '20 kg',
            'Presión de aire': '0.4 – 0.6 MPa',
            'Consumo de aire': '38 L/s',
            'Diámetro broca': '32 – 42 mm'
          }
        },
        {
          nombre: 'Brocas para Cantera',
          descripcion: 'Brocas de carburo para granito y mármol.',
          descripcionLarga: 'Cabeza de corte en cruz o botón con insertos de carburo premium. Geometría optimizada para minimizar vibraciones y preservar el bloque.',
          img: '/assets/products/pro_07.jpg',
          specs: {
            'Diámetro': '32 – 52 mm',
            'Tipo corte': 'Cruz / Botón',
            'Material': 'WC-Co grado K44',
            'Rosca': 'Hex 22 / Hex 25',
            'Aplicación': 'Granito / Mármol / Cuarcita'
          }
        }
      ],
      aplicaciones: [
        { nombre: 'Extracción de Granito', descripcion: 'Barrenos de rozas y voladuras controladas para bloques.' },
        { nombre: 'Extracción de Mármol', descripcion: 'Perforación de precisión para bloques de alta calidad.' },
        { nombre: 'Piedra Caliza', descripcion: 'Canteras de caliza para construcción e industria.' },
        { nombre: 'Monumentos y Escultura', descripcion: 'Extracción de bloques especiales para trabajo artístico.' }
      ]
    },
    {
      link: 'others',
      titulo: 'Otros Productos',
      descripcion: 'Rectificadoras para afilar los bordes de corte de las brocas y otros accesorios.',
      descripcionLarga:
        'Maxdrill ofrece una línea completa de accesorios y equipos auxiliares para el mantenimiento y optimización de las herramientas de perforación. Desde rectificadoras hasta lubricantes especiales, todo lo que necesita para maximizar la vida útil de sus herramientas.',
      img: '/assets/products/pro_08.jpg',
      puntosClave: [
        'Rectificadoras eléctricas y neumáticas para brocas',
        'Lubricantes y aceites especiales para perforación',
        'Herramientas de extracción y desmontaje',
        'Equipos de medición y control de calidad',
        'Repuestos y kits de mantenimiento'
      ],
      variantes: [
        {
          nombre: 'Rectificadora de Brocas',
          descripcion: 'Equipo para reafilar brocas de botón y cruz.',
          descripcionLarga: 'Rectificadora neumática portátil con muelas de diamante para recuperar la geometría original de los botones de carburo. Extiende hasta 3 veces la vida útil de las brocas.',
          img: '/assets/products/pro_08.jpg',
          specs: {
            'Tipo': 'Neumática portátil',
            'Presión': '0.5 – 0.7 MPa',
            'Velocidad': '12,000 – 18,000 rpm',
            'Muela': 'Diamante / CBN',
            'Brocas compatibles': 'Botón Ø7 – Ø16 mm'
          }
        },
        {
          nombre: 'Accesorios y Consumibles',
          descripcion: 'Lubricantes, adaptadores y herramientas auxiliares.',
          descripcionLarga: 'Gama completa de productos auxiliares para el mantenimiento preventivo y correctivo de equipos de perforación.',
          img: '/assets/products/pro_08.jpg',
          specs: {
            'Lubricante': 'Aceite para roca ISO VG 100',
            'Grasa': 'Grasa de carbonato cálcico',
            'Adaptadores': 'Todos los estándar de mercado',
            'Llaves': 'Juego completo para montaje',
            'Disponibilidad': 'Stock permanente'
          }
        }
      ],
      aplicaciones: [
        { nombre: 'Mantenimiento Preventivo', descripcion: 'Programas de afilado y revisión periódica de herramientas.' },
        { nombre: 'Recuperación de Brocas', descripcion: 'Rectificado de brocas desgastadas para su reutilización.' },
        { nombre: 'Almacén de Repuestos', descripcion: 'Gestión de inventario de herramientas y accesorios.' },
        { nombre: 'Formación Técnica', descripcion: 'Soporte técnico para operarios y jefes de perforación.' }
      ]
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    const encontrado = this.catalogo.find(p => p.link === slug);
    this.producto = encontrado ?? this.catalogo[0];
  }

  seleccionarVariante(index: number): void {
    this.varianteActiva = index;
  }

  irAContacto(): void {
    this.router.navigate(['/contacto']);
  }

  volver(): void {
    this.router.navigate(['/productos']);
  }
}