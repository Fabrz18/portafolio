export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];      // Ej: ['Angular', 'Node.js']
  githubUrl?: string;  // El '?' significa que es opcional
  demoUrl?: string;    // Link al deploy
}
