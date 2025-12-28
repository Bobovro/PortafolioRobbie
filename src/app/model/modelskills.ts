export type SkillLevel = 'Básico' | 'Intermedio' | 'Avanzado';

export type SkillItem = {
  name: string;
  icon: string;
  level: SkillLevel;
  percent: number;
  details: string[];
};

export type SkillGroup = { title: string; items: SkillItem[] };
