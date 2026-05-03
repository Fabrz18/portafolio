import { Experience } from '../models/experience.interface';

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 1,
    role: 'Desarrollador Web Full Stack',
    company: 'Freelance',
    period: '2024 - Actualidad',
    description: 'Diseño y desarrollo de sitios web y aplicaciones a medida para clientes locales. Especializado en crear soluciones con Angular y Node.js, optimizando el rendimiento y la experiencia de usuario. Gestión completa del ciclo de vida del software, desde la toma de requerimientos hasta el despliegue.',
    skills: ['Angular', 'Node.js', 'SQLite', 'Netlify']
  },
  {
    id: 2,
    role: 'Practicante de Soporte Técnico',
    company: 'Compumark',
    period: '2023',
    description: 'Encargado del mantenimiento preventivo y correctivo de equipos de cómputo. Instalación y configuración de software y redes locales. Resolución de incidencias técnicas para usuarios finales, mejorando la eficiencia operativa del área.',
    skills: ['Hardware', 'Redes', 'Windows', 'Soporte']
  }
];
