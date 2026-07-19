import { useEffect } from 'react'
import Hero from './components/sections/Hero'
import AboutMe from './components/sections/AboutMe'
import Technologies from './components/sections/Technologies'
import TargetCursor from './components/ui/TargetCursor'
import Navbar from './components/sections/Navbar'
import Footer from './components/sections/Footer'
import Projects from './components/sections/Projects'
import { LanguageProvider } from './context/LanguageContext'
import ModelViewer from './components/ui/ModelViewer'
// @ts-expect-error - Vite handles GLB imports as static assets
import model3d from './assets/Icon3d.glb'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Wait for placeholders to mount and render
    const ctx = gsap.context(() => {
      const heroPlaceholder = document.getElementById('hero-model-placeholder');
      const aboutmePlaceholder = document.getElementById('aboutme-model-placeholder');
      const floatingContainer = document.getElementById('floating-model-container');

      if (!heroPlaceholder || !aboutmePlaceholder || !floatingContainer) return;

      const updateInitialPosition = () => {
        const rect = heroPlaceholder.getBoundingClientRect();
        const mainRect = document.body.getBoundingClientRect();
        
        gsap.set(floatingContainer, {
          top: rect.top - mainRect.top,
          left: rect.left - mainRect.left,
          width: rect.width,
          height: rect.height,
          x: 0,
          y: 0,
          scale: 1,
        });
      };

      // Set position immediately on load
      updateInitialPosition();

      // Initialize rotation factor to 1 on load
      (window as any).modelRotationFactor = 1;

      // Setup scroll trigger timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#about-me',
          start: 'top bottom', // when about-me enters viewport
          end: 'top center',   // when about-me is at center of viewport
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            (window as any).modelRotationFactor = 1 - self.progress;
          },
          onLeave: () => {
            (window as any).modelRotationFactor = 0;
          },
          onLeaveBack: () => {
            (window as any).modelRotationFactor = 1;
          }
        }
      });

      tl.to(floatingContainer, {
        x: () => {
          const rect1 = heroPlaceholder.getBoundingClientRect();
          const rect2 = aboutmePlaceholder.getBoundingClientRect();
          return (rect2.left + rect2.width / 2) - (rect1.left + rect1.width / 2);
        },
        y: () => {
          const rect1 = heroPlaceholder.getBoundingClientRect();
          const rect2 = aboutmePlaceholder.getBoundingClientRect();
          const mainRect = document.body.getBoundingClientRect();
          const y1 = rect1.top - mainRect.top;
          const y2 = rect2.top - mainRect.top;
          return (y2 + rect2.height / 2) - (y1 + rect1.height / 2);
        },
        ease: 'none',
      });

      // Handle position recalculation when layout refreshes
      ScrollTrigger.addEventListener('refreshInit', updateInitialPosition);

      return () => {
        ScrollTrigger.removeEventListener('refreshInit', updateInitialPosition);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-black text-white min-h-screen relative">
        <Navbar />
        <TargetCursor 
          spinDuration={2}
          hideDefaultCursor
          parallaxOn 
          hoverDuration={0.2}
          cursorColor="#ffffff"
          cursorColorOnTarget="#ffffff"
          sectionSelector="#technologies"
        />

        {/* Floating 3D Model Container */}
        <div 
          id="floating-model-container" 
          className="absolute z-0 pointer-events-auto origin-center"
          style={{ width: 0, height: 0 }}
        >
          <ModelViewer
            url={model3d}
            width="100%"
            height="100%"
            defaultZoom={0.1}
            defaultRotationX={0}
            modelXOffset={0}
            modelYOffset={0}
            enableMouseParallax
            enableHoverRotation
            environmentPreset="forest"
            fadeIn={false}
            autoFrame={true}
            autoRotate={true}
            autoRotateSpeed={0.3}
            showScreenshotButton={false}
          />
        </div>

        <main className="pt-16">
          <Hero />
          <AboutMe />
          <Technologies />
          <Projects />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
