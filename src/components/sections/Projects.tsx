import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData } from '../../data/projectsData';
import { ProjectCard } from '../ui/ProjectCard';
import { Lightbox } from '../ui/Lightbox';

function Projects() {
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

  return (
    <section id="projects" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="block text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
          {t('projects.subtitle')}
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          {t('projects.title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-16 max-w-5xl mx-auto">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onScreenshotClick={openLightbox}
          />
        ))}
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handleLightboxPrev}
        onNext={handleLightboxNext}
      />
    </section>
  );
}
export default Projects;