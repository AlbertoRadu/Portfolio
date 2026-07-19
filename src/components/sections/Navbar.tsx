import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-white/5 bg-black/20 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex justify-between items-center relative">
        {/* Left Spacer / Mobile Hamburger Toggle */}
        <div className="flex items-center w-24">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-between w-5 h-3.5 cursor-target group"
            aria-label="Toggle menu"
          >
            <span className={`h-[2px] w-full bg-gray-400 rounded-lg group-hover:bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`h-[2px] w-full bg-gray-400 rounded-lg group-hover:bg-white transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`h-[2px] w-full bg-gray-400 rounded-lg group-hover:bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>

        {/* Desktop Navigation links */}
        <ul className="hidden md:flex items-center gap-10 text-xs font-mono tracking-wider uppercase">
          <li>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="cursor-target text-gray-400 hover:text-white transition-colors duration-200"
            >
              {t('nav.home')}
            </a>
          </li>
          <li>
            <a
              href="#about-me"
              onClick={(e) => handleNavClick(e, 'about-me')}
              className="cursor-target text-gray-400 hover:text-white transition-colors duration-200"
            >
              {t('nav.about')}
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              onClick={(e) => handleNavClick(e, 'technologies')}
              className="cursor-target text-gray-400 hover:text-white transition-colors duration-200"
            >
              {t('nav.technologies')}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, 'projects')}
              className="cursor-target text-gray-400 hover:text-white transition-colors duration-200"
            >
              {t('nav.projects')}
            </a>
          </li>
        </ul>

        {/* Right Language Selector */}
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono tracking-wider text-gray-500 select-none">
          <button
            onClick={() => setLanguage('es')}
            className={`cursor-target transition-colors duration-200 hover:text-white ${
              language === 'es' ? 'text-white font-bold' : ''
            }`}
          >
            ES
          </button>
          <span className="text-gray-800">|</span>
          <button
            onClick={() => setLanguage('ca')}
            className={`cursor-target transition-colors duration-200 hover:text-white ${
              language === 'ca' ? 'text-white font-bold' : ''
            }`}
          >
            CA
          </button>
          <span className="text-gray-800">|</span>
          <button
            onClick={() => setLanguage('en')}
            className={`cursor-target transition-colors duration-200 hover:text-white ${
              language === 'en' ? 'text-white font-bold' : ''
            }`}
          >
            EN
          </button>
        </div>

        {/* Mobile Dropdown Menu Container */}
        <div
          className={`absolute top-full left-0 right-0 z-40 md:hidden transition-all duration-300 ease-in-out border-b border-white/5 bg-black/95 backdrop-blur-lg overflow-hidden ${
            isOpen ? 'max-h-72 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          <ul className="flex flex-col items-center gap-6 font-mono text-xs tracking-wider uppercase">
            <li>
              <a
                href="#home"
                onClick={(e) => handleMobileNavClick(e, 'home')}
                className="cursor-target text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t('nav.home')}
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                onClick={(e) => handleMobileNavClick(e, 'about-me')}
                className="cursor-target text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t('nav.about')}
              </a>
            </li>
            <li>
              <a
                href="#technologies"
                onClick={(e) => handleMobileNavClick(e, 'technologies')}
                className="cursor-target text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t('nav.technologies')}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleMobileNavClick(e, 'projects')}
                className="cursor-target text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t('nav.projects')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
