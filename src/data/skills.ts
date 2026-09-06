// src/data/skills.ts

export interface SkillGroup {
  id: number;
  category: string;
  badge: 'blue' | 'yellow';
  tags: string[];
}

export const SKILL_LIST: SkillGroup[] = [
  {
    id: 1,
    category: 'Frontend',
    badge: 'blue',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'],
  },
  {
    id: 2,
    category: 'Backend',
    badge: 'yellow',
    tags: ['Spring Boot', 'JPA'],
  },
  {
    id: 3,
    category: 'Tool',
    badge: 'blue',
    tags: ['Git', 'GitHub'],
  },
  {
    id: 4,
    category: 'AI Tool',
    badge: 'yellow',
    tags: ['ChatGPT', 'Gemini'],
  },
];