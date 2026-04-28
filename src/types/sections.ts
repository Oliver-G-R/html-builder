import type { Exercise, TagCategory } from './exercises';

export interface Tag {
  id: string;
  name: string;
  category: TagCategory;
  description: string;
  example?: string;
}

export interface Section {
  id: number;
  title: string;
  icon: string;
  description: string;
  lesson: Lesson;
  exercises: Exercise[];
}

export interface LessonPoint {
  title: string;
  content: string;
  code?: string;
}

export interface Lesson {
  intro: string;
  points: LessonPoint[];
}
