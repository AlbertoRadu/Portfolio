import React from 'react';

const technologies = [
  {
    name: 'React',
    description: 'Frontend Interface development',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-12 h-12 fill-none stroke-current text-sky-400">
        <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    name: 'TypeScript',
    description: 'Static typing & type safety',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-blue-500">
        <path d="M1.125 0h21.75c.621 0 1.125.504 1.125 1.125v21.75c0 .621-.504 1.125-1.125 1.125h-21.75c-.621 0-1.125-.504-1.125-1.125v-21.75c0-.621.504-1.125 1.125-1.125zm11.236 10.457c0-.986-.713-1.48-2.023-1.48-1.077 0-1.745.318-2.146.994l-.79-.588c.636-1.05 1.776-1.396 3.036-1.396 2.032 0 3.125.992 3.125 2.502v5.632c0 .918.423 1.258.835 1.258.261 0 .546-.084.721-.194v.85c-.21.124-.593.228-.971.228-1.002 0-1.587-.624-1.587-1.758v-.432c-.596.696-1.536 1.092-2.61 1.092-1.71 0-2.85-1.01-2.85-2.58 0-1.892 1.585-2.484 3.732-2.484h1.472v-.058zm0 1.706h-1.332c-1.53 0-2.322.384-2.322 1.488 0 .84.588 1.344 1.584 1.344.978 0 1.758-.57 2.07-1.344v-1.488zm9.52-5.74h-5.068v9.914c0 1.344.604 1.83 1.804 1.83.42 0 .814-.078 1.082-.186v-.888c-.222.102-.516.144-.816.144-.648 0-1.07-.348-1.07-1.182v-8.728h4.068v-.904z"/>
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    description: 'Modern utility-first styling',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-cyan-400">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19 12.001 19c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
      </svg>
    )
  },
  {
    name: 'FastAPI / Python',
    description: 'Secure, high-performance REST APIs',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-teal-400">
        <path d="M14.12 10H19L11 24v-10h-4.88L13 0v10h1.12z"/>
      </svg>
    )
  },
  {
    name: 'Docker',
    description: 'Containerized environments & apps',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-sky-500">
        <path d="M13.983 8.878h-2.735v2.735h2.735V8.878zm-3.956 0H7.292v2.735h2.735V8.878zm-3.956 0H3.336v2.735h2.735V8.878zm-3.956 0H0v2.735h2.28v-2.735zM13.983 5h-2.735v2.735h2.735V5zm-3.956 0H7.292v2.735h2.735V5zm-3.956 0H3.336v2.735h2.735V5zm13.983 7.756h-2.735v2.735h2.735v-2.735zm-3.956 0H7.292v2.735h2.735v-2.735zm8.17-5.918c-.035-.006-.07-.012-.104-.012-.862-.058-1.623.402-2.072 1.093-.342-.075-.68-.113-1.018-.113-.306 0-.612.03-.912.083v2.753h.01c.214-.078.43-.133.654-.162l.266-.029.072-.258c.28-.973.834-1.393 1.706-1.29l.135.016.035-.134c.05-.205.109-.4.184-.582zM0 14.113c0 5.458 4.425 9.887 9.887 9.887 5.253 0 9.537-4.103 9.852-9.27-.04.007-.08.016-.12.022-1.077.164-2.18-.04-3.14-.593-.846-.487-1.547-1.188-2.034-2.034-.582-.998-.77-2.148-.546-3.238l.056-.273-.277.018c-.856.056-1.68-.168-2.398-.636-.576-.376-1.042-.876-1.373-1.472l-.155-.28-.155.28c-.33.596-.797 1.096-1.373 1.472-.888.58-1.928.823-3 .673l-.28-.04.056.276c.224 1.09.036 2.24-.546 3.238-.487.846-1.188 1.547-2.034 2.034-.997.581-2.147.77-3.237.546l-.273-.056.018.277c.056.856-.168 1.68-.636 2.398z"/>
      </svg>
    )
  },
  {
    name: 'Git',
    description: 'Version control & collaboration',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current text-orange-600">
        <path d="M23.546 10.93L13.07.45a1.83 1.83 0 00-2.584 0l-2.9 2.9 3.127 3.127a1.696 1.696 0 012.44 0 1.69 1.69 0 010 2.39l-3.11 3.11a1.703 1.703 0 01-2.39 0 1.7 1.7 0 010-2.39l1.198-1.198-3.447-3.448-3.9 3.9a1.83 1.83 0 000 2.584l10.476 10.476a1.83 1.83 0 002.584 0l10.476-10.476a1.83 1.83 0 000-2.584z"/>
      </svg>
    )
  },
  {
    name: 'SQL Databases',
    description: 'Relational database architecture',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-indigo-400">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
        <path d="M3 12A9 3 0 0 0 21 12"></path>
      </svg>
    )
  }
];

function Technologies() {
  return (
    <section className="py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">Skills & Tools</h2>
        <h3 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Technologies</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="cursor-target flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-lg transition-colors duration-300 select-none text-center h-48"
          >
            <div className="mb-4">
              {tech.icon}
            </div>
            <h4 className="text-base font-bold text-white mb-1 font-mono">{tech.name}</h4>
            <p className="text-xs text-gray-400 font-light font-mono leading-tight">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technologies;
