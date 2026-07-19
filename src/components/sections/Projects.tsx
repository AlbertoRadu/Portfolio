import { useState, useEffect } from 'react';
import BorderGlow from '../ui/BorderGlow';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

// Import Matchcota images
import matchcota1 from '../../assets/projects/matchcota/Matchcota_1.jpg';
import matchcota2 from '../../assets/projects/matchcota/Matchcota_2.jpg';
import matchcota3 from '../../assets/projects/matchcota/Matchcota_3.jpg';
import matchcota4 from '../../assets/projects/matchcota/Matchcota_4.jpg';
import matchcota5 from '../../assets/projects/matchcota/Matchcota_5.jpg';

// Import Banc del Temps images
import bancTemps1 from '../../assets/projects/banc_temps/BancTemps_1.png';
import bancTemps2 from '../../assets/projects/banc_temps/BancTemps_2.png';
import bancTemps3 from '../../assets/projects/banc_temps/BancTemps_3.png';
import bancTemps4 from '../../assets/projects/banc_temps/BancTemps_4.png';
import bancTemps5 from '../../assets/projects/banc_temps/BancTemps_5.png';

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

function Projects() {
  const matchcotaImages = [matchcota1, matchcota2, matchcota3, matchcota4, matchcota5];
  const bancTempsImages = [bancTemps1, bancTemps2, bancTemps3, bancTemps4, bancTemps5];
  const { t } = useLanguage();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxPrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1));
  };

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') handleLightboxNext();
      if (e.key === 'ArrowLeft') handleLightboxPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, lightboxImages, lightboxIndex]);

  return (
    <section id="projects" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">{t('projects.subtitle')}</h2>
        <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{t('projects.title')}</h3>
      </div>

      <div className="grid grid-cols-1 gap-16 max-w-5xl mx-auto">
        
        {/* Project 1: Matchcota */}
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
                  images={matchcotaImages} 
                  altText="Matchcota" 
                  onImageClick={(idx) => openLightbox(matchcotaImages, idx)}
                />
              </div>
              
              {/* Card Body */}
              <div className="flex-1 flex flex-col justify-between w-full">
                <div>
                  {/* Title & Badges */}
                  <h4 className="text-xl font-bold text-white mb-3">Matchcota</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs font-mono">
                      FastAPI
                    </span>
                    <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs font-mono">
                      Python
                    </span>
                    <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs font-mono">
                      Matching Alg
                    </span>
                    <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs font-mono">
                      Multitenant
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 text-sm text-gray-300 font-light leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1 font-semibold">•</span>
                      <span>
                        <strong>{t('projects.matchcota_tag1')}:</strong> {t('projects.matchcota_desc1')}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1 font-semibold">•</span>
                      <span>
                        <strong>{t('projects.matchcota_tag2')}:</strong> {t('projects.matchcota_desc2')}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1 font-semibold">•</span>
                      <span>
                        <strong>{t('projects.matchcota_tag3')}:</strong> {t('projects.matchcota_desc3')}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono">Institut TIC de Barcelona (2026)</span>
                  <a
                    href="https://github.com/Caballosanex/MatchCota"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors duration-250"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    <span>{t('projects.view_repo')}</span>
                  </a>
                </div>
              </div>
            </div>
          </BorderGlow>
        </div>

        {/* Project 2: Banc del Temps */}
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
                  images={bancTempsImages} 
                  altText="Banc del Temps" 
                  onImageClick={(idx) => openLightbox(bancTempsImages, idx)}
                />
              </div>
              
              {/* Card Body */}
              <div className="flex-1 flex flex-col justify-between w-full">
                <div>
                  {/* Title & Badges */}
                  <h4 className="text-xl font-bold text-white mb-3">Banc del Temps</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs font-mono">
                      React
                    </span>
                    <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs font-mono">
                      Django RF
                    </span>
                    <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs font-mono">
                      PostgreSQL
                    </span>
                    <span className="px-2.5 py-0.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs font-mono">
                      Docker
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 text-sm text-gray-300 font-light leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1 font-semibold">•</span>
                      <span>
                        <strong>{t('projects.banc_temps_tag1')}:</strong> {t('projects.banc_temps_desc1')}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1 font-semibold">•</span>
                      <span>
                        <strong>{t('projects.banc_temps_tag2')}:</strong> {t('projects.banc_temps_desc2')}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1 font-semibold">•</span>
                      <span>
                        <strong>{t('projects.banc_temps_tag3')}:</strong> {t('projects.banc_temps_desc3')}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono">Institut TIC de Barcelona (2026)</span>
                  <a
                    href="https://github.com/JoshuaE16/Banc_del_Temps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors duration-250"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    <span>{t('projects.view_repo')}</span>
                  </a>
                </div>
              </div>
            </div>
          </BorderGlow>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center select-none"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close Button */}
          <button 
            onClick={() => setLightboxOpen(false)}
            className="cursor-target absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors duration-200 z-50"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          {/* Navigation Arrows */}
          <button 
            onClick={(e) => { e.stopPropagation(); handleLightboxPrev(); }}
            className="cursor-target absolute left-6 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all z-40"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={(e) => { e.stopPropagation(); handleLightboxNext(); }}
            className="cursor-target absolute right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all z-40"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image Container */}
          <div className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightboxImages[lightboxIndex]} 
              alt={`Screenshot ${lightboxIndex + 1}`}
              className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/5 shadow-2xl"
            />
            {/* Image index counter */}
            <div className="mt-4 text-xs font-mono text-gray-400">
              {lightboxIndex + 1} / {lightboxImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;