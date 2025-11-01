import { Component, inject, Signal, ViewChild, ElementRef } from '@angular/core';
import { ProjectlistdataService } from '../projectlistdata.service';

import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-project',
    imports: [TranslateModule],
    templateUrl: './project.component.html',
    styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @ViewChild('projectContainer') projectContainer!: ElementRef;
  projectService = inject(ProjectlistdataService);
  translate = inject(TranslateService);
  projects = this.projectService.projectList;
  projectIndex: Signal<number | null> = this.projectService.projectIndex;

  get project() {
    const index = this.projectIndex();
    if (index !== null) document.documentElement.style.overflowY = 'hidden';
    return index !== null ? this.projects[index] : null;
  }

  nextProject() {
    const index = this.projectIndex();
    if (index === null) return;
    const nextIndex = (index + 1) % this.projects.length;
    this.projectService.setProjectIndex(nextIndex);
    this.scrollToTop();

  }

  closeProject() {
    this.projectService.setProjectIndex(null);
    document.documentElement.style.overflowY = 'auto'; 
  }

  get translatedDescription() {
    if (this.project) {
      return this.translate.instant('projects.projectList.' + this.project.title + '.description', {
        defaultValue: this.project.description
      });
    }
    return '';
  }

  private scrollToTop() {
    if (this.projectContainer) {
      this.projectContainer.nativeElement.scrollTop = 0;
    }
  }

}
