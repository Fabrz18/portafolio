export interface Experience {
  id: number;
  role: string;
  company: string; // O "Freelance" si no hay empresa
  period: string;  // Ej: "2024 - Presente"
  description: string;
  skills?: string[]; // Opcional: qué tecnologías usaste ahí
}
