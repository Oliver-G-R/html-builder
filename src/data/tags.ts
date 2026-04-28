import type { Tag } from '../types/sections';

export const tags: Tag[] = [
  // Estructura
  { id: 'html', name: '<HTML>', category: 'structure', description: 'Elemento raíz del documento', example: '<HTML>...</HTML>' },
  { id: 'head', name: '<HEAD>', category: 'structure', description: 'Cabecera del documento (metadatos)', example: '<HEAD>...</HEAD>' },
  { id: 'title', name: '<TITLE>', category: 'structure', description: 'Título de la página (aparece en la pestaña)', example: '<TITLE>Mi Página</TITLE>' },
  { id: 'body', name: '<BODY>', category: 'structure', description: 'Cuerpo visible del documento', example: '<BODY>...</BODY>' },
  // Texto
  { id: 'b', name: '<B>', category: 'text', description: 'Texto en negrita', example: '<B>negrita</B>' },
  { id: 'i', name: '<I>', category: 'text', description: 'Texto en cursiva', example: '<I>cursiva</I>' },
  { id: 'u', name: '<U>', category: 'text', description: 'Texto subrayado', example: '<U>subrayado</U>' },
  { id: 's', name: '<S>', category: 'text', description: 'Texto tachado', example: '<S>tachado</S>' },
  { id: 'p', name: '<P>', category: 'text', description: 'Párrafo', example: '<P>Un párrafo</P>' },
  { id: 'br', name: '<BR>', category: 'text', description: 'Salto de línea (etiqueta vacía)', example: '<BR>' },
  { id: 'hr', name: '<HR>', category: 'text', description: 'Línea horizontal (etiqueta vacía)', example: '<HR>' },
  { id: 'h1', name: '<H1>', category: 'text', description: 'Encabezado nivel 1 (el más grande)', example: '<H1>Título</H1>' },
  { id: 'h2', name: '<H2>', category: 'text', description: 'Encabezado nivel 2', example: '<H2>Subtítulo</H2>' },
  { id: 'h6', name: '<H6>', category: 'text', description: 'Encabezado nivel 6 (el más pequeño)', example: '<H6>Encabezado pequeño</H6>' },
  // Estilo
  { id: 'font', name: '<FONT>', category: 'style', description: 'Define fuente, tamaño y color del texto', example: '<FONT SIZE="4" COLOR="#FF0000" FACE="Arial">texto</FONT>' },
  // Media
  { id: 'img', name: '<IMG>', category: 'media', description: 'Inserta una imagen (etiqueta vacía)', example: '<IMG SRC="foto.jpg" ALT="descripción">' },
  // Listas
  { id: 'ol', name: '<OL>', category: 'list', description: 'Lista ordenada (numerada)', example: '<OL><LI>Item</LI></OL>' },
  { id: 'ul', name: '<UL>', category: 'list', description: 'Lista desordenada (con viñetas)', example: '<UL><LI>Item</LI></UL>' },
  { id: 'li', name: '<LI>', category: 'list', description: 'Elemento de lista', example: '<LI>Un elemento</LI>' },
  { id: 'dl', name: '<DL>', category: 'list', description: 'Lista de definición', example: '<DL><DT>Término</DT><DD>Definición</DD></DL>' },
  { id: 'dt', name: '<DT>', category: 'list', description: 'Término en lista de definición', example: '<DT>HTML</DT>' },
  { id: 'dd', name: '<DD>', category: 'list', description: 'Definición en lista de definición', example: '<DD>Lenguaje de marcado</DD>' },
  // Enlaces
  { id: 'a', name: '<A>', category: 'link', description: 'Ancla / enlace hipertextual', example: '<A HREF="pagina.html">Ir a página</A>' },
  // Tablas
  { id: 'table', name: '<TABLE>', category: 'table', description: 'Define una tabla', example: '<TABLE BORDER="1">...</TABLE>' },
  { id: 'tr', name: '<TR>', category: 'table', description: 'Fila de tabla', example: '<TR>...</TR>' },
  { id: 'td', name: '<TD>', category: 'table', description: 'Celda de datos', example: '<TD>Dato</TD>' },
  { id: 'th', name: '<TH>', category: 'table', description: 'Celda de encabezado (negrita y centrado)', example: '<TH>Encabezado</TH>' },
  { id: 'caption', name: '<CAPTION>', category: 'table', description: 'Título de la tabla', example: '<CAPTION>Mi tabla</CAPTION>' },
  // Marquesinas
  { id: 'marquee', name: '<MARQUEE>', category: 'marquee', description: 'Texto en movimiento', example: '<MARQUEE direction="left">Texto móvil</MARQUEE>' },
];

export const tagById = (id: string): Tag | undefined => tags.find(t => t.id === id);
