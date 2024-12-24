import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnimatedButtonComponent } from '../shared/animated-button/animated-button.component';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule, AnimatedButtonComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: string[] = [
    'HTML', 'CSS', 'JavaScript', 'Material Design',
     'TypeScript', 'Angular', 'Firebase',
      'Git', 'Rest-Api', 'Scrum'
  ]

}
