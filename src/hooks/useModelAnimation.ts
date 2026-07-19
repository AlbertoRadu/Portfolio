import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useModelAnimation() {
  useEffect(() => {
    const heroPlaceholder = document.getElementById('hero-model-placeholder');
    const aboutmePlaceholder = document.getElementById('aboutme-model-placeholder');
    const floatingContainer = document.getElementById('floating-model-container');

    if (!heroPlaceholder || !aboutmePlaceholder || !floatingContainer) return;

    const ctx = gsap.context(() => {
      // Position the floating 3D container exactly over the hero placeholder
      const updatePosition = () => {
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

      updatePosition();

      // Set initial rotation speed factor (full speed)
      (window as any).modelRotationFactor = 1;

      // Scroll timeline triggers deceleration and moves the model down on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#about-me',
          start: 'top bottom',
          end: 'top center',
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

      ScrollTrigger.addEventListener('refreshInit', updatePosition);
      return () => {
        ScrollTrigger.removeEventListener('refreshInit', updatePosition);
      };
    });

    return () => ctx.revert();
  }, []);
}
