import { CommonModule } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectlistdataService } from './projectlistdata.service';
import { ProjectComponent } from './project/project.component';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule, ProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectService = inject(ProjectlistdataService);
  projects = this.projectService.projectList
  hoveredProject: any = null;
  
  get projectIndex() {
    return this.projectService.projectIndex();
  }


  setHoveredProject(project: any | null) {
    this.hoveredProject = project;
  }

  openProject(index: number) {
    this.projectService.projectIndex.set(index); 
  }

}