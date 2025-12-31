import {AuditItem} from '../model/auditoriamodel';

export const AUDIT_ITEMS = [
  { iso: '2025-12-30T23:53:14', type: 'Content', title: 'Nuevo Proyecto en Backend', description: 'Se añadió un nuevo proyecto en el Github.' },
  { iso: '2025-12-29T20:17:55', type: 'Content', title: 'Nuevo Proyecto en Frontend', description: 'Se añadió un nuevo proyecto en Frontend.' },
  { iso: '2025-12-28T14:32:45', type: 'Fix', title: 'Responsive en Mobile', description: 'Se arregló el formato Responsive en Mobiles.' },
  { iso: '2025-12-27T11:49:20', type: 'Feature', title: 'Deployment en Vercel', description: 'Se logró subir la página web en Vercel sin ningún tipo de error.' },
  { iso: '2025-12-27T21:34:50', type: 'Feature', title: 'Mapa de referencia', description: 'Se agregó mapa Lima con zonas destacadas.' },
  { iso: '2025-12-27T20:10:40', type: 'Fix', title: 'Home responsive', description: 'Ajuste de cards y spacing en móvil.' },
  { iso: '2025-12-26T18:05:00', type: 'UI', title: 'Estilo glass', description: 'Mejoras de blur, bordes y sombras.' },
  { iso: '2025-12-25T09:12:58', type: 'Feature', title: 'Botones dentro de Projects', description: 'Espacios y cards con los botones de Projects terminados.' },
  { iso: '2025-12-23T23:36:38', type: 'UI', title: 'Nuevo diseño para Skills', description: 'Nueva forma de ordenar las tecnologías dentro del botón Skills.' },
  { iso: '2025-12-23T09:12:58', type: 'Fix', title: 'Botones y Forms Responsive', description: 'Mejorar el estilo responsive para los navegadores.' },
  { iso: '2025-12-22T19:57:20', type: 'Content', title: 'Creación y Función de los botones', description: 'Creación de la NavBar y del funcionamiento de cada botón.' },
  { iso: '2025-12-20T13:13:40', type: 'Content', title: 'Creación del Portafolio', description: 'Creación del HTML, CSS y TS con Angular.' },
] satisfies AuditItem[];
