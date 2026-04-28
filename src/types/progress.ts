export interface SectionProgress {
  completed: boolean;
  score: number;
  total: number;
}

export interface AppState {
  currentSection: number;
  sections: Record<number, SectionProgress>;
  totalScore: number;
  completeExercise: (sectionId: number, correct: boolean) => void;
  setCurrentSection: (id: number) => void;
  resetProgress: () => void;
}
