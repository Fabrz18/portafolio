import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Skill} from '../../../core/models/skill.interface';

@Component({
  selector: 'app-skill-item',
  imports: [ CommonModule],
  templateUrl: './skill-item.html',
  styleUrl: './skill-item.css',
})
export class SkillItem {
  @Input({ required: true }) skill!: Skill;
}
