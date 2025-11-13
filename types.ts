
export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  url: string;
}

export interface Project {
  title: string;
  company: string;
  image: string;
  genre: string;
  synopsis: string;
  roles: string[];
  links: {
    playstore?: string;
    trailer?: string;
  };
}

export interface SkillCategory {
    name: string;
    skills: string[];
}

export interface CommunityItem {
    title: string;
    description: string;
    image: string;
}
