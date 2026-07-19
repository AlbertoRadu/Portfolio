import ScrambledText from '../ui/ScrambledText';
import { Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

function Hero() {
    const { t } = useLanguage();

    return (
        <section id="home" className="max-w-6xl mx-auto px-6 sm:px-8 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-4rem)] gap-12 lg:gap-8">
            <div className="flex-1 w-full flex flex-col items-center lg:items-start text-center lg:text-left justify-center relative z-10">
                <ScrambledText
                className="!m-0 max-w-full font-mono"
                radius={100}
                duration={1}
                speed={0.5}
                scrambleChars=".:"
                >
                  <span className="block text-[clamp(32px,6vw,72px)] font-bold text-white leading-none mb-2 select-none whitespace-nowrap">
                    {t('hero.title')}
                  </span>
                  <span className="block text-[clamp(18px,3vw,36px)] text-gray-400 leading-tight select-none">
                    {t('hero.subtitle')}
                  </span>
                </ScrambledText>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6 text-gray-400">
                  <a
                    href="https://github.com/AlbertoRadu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-250 flex items-center gap-2 text-xs font-mono"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    <span>{t('hero.github')}</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/albertogabrielradu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-250 flex items-center gap-2 text-xs font-mono"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>{t('hero.linkedin')}</span>
                  </a>
                  <div
                    className="hover:text-white transition-colors duration-250 flex items-center gap-2 text-xs font-mono cursor-text select-all"
                  >
                    <Mail size={16} />
                    <span>gabrielalbertoradu@gmail.com</span>
                  </div>
                </div>
            </div>

            <div className="flex-1 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-square flex justify-center lg:justify-end">
                <div id="hero-model-placeholder" className="w-full h-full"></div>
            </div>
        </section>
    )
}

export default Hero;