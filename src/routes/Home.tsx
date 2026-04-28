import { sections } from '../data/sections';
import { useAppStore } from '../store/useAppStore';
import { SectionCard } from '../components/Progress/SectionCard';

export function Home() {
  const { sections: progress } = useAppStore();

  return (
    <div>
      <div className="text-center mb-10">
        <img src="/logo.svg" alt="" aria-hidden="true" className="h-20 sm:h-24 mx-auto mb-3" />
        <h1 className="sr-only">HTML Builder</h1>
        <p className="text-lg text-white/60 max-w-xl mx-auto">
          Aprende HTML arrastrando bloques, resolviendo ejercicios y construyendo páginas web.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sections.map((section) => {
          const sectionProgress = progress[section.id] ?? { completed: false, score: 0, total: 0 };
          return (
            <SectionCard
              key={section.id}
              section={section}
              progress={sectionProgress}
              locked={false}
            />
          );
        })}
      </div>
    </div>
  );
}
