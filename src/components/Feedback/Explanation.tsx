interface ExplanationProps {
  text: string;
}

export function Explanation({ text }: ExplanationProps) {
  return (
    <div className="mt-3 rounded-xl bg-white/5 border border-white/10 px-5 py-4 animate-slide-up">
      <p className="text-sm text-white/80 leading-relaxed">
        <span className="font-semibold text-[#00b4d8] mr-2">💡 Explicación:</span>
        {text}
      </p>
    </div>
  );
}
