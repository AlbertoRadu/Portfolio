import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BorderGlow from './BorderGlow';
import { useLanguage } from '../../context/LanguageContext';
import type { ProjectItem } from '../../data/projectsData';

interface ImageCarouselProps {
  images: string[];
  altText: string;
  onImageClick?: (index: number) => void;
}

function ImageCarousel({ images, altText, onImageClick }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative group w-full aspect-[16/10] overflow-hidden rounded-xl bg-black border border-white/5 flex items-center justify-center">
      {/* Images wrapper */}
      <div className="w-full h-full relative flex items-center justify-center">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${altText} screenshot ${idx + 1}`}
            onClick={() => onImageClick?.(idx)}
            className={`absolute inset-0 w-full h-full object-contain cursor-zoom-in transition-opacity duration-500 ease-in-out ${
              idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="cursor-target absolute left-3 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/60 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
        aria-label="Previous image"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={handleNext}
        className="cursor-target absolute right-3 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/60 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80"
        aria-label="Next image"
      >
        <ChevronRight size={18} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/40 px-2.5 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`cursor-target w-1.5 h-1.5 rounded-full transition-colors duration-250 ${
              idx === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: ProjectItem;
  onScreenshotClick: (images: string[], index: number) => void;
}

export function ProjectCard({ project, onScreenshotClick }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <div className="cursor-target">
      <BorderGlow
        edgeSensitivity={30}
        glowColor="0 0 100"
        backgroundColor="#000000"
        borderRadius={24}
        glowRadius={50}
        glowIntensity={0.8}
        coneSpread={30}
        animated={true}
        colors={['#ffffff', '#ffffff', '#ffffff']}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 p-6 sm:p-8 bg-black rounded-[24px]">
          {/* Carousel Container */}
          <div className="w-full lg:w-[45%] shrink-0">
            <ImageCarousel
              images={project.images}
              altText={project.title}
              onImageClick={(index) => onScreenshotClick(project.images, index)}
            />
          </div>

          {/* Card Body */}
          <div className="flex-1 flex flex-col justify-between w-full">
            <div>
              {/* Title & Badges */}
              <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-0.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs font-mono"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-3 text-sm text-gray-300 font-light leading-relaxed">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-white mt-1 font-semibold">•</span>
                    <span>
                      <strong>{t(highlight.tagKey)}:</strong> {t(highlight.descKey)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Action */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs text-gray-500 font-mono">{project.institution}</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors duration-250"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>{t('projects.view_repo')}</span>
              </a>
            </div>
          </div>
        </div>
      </BorderGlow>
    </div>
  );
}
