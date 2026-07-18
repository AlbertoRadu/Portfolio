import ScrambledText from '../ui/ScrambledText';
import ModelViewer from '../ui/ModelViewer';



function Hero() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen px-12 md:px-24 lg:px-32 xl:px-48 py-12 lg:py-16 gap-12 lg:gap-8">
            <div className="flex-1 w-full flex flex-col justify-center lg:justify-start">
                <ScrambledText
                className="!m-0 max-w-full font-mono"
                radius={100}
                duration={1}
                speed={0.5}
                scrambleChars=".:"
                >
                  <span className="block text-[clamp(40px,8vw,96px)] font-bold text-white leading-tight mb-2 select-none">
                    Gabriel Radu
                  </span>
                  <span className="block text-[clamp(20px,4vw,48px)] text-gray-400 leading-tight select-none">
                    Junior Web Developer
                  </span>
                </ScrambledText>
            </div>

            <div className="flex-1 w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[600px] aspect-square flex justify-center lg:justify-end">
                <ModelViewer
                url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
                width="100%"
                height="100%"
                defaultZoom={0.1}
                modelXOffset={0}
                modelYOffset={0}
                enableMouseParallax
                enableHoverRotation
                environmentPreset="forest"
                fadeIn={false}
                autoFrame={true}
                autoRotate={false}
                autoRotateSpeed={0.15}
                showScreenshotButton={false}
                />
            </div>
        </div>
    )
}

export default Hero;