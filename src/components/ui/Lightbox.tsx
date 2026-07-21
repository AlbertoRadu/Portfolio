import { useEffect, useRef } from 'react';
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
  const touchStartX = useRef<number | null>(null);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      onNext();
    } else if (diff < -50) {
      onPrev();
    }
    touchStartX.current = null;
  };

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center select-none"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="cursor-target absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors duration-200 z-50"
        aria-label="Close lightbox"
      >
        <X size={28} />
      </button>

      {/* Image Container */}
      <div
        className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center justify-center z-10"
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

      {/* Navigation Arrows (Defined after container and set to z-50 to ensure they display on top) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="cursor-target absolute left-4 md:left-6 p-2 md:p-3 rounded-full bg-black/75 hover:bg-black/90 border border-white/20 text-white transition-all z-50"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="cursor-target absolute right-4 md:right-6 p-2 md:p-3 rounded-full bg-black/75 hover:bg-black/90 border border-white/20 text-white transition-all z-50"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </div>
  );
}
