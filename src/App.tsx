import Hero from './components/sections/Hero'
import AboutMe from './components/sections/AboutMe'
import Technologies from './components/sections/Technologies'
import TargetCursor from './components/ui/TargetCursor'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        cursorColor="#ffffff"
        cursorColorOnTarget="#7700e6"
      />
      <Hero />
      <AboutMe />
      <Technologies />
    </div>
  )
}

export default App
