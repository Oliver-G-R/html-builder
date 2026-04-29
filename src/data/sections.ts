import type { Section } from '../types/sections';
import { exercisesBySection } from './exercises';

export const sections: Section[] = [
  {
    id: 1,
    title: 'Estructura básica',
    icon: '🏗️',
    description: 'Aprende la estructura fundamental de todo documento HTML',
    lesson: {
      intro: 'HTML (HyperText Markup Language) es el lenguaje con el que se construyen páginas web. No es un lenguaje de programación — es un lenguaje de marcado que usa etiquetas para estructurar el contenido.',
      points: [
        { title: '¿Qué es una etiqueta?', content: 'Las etiquetas son palabras clave entre corchetes angulares (<>). La mayoría tienen apertura y cierre: <ETIQUETA> contenido </ETIQUETA>', code: '<HTML>\n  <HEAD>\n    <TITLE>Mi primera página</TITLE>\n  </HEAD>\n  <BODY>\n    Hola mundo\n  </BODY>\n</HTML>' },
        { title: 'Las 3 normas fundamentales', content: '1. HTML es texto plano (se escribe en cualquier editor)\n2. NO distingue mayúsculas de minúsculas\n3. Ignora tabuladores y saltos de línea extra' },
        { title: 'Estructura obligatoria', content: 'Todo documento HTML válido debe tener estas 4 etiquetas en orden: HTML, HEAD, TITLE y BODY.' },
      ],
    },
    exercises: exercisesBySection[1],
  },
  {
    id: 2,
    title: 'Formato de texto',
    icon: '✍️',
    description: 'Domina las etiquetas para dar estilo al texto: negrita, cursiva, encabezados y más',
    lesson: {
      intro: 'HTML tiene etiquetas específicas para dar formato visual al texto. Algunas son etiquetas de "contenedor" (tienen apertura y cierre) y otras son etiquetas "vacías" (solo se abren).',
      points: [
        { title: 'Etiquetas de formato', content: '<B> negrita, <I> cursiva, <U> subrayado, <S> tachado', code: '<B>negrita</B> <I>cursiva</I> <U>subrayado</U>' },
        { title: 'Etiquetas vacías', content: '<BR> inserta un salto de línea. <HR> dibuja una línea horizontal. Estas etiquetas NO tienen cierre.', code: 'Línea 1<BR>\nLínea 2<HR>' },
        { title: 'Encabezados', content: 'Hay 6 niveles de encabezado: <H1> es el más grande y <H6> el más pequeño. Úsalos para estructurar el contenido.', code: '<H1>Título principal</H1>\n<H2>Subtítulo</H2>\n<H3>Sección</H3>' },
      ],
    },
    exercises: exercisesBySection[2],
  },
  {
    id: 3,
    title: 'Fuentes y colores',
    icon: '🎨',
    description: 'Personaliza el aspecto del texto con fuentes, tamaños y colores hexadecimales',
    lesson: {
      intro: 'Con la etiqueta <FONT> puedes cambiar la apariencia del texto: tamaño, tipo de fuente y color. Los colores en HTML se escriben en código hexadecimal.',
      points: [
        { title: 'La etiqueta FONT', content: 'SIZE acepta valores del 1 al 7. FACE acepta nombres de fuentes. COLOR acepta códigos hexadecimales.', code: '<FONT SIZE="5" COLOR="#FF0000" FACE="Arial">\n  Texto rojo, grande, en Arial\n</FONT>' },
        { title: 'Colores hexadecimales', content: 'Los colores se escriben con # seguido de 6 dígitos hexadecimales (0-9 y A-F). Los primeros 2 son rojo, los siguientes verde, los últimos azul.', code: '#FF0000 = Rojo\n#00FF00 = Verde\n#0000FF = Azul\n#FFFFFF = Blanco\n#000000 = Negro\n#FFFF00 = Amarillo' },
        { title: 'Color de fondo', content: 'BGCOLOR en <BODY> cambia el color del fondo de toda la página.', code: '<BODY BGCOLOR="#1a1a2e">\n  Fondo azul oscuro\n</BODY>' },
      ],
    },
    exercises: exercisesBySection[3],
  },
  {
    id: 4,
    title: 'Imágenes',
    icon: '🖼️',
    description: 'Inserta y configura imágenes en tus páginas web',
    lesson: {
      intro: 'La etiqueta <IMG> permite insertar imágenes en la página. Es una etiqueta vacía (no necesita cierre) y tiene varios atributos importantes.',
      points: [
        { title: 'Atributos de IMG', content: 'SRC (obligatorio): ruta de la imagen. ALT: texto alternativo. WIDTH y HEIGHT: dimensiones en píxeles. BORDER: grosor del borde.', code: '<IMG SRC="/logo.svg"\n     ALT="Logo HTML Builder"\n     WIDTH="80"\n     HEIGHT="80"\n     BORDER="2">' },
        { title: 'GIF vs JPEG', content: 'GIF: hasta 256 colores, admite transparencia y animaciones. Bueno para logos y gráficos.\nJPEG: millones de colores, compresión variable. Mejor para fotografías.' },
        { title: 'Imágenes como enlaces', content: 'Puedes usar una imagen como enlace envolviendo <IMG> dentro de <A>.', code: '<A HREF="pagina.html">\n  <IMG SRC="/logo.svg" WIDTH="60" HEIGHT="60">\n</A>' },
      ],
    },
    exercises: exercisesBySection[4],
  },
  {
    id: 5,
    title: 'Listas',
    icon: '📋',
    description: 'Organiza información con listas ordenadas, desordenadas y de definición',
    lesson: {
      intro: 'HTML tiene tres tipos de listas para organizar información: ordenadas (con números), desordenadas (con viñetas) y de definición (términos con sus definiciones).',
      points: [
        { title: 'Lista ordenada <OL>', content: 'Crea una lista numerada automáticamente. Cada elemento va en <LI>.', code: '<OL>\n  <LI>Primero</LI>\n  <LI>Segundo</LI>\n  <LI>Tercero</LI>\n</OL>' },
        { title: 'Lista desordenada <UL>', content: 'Crea una lista con viñetas (puntos). Cada elemento también usa <LI>.', code: '<UL>\n  <LI>Manzana</LI>\n  <LI>Naranja</LI>\n  <LI>Fresa</LI>\n</UL>' },
        { title: 'Lista de definición <DL>', content: 'Tiene términos (<DT>) y definiciones (<DD>). Útil para glosarios.', code: '<DL>\n  <DT>HTML</DT>\n  <DD>Lenguaje de marcado web</DD>\n  <DT>CSS</DT>\n  <DD>Hojas de estilo en cascada</DD>\n</DL>' },
      ],
    },
    exercises: exercisesBySection[5],
  },
  {
    id: 6,
    title: 'Enlaces',
    icon: '🔗',
    description: 'Crea hipervínculos para navegar entre páginas y sitios web',
    lesson: {
      intro: 'Los enlaces (hipervínculos) son la esencia de la web. La etiqueta <A> (Anchor) permite crear links a otras páginas, archivos, secciones o correos electrónicos.',
      points: [
        { title: 'Tipos de enlaces', content: 'A otra página del mismo sitio: HREF="otra_pagina.html"\nA un sitio externo: HREF="https://www.google.com"\nA un correo: HREF="mailto:correo@ejemplo.com"\nA una sección de la misma página: HREF="#seccion"', code: '<A HREF="pagina.html">Ir a página</A>\n<A HREF="mailto:yo@correo.com">Email</A>' },
        { title: 'Atributo TARGET', content: '_BLANK: abre en nueva pestaña\n_SELF: misma ventana (por defecto)\n_PARENT: ventana padre\n_TOP: pantalla completa', code: '<A HREF="https://google.com"\n   TARGET="_BLANK">\n  Abrir Google en nueva pestaña\n</A>' },
      ],
    },
    exercises: exercisesBySection[6],
  },
  {
    id: 7,
    title: 'Tablas',
    icon: '📊',
    description: 'Estructura datos en filas y columnas con las tablas HTML',
    lesson: {
      intro: 'Las tablas permiten organizar información en filas y columnas. Son útiles para mostrar datos estructurados, horarios, comparaciones, etc.',
      points: [
        { title: 'Estructura básica', content: '<TABLE> es el contenedor. <TR> define cada fila. <TD> define cada celda. <TH> es celda de encabezado (negrita y centrado).', code: '<TABLE BORDER="1">\n  <TR>\n    <TH>Nombre</TH>\n    <TH>Edad</TH>\n  </TR>\n  <TR>\n    <TD>Ana</TD>\n    <TD>15</TD>\n  </TR>\n</TABLE>' },
        { title: 'Fusionar celdas', content: 'COLSPAN une celdas horizontalmente. ROWSPAN une celdas verticalmente. Son muy útiles para diseños complejos.', code: '<TD COLSPAN="2">Celda doble</TD>\n<TD ROWSPAN="3">Celda alta</TD>' },
        { title: 'Atributos de tabla', content: 'BORDER: grosor del borde. BGCOLOR: color de fondo. WIDTH: ancho. ALIGN: alineación (left/center/right). CELLPADDING: espacio interior. CELLSPACING: espacio entre celdas.' },
      ],
    },
    exercises: exercisesBySection[7],
  },
  {
    id: 8,
    title: 'Marquesinas',
    icon: '📺',
    description: 'Añade texto en movimiento con la etiqueta MARQUEE',
    lesson: {
      intro: 'La etiqueta <MARQUEE> crea texto que se mueve automáticamente. Aunque ya no se recomienda en HTML moderno, es parte del HTML clásico que se enseña en este curso.',
      points: [
        { title: 'Atributos principales', content: 'direction: left (↑default), right, up, down\nbehavior: scroll (por defecto), slide, alternate\nbgcolor: color de fondo de la marquesina', code: '<MARQUEE direction="left"\n         behavior="alternate"\n         bgcolor="#FFFF00">\n  ¡Texto en movimiento!\n</MARQUEE>' },
        { title: 'Tipos de comportamiento', content: 'scroll: el texto entra por un lado y sale por el otro (bucle infinito)\nslide: el texto se detiene al llegar al borde\nalternate: el texto rebota de lado a lado' },
      ],
    },
    exercises: exercisesBySection[8],
  },
];
