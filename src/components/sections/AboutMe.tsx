import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "../../context/LanguageContext";
import { LeftBioSection } from "./about/LeftBioSection";
import { RightTimelineSection } from "./about/RightTimelineSection";

function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      leftColRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      rightColRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <section ref={sectionRef} id="about-me" className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="block text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
          {t('about.subtitle')}
        </span>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          {t('about.title')}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div ref={leftColRef} className="lg:col-span-5 space-y-8 lg:sticky lg:top-16 lg:-mt-4">
          <LeftBioSection />
        </div>

        <div ref={rightColRef} className="lg:col-span-7 space-y-12 relative z-10">
          <RightTimelineSection />
        </div>
      </div>
    </section>
  );
}
export default AboutMe;