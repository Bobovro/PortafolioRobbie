export type ProjectTag =
  | 'All'
  | 'Frontend'
  | 'Backend'
  | 'Fullstack'
  | 'Python'
  | 'BI'
  | 'Excel';

export type ProjectLink = {
  label: string;
  url: string;
  icon: string;
};

export type ProjectItem = {
  title: string;
  subtitle: string;
  tag: Exclude<ProjectTag, 'All'>;
  icon: string;
  stack: string;
  bullets: string[];
  links: ProjectLink[];
  long?: string[];
  children?: ProjectItem[];
  cover?: string;
};
