import { Languages, FileDown } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function LeftBioSection() {
  const { t } = useLanguage();

  return (
    <>
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
          <span className="font-semibold text-xs tracking-wider uppercase text-gray-400">
            {t('about.languages')}
          </span>
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
    </>
  );
}
