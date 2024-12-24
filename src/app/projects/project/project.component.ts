import { Component , inject, Signal} from '@angular/core';
import { ProjectlistdataService } from '../projectlistdata.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projectService = inject(ProjectlistdataService);
  translate = inject(TranslateService);
  projects = this.projectService.projectList;
  projectIndex: Signal<number | null> = this.projectService.projectIndex;

  get project() {
    const index = this.projectIndex();
    if (index !== null)  document.documentElement.style.overflowY = 'hidden'; // Read signal value
    return index !== null ? this.projects[index] : null; // Return the current project
  }

  nextProject() {
    const index = this.projectIndex(); // Get the current index
    if (index === null) return; // If no project is selected, exit early
    const nextIndex = (index + 1) % this.projects.length; // Calculate next index
    this.projectService.setProjectIndex(nextIndex); // Update the index in the service
  }

  closeProject() {
    this.projectService.setProjectIndex(null);
    document.documentElement.style.overflowY = 'auto'; // Reset the project index to null
  }

  get translatedDescription() {
    if (this.project) {
      return this.translate.instant('projects.projectList.' + this.project.title + '.description', {
        defaultValue: this.project.description
      });
    }
    return '';
  }
}
