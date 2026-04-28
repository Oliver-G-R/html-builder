import { useState } from 'react';
import type { MultipleChoiceExercise } from '../../types/exercises';
import { ResultBanner } from '../Feedback/ResultBanner';
import { Explanation } from '../Feedback/Explanation';
import { useAppStore } from '../../store/useAppStore';
import { triggerConfetti } from '../../utils/confetti';

interface MultipleChoiceProps {
  exercise: MultipleChoiceExercise;
  sectionId: number;
  onNext: () => void;
}

export function MultipleChoice({ exercise, sectionId, onNext }: MultipleChoiceProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const completeExercise = useAppStore((s) => s.completeExercise);

  const answered = selectedId !== null;
  const selectedAnswer = exercise.answers.find((a) => a.id === selectedId);
  const correct = !!selectedAnswer?.correct;

  function handleSelect(answerId: string) {
    if (answered) return;
    setSelectedId(answerId);
    const isCorrect = exercise.answers.find((a) => a.id === answerId)?.correct ?? false;
    completeExercise(sectionId, isCorrect);
    if (isCorrect) triggerConfetti();
  }

  return (
    <div className="space-y-4">
      <p className="text-lg text-white/90 font-medium leading-relaxed bg-white/5 rounded-xl px-5 py-4 border border-white/10">
        {exercise.question}
      </p>

      <div className="grid grid-cols-1 gap-3">
        {exercise.answers.map((answer) => {
          let cls = 'w-full text-left px-5 py-4 rounded-xl font-medium transition-all duration-200 cursor-pointer border-2 ';

          if (!answered) {
            cls += 'bg-[#0f3460] hover:bg-[#16213e] text-white border-white/10 hover:border-[#4361ee]/60';
          } else if (answer.correct) {
            cls += 'bg-[#06d6a0]/20 text-[#06d6a0] border-[#06d6a0]';
          } else if (answer.id === selectedId && !answer.correct) {
            cls += 'bg-[#ef476f]/20 text-[#ef476f] border-[#ef476f] animate-shake';
          } else {
            cls += 'opacity-40 bg-white/5 text-white/40 border-white/10';
          }

          return (
            <button key={answer.id} className={cls} onClick={() => handleSelect(answer.id)}>
              {answer.text}
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
