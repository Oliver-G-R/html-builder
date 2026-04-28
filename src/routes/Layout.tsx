import { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { useAppStore } from '../store/useAppStore';
import { ProgressBar } from '../components/Progress/ProgressBar';
import { sections } from '../data/sections';

const BASE_TITLE = 'HTML Builder · Cultura Digital II';

function useDynamicTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const match = pathname.match(/^\/seccion\/(\d+)$/);
    if (match) {
      const section = sections.find((s) => s.id === Number(match[1]));
      document.title = section
        ? `${section.icon} ${section.title} · ${BASE_TITLE}`
        : BASE_TITLE;
    } else {
      document.title = BASE_TITLE;
    }
  }, [pathname]);
}

export function Layout() {
  useDynamicTitle();
  const { sections, totalScore, resetProgress } = useAppStore();

  const completedCount = Object.values(sections).filter((s) => s.completed).length;
  const totalSections = Object.keys(sections).length;

  return (
    <div className="min-h-screen flex flex-col bg-[#1a1a2e]">
      <header className="sticky top-0 z-40 bg-[#16213e]/90 backdrop-blur border-b border-white/10 px-6 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-xl text-white hover:text-[#4361ee] transition-colors"
          >
            <img src="/favicon.svg" alt="" className="w-8 h-8" />
            <span>HTML Builder</span>
          </Link>

          <div className="flex-1 max-w-xs hidden sm:block">
            <ProgressBar
              value={completedCount}
              max={totalSections}
              label={`${completedCount}/${totalSections} secciones`}
              color="#06d6a0"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="text-sm text-white/70">
              ⭐ <span className="font-bold text-white">{totalScore}</span> pts
            </div>
            <button
              onClick={() => { if (confirm('¿Reiniciar todo el progreso?')) resetProgress(); }}
              className="text-xs text-white/30 hover:text-white/60 transition-colors cursor-pointer"
            >
              Reiniciar
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 py-4 text-center text-xs text-white/30">
        Cultura Digital II · HTML Builder
      </footer>
    </div>
  );
}
