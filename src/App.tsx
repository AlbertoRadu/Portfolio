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
import { useModelAnimation } from './hooks/useModelAnimation'

function App() {
  useModelAnimation();

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
