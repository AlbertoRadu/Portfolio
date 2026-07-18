import { useEffect, useRef } from "react";
import gsap from "gsap";
import { 
  GraduationCap, 
  Briefcase, 
  Languages 
} from "lucide-react";
import GithubProfile from "../../assets/GithubProfile.png";

function AboutMe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      leftColRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      rightColRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">Resume & Profile</h2>
        <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">About Me</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div ref={leftColRef} className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
          <div className="space-y-4 flex justify-center">
            <img 
              src={GithubProfile} 
              alt="Alberto Gabriel Radu" 
              className="w-48 h-48 rounded-full border border-white/10 object-cover shadow-2xl"
            />
          </div>

          <div className="space-y-4">
            <p className="text-base text-gray-300 leading-relaxed text-justify font-light">
              A Junior Web Developer passionate about creating interactive web experiences and secure APIs. 
              I build scalable applications focused on clean frontend designs and robust backend architectures, 
              approaching every project with dedication and attention to detail.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Languages size={18} className="text-gray-400" />
              <span className="font-semibold text-xs tracking-wider uppercase text-gray-400">Languages</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                Spanish (Native)
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                Catalan (Native)
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                English (B2 - Cambridge First Certificate)
              </span>
            </div>
          </div>
        </div>

        <div ref={rightColRef} className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-white">
              <Briefcase size={22} className="text-gray-400" />
              <h4 className="text-lg font-bold tracking-wider uppercase">Work Experience</h4>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h5 className="text-base font-semibold text-white">
                    Software Developer (Internship)
                  </h5>
                  <span className="text-xs text-gray-400 font-mono">Oct 2025 – May 2026</span>
                </div>
                <p className="text-sm text-gray-400 font-medium">Admira</p>
                
                <ul className="mt-3 space-y-2 text-xs text-gray-400 leading-relaxed list-disc pl-4">
                  <li>Collaborated on the integration of computer vision models into interactive web interfaces.</li>
                  <li>Participated in the design of real-time control panels for hardware management.</li>
                  <li>Implemented data synchronization logic between physical sensors and software.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 text-white">
              <GraduationCap size={22} className="text-gray-400" />
              <h4 className="text-lg font-bold tracking-wider uppercase">Education & Certifications</h4>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h5 className="text-sm font-semibold text-white">
                    Higher Degree in Web Application Development (DAW)
                  </h5>
                  <span className="text-xs text-gray-400 font-mono">2026</span>
                </div>
                <p className="text-xs text-gray-400">Institut TIC Barcelona</p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h5 className="text-sm font-semibold text-white">
                    Supervised Learning with scikit-learn
                  </h5>
                  <span className="text-xs text-gray-400 font-mono">2026</span>
                </div>
                <p className="text-xs text-gray-400">DataCamp</p>
              </div>

              <div className="space-y-1">
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h5 className="text-sm font-semibold text-white">
                    Database Programming with SQL
                  </h5>
                  <span className="text-xs text-gray-400 font-mono">2025</span>
                </div>
                <p className="text-xs text-gray-400">Oracle Academy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;