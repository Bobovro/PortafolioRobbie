import { Injectable } from '@angular/core';
import { Cert } from '../model/cert';

@Injectable({ providedIn: 'root' })
export class CertificatesService {

  private readonly certificados: Cert[] = [
    {
      id: 'scrumstudy-sfc',
      nombre: 'Scrum Fundamentals Certified (SFC)',
      issuer: 'SCRUMstudy',
      fecha: '2024-04-29',
      img: '/images/certscrum.jpeg',
      tags: ['Scrum', 'Agile']
    },
    {
      id: 'sap-buildcode-apps-extensions',
      nombre: 'Creating Applications and Extensions using SAP Build Code (RoA)',
      issuer: 'SAP',
      fecha: '2025-09-01',
      img: '/images/certsap1.jpeg',
      tags: ['SAP', 'Build Code']
    },
    {
      id: 'sap-buildcode-develop-automate',
      nombre: 'Develop and Automate with SAP Build (RoA)',
      issuer: 'SAP',
      fecha: '2025-09-01',
      img: '/images/certsap2.jpeg',
      tags: ['SAP', 'Automation']
    },
    {
      id: 'sap-analytics-cloud',
      nombre: 'Exploring SAP Analytics Cloud (Course Completion)',
      issuer: 'SAP',
      fecha: '2025-09-01',
      img: '/images/certsap3.jpeg',
      tags: ['SAP', 'Analytics', 'BI']
    },
    {
      id: 'skill-python-3-12',
      nombre: 'Actualización en Python 3.12',
      issuer: 'Skill - Centro de capacitación',
      fecha: '2025-08-01',
      img: '/images/certskill1.jpeg',
      tags: ['Python']
    },
    {
      id: 'skill-powerbi',
      nombre: 'Curso de Actualización en Microsoft Power BI',
      issuer: 'Skill - Centro de capacitación',
      fecha: '2025-08-01',
      img: '/images/certskill2.jpeg',
      tags: ['Power BI', 'Dashboards']
    },
    {
      id: 'skill-excel',
      nombre: 'Curso de Microsoft Excel (Intermedio – Avanzado)',
      issuer: 'Skill - Centro de capacitación',
      fecha: '2025-08-01',
      img: '/images/certskill3.jpeg',
      tags: ['Excel', 'Solver']
    },
    {
      id: 'lund-ai-business-future-work',
      nombre: 'AI, Business & the Future of Work',
      issuer: 'Lund University',
      fecha: '2025-04-01',
      img: '/images/certcoursera1.jpeg',
      tags: ['AI', 'Business']
    },
    {
      id: 'eit-business-implications-ai',
      nombre: 'Business Implications of AI (Full course)',
      issuer: 'EIT Digital',
      fecha: '2025-04-01',
      img: '/images/certcoursera2.jpeg',
      tags: ['AI', 'Leadership', 'Business']
    },
    {
      id: 'udemy-excel-vba',
      nombre: 'Essential Microsoft Excel VBA',
      issuer: 'Udemy',
      fecha: '2025-04-01',
      img: '/images/certudemy1.jpeg',
      tags: ['Excel VBA', 'Macros']
    },
    {
      id: 'uniandes-formulacion-proyectos',
      nombre: 'Formulación y evaluación de proyectos complejos',
      issuer: 'Universidad de los Andes',
      fecha: '2025-04-01',
      img: '/images/certcoursera3.jpeg',
      tags: ['Project Management', 'Software Analysis']
    },
    {
      id: 'umd-cybersecurity-for-all',
      nombre: 'Ciberseguridad para todos',
      issuer: 'University of Maryland, College Park',
      fecha: '2024-10-01',
      img: '/images/certcoursera4.jpeg',
      tags: ['Cybersecurity']
    },
    {
      id: 'uniandes-intro-desarrollo-web',
      nombre: 'Introducción al desarrollo web',
      issuer: 'Universidad de los Andes',
      fecha: '2024-10-01',
      img: '/images/certcoursera5.jpeg',
      tags: ['HTML', 'CSS', 'Bootstrap', 'Web Apps']
    },
    {
      id: 'bcg-transformacion-digital',
      nombre: 'Transformación digital',
      issuer: 'BCG, University of Virginia',
      fecha: '2024-10-01',
      img: '/images/certcoursera6.jpeg',
      tags: ['Digital Transformation']
    },
    {
      id: 'jh-html-css-js-webdev',
      nombre: 'HTML, CSS, and JavaScript for Web Developers',
      issuer: 'Johns Hopkins University',
      fecha: '2024-09-01',
      img: '/images/certcoursera7.jpeg',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 'uni-python-ia',
      nombre: 'Programación en Python Básico + IA',
      issuer: 'Borja Rosales Ruben',
      fecha: '2024-10-31',
      img: '/images/certuni1.png',
      tags: ['Python', 'POO', 'Documentación', 'IA']
    }
  ];

  getAll(): Cert[] {
    return this.certificados;
  }
}
