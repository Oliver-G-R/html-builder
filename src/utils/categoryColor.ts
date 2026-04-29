// Colores del logo principal: rojo, azul, verde, naranja
export const logoPalette = ['#ef476f', '#4361ee', '#06d6a0', '#f77f00'];

// Asigna un color del logo por índice de posición (no por categoría)
// para que los distractores no se distingan visualmente de los bloques correctos
export function colorByIndex(index: number): string {
  return logoPalette[index % logoPalette.length];
}

// Mantener compatibilidad con usos que pasen tagId directamente
export function categoryColor(tagId: string): string {
  let hash = 0;
  for (let i = 0; i < tagId.length; i++) {
    hash = (hash * 31 + tagId.charCodeAt(i)) & 0xffff;
  }
  return logoPalette[hash % logoPalette.length];
}
