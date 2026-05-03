import { SkillGroup } from '../models/skill.interface';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Desarrollo Web',
    skills: [
      { name: 'HTML5', icon: 'assets/icons/html5.svg' },
      { name: 'CSS3', icon: 'assets/icons/css3.svg' },
      { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
      { name: 'Angular', icon: 'assets/icons/angular.svg' },
      { name: 'React', icon: 'assets/icons/react.svg' },
      { name: 'Node.js', icon: 'assets/icons/nodejs.svg' }
    ]
  },


  {
    title: 'Programación',
    skills: [

      { name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
      {name: 'JWT', icon: 'assets/icons/jwt.svg' }
    ]
  },
  {
    title: 'Base de Datos',
    skills: [
      { name: 'SQL Server', icon: 'assets/icons/sql-server.svg' },
      { name: 'PostgreSQL', icon: 'assets/icons/postgresql.svg' },
      { name: 'MongoDB', icon: 'assets/icons/mongodb.svg' },
      {name: 'MySQL', icon: 'assets/icons/mysql.svg' },
    ]
  },
  {
    title: 'Habilidades Blandas',
    skills: [
      { name: 'Comunicación', icon: 'assets/icons/comunicacion.svg' },
      { name: 'Trabajo en Equipo', icon: 'assets/icons/equipo.svg' },
      { name: 'Gestión de Tiempo', icon: 'assets/icons/gestion.svg' },
      { name: 'Creatividad', icon: 'assets/icons/creatividad.svg' }
    ]
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'Git', icon: 'assets/icons/git.svg' },
      { name: 'GitHub', icon: 'assets/icons/github.svg' },
      { name: 'Linux', icon: 'assets/icons/linux.svg' },
    ]
  }
];
