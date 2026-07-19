import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onPrev, onNext, onClose]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center select-none"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="cursor-target absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors duration-200 z-50"
        aria-label="Close lightbox"
      >
        <X size={28} />
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="cursor-target absolute left-6 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all z-40"
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="cursor-target absolute right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all z-40"
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>

      {/* Image Container */}
      <div
        className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Screenshot ${currentIndex + 1}`}
          className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/5 shadow-2xl"
        />
        {/* Slide Counter */}
        <div className="mt-4 text-xs font-mono text-gray-400">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
