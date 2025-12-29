import {SkillGroup} from '../model/modelskills';

export const SKILL_GROUPS: SkillGroup[] = [
  {
  title: 'Backend',
  items: [
    { name: 'C#', icon: '/icons/csharp-original.svg', level: 'Básico', percent: 55, details: ['POO y estructuras básicas', 'CRUD en .NET / APIs simples', 'Buenas prácticas y debugging'] },
    { name: 'Java', icon: '/icons/java-original.svg', level: 'Intermedio', percent: 75, details: ['POO + colecciones', 'Patrones básicos', 'APIs/servicios con Spring'] },
    { name: 'Spring Boot', icon: '/icons/spring-original.svg', level: 'Intermedio', percent: 78, details: ['REST Controllers', 'DTOs + validaciones', 'JPA/Hibernate básico'] },
  ],
},
  {
    title: 'Frontend',
    items: [
      { name: 'Figma', icon: '/icons/figma-original.svg', level: 'Intermedio', percent: 70, details: ['Wireframes', 'Componentes reutilizables', 'Prototipado rápido'] },
      { name: 'HTML', icon: '/icons/html5-plain.svg', level: 'Intermedio', percent: 75, details: ['Semántica', 'Forms', 'Estructuras limpias'] },
      { name: 'CSS', icon: '/icons/css3-plain.svg', level: 'Intermedio', percent: 75, details: ['Flex/Grid', 'Responsive', 'Animaciones básicas'] },
      { name: 'JavaScript', icon: '/icons/javascript-plain.svg', level: 'Básico', percent: 55, details: ['DOM básico', 'Eventos', 'Fetch/async básico'] },
      { name: 'Angular', icon: '/icons/angular-original.svg', level: 'Intermedio', percent: 80, details: ['Components + routing', 'Services + HttpClient', 'Forms + Angular Material'] },
      { name: 'Bootstrap', icon: '/icons/bootstrap-original.svg', level: 'Básico', percent: 50, details: ['Grid system', 'Componentes', 'Layouts rápidos'] },
      { name: 'TypeScript', icon: '/icons/typescript-plain.svg', level: 'Intermedio', percent: 78, details: ['Tipos e interfaces', 'POO básica', 'Código más mantenible'] },
    ],
  },
  {
    title: 'Base de Datos',
    items: [
      { name: 'SQL Server', icon: '/icons/microsoftsqlserver-original.svg', level: 'Intermedio', percent: 75, details: ['Queries', 'JOINs', 'Modelado básico'] },
      { name: 'MySQL', icon: '/icons/mysql-original.svg', level: 'Intermedio', percent: 72, details: ['CRUD + joins', 'Índices básicos', 'Diseño relacional'] },
      { name: 'PostgreSQL', icon: '/icons/postgresql-plain.svg', level: 'Intermedio', percent: 72, details: ['Consultas', 'Funciones básicas', 'Modelado'] },
      { name: 'MongoDB', icon: '/icons/mongodb-plain.svg', level: 'Básico', percent: 55, details: ['Documentos/colecciones', 'CRUD básico', 'Consultas simples'] },
    ],
  },
  {
    title: 'Data Analytics',
    items: [
      { name: 'Python', icon: '/icons/python-original.svg', level: 'Intermedio', percent: 72, details: ['Análisis básico', 'Pandas (básico)', 'Scripts para automatizar'] },
      { name: 'Power BI', icon: 'icons/powerbi.svg', level: 'Intermedio', percent: 70, details: ['Dashboards', 'Modelado simple', 'Medidas básicas'] },
      { name: 'R', icon: '/icons/r-original.svg', level: 'Básico', percent: 55, details: ['Exploración básica', 'Gráficos simples', 'Sintaxis base'] },
      { name: 'Excel VBA', icon: '/icons/excel.svg', level: 'Avanzado', percent: 88, details: ['Macros para automatizar reportes', 'UserForms básicos y validaciones', 'Manejo de datos (rangos, tablas, loops)'] },
    ],
  },
  {
    title: 'Software Development',
    items: [
      { name: 'C++', icon: '/icons/cplusplus-plain.svg', level: 'Intermedio', percent: 70, details: ['POO', 'Estructuras de datos básicas', 'Algoritmos simples'] },
    ],
  },
  {
    title: 'Herramientas',
    items: [
      { name: 'VS Code', icon: '/icons/visualstudio-original.svg', level: 'Intermedio', percent: 78, details: ['Extensiones', 'Debug', 'Workspaces'] },
      { name: 'Visual Studio', icon: '/icons/vstudio.svg', level: 'Intermedio', percent: 70, details: ['Proyectos', 'Debugging', 'Soluciones'] },
      { name: 'Git', icon: '/icons/git-plain.svg', level: 'Intermedio', percent: 75, details: ['Branches', 'Merge', 'Buenas prácticas de commits'] },
      { name: 'GitHub', icon: '/icons/github-original.svg', level: 'Intermedio', percent: 75, details: ['Repos', 'PRs básicos', 'Issues/Projects'] },
      { name: 'IntelliJ', icon: '/icons/intellij-original.svg', level: 'Intermedio', percent: 72, details: ['Run configs', 'Refactor', 'Shortcuts'] },
      { name: 'WebStorm', icon: '/icons/webstorm-original.svg', level: 'Intermedio', percent: 70, details: ['Frontend tooling', 'Refactor', 'Debug'] },
      { name: 'Postman', icon: '/icons/postman-plain.svg', level: 'Intermedio', percent: 72, details: ['Colecciones', 'Environments', 'Tests simples'] },
      { name: 'Jira', icon: '/icons/jira-original.svg', level: 'Básico', percent: 55, details: ['Backlog', 'Sprints', 'Boards'] },
    ],
  },
];
