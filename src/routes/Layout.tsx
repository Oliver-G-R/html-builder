import { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { useAppStore } from '../store/useAppStore';
import { ProgressBar } from '../components/Progress/ProgressBar';
import { sections } from '../data/sections';

const BASE_TITLE = 'HTML Builder';

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
              value={totalScore}
              max={totalSections * 3}
              label={`${completedCount}/${totalSections} secciones`}
              color="#06d6a0"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: 'transparent padding-box, linear-gradient(135deg, #ef476f, #4361ee, #06d6a0, #f77f00) border-box',
                  border: '2px solid transparent',
                }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                  <defs>
                    <linearGradient id="star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ef476f" />
                      <stop offset="33%" stopColor="#4361ee" />
                      <stop offset="66%" stopColor="#06d6a0" />
                      <stop offset="100%" stopColor="#f77f00" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    stroke="url(#star-grad)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    fill="url(#star-grad)"
                  />
                </svg>
              </div>
              <span className="font-bold text-white">{totalScore}</span> pts
            </div>
            <button
              onClick={() => { if (confirm('¿Reiniciar todo el progreso?')) resetProgress(); }}
              className="text-xs font-bold text-white/80 hover:text-white px-3 py-1.5 rounded-lg transition-all hover:scale-105 cursor-pointer"
              style={{
                background: 'linear-gradient(#16213e, #16213e) padding-box, linear-gradient(90deg, #ef476f, #4361ee, #06d6a0, #f77f00) border-box',
                border: '2px solid transparent',
              }}
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
        HTML Builder
      </footer>
    </div>
  );
}
