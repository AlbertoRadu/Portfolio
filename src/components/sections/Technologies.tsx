import { useLanguage } from '../../context/LanguageContext';
import { technologies } from '../../data/technologiesData';

interface CategoryDescriptor {
  key: 'frontend' | 'backend' | 'tools';
  title: string;
}

function Technologies() {
  const { t } = useLanguage();

  const categories: CategoryDescriptor[] = [
    { key: 'frontend', title: t('tech.frontend') },
    { key: 'backend', title: t('tech.backend') },
    { key: 'tools', title: t('tech.tools') }
  ];

  return (
    <section id="technologies" className="w-full">
      <div className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="block text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
            {t('tech.subtitle')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t('tech.title')}
          </h2>
        </div>

        <div className="space-y-16 max-w-4xl mx-auto">
          {categories.map((category) => {
            const filteredTechList = technologies.filter((tech) => tech.category === category.key);
            if (filteredTechList.length === 0) return null;

            return (
              <div key={category.key} className="space-y-6">
                <h4 className="text-xs font-semibold tracking-widest text-gray-500 uppercase font-mono pl-1">
                  // {category.title}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
                  {filteredTechList.map((tech) => (
                    <div
                      key={tech.name}
                      className="cursor-target flex flex-col items-center justify-center p-3 bg-black border border-white/5 rounded-lg transition-colors duration-300 select-none text-center h-28"
                    >
                      <div className="mb-2 w-9 h-9 sm:w-10 sm:h-10 [&_svg]:w-full [&_svg]:h-full flex items-center justify-center">
                        {tech.icon}
                      </div>
                      <h4 className="text-xs font-bold text-white font-mono leading-tight whitespace-nowrap overflow-hidden text-ellipsis w-full">
                        {tech.name}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
