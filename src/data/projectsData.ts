// Import Matchcota images
import matchcota1 from '../assets/projects/matchcota/Matchcota_1.jpg';
import matchcota2 from '../assets/projects/matchcota/Matchcota_2.jpg';
import matchcota3 from '../assets/projects/matchcota/Matchcota_3.jpg';
import matchcota4 from '../assets/projects/matchcota/Matchcota_4.jpg';
import matchcota5 from '../assets/projects/matchcota/Matchcota_5.jpg';

// Import Banc del Temps images
import bancTemps1 from '../assets/projects/banc_temps/BancTemps_1.png';
import bancTemps2 from '../assets/projects/banc_temps/BancTemps_2.png';
import bancTemps3 from '../assets/projects/banc_temps/BancTemps_3.png';
import bancTemps4 from '../assets/projects/banc_temps/BancTemps_4.png';
import bancTemps5 from '../assets/projects/banc_temps/BancTemps_5.png';

export interface ProjectHighlight {
  tagKey: string;
  descKey: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  badges: string[];
  highlights: ProjectHighlight[];
  institution: string;
  githubUrl: string;
  images: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'matchcota',
    title: 'Matchcota',
    badges: ['FastAPI', 'Python', 'Matching Alg', 'Multitenant'],
    highlights: [
      { tagKey: 'projects.matchcota_tag1', descKey: 'projects.matchcota_desc1' },
      { tagKey: 'projects.matchcota_tag2', descKey: 'projects.matchcota_desc2' },
      { tagKey: 'projects.matchcota_tag3', descKey: 'projects.matchcota_desc3' }
    ],
    institution: 'Institut TIC de Barcelona (2026)',
    githubUrl: 'https://github.com/Caballosanex/MatchCota',
    images: [matchcota1, matchcota2, matchcota3, matchcota4, matchcota5]
  },
  {
    id: 'banc-temps',
    title: 'Banc del Temps',
    badges: ['React', 'Django RF', 'PostgreSQL', 'Docker'],
    highlights: [
      { tagKey: 'projects.banc_temps_tag1', descKey: 'projects.banc_temps_desc1' },
      { tagKey: 'projects.banc_temps_tag2', descKey: 'projects.banc_temps_desc2' },
      { tagKey: 'projects.banc_temps_tag3', descKey: 'projects.banc_temps_desc3' }
    ],
    institution: 'Institut TIC de Barcelona (2026)',
    githubUrl: 'https://github.com/JoshuaE16/Banc_del_Temps',
    images: [bancTemps1, bancTemps2, bancTemps3, bancTemps4, bancTemps5]
  }
];
