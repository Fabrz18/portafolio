import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkillItem} from '../../shared/ui/skill-item/skill-item';
import {SKILL_GROUPS} from '../../core/data/skill.data';
import {SkillGroup} from '../../core/models/skill.interface';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, SkillItem],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skillGroups: SkillGroup[] = SKILL_GROUPS;
  openGroups: { [key: number]: boolean } = { 0: true };

  toggleGroup(index: number) {
    this.openGroups[index] = !this.openGroups[index];
  }
}
