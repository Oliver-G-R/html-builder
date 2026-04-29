import { useDraggable } from '@dnd-kit/react';
import type { DragItem } from '../../types/exercises';
import { colorByIndex } from '../../utils/categoryColor';

interface TagBlockProps {
  item: DragItem;
  disabled?: boolean;
  colorIndex: number;
}

export function TagBlock({ item, disabled = false, colorIndex }: TagBlockProps) {
  const { ref, isDragging } = useDraggable({
    id: item.id,
    data: item,
    disabled,
  });

  const color = colorByIndex(colorIndex);

  return (
    <div
      ref={ref}
      className={`
        relative select-none rounded-xl px-4 py-3 font-mono font-bold text-sm
        transition-all duration-150 cursor-grab active:cursor-grabbing
        ${isDragging ? 'opacity-50 scale-105 shadow-2xl z-50' : 'hover:scale-105'}
        ${disabled ? 'opacity-40 cursor-not-allowed' : ''}
      `}
      style={{
        backgroundColor: `${color}22`,
        border: `2px solid ${color}88`,
        color,
        boxShadow: isDragging ? `0 8px 24px ${color}44` : undefined,
      }}
    >
      <div
        className="absolute -top-2 left-3 w-6 h-2 rounded-t-md"
        style={{ backgroundColor: color }}
      />
      {item.label}
    </div>
  );
}
