import { useState } from 'react';
import type { MatchPairsExercise } from '../../types/exercises';
import { ResultBanner } from '../Feedback/ResultBanner';
import { Explanation } from '../Feedback/Explanation';
import { useAppStore } from '../../store/useAppStore';
import { triggerConfetti } from '../../utils/confetti';
import { categoryColor } from '../../utils/categoryColor';

interface MatchPairsProps {
  exercise: MatchPairsExercise;
  sectionId: number;
  onNext: () => void;
}

export function MatchPairs({ exercise, sectionId, onNext }: MatchPairsProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const completeExercise = useAppStore((s) => s.completeExercise);

  const allMatched = Object.keys(matches).length === exercise.pairs.length;

  function handleTagClick(tagId: string) {
    if (checked) return;
    setSelectedTag(tagId === selectedTag ? null : tagId);
  }

  function handleDescriptionClick(descriptionId: string) {
    if (checked || !selectedTag) return;
    setMatches((prev) => ({ ...prev, [selectedTag]: descriptionId }));
    setSelectedTag(null);
  }

  function handleCheck() {
    if (!allMatched || checked) return;
    const allCorrect = exercise.pairs.every((p) => matches[p.tagId] === p.descriptionId);
    completeExercise(sectionId, allCorrect);
    if (allCorrect) triggerConfetti();
    setChecked(true);
  }

  const allCorrect = checked && exercise.pairs.every((p) => matches[p.tagId] === p.descriptionId);

  return (
    <div className="space-y-4">
      <p className="text-sm text-white/60 bg-white/5 rounded-lg px-4 py-2">
        Haz clic en una etiqueta y luego en su descripción para relacionarlas.
      </p>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3">Etiquetas</p>
          {exercise.pairs.map((pair) => {
            const isSelected = selectedTag === pair.tagId;
            const isMatched = pair.tagId in matches;
            const color = categoryColor(pair.tagId);

            return (
              <button
                key={pair.tagId}
                onClick={() => handleTagClick(pair.tagId)}
                disabled={checked}
                className={`
                  w-full py-3 px-4 rounded-xl font-bold font-mono text-sm transition-all cursor-pointer
                  ${isSelected ? 'scale-105 ring-2 ring-white' : ''}
                  ${isMatched && !checked ? 'opacity-60' : ''}
                `}
                style={{ backgroundColor: `${color}33`, border: `2px solid ${color}88`, color }}
              >
                {pair.tagLabel}
              </button>
            );
          })}
        </div>

        <div className="space-y-2">
          <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-3">Descripciones</p>
          {exercise.pairs.map((pair) => {
            const matchedTagId = Object.entries(matches).find(([, did]) => did === pair.descriptionId)?.[0];
            const isDropped = !!matchedTagId;

            let borderClass = 'border-white/20';
            if (checked) {
              const matchedPair = exercise.pairs.find((p) => p.tagId === matchedTagId);
              borderClass = matchedPair?.descriptionId === pair.descriptionId
                ? 'border-[#06d6a0] bg-[#06d6a0]/10'
                : 'border-[#ef476f] bg-[#ef476f]/10';
            } else if (isDropped) {
              borderClass = 'border-[#4361ee]/60 bg-[#4361ee]/10';
            } else if (selectedTag) {
              borderClass = 'border-white/40 hover:border-white/60 bg-white/5 cursor-pointer';
            }

            return (
              <div
                key={pair.descriptionId}
                onClick={() => handleDescriptionClick(pair.descriptionId)}
                className={`w-full py-3 px-4 rounded-xl text-sm text-white/80 border-2 transition-all ${borderClass} min-h-[48px] flex items-center`}
              >
                {isDropped && matchedTagId && (
                  <span className="font-mono font-bold mr-2 text-[#4361ee]">
                    {exercise.pairs.find((p) => p.tagId === matchedTagId)?.tagLabel}
                  </span>
                )}
                {pair.description}
              </div>
            );
          })}
        </div>
      </div>

      {!checked && (
        <button
          onClick={handleCheck}
          disabled={!allMatched}
          className="w-full py-3 rounded-xl bg-[#4361ee] hover:bg-[#3451de] text-white font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
        >
          Comprobar respuestas
        </button>
      )}

      {checked && (
        <>
          <ResultBanner correct={allCorrect} onNext={onNext} />
          <Explanation text={exercise.explanation} />
        </>
      )}
    </div>
  );
}
