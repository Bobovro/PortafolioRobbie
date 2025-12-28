import {ProjectItem, ProjectTag} from '../model/projectmodel';

export const PROJECT_TAGS: ProjectTag[] = [
  'All',
  'Frontend',
  'Backend',
  'Fullstack',
  'Python',
  'BI',
  'Excel',
];

export const GITHUB = 'https://github.com/Bobovro';
export const MOVI_REPO = 'https://github.com/Bobovro/MoviWallet';
export const MOVI_DEMO = 'https://bobovro.github.io/MoviWallet/';

export const PROJECTS = [
  /* ===== FRONTEND ===== */
  {
    title: 'Frontend – UI Angular',
    subtitle: 'Componentes, formularios y UX.',
    tag: 'Frontend',
    icon: 'web',
    stack: 'Angular • Angular Material • Responsive UI',
    bullets: [
      'UI en componentes reutilizables y navegación por rutas.',
      'Formularios reactivos con validaciones y estados.',
      'Diseño glass + animaciones micro (hover/shine).',
    ],
    links: [],
    long: [
      'Proyecto MoviWallet:',
      'Colección de proyectos enfocados en frontend.',
      'UX, UI, responsive y micro-interacciones.',
    ],
    children: [
      {
        title: 'MoviWallet',
        subtitle: 'Landing de wallet digital.',
        tag: 'Frontend',
        icon: 'account_balance_wallet',
        stack: 'HTML • CSS • JS',
        cover: '/screens/MoviWalletSS.jpeg',
        bullets: [
          'Landing tipo producto.',
          'Diseño moderno y claro.',
          'Deploy en GitHub Pages.',
        ],
        links: [
          { label: 'GitHub', url: MOVI_REPO, icon: 'code' },
          { label: 'Demo', url: MOVI_DEMO, icon: 'open_in_new' },
        ],
      },
      {
        title: 'Proyecto Angular',
        subtitle: 'UI con rutas + formularios.',
        tag: 'Frontend',
        icon: 'view_quilt',
        stack: 'Angular • Material • Reactive Forms',
        cover: 'assets/screens/angular.jpeg',
        bullets: [
          'Rutas y componentes.',
          'Formularios reactivos.',
          'Estados de carga y error.',
        ],
        links: [
          { label: 'GitHub', url: GITHUB, icon: 'code' },
          { label: 'Demo', url: GITHUB, icon: 'open_in_new' },
        ],
      },
    ],
  },

  /* ===== BACKEND ===== */
  {
    title: 'Backend – REST API',
    subtitle: 'Endpoints, arquitectura y buenas prácticas.',
    tag: 'Backend',
    icon: 'dns',
    stack: 'Spring Boot • JPA • DTO/Service/Repo',
    bullets: [
      'CRUD con validaciones y manejo de errores.',
      'Arquitectura por capas.',
      'Documentación de endpoints.',
    ],
    links: [
      { label: 'GitHub', url: GITHUB, icon: 'code' },
      { label: 'Endpoints', url: GITHUB, icon: 'article' },
    ],
  },

  /* ===== FULLSTACK ===== */
  {
    title: 'Fullstack – Mini CRUD',
    subtitle: 'Conexión Front ↔ Back.',
    tag: 'Fullstack',
    icon: 'hub',
    stack: 'Angular • Spring Boot • SQL',
    bullets: [
      'Frontend consumiendo API REST.',
      'Back con endpoints y persistencia.',
      'Proyecto completo de punta a punta.',
    ],
    links: [
      { label: 'Frontend', url: GITHUB, icon: 'code' },
      { label: 'Backend', url: GITHUB, icon: 'code' },
    ],
  },

  /* ===== PYTHON ===== */
  {
    title: 'Python – Automatización / Data',
    subtitle: 'Scripts útiles y reproducibles.',
    tag: 'Python',
    icon: 'terminal',
    stack: 'Python • Pandas (opcional)',
    bullets: [
      'Limpieza y transformación de datos.',
      'Automatización de tareas.',
      'Documentación clara.',
    ],
    links: [{ label: 'GitHub', url: GITHUB, icon: 'code' }],
  },

  /* ===== BI ===== */
  {
    title: 'BI – Dashboards',
    subtitle: 'KPIs, modelado y storytelling.',
    tag: 'BI',
    icon: 'insights',
    stack: 'SQL • Power BI • Excel',
    bullets: [
      'Modelado de datos.',
      'Dashboards con insights.',
      'Storytelling visual.',
    ],
    links: [
      { label: 'Ver', url: GITHUB, icon: 'open_in_new' },
      { label: 'PDF', url: GITHUB, icon: 'picture_as_pdf' },
    ],
  },

  /* ===== EXCEL ===== */
  {
    title: 'Excel VBA – Automatizaciones',
    subtitle: 'Macros, formularios y eficiencia.',
    tag: 'Excel',
    icon: 'grid_on',
    stack: 'Excel • VBA',
    bullets: [
      'Automatización de reportes.',
      'Formularios y validaciones.',
      'Optimización de procesos.',
    ],
    links: [
      { label: 'Ver automatizaciones', url: GITHUB, icon: 'open_in_new' },
      { label: 'Video', url: GITHUB, icon: 'play_circle' },
    ],
  },
] satisfies ProjectItem[];
