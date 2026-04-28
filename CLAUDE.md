# HTML Builder - Plataforma interactiva de aprendizaje de HTML

![alt text](image.png)

## Descripción del proyecto

Aplicación web educativa estilo "Weggo.net" para estudiantes de preparatoria (15 años) del curso **Cultura Digital II**. Los alumnos aprenden HTML arrastrando bloques de etiquetas, armando estructuras, y resolviendo ejercicios interactivos con retroalimentación inmediata.

**NO es un editor de código.** Es una herramienta de aprendizaje gamificada donde los alumnos:

- Arrastran bloques de etiquetas HTML para armar estructuras correctas
- Resuelven ejercicios de verdadero/falso y opción múltiple sobre etiquetas
- Reciben retroalimentación visual inmediata (correcto/incorrecto + explicación)
- Avanzan por secciones temáticas progresivas

---

## Stack tecnológico

### Core

- **React 19** (v19.2.x) — Última versión estable
- **Vite 8** (v8.0.x) — Build tool con Rolldown integrado
- **@vitejs/plugin-react v6** — Plugin de React para Vite 8

### Drag & Drop

- **@dnd-kit/react** — Última versión del toolkit de drag & drop para React
  - Usar `useDraggable`, `useDroppable` y `DragDropProvider`
  - Documentación: https://dndkit.com/react/quickstart/
  - Instalar: `npm install @dnd-kit/react @dnd-kit/dom`

### Lenguaje

- **TypeScript** — Todo el proyecto en TypeScript estricto (`.tsx` / `.ts`)
- Usar `--template react-ts` al crear el proyecto con Vite

### Estilos

- **Tailwind CSS v4** — Framework de utilidades CSS

- Animaciones CSS custom con `@keyframes` cuando Tailwind no tenga la clase necesaria

### Estado

- **Zustand** — State manager ligero para React
  - Instalar: `npm install zustand`
  - Usar para: progreso del alumno, sección actual, estado de ejercicios
  - Un solo store principal (`useAppStore`) es suficiente para esta app

### Routing

- **React Router v7** (v7.14+) — Router estándar para React + Vite
  - Instalar: `npm install react-router`
  - Usar en modo SPA (sin SSR, sin framework mode)
  - Usar `createBrowserRouter` + `RouterProvider` para definir rutas
  - Rutas necesarias:
    - `/` — Pantalla de inicio / selección de sección
    - `/seccion/:id` — Vista de una sección con su lección y ejercicios
    - `/progreso` — Vista de progreso general (opcional)

---

## Estructura de archivos

```
src/
├── App.tsx                    # RouterProvider con las rutas definidas
├── main.tsx                   # Entry point
├── index.css                  # Import de Tailwind + @theme con variables custom
├── vite-env.d.ts              # Tipos de Vite
├── types/
│   ├── exercises.ts           # Tipos para ejercicios (Exercise, Question, Answer, etc.)
│   ├── sections.ts            # Tipos para secciones (Section, Tag, etc.)
│   └── progress.ts            # Tipos para estado de progreso
├── data/
│   ├── sections.ts            # Definición de las secciones y su contenido
│   ├── exercises.ts           # Banco de ejercicios por sección
│   └── tags.ts                # Catálogo de etiquetas HTML con sus propiedades
├── store/
│   └── useAppStore.ts         # Store de Zustand con persist (progreso, sección actual)
├── routes/
│   ├── Home.tsx               # Página de inicio con grid de secciones
│   ├── Section.tsx            # Página de sección (lección + ejercicios)
│   └── Layout.tsx             # Layout compartido (header + sidebar + outlet)
├── components/
│   ├── DragDrop/
│   │   ├── TagBlock.tsx       # Bloque arrastrable de etiqueta HTML
│   │   ├── DropZone.tsx       # Zona donde se sueltan los bloques
│   │   ├── StructureBuilder.tsx # Ejercicio de armar estructura HTML
│   │   └── TagPalette.tsx     # Paleta de bloques disponibles para arrastrar
│   ├── Exercises/
│   │   ├── TrueFalse.tsx      # Ejercicio de verdadero/falso
│   │   ├── MultipleChoice.tsx # Ejercicio de opción múltiple
│   │   ├── MatchPairs.tsx     # Ejercicio de relacionar columnas (drag)
│   │   └── FillBlank.tsx      # Ejercicio de completar el espacio
│   ├── Feedback/
│   │   ├── ResultBanner.tsx   # Banner de resultado (correcto/incorrecto)
│   │   └── Explanation.tsx    # Explicación que aparece tras responder
│   ├── Progress/
│   │   ├── ProgressBar.tsx    # Barra de progreso global
│   │   └── SectionCard.tsx    # Tarjeta de sección con estado
│   └── ui/
│       ├── Button.tsx
│       └── Modal.tsx
├── hooks/
│   └── useDragExercise.ts     # Hook para lógica de ejercicios de arrastre
└── utils/
    ├── validation.ts          # Funciones para validar respuestas
    └── confetti.ts            # Efecto de confetti simple con canvas
```

---

## Secciones de contenido (basadas en el libro de texto)

Cada sección contiene: una mini-lección visual, ejercicios interactivos, y un reto de arrastre.

### Sección 1: Estructura básica de HTML

- Qué es HTML (lenguaje de marcado, no de programación)
- Estructura: `<HTML>`, `<HEAD>`, `<TITLE>`, `<BODY>`
- Las 3 normas fundamentales (texto plano, mayúsculas/minúsculas, tabuladores ignorados)
- **Ejercicio drag:** Armar la estructura básica arrastrando bloques en el orden correcto
- **Ejercicio quiz:** ¿Qué significa HTML? (opción múltiple)

### Sección 2: Formato de texto

- Etiquetas: `<B>`, `<I>`, `<U>`, `<S>`, `<P>`, `<BR>`, `<HR>`
- Encabezados: `<H1>` a `<H6>`
- Concepto de anidar etiquetas
- **Ejercicio drag:** Relacionar etiqueta con su función (arrastrar a la columna correcta)
- **Ejercicio quiz:** ¿Cuál etiqueta produce negrita? / ¿Qué pasa si no cierro una etiqueta?

### Sección 3: Fuentes y colores

- `<FONT>` con atributos SIZE, COLOR, FACE
- `BGCOLOR` en `<BODY>`
- Códigos hexadecimales de colores (#FF0000, #00FF00, etc.)
- **Ejercicio drag:** Ordenar atributos dentro de la etiqueta FONT
- **Ejercicio quiz:** ¿Qué código de color es el rojo? / ¿Para qué sirve BGCOLOR?

### Sección 4: Imágenes

- `<IMG SRC="...">` y sus atributos: WIDTH, HEIGHT, BORDER, ALT, ALIGN
- Formatos: GIF vs JPEG
- Imágenes como enlaces, como fondo
- **Ejercicio drag:** Armar una etiqueta IMG completa con sus atributos
- **Ejercicio quiz:** ¿Qué atributo especifica texto alternativo? / Diferencia GIF vs JPEG

### Sección 5: Listas

- Lista ordenada: `<OL>` + `<LI>`
- Lista desordenada: `<UL>` + `<LI>`
- Lista de definición: `<DL>` + `<DT>` + `<DD>`
- **Ejercicio drag:** Armar una lista ordenada completa con sus elementos
- **Ejercicio quiz:** ¿Qué tipo de lista usa numeración? / ¿Cuál es la diferencia entre OL y UL?

### Sección 6: Enlaces

- `<A HREF="...">` y el atributo TARGET
- Tipos: dentro de la misma página, otra página propia, página externa, correo electrónico
- **Ejercicio drag:** Construir un enlace completo arrastrando las partes
- **Ejercicio quiz:** ¿Qué valor de TARGET abre en nueva pestaña? / ¿Qué atributo define el destino?

### Sección 7: Tablas

- `<TABLE>`, `<TR>`, `<TD>`, `<TH>`
- Atributos: BORDER, BGCOLOR, COLSPAN, ROWSPAN, WIDTH, ALIGN
- `<CAPTION>` para título de tabla
- **Ejercicio drag:** Armar una tabla de 2x2 con las etiquetas correctas
- **Ejercicio quiz:** ¿Qué etiqueta define una fila? / ¿Para qué sirve COLSPAN?

### Sección 8: Marquesinas

- `<MARQUEE>` y atributos: direction, behavior, bgcolor
- **Ejercicio drag:** Configurar una marquesina arrastrando atributos
- **Ejercicio quiz:** ¿Qué hace behavior="alternate"? / ¿En qué dirección va por defecto?

---

## Diseño visual

### Estética

- **Tema:** Estilo "builder/constructor" — los bloques de HTML parecen piezas de LEGO o bloques de construcción
- **Paleta principal:**
  - Fondo: oscuro pero no negro (#1a1a2e o similar azul muy oscuro)
  - Bloques de etiquetas: colores vivos por categoría:
    - Estructura (HTML, HEAD, BODY): azul (#4361ee)
    - Texto (B, I, U, P): verde (#06d6a0)
    - Estilo (FONT, COLOR): naranja (#f77f00)
    - Media (IMG): rosa (#ef476f)
    - Listas (OL, UL, LI): morado (#7b2cbf)
    - Enlaces (A, HREF): cyan (#00b4d8)
    - Tablas (TABLE, TR, TD): amarillo (#ffd60a)
  - Acentos: blanco para texto, bordes redondeados
- **Tipografía:** Usar Google Fonts. Sugerencias:
  - Títulos: "Fredoka", "Nunito", "Baloo 2" (redondeadas, amigables)
  - Código/etiquetas: "Fira Code", "JetBrains Mono", "Source Code Pro" (monospace)

### Bloques arrastrables

- Aspecto de piezas de LEGO/puzzle
- Tienen una pestaña superior (como los bloques de Scratch/Weggo)
- Al arrastrar: sombra elevada + escala 1.05
- Al soltar en zona correcta: animación de "encaje" (snap) + sonido de click (opcional)
- Al soltar en zona incorrecta: shake + borde rojo momentáneo

### Feedback visual

- **Correcto:** Fondo verde, icono de check, mini confetti con canvas
- **Incorrecto:** Fondo rojo, shake de 300ms, mostrar la explicación
- **Explicación:** Aparece en un card debajo del ejercicio con fondo semitransparente
- **Progreso:** Barra de progreso por sección, estrellas o badges al completar

### Responsive

- Diseñar primero para desktop (computadoras del laboratorio escolar)
- No se necesita soporte móvil, pero que no se rompa si alguien lo abre en tablet

---

## Mecánica de los ejercicios

### Ejercicio tipo "Armar estructura" (Drag & Drop)

1. Se muestra una zona de construcción vacía (DropZone)
2. A la izquierda hay una paleta con bloques de etiquetas disponibles (TagPalette)
3. Algunos bloques son distractores (no van en la solución)
4. El alumno arrastra bloques a la zona en el orden correcto
5. Al presionar "Comprobar":
   - Se valida el orden y las etiquetas usadas vs. la solución esperada
   - Feedback visual por cada bloque (verde si está bien, rojo si está mal)
   - Explicación general del resultado

### Ejercicio tipo "Verdadero o Falso"

1. Se muestra un enunciado sobre HTML
2. Dos botones grandes: VERDADERO / FALSO
3. Al seleccionar: feedback inmediato + explicación
4. Ejemplo: "La etiqueta `<BR>` necesita etiqueta de cierre" → FALSO → "BR es una etiqueta vacía, no necesita cierre."

### Ejercicio tipo "Opción múltiple"

1. Pregunta + 4 opciones (solo una correcta)
2. Al seleccionar: resaltar correcta en verde, incorrecta en rojo
3. Mostrar explicación

### Ejercicio tipo "Relacionar columnas" (Drag & Drop)

1. Columna izquierda: etiquetas HTML (arrastrables)
2. Columna derecha: descripciones (zonas de drop)
3. El alumno arrastra cada etiqueta a su descripción correcta
4. Validación al presionar "Comprobar"

---

## Lógica de progreso

```typescript
// Store de Zustand con persistencia (store/useAppStore.ts)
interface AppState {
  currentSection: number;
  sections: Record<
    number,
    { completed: boolean; score: number; total: number }
  >;
  totalScore: number;
  completeExercise: (sectionId: number, correct: boolean) => void;
  resetProgress: () => void;
}

// Usar middleware persist para guardar en localStorage automáticamente
```

- Zustand con `persist` se encarga de guardar/cargar el progreso automáticamente
- Cada sección se desbloquea al completar la anterior (o todas desbloqueadas, según preferencia del docente)
- Mostrar porcentaje de avance global en el header

---

## Reglas de desarrollo

### Lo que SÍ hacer

- **TypeScript estricto** en todo el proyecto — tipar props, estados, datos de ejercicios
- Componentes funcionales con hooks
- **Tailwind CSS** para todos los estilos — usar clases de utilidad, evitar CSS custom salvo animaciones `@keyframes`
- **Zustand** para todo el estado global (progreso, sección activa, estado de ejercicios)
- **React Router** para la navegación entre vistas
- Archivos de datos separados y tipados (`exercises.ts`, `tags.ts`) para facilitar edición del contenido
- Comentarios en español en el código
- Todo el contenido visible en la app debe estar en español
- Definir interfaces/types en `src/types/` para mantener los tipos organizados

### Lo que NO hacer

- No usar bibliotecas de UI (MUI, Chakra, Ant Design, shadcn)
- No implementar backend, API, ni autenticación
- No sobrecomplicar la arquitectura — este proyecto debe poder entenderse leyendo el código
- No usar más dependencias de las listadas abajo
- No usar `any` en TypeScript — tipar todo correctamente
- No crear CSS modules ni archivos `.css` por componente — todo va con clases de Tailwind

### Dependencias permitidas (además de React y Vite)

1. `@dnd-kit/react` + `@dnd-kit/dom` — Drag & drop
2. `zustand` — State management con persistencia
3. `react-router` — Routing SPA
4. `tailwindcss` + `@tailwindcss/vite` — Estilos
5. `canvas-confetti` (opcional) — Efecto de confetti al acertar

---

## Datos de contenido

Los ejercicios y contenido deben extraerse de estas fuentes (capítulos 9 y 10 del libro "Mirar el Futuro que se Convirtió en Presente"):

### Etiquetas HTML que deben cubrirse:

**Estructura:** HTML, HEAD, TITLE, BODY
**Texto:** B, I, U, S, P, BR, HR, H1-H6
**Fuente/Color:** FONT (SIZE, COLOR, FACE), BGCOLOR
**Imágenes:** IMG (SRC, WIDTH, HEIGHT, BORDER, ALT, ALIGN)
**Listas:** OL, UL, LI, DL, DT, DD
**Enlaces:** A (HREF, TARGET), NAME
**Tablas:** TABLE, TR, TD, TH, CAPTION, BORDER, COLSPAN, ROWSPAN, WIDTH, ALIGN, VALIGN, BGCOLOR, CELLPADDING, CELLSPACING
**Marquesinas:** MARQUEE (direction, behavior, bgcolor)
