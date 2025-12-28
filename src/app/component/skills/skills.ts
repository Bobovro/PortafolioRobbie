import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { SkillGroup, SkillItem } from '../../model/modelskills';
import {SKILL_GROUPS} from '../../services/skills-service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardTitle, MatCardContent],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  groups: SkillGroup[] = SKILL_GROUPS;

  selected: SkillItem = this.groups[0].items[0];

  selectSkill(item: SkillItem) {
    this.selected = item;
  }
}
