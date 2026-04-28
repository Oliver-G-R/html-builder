import type { ReactNode } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#16213e] rounded-2xl border border-white/10 p-6 max-w-lg w-full shadow-2xl animate-pop-in">
        {title && (
          <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
        )}
        {children}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white text-2xl leading-none cursor-pointer"
        >
          ×
        </button>
      </div>
    </div>
  );
}
