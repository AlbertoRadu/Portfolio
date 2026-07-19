import { GraduationCap, Briefcase } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export function RightTimelineSection() {
  const { t } = useLanguage();

  return (
    <>
      {/* Experience Block */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-white">
          <Briefcase size={22} className="text-gray-400" />
          <h4 className="text-lg font-bold tracking-wider uppercase">
            {t('about.experience_title')}
          </h4>
        </div>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex flex-wrap justify-between items-baseline gap-2">
              <h5 className="text-base font-semibold text-white">
                {t('about.experience_role')}
              </h5>
              <span className="text-xs text-gray-400 font-mono">
                {t('about.experience_date')}
              </span>
            </div>
            <p className="text-sm text-gray-400 font-medium">
              {t('about.experience_company')}
            </p>
            
            <ul className="mt-3 space-y-2 text-xs text-gray-400 leading-relaxed list-disc pl-4">
              <li>{t('about.experience_bullet1')}</li>
              <li>{t('about.experience_bullet2')}</li>
              <li>{t('about.experience_bullet3')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Block */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-white">
          <GraduationCap size={22} className="text-gray-400" />
          <h4 className="text-lg font-bold tracking-wider uppercase">
            {t('about.education_title')}
          </h4>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="flex flex-wrap justify-between items-baseline gap-2">
              <h5 className="text-sm font-semibold text-white">
                {t('about.education_degree')}
              </h5>
              <span className="text-xs text-gray-400 font-mono">
                {t('about.education_date')}
              </span>
            </div>
            <p className="text-xs text-gray-400">
              {t('about.education_school')}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap justify-between items-baseline gap-2">
              <h5 className="text-sm font-semibold text-white">
                {t('about.cert_scikit')}
              </h5>
            </div>
            <p className="text-xs text-gray-400">
              {t('about.cert_scikit_org')}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap justify-between items-baseline gap-2">
              <h5 className="text-sm font-semibold text-white">
                {t('about.cert_sql')}
              </h5>
            </div>
            <p className="text-xs text-gray-400">
              {t('about.cert_sql_org')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
