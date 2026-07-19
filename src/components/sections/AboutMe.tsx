import { useEffect, useRef } from "react";
import gsap from "gsap";
import { 
  GraduationCap, 
  Briefcase, 
  Languages,
  FileDown
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

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
        <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">{t('about.subtitle')}</h2>
        <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{t('about.title')}</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div ref={leftColRef} className="lg:col-span-5 space-y-8 lg:sticky lg:top-16 lg:-mt-4">

          <div className="flex justify-center mt-12 mb-20 lg:-mt-24 lg:mb-12">
            <div 
              id="aboutme-model-placeholder" 
              className="w-48 h-48 aspect-square"
            />
          </div>

          <div className="space-y-4 relative z-10">
            <p className="text-base text-gray-300 leading-relaxed text-justify font-light">
              {t('about.bio')}
            </p>
          </div>

          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-2 text-white">
              <Languages size={18} className="text-gray-400" />
              <span className="font-semibold text-xs tracking-wider uppercase text-gray-400">{t('about.languages')}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                {t('about.lang_es')}
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                {t('about.lang_ca')}
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                {t('about.lang_en')}
              </span>
            </div>
          </div>

          <div className="pt-4 flex justify-start relative z-10">
            <a
              href="/CV_Alberto_Gabriel_Radu.pdf"
              download="CV_Alberto_Gabriel_Radu.pdf"
              className="cursor-target inline-flex items-center gap-2.5 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-250 shadow-lg"
            >
              <FileDown size={16} />
              <span>{t('about.download_cv')}</span>
            </a>
          </div>
        </div>

        <div ref={rightColRef} className="lg:col-span-7 space-y-12 relative z-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-white">
              <Briefcase size={22} className="text-gray-400" />
              <h4 className="text-lg font-bold tracking-wider uppercase">{t('about.experience_title')}</h4>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h5 className="text-base font-semibold text-white">
                    {t('about.experience_role')}
                  </h5>
                  <span className="text-xs text-gray-400 font-mono">{t('about.experience_date')}</span>
                </div>
                <p className="text-sm text-gray-400 font-medium">{t('about.experience_company')}</p>
                
                <ul className="mt-3 space-y-2 text-xs text-gray-400 leading-relaxed list-disc pl-4">
                  <li>{t('about.experience_bullet1')}</li>
                  <li>{t('about.experience_bullet2')}</li>
                  <li>{t('about.experience_bullet3')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 text-white">
              <GraduationCap size={22} className="text-gray-400" />
              <h4 className="text-lg font-bold tracking-wider uppercase">{t('about.education_title')}</h4>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h5 className="text-sm font-semibold text-white">
                    {t('about.education_degree')}
                  </h5>
                  <span className="text-xs text-gray-400 font-mono">{t('about.education_date')}</span>
                </div>
                <p className="text-xs text-gray-400">{t('about.education_school')}</p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h5 className="text-sm font-semibold text-white">
                    {t('about.cert_scikit')}
                  </h5>
                </div>
                <p className="text-xs text-gray-400">{t('about.cert_scikit_org')}</p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h5 className="text-sm font-semibold text-white">
                    {t('about.cert_sql')}
                  </h5>
                </div>
                <p className="text-xs text-gray-400">{t('about.cert_sql_org')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;