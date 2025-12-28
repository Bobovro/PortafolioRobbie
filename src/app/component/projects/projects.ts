import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {ProjectItem, ProjectTag} from '../../model/projectmodel';
import {PROJECT_TAGS, PROJECTS} from '../../services/project-services';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly tags: ProjectTag[] = PROJECT_TAGS;
  readonly items: ProjectItem[] = PROJECTS;

  selected: ProjectTag = 'All';

  modalOpen = false;
  modalProject: ProjectItem | null = null;

  setTag(tag: ProjectTag) {
    this.selected = tag;
  }

  openModal(p: ProjectItem) {
    this.modalProject = p;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.modalProject = null;
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.modalOpen) this.closeModal();
  }

  get filtered(): ProjectItem[] {
    if (this.selected === 'All') return this.items;
    return this.items.filter(p => p.tag === this.selected);
  }
}
