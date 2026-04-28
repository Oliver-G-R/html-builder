import type { DropZoneSlot } from '../types/exercises';

export function validateDragStructure(
  slots: DropZoneSlot[],
  placed: Record<string, string>
): { slotId: string; correct: boolean }[] {
  return slots.map((slot) => ({
    slotId: slot.id,
    correct: placed[slot.id] === slot.expectedTagId,
  }));
}

export function countCorrect(results: { correct: boolean }[]): number {
  return results.filter((r) => r.correct).length;
}
