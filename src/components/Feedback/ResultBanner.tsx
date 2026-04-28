interface ResultBannerProps {
  correct: boolean;
  onNext?: () => void;
}

export function ResultBanner({ correct, onNext }: ResultBannerProps) {
  return (
    <div
      className={`
        flex items-center justify-between rounded-xl px-5 py-4 mt-4
        animate-slide-up
        ${correct
          ? 'bg-[#06d6a0]/20 border border-[#06d6a0]/50'
          : 'bg-[#ef476f]/20 border border-[#ef476f]/50'
        }
      `}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{correct ? '🎉' : '😬'}</span>
        <span className={`text-lg font-bold ${correct ? 'text-[#06d6a0]' : 'text-[#ef476f]'}`}>
          {correct ? '¡Correcto!' : 'Incorrecto'}
        </span>
      </div>
      {onNext && (
        <button
          onClick={onNext}
          className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer"
        >
          Siguiente →
        </button>
      )}
    </div>
  );
}
