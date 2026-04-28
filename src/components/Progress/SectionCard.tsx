import { Link } from 'react-router';
import type { Section } from '../../types/sections';
import type { SectionProgress } from '../../types/progress';
import { ProgressBar } from './ProgressBar';

interface SectionCardProps {
  section: Section;
  progress: SectionProgress;
  locked?: boolean;
}

export function SectionCard({ section, progress, locked = false }: SectionCardProps) {
  const categoryColors: Record<number, string> = {
    1: '#4361ee', 2: '#06d6a0', 3: '#f77f00',
    4: '#ef476f', 5: '#7b2cbf', 6: '#00b4d8',
    7: '#ffd60a', 8: '#e63946',
  };
  const color = categoryColors[section.id] ?? '#4361ee';

  const inner = (
    <>
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3"
        style={{ backgroundColor: `${color}22`, border: `2px solid ${color}55` }}
      >
        {section.icon}
      </div>

      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white/70 bg-white/10">
          Sección {section.id}
        </span>
        {progress.completed && (
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#06d6a0]/20 text-[#06d6a0]">
            ✓ Completada
          </span>
        )}
        {locked && <span className="text-xs text-white/40">🔒</span>}
      </div>

      <h3 className="text-lg font-bold text-white mb-1">{section.title}</h3>
      <p className="text-sm text-white/60 mb-4 leading-snug">{section.description}</p>

      <ProgressBar
        value={progress.completed ? section.exercises.length : progress.total}
        max={section.exercises.length}
        color={color}
      />
    </>
  );

  const cardClass = `
    relative rounded-2xl p-5 border transition-all duration-200 block
    ${locked
      ? 'opacity-50 pointer-events-none border-white/10 bg-[#16213e]'
      : 'hover:scale-[1.03] hover:shadow-xl border-white/10 bg-[#16213e] hover:border-white/30'
    }
  `;

  if (locked) {
    return <div className={cardClass}>{inner}</div>;
  }

  return (
    <Link
      to={`/seccion/${section.id}`}
      className={cardClass}
      style={{ boxShadow: `0 0 0 0 ${color}` }}
    >
      {inner}
    </Link>
  );
}
