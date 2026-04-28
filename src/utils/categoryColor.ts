import type { TagCategory } from '../types/exercises';

const colors: Record<TagCategory, string> = {
  structure: '#4361ee',
  text: '#06d6a0',
  style: '#f77f00',
  media: '#ef476f',
  list: '#7b2cbf',
  link: '#00b4d8',
  table: '#ffd60a',
  marquee: '#e63946',
};

export function categoryColor(categoryOrTagId: string): string {
  if (categoryOrTagId in colors) return colors[categoryOrTagId as TagCategory];
  // Fallback para IDs de etiquetas que no son categorías
  if (['html', 'head', 'title', 'body'].includes(categoryOrTagId)) return colors.structure;
  if (['b', 'i', 'u', 's', 'p', 'br', 'hr', 'h1', 'h2', 'h6'].includes(categoryOrTagId)) return colors.text;
  if (['font'].includes(categoryOrTagId)) return colors.style;
  if (['img'].includes(categoryOrTagId)) return colors.media;
  if (['ol', 'ul', 'li', 'dl', 'dt', 'dd'].includes(categoryOrTagId)) return colors.list;
  if (['a'].includes(categoryOrTagId)) return colors.link;
  if (['table', 'tr', 'td', 'th', 'caption'].includes(categoryOrTagId)) return colors.table;
  if (['marquee'].includes(categoryOrTagId)) return colors.marquee;
  return '#4361ee';
}
