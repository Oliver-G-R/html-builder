import type { DragItem } from '../../types/exercises';
import { TagBlock } from './TagBlock';

interface TagPaletteProps {
  items: DragItem[];
  usedIds: Set<string>;
  disabled?: boolean;
}

export function TagPalette({ items, usedIds, disabled }: TagPaletteProps) {
  const available = items.filter((item) => !usedIds.has(item.id));

  return (
    <div className="bg-[#0f3460]/60 rounded-2xl p-4 border border-white/10">
      <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3">
        Bloques disponibles
      </p>
      <div className="flex flex-wrap gap-3">
        {available.length === 0 ? (
          <p className="text-sm text-white/30 italic">Todos los bloques usados</p>
        ) : (
          available.map((item) => (
            <TagBlock
              key={item.id}
              item={item}
              disabled={disabled}
              colorIndex={items.indexOf(item)}
            />
          ))
        )}
      </div>
    </div>
  );
}
