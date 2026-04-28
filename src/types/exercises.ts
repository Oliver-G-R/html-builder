export type ExerciseType = 'drag-structure' | 'true-false' | 'multiple-choice' | 'match-pairs';

export interface Answer {
  id: string;
  text: string;
  correct: boolean;
}

export interface DragItem {
  id: string;
  label: string;
  category: TagCategory;
}

export interface DropZoneSlot {
  id: string;
  label: string;
  expectedTagId: string;
  indent?: number;
}

export interface MatchPair {
  tagId: string;
  tagLabel: string;
  descriptionId: string;
  description: string;
}

export interface DragStructureExercise {
  type: 'drag-structure';
  availableTags: DragItem[];
  slots: DropZoneSlot[];
  explanation: string;
}

export interface TrueFalseExercise {
  type: 'true-false';
  statement: string;
  correct: boolean;
  explanation: string;
}

export interface MultipleChoiceExercise {
  type: 'multiple-choice';
  question: string;
  answers: Answer[];
  explanation: string;
}

export interface MatchPairsExercise {
  type: 'match-pairs';
  pairs: MatchPair[];
  explanation: string;
}

export type Exercise =
  | DragStructureExercise
  | TrueFalseExercise
  | MultipleChoiceExercise
  | MatchPairsExercise;

export type TagCategory =
  | 'structure'
  | 'text'
  | 'style'
  | 'media'
  | 'list'
  | 'link'
  | 'table'
  | 'marquee';
