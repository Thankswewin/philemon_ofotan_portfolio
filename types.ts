export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
  imageUrl: string;
  status: 'LIVE' | 'BETA' | 'ARCHIVED';
}

export interface Skill {
  name: string;
  category: 'FRONTEND' | 'BACKEND' | 'TOOLS' | 'DESIGN';
  level: number; // 1-100
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}