import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectCard} from '../../shared/ui/project-card/project-card';
import {PROJECTS} from '../../core/data/project.data';
import {Project} from '../../core/models/project.interface';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = PROJECTS;
}
