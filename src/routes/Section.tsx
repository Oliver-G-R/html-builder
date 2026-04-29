import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { sections } from '../data/sections';
import { StructureBuilder } from '../components/DragDrop/StructureBuilder';
import { TrueFalse } from '../components/Exercises/TrueFalse';
import { MultipleChoice } from '../components/Exercises/MultipleChoice';
import { MatchPairs } from '../components/Exercises/MatchPairs';
import { ProgressBar } from '../components/Progress/ProgressBar';
import type { Exercise } from '../types/exercises';

const exerciseTypeLabel: Record<Exercise['type'], string> = {
  'drag-structure': '🧱 Armar estructura',
  'true-false': '✅ Verdadero o Falso',
  'multiple-choice': '🔤 Opción múltiple',
  'match-pairs': '🔗 Relacionar columnas',
};

const categoryColors: Record<number, string> = {
  1: '#4361ee', 2: '#06d6a0', 3: '#f77f00',
  4: '#ef476f', 5: '#7b2cbf', 6: '#00b4d8',
  7: '#ffd60a', 8: '#e63946',
};

export function Section() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const sectionId = Number(id);
  const section = sections.find((s) => s.id === sectionId);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [lessonDone, setLessonDone] = useState(false);

  if (!section) {
    return (
      <div className="text-center py-20 text-white/60">
        Sección no encontrada.
        <br />
        <button onClick={() => navigate('/')} className="mt-4 text-[#4361ee] underline cursor-pointer">
          Volver al inicio
        </button>
      </div>
    );
  }

  const color = categoryColors[section.id] ?? '#4361ee';
  const exercise = section.exercises[exerciseIndex];
  const isLastExercise = exerciseIndex >= section.exercises.length - 1;

  function handleNextExercise() {
    if (isLastExercise) {
      navigate('/');
    } else {
      setExerciseIndex((i) => i + 1);
    }
  }

  return (
    <div className="space-y-6">
      {/* Header de sección */}
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="text-white/40 hover:text-white transition-colors text-2xl"
        >
          ←
        </Link>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
          style={{ backgroundColor: `${color}22`, border: `2px solid ${color}55` }}
        >
          {section.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-white/40 mb-0.5">Sección {section.id}</div>
          <h1 className="text-2xl font-bold text-white">{section.title}</h1>
        </div>
      </div>

      {/* Lección */}
      {!lessonDone && (
        <div className="bg-[#16213e] rounded-2xl border border-white/10 overflow-hidden">
          <div
            className="px-6 py-4 border-b border-white/10"
            style={{ background: `linear-gradient(135deg, ${color}22, transparent)` }}
          >
            <h2 className="text-lg font-bold text-white">📖 Lección</h2>
          </div>
          <div className="px-6 py-5 space-y-5">
            <p className="text-white/80 leading-relaxed">{section.lesson.intro}</p>

            {section.lesson.points.map((point, i) => (
              <div key={i} className="space-y-2">
                <h3 className="font-bold text-white">{point.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">{point.content}</p>
                {point.code && (
                  <div className="space-y-4">
                    <pre className="bg-[#0f3460]/80 rounded-xl px-4 py-3 text-sm text-[#06d6a0] overflow-x-auto border border-white/10">
                      {point.code}
                    </pre>
                    <div className="rounded-xl overflow-hidden border border-white/10">
                      <div className="bg-white/5 px-3 py-1 text-xs text-white/40 font-semibold uppercase tracking-wider">
                        Vista previa
                      </div>
                      <iframe
                        srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;margin:12px 16px;color:rgba(255,255,255,0.85);background:#0f3460;font-size:14px;line-height:1.6}b,strong{color:#fff}i,em{color:rgba(255,255,255,0.8)}u{color:#06d6a0;text-decoration-color:#06d6a0}s{color:rgba(255,255,255,0.45)}h1,h2,h3,h4,h5,h6{color:#fff;margin:4px 0}p{margin:4px 0}hr{border:none;border-top:1px solid rgba(255,255,255,0.15);margin:8px 0}a{color:#00b4d8}ol,ul{padding-left:20px;margin:4px 0}li{margin:2px 0}dl{margin:4px 0}dt{font-weight:bold;color:#ffd60a}dd{margin-left:16px;color:rgba(255,255,255,0.7)}table{border-collapse:collapse;width:100%}td,th{border:1px solid rgba(255,255,255,0.2);padding:4px 10px;text-align:left}th{background:rgba(255,255,255,0.08);color:#ffd60a}font{color:inherit}marquee{color:#06d6a0}</style></head><body>${point.code.replace(/([Ss][Rr][Cc])="\/([^"]*)"/g, `$1="${window.location.origin}/$2"`)}</body></html>`}
                        className="w-full rounded-b-xl"
                        style={{ minHeight: '80px', backgroundColor: '#0f3460' }}
                        title="Vista previa"
                        sandbox=""
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={() => setLessonDone(true)}
              className="w-full py-3 rounded-xl font-bold text-white transition-all cursor-pointer"
              style={{ backgroundColor: color }}
            >
              ¡Entendido! Ir a los ejercicios →
            </button>
          </div>
        </div>
      )}

      {/* Ejercicios */}
      {lessonDone && (
        <div className="bg-[#16213e] rounded-2xl border border-white/10 overflow-hidden">
          <div
            className="px-6 py-4 border-b border-white/10"
            style={{ background: `linear-gradient(135deg, ${color}22, transparent)` }}
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-white">
                {exerciseTypeLabel[exercise.type]}
              </h2>
              <span className="text-sm text-white/50">
                {exerciseIndex + 1} / {section.exercises.length}
              </span>
            </div>
            <ProgressBar
              value={exerciseIndex}
              max={section.exercises.length}
              color={color}
            />
          </div>

          <div className="px-6 py-5">
            {exercise.type === 'drag-structure' && (
              <StructureBuilder
                key={`${sectionId}-${exerciseIndex}`}
                exercise={exercise}
                sectionId={sectionId}
                onNext={handleNextExercise}
              />
            )}
            {exercise.type === 'true-false' && (
              <TrueFalse
                key={`${sectionId}-${exerciseIndex}`}
                exercise={exercise}
                sectionId={sectionId}
                onNext={handleNextExercise}
              />
            )}
            {exercise.type === 'multiple-choice' && (
              <MultipleChoice
                key={`${sectionId}-${exerciseIndex}`}
                exercise={exercise}
                sectionId={sectionId}
                onNext={handleNextExercise}
              />
            )}
            {exercise.type === 'match-pairs' && (
              <MatchPairs
                key={`${sectionId}-${exerciseIndex}`}
                exercise={exercise}
                sectionId={sectionId}
                onNext={handleNextExercise}
              />
            )}
          </div>
        </div>
      )}

      {lessonDone && (
        <button
          onClick={() => setLessonDone(false)}
          className="text-sm text-white/40 hover:text-white/60 transition-colors cursor-pointer"
        >
          ← Ver la lección otra vez
        </button>
      )}
    </div>
  );
}
