import { useState } from 'react';
import type { TrueFalseExercise } from '../../types/exercises';
import { ResultBanner } from '../Feedback/ResultBanner';
import { Explanation } from '../Feedback/Explanation';
import { useAppStore } from '../../store/useAppStore';
import { triggerConfetti } from '../../utils/confetti';

interface TrueFalseProps {
  exercise: TrueFalseExercise;
  sectionId: number;
  onNext: () => void;
}

export function TrueFalse({ exercise, sectionId, onNext }: TrueFalseProps) {
  const [selected, setSelected] = useState<boolean | null>(null);
  const completeExercise = useAppStore((s) => s.completeExercise);

  const answered = selected !== null;
  const correct = answered && selected === exercise.correct;

  function handleAnswer(value: boolean) {
    if (answered) return;
    setSelected(value);
    const isCorrect = value === exercise.correct;
    completeExercise(sectionId, isCorrect);
    if (isCorrect) triggerConfetti();
  }

  return (
    <div className="space-y-4">
      <p className="text-lg text-white/90 font-medium leading-relaxed bg-white/5 rounded-xl px-5 py-4 border border-white/10">
        {exercise.statement}
      </p>

      <div className="flex gap-4">
        {[true, false].map((val) => {
          const label = val ? 'VERDADERO' : 'FALSO';
          const emoji = val ? '✅' : '❌';
          let btnClass = 'flex-1 py-5 rounded-2xl font-bold text-lg transition-all duration-200 cursor-pointer ';

          if (!answered) {
            btnClass += val
              ? 'bg-[#06d6a0]/20 hover:bg-[#06d6a0]/40 text-[#06d6a0] border-2 border-[#06d6a0]/40'
              : 'bg-[#ef476f]/20 hover:bg-[#ef476f]/40 text-[#ef476f] border-2 border-[#ef476f]/40';
          } else if (val === exercise.correct) {
            btnClass += 'bg-[#06d6a0]/30 text-[#06d6a0] border-2 border-[#06d6a0]';
          } else if (val === selected && !correct) {
            btnClass += 'bg-[#ef476f]/30 text-[#ef476f] border-2 border-[#ef476f] animate-shake';
          } else {
            btnClass += 'opacity-40 bg-white/5 text-white/40 border-2 border-white/10';
          }

          return (
            <button key={String(val)} className={btnClass} onClick={() => handleAnswer(val)}>
              {emoji} {label}
            </button>
          );
        })}
      </div>

      {answered && (
        <>
          <ResultBanner correct={correct} onNext={onNext} />
          <Explanation text={exercise.explanation} />
        </>
      )}
    </div>
  );
}
