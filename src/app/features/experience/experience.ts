import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {EXPERIENCE_DATA} from '../../core/data/experience.data';
import {Experience} from '../../core/models/experience.interface';


@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  experiences: Experience[] = EXPERIENCE_DATA;
}
