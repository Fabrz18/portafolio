import { Project } from '../models/project.interface';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Kubo Toys Market',
    description: 'Marketplace de juguetes con sistema de gestión de inventario y pasarela de pagos. Proyecto de emprendimiento.',
    image: 'assets/images/placeholderProjects.svg',
    tags: ['Angular', 'Spring Boot', 'MySQL'],
    githubUrl: 'https://github.com/fabrz18',
    demoUrl: 'https://demo.kubotoys.pe'
  },
  {
    id: 2,
    title: 'Estudio Dental Ariza',
    description: 'Landing page para clínica dental con sistema de agendamiento y panel administrativo.',
    image: 'assets/images/placeholderProjects.svg',
    tags: ['Angular Material', 'Firebase', 'TypeScript'],
    githubUrl: 'https://github.com/fabrz18'
  },
  {
    id: 3,
    title: 'Huma App',
    description: 'Aplicación web para gestión de tareas y productividad personal.',
    image: 'assets/images/huma.png',
    tags: ['React', 'Netlify', 'CSS Modules'],
    githubUrl: 'https://github.com/fabrz18',
    demoUrl: 'https://huma.com.pe/'
  }
];
