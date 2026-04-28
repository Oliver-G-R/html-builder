interface ProgressBarProps {
  value: number;
  max: number;
  color?: string;
  label?: string;
}

export function ProgressBar({ value, max, color = '#4361ee', label }: ProgressBarProps) {
  const pct = max > 0 ? Math.min(100, Math.round((value / max) * 100)) : 0;

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-sm text-white/70 mb-1">
          <span>{label}</span>
          <span>{pct}%</span>
        </div>
      )}
      <div className="h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
