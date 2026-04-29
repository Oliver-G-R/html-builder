import type { Exercise } from '../types/exercises';

export const exercisesBySection: Record<number, Exercise[]> = {
  1: [
    {
      type: 'drag-structure',
      availableTags: [
        { id: 'html', label: '<HTML>', category: 'structure' },
        { id: 'head', label: '<HEAD>', category: 'structure' },
        { id: 'title', label: '<TITLE>', category: 'structure' },
        { id: 'body', label: '<BODY>', category: 'structure' },
        { id: 'p', label: '<P>', category: 'text' },
        { id: 'br', label: '<BR>', category: 'text' },
      ],
      slots: [
        { id: 's1', label: 'Etiqueta raíz', expectedTagId: 'html', indent: 0 },
        { id: 's2', label: 'Cabecera', expectedTagId: 'head', indent: 1 },
        { id: 's3', label: 'Título de página', expectedTagId: 'title', indent: 2 },
        { id: 's4', label: 'Cuerpo', expectedTagId: 'body', indent: 1 },
      ],
      explanation: 'La estructura básica de HTML tiene: <HTML> como raíz, <HEAD> para metadatos, <TITLE> para el título y <BODY> para el contenido visible.',
    },
    {
      type: 'multiple-choice',
      question: '¿Qué significa la sigla HTML?',
      answers: [
        { id: 'a1', text: 'HyperText Markup Language', correct: true },
        { id: 'a2', text: 'High Transfer Machine Language', correct: false },
        { id: 'a3', text: 'HyperText Machine Learning', correct: false },
        { id: 'a4', text: 'Home Tool Markup Language', correct: false },
      ],
      explanation: 'HTML significa HyperText Markup Language (Lenguaje de Marcado de HiperTexto). No es un lenguaje de programación, sino de marcado.',
    },
    {
      type: 'true-false',
      statement: 'HTML distingue entre mayúsculas y minúsculas, por lo tanto <BODY> y <body> son etiquetas diferentes.',
      correct: false,
      explanation: '¡Falso! HTML NO distingue entre mayúsculas y minúsculas. <BODY>, <body> y <Body> son exactamente la misma etiqueta.',
    },
  ],
  2: [
    {
      type: 'match-pairs',
      pairs: [
        { tagId: 'b', tagLabel: '<B>', descriptionId: 'd1', description: 'Texto en negrita' },
        { tagId: 'i', tagLabel: '<I>', descriptionId: 'd2', description: 'Texto en cursiva' },
        { tagId: 'u', tagLabel: '<U>', descriptionId: 'd3', description: 'Texto subrayado' },
        { tagId: 'hr', tagLabel: '<HR>', descriptionId: 'd4', description: 'Línea horizontal' },
        { tagId: 'br', tagLabel: '<BR>', descriptionId: 'd5', description: 'Salto de línea' },
      ],
      explanation: 'Estas son las etiquetas básicas de formato de texto en HTML. <BR> y <HR> son etiquetas vacías (no necesitan cierre).',
    },
    {
      type: 'multiple-choice',
      question: '¿Cuál etiqueta produce texto en negrita?',
      answers: [
        { id: 'a1', text: '<B>', correct: true },
        { id: 'a2', text: '<N>', correct: false },
        { id: 'a3', text: '<BOLD>', correct: false },
        { id: 'a4', text: '<STRONG>', correct: false },
      ],
      explanation: 'En HTML básico, la etiqueta <B> (Bold) produce texto en negrita. Ejemplo: <B>este texto es negrita</B>.',
    },
    {
      type: 'true-false',
      statement: 'La etiqueta <BR> necesita una etiqueta de cierre como </BR>.',
      correct: false,
      explanation: '¡Falso! <BR> es una etiqueta vacía. No necesita cierre. Lo mismo ocurre con <HR> y <IMG>.',
    },
  ],
  3: [
    {
      type: 'drag-structure',
      availableTags: [
        { id: 'font', label: '<FONT>', category: 'style' },
        { id: 'size_attr', label: 'SIZE="4"', category: 'style' },
        { id: 'color_attr', label: 'COLOR="#FF0000"', category: 'style' },
        { id: 'face_attr', label: 'FACE="Arial"', category: 'style' },
        { id: 'b', label: '<B>', category: 'text' },
      ],
      slots: [
        { id: 's1', label: 'Etiqueta de fuente', expectedTagId: 'font', indent: 0 },
        { id: 's2', label: 'Tamaño (1-7)', expectedTagId: 'size_attr', indent: 1 },
        { id: 's3', label: 'Color hexadecimal', expectedTagId: 'color_attr', indent: 1 },
        { id: 's4', label: 'Tipo de fuente', expectedTagId: 'face_attr', indent: 1 },
      ],
      explanation: 'La etiqueta <FONT> acepta tres atributos principales: SIZE (tamaño 1-7), COLOR (código hexadecimal) y FACE (nombre de la fuente).',
    },
    {
      type: 'multiple-choice',
      question: '¿Qué código hexadecimal representa el color ROJO?',
      answers: [
        { id: 'a1', text: '#FF0000', correct: true },
        { id: 'a2', text: '#00FF00', correct: false },
        { id: 'a3', text: '#0000FF', correct: false },
        { id: 'a4', text: '#FFFF00', correct: false },
      ],
      explanation: '#FF0000 es rojo (máximo rojo, nada de verde, nada de azul). #00FF00 es verde y #0000FF es azul.',
    },
    {
      type: 'true-false',
      statement: 'El atributo BGCOLOR se coloca dentro de la etiqueta <BODY> para cambiar el color de fondo de toda la página.',
      correct: true,
      explanation: '¡Correcto! Ejemplo: <BODY BGCOLOR="#FFFF00"> hace que el fondo de la página sea amarillo.',
    },
  ],
  4: [
    {
      type: 'drag-structure',
      availableTags: [
        { id: 'img', label: '<IMG>', category: 'media' },
        { id: 'src_attr', label: 'SRC="foto.jpg"', category: 'media' },
        { id: 'alt_attr', label: 'ALT="descripción"', category: 'media' },
        { id: 'width_attr', label: 'WIDTH="200"', category: 'media' },
        { id: 'height_attr', label: 'HEIGHT="150"', category: 'media' },
        { id: 'b', label: '<B>', category: 'text' },
      ],
      slots: [
        { id: 's1', label: 'Etiqueta de imagen', expectedTagId: 'img', indent: 0 },
        { id: 's2', label: 'Ruta del archivo', expectedTagId: 'src_attr', indent: 1 },
        { id: 's3', label: 'Texto alternativo', expectedTagId: 'alt_attr', indent: 1 },
        { id: 's4', label: 'Ancho en píxeles', expectedTagId: 'width_attr', indent: 1 },
      ],
      explanation: 'La etiqueta <IMG> requiere SRC (ruta de la imagen) y ALT (texto alternativo). WIDTH y HEIGHT son opcionales.',
    },
    {
      type: 'multiple-choice',
      question: '¿Qué atributo de <IMG> especifica el texto alternativo cuando la imagen no carga?',
      answers: [
        { id: 'a1', text: 'ALT', correct: true },
        { id: 'a2', text: 'TITLE', correct: false },
        { id: 'a3', text: 'DESC', correct: false },
        { id: 'a4', text: 'TEXT', correct: false },
      ],
      explanation: 'El atributo ALT (Alternative) muestra un texto cuando la imagen no puede cargarse. También es importante para accesibilidad.',
    },
    {
      type: 'true-false',
      statement: 'El formato GIF puede mostrar animaciones, mientras que JPEG no puede.',
      correct: true,
      explanation: '¡Correcto! GIF soporta hasta 256 colores, transparencia y animación. JPEG usa compresión variable y soporta millones de colores, pero no animaciones.',
    },
  ],
  5: [
    {
      type: 'drag-structure',
      availableTags: [
        { id: 'ol', label: '<OL>', category: 'list' },
        { id: 'li1', label: '<LI>Primero</LI>', category: 'list' },
        { id: 'li2', label: '<LI>Segundo</LI>', category: 'list' },
        { id: 'li3', label: '<LI>Tercero</LI>', category: 'list' },
        { id: 'ol_close', label: '</OL>', category: 'list' },
        { id: 'ul', label: '<UL>', category: 'list' },
      ],
      slots: [
        { id: 's1', label: 'Inicio de lista ordenada', expectedTagId: 'ol', indent: 0 },
        { id: 's2', label: 'Primer elemento', expectedTagId: 'li1', indent: 1 },
        { id: 's3', label: 'Segundo elemento', expectedTagId: 'li2', indent: 1 },
        { id: 's4', label: 'Tercer elemento', expectedTagId: 'li3', indent: 1 },
        { id: 's5', label: 'Cierre de lista', expectedTagId: 'ol_close', indent: 0 },
      ],
      explanation: '<OL> (Ordered List) crea una lista numerada. Cada elemento va dentro de <LI> (List Item). La lista DEBE cerrarse con </OL>.',
    },
    {
      type: 'multiple-choice',
      question: '¿Qué tipo de lista usa numeración automática?',
      answers: [
        { id: 'a1', text: '<OL> (Ordered List)', correct: true },
        { id: 'a2', text: '<UL> (Unordered List)', correct: false },
        { id: 'a3', text: '<DL> (Definition List)', correct: false },
        { id: 'a4', text: '<LI> (List Item)', correct: false },
      ],
      explanation: '<OL> produce una lista ordenada con números (1, 2, 3...). <UL> produce una lista con viñetas (•).',
    },
    {
      type: 'true-false',
      statement: 'En una lista de definición (<DL>), el elemento <DT> contiene el término y <DD> contiene la definición.',
      correct: true,
      explanation: '¡Correcto! DT = Definition Term (término) y DD = Definition Description (descripción/definición). Ambos van dentro de <DL>.',
    },
  ],
  6: [
    {
      type: 'drag-structure',
      availableTags: [
        { id: 'a', label: '<A', category: 'link' },
        { id: 'href_attr', label: 'HREF="pagina.html"', category: 'link' },
        { id: 'target_attr', label: 'TARGET="_BLANK">', category: 'link' },
        { id: 'a_close', label: '</A>', category: 'link' },
        { id: 'img', label: '<IMG>', category: 'media' },
        { id: 'b', label: '<B>', category: 'text' },
      ],
      slots: [
        { id: 's1', label: 'Inicio de etiqueta enlace', expectedTagId: 'a', indent: 0 },
        { id: 's2', label: 'Destino del enlace', expectedTagId: 'href_attr', indent: 1 },
        { id: 's3', label: 'Abrir en nueva pestaña (cierra la etiqueta)', expectedTagId: 'target_attr', indent: 1 },
        { id: 's4', label: 'Cierre del enlace', expectedTagId: 'a_close', indent: 0 },
      ],
      explanation: 'La etiqueta <A> (Anchor) crea enlaces. HREF define el destino. TARGET="_BLANK" abre en nueva pestaña. El enlace debe cerrarse con </A>.',
    },
    {
      type: 'multiple-choice',
      question: '¿Qué valor de TARGET abre el enlace en una nueva pestaña del navegador?',
      answers: [
        { id: 'a1', text: '_BLANK', correct: true },
        { id: 'a2', text: '_NEW', correct: false },
        { id: 'a3', text: '_SELF', correct: false },
        { id: 'a4', text: '_TOP', correct: false },
      ],
      explanation: '_BLANK abre en nueva pestaña/ventana. _SELF es la misma ventana (por defecto). _PARENT es la ventana padre. _TOP ocupa toda la pantalla.',
    },
    {
      type: 'true-false',
      statement: 'Para crear un enlace a un correo electrónico, el valor de HREF debe comenzar con "mailto:".',
      correct: true,
      explanation: '¡Correcto! Ejemplo: <A HREF="mailto:correo@ejemplo.com">Envíame un correo</A>. El navegador abrirá el cliente de correo del usuario.',
    },
  ],
  7: [
    {
      type: 'drag-structure',
      availableTags: [
        { id: 'table', label: '<TABLE>', category: 'table' },
        { id: 'tr', label: '<TR>', category: 'table' },
        { id: 'td1', label: '<TD>Nombre</TD>', category: 'table' },
        { id: 'td2', label: '<TD>Edad</TD>', category: 'table' },
        { id: 'tr_close', label: '</TR>', category: 'table' },
        { id: 'table_close', label: '</TABLE>', category: 'table' },
        { id: 'th', label: '<TH>', category: 'table' },
      ],
      slots: [
        { id: 's1', label: 'Inicio de tabla', expectedTagId: 'table', indent: 0 },
        { id: 's2', label: 'Inicio de fila', expectedTagId: 'tr', indent: 1 },
        { id: 's3', label: 'Primera celda', expectedTagId: 'td1', indent: 2 },
        { id: 's4', label: 'Segunda celda', expectedTagId: 'td2', indent: 2 },
        { id: 's5', label: 'Cierre de fila', expectedTagId: 'tr_close', indent: 1 },
        { id: 's6', label: 'Cierre de tabla', expectedTagId: 'table_close', indent: 0 },
      ],
      explanation: 'Una tabla HTML se construye con <TABLE>, filas <TR> y celdas <TD>. Cada etiqueta que abre debe cerrarse: </TR> cierra la fila y </TABLE> cierra la tabla.',
    },
    {
      type: 'multiple-choice',
      question: '¿Qué etiqueta define una FILA en una tabla HTML?',
      answers: [
        { id: 'a1', text: '<TR>', correct: true },
        { id: 'a2', text: '<TD>', correct: false },
        { id: 'a3', text: '<ROW>', correct: false },
        { id: 'a4', text: '<TH>', correct: false },
      ],
      explanation: '<TR> (Table Row) define una fila. <TD> (Table Data) define una celda dentro de la fila. <TH> es celda de encabezado.',
    },
    {
      type: 'true-false',
      statement: 'El atributo COLSPAN permite que una celda ocupe múltiples columnas.',
      correct: true,
      explanation: '¡Correcto! COLSPAN="2" hace que la celda ocupe 2 columnas. ROWSPAN hace lo mismo pero para filas. Son útiles para crear tablas complejas.',
    },
  ],
  8: [
    {
      type: 'drag-structure',
      availableTags: [
        { id: 'marquee', label: '<MARQUEE', category: 'marquee' },
        { id: 'dir_attr', label: 'direction="left"', category: 'marquee' },
        { id: 'beh_attr', label: 'behavior="scroll"', category: 'marquee' },
        { id: 'bgcolor_attr', label: 'bgcolor="#FFFF00">', category: 'marquee' },
        { id: 'marquee_close', label: '</MARQUEE>', category: 'marquee' },
        { id: 'b', label: '<B>', category: 'text' },
      ],
      slots: [
        { id: 's1', label: 'Inicio de marquesina', expectedTagId: 'marquee', indent: 0 },
        { id: 's2', label: 'Dirección del movimiento', expectedTagId: 'dir_attr', indent: 1 },
        { id: 's3', label: 'Comportamiento', expectedTagId: 'beh_attr', indent: 1 },
        { id: 's4', label: 'Color de fondo (cierra la etiqueta)', expectedTagId: 'bgcolor_attr', indent: 1 },
        { id: 's5', label: 'Cierre de marquesina', expectedTagId: 'marquee_close', indent: 0 },
      ],
      explanation: '<MARQUEE> crea texto en movimiento. direction puede ser left, right, up o down. behavior puede ser scroll, slide o alternate. Debe cerrarse con </MARQUEE>.',
    },
    {
      type: 'multiple-choice',
      question: '¿Qué hace behavior="alternate" en una marquesina?',
      answers: [
        { id: 'a1', text: 'El texto rebota de un lado al otro', correct: true },
        { id: 'a2', text: 'El texto desaparece al llegar al borde', correct: false },
        { id: 'a3', text: 'El texto se mueve hacia arriba', correct: false },
        { id: 'a4', text: 'El texto parpadea', correct: false },
      ],
      explanation: 'behavior="alternate" hace que el texto rebote entre los bordes. "scroll" (por defecto) hace que el texto salga por un lado y entre por el otro. "slide" detiene el texto al llegar al borde.',
    },
    {
      type: 'true-false',
      statement: 'La dirección por defecto de una marquesina es de izquierda a derecha.',
      correct: false,
      explanation: '¡Falso! La dirección por defecto de <MARQUEE> es de DERECHA a IZQUIERDA (direction="left"). El texto entra por la derecha y sale por la izquierda.',
    },
  ],
};
