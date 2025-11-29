
export type ViewMode = 'normal' | 'winxp' | 'journey';

export interface Project {
  id: string;
  title: string;
  role: string;
  shortDescription: string;
  fullDescription: string; // Problem, Role, Tech, Outcome
  tags: string[];
  category: 'All' | 'AI & Data' | 'IoT & Hardware' | 'Government' | 'Education' | 'Web Apps';
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface Station {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  points: string[];
  iconType: 'school' | 'code' | 'rocket' | 'award' | 'users';
}
