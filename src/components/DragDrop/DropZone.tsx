import { useDroppable } from '@dnd-kit/react';
import type { DropZoneSlot } from '../../types/exercises';
import { categoryColor } from '../../utils/categoryColor';

interface DropZoneProps {
  slot: DropZoneSlot;
  placedTagId?: string;
  placedLabel?: string;
  result?: 'correct' | 'incorrect' | null;
  onRemove?: (slotId: string) => void;
  disabled?: boolean;
}

export function DropZone({ slot, placedTagId, placedLabel, result, onRemove, disabled }: DropZoneProps) {
  const { ref, isDropTarget } = useDroppable({
    id: slot.id,
    data: slot,
    disabled,
  });

  const filled = !!placedTagId;
  const color = filled ? categoryColor(placedTagId) : '#4361ee';

  let borderColor = 'border-white/20';
  if (isDropTarget) borderColor = 'border-[#4361ee]';
  if (result === 'correct') borderColor = 'border-[#06d6a0]';
  if (result === 'incorrect') borderColor = 'border-[#ef476f]';

  let bgColor = 'bg-white/5';
  if (isDropTarget) bgColor = 'bg-[#4361ee]/10';
  if (result === 'correct') bgColor = 'bg-[#06d6a0]/10';
  if (result === 'incorrect') bgColor = 'bg-[#ef476f]/10';

  return (
    <div
      ref={ref}
      className={`
        relative flex items-center gap-3 rounded-xl px-4 py-3 border-2 transition-all duration-150 min-h-[52px]
        ${borderColor} ${bgColor}
        ${result === 'incorrect' ? 'animate-shake' : ''}
        ${result === 'correct' ? 'animate-snap' : ''}
      `}
      style={{ marginLeft: `${(slot.indent ?? 0) * 24}px` }}
    >
      <span className="text-xs text-white/40 font-mono shrink-0">{slot.label}</span>

      {filled ? (
        <div
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono font-bold text-sm"
          style={{ backgroundColor: `${color}22`, border: `1.5px solid ${color}88`, color }}
        >
          <div className="absolute -top-1.5 left-4 w-5 h-1.5 rounded-t" style={{ backgroundColor: color }} />
          {placedLabel}
          {!disabled && onRemove && (
            <button
              onClick={() => onRemove(slot.id)}
              className="ml-1 text-white/40 hover:text-white/80 text-xs cursor-pointer"
            >
              ×
            </button>
          )}
        </div>
      ) : (
        <span className="text-white/25 text-sm italic">Arrastra aquí...</span>
      )}

      {result === 'correct' && <span className="ml-auto text-[#06d6a0]">✓</span>}
      {result === 'incorrect' && <span className="ml-auto text-[#ef476f]">✗</span>}
    </div>
  );
}
