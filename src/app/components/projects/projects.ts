// projects.ts
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {CommonModule, DatePipe} from '@angular/common';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects = [
    { name: "Portafolio Personal", lastUpdate: new Date(2025, 10, 5), technologies: "Angular, TypeScript, HTML, CSS", imageUrl:"assets/images/image.jpg" },
    { name: "Aplicación de Tareas", lastUpdate: new Date(2025, 9, 20), technologies: "React, Node.js, MongoDB", imageUrl:"assets/images/image.jpg" },
    { name: "Web de E-commerce", lastUpdate: new Date(2025, 8, 1), technologies: "Vue.js, Firebase", imageUrl:"assets/images/image.jpg"}
  ];

}
