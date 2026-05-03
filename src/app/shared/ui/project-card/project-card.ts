import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Project} from '../../../core/models/project.interface';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
// Recibimos el dato desde el componente padre
  @Input({ required: true }) project!: Project;
}
