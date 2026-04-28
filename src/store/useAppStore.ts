import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppState, SectionProgress } from '../types/progress';

const initialSections: Record<number, SectionProgress> = Object.fromEntries(
  Array.from({ length: 8 }, (_, i) => [i + 1, { completed: false, score: 0, total: 0 }])
);

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      currentSection: 1,
      sections: initialSections,
      totalScore: 0,

      completeExercise: (sectionId, correct) => {
        const current = get().sections[sectionId] ?? { completed: false, score: 0, total: 0 };
        const newScore = current.score + (correct ? 1 : 0);
        const newTotal = current.total + 1;

        set((state) => ({
          sections: {
            ...state.sections,
            [sectionId]: {
              completed: newTotal >= 3,
              score: newScore,
              total: newTotal,
            },
          },
          totalScore: state.totalScore + (correct ? 1 : 0),
        }));
      },

      setCurrentSection: (id) => set({ currentSection: id }),

      resetProgress: () =>
        set({
          currentSection: 1,
          sections: initialSections,
          totalScore: 0,
        }),
    }),
    { name: 'html-builder-progress' }
  )
);
