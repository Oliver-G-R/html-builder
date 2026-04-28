import { useState } from 'react';
import { DragDropProvider } from '@dnd-kit/react';
import type { DragEndEvent } from '@dnd-kit/react';
import type { DragStructureExercise, DragItem } from '../../types/exercises';
import { TagPalette } from './TagPalette';
import { DropZone } from './DropZone';
import { ResultBanner } from '../Feedback/ResultBanner';
import { Explanation } from '../Feedback/Explanation';
import { validateDragStructure } from '../../utils/validation';
import { useAppStore } from '../../store/useAppStore';
import { triggerConfetti } from '../../utils/confetti';

interface StructureBuilderProps {
  exercise: DragStructureExercise;
  sectionId: number;
  onNext: () => void;
}

export function StructureBuilder({ exercise, sectionId, onNext }: StructureBuilderProps) {
  const [placed, setPlaced] = useState<Record<string, string>>({});
  const [placedLabels, setPlacedLabels] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, 'correct' | 'incorrect'> | null>(null);
  const completeExercise = useAppStore((s) => s.completeExercise);

  const usedIds = new Set(Object.values(placed));
  const checked = results !== null;

  function handleDragEnd(event: DragEndEvent) {
    if (checked) return;
    const { operation } = event;
    if (!operation.target || !operation.source) return;

    const slotId = String(operation.target.id);
    const dragItem = operation.source.data as DragItem;
    if (!dragItem) return;

    setPlaced((prev) => ({ ...prev, [slotId]: dragItem.id }));
    setPlacedLabels((prev) => ({ ...prev, [slotId]: dragItem.label }));
  }

  function handleRemove(slotId: string) {
    setPlaced((prev) => { const n = { ...prev }; delete n[slotId]; return n; });
    setPlacedLabels((prev) => { const n = { ...prev }; delete n[slotId]; return n; });
  }

  function handleCheck() {
    if (checked) return;
    const validation = validateDragStructure(exercise.slots, placed);
    const resultMap: Record<string, 'correct' | 'incorrect'> = {};
    let correctCount = 0;
    for (const v of validation) {
      resultMap[v.slotId] = v.correct ? 'correct' : 'incorrect';
      if (v.correct) correctCount++;
    }
    setResults(resultMap);
    const allCorrect = correctCount === exercise.slots.length;
    completeExercise(sectionId, allCorrect);
    if (allCorrect) triggerConfetti();
  }

  function handleReset() {
    setPlaced({});
    setPlacedLabels({});
    setResults(null);
  }

  const allCorrect = checked && Object.values(results!).every((r) => r === 'correct');

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <div className="space-y-5">
        <TagPalette
          items={exercise.availableTags}
          usedIds={usedIds}
          disabled={checked}
        />

        <div className="bg-[#0f3460]/40 rounded-2xl p-4 border border-white/10 space-y-2">
          <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3">
            Zona de construcción
          </p>
          {exercise.slots.map((slot) => (
            <DropZone
              key={slot.id}
              slot={slot}
              placedTagId={placed[slot.id]}
              placedLabel={placedLabels[slot.id]}
              result={results ? results[slot.id] : null}
              onRemove={handleRemove}
              disabled={checked}
            />
          ))}
        </div>

        {!checked ? (
          <div className="flex gap-3">
            <button
              onClick={handleCheck}
              disabled={Object.keys(placed).length < exercise.slots.length}
              className="flex-1 py-3 rounded-xl bg-[#4361ee] hover:bg-[#3451de] text-white font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Comprobar
            </button>
            <button
              onClick={handleReset}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all cursor-pointer"
            >
              Reiniciar
            </button>
          </div>
        ) : (
          <>
            <ResultBanner correct={allCorrect} onNext={onNext} />
            <Explanation text={exercise.explanation} />
            {!allCorrect && (
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all cursor-pointer"
              >
                Intentar de nuevo
              </button>
            )}
          </>
        )}
      </div>
    </DragDropProvider>
  );
}
