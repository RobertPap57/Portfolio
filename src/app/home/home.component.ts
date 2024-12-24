import { Component } from '@angular/core';
import { AboveTheFoldComponent } from "../above-the-fold/above-the-fold.component";
import { AboutMeComponent } from "../about-me/about-me.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ReferencesComponent } from "../references/references.component";
import { ContactMeComponent } from "../contact-me/contact-me.component";
import { TranslateModule } from "@ngx-translate/core";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ReferencesComponent,
    ContactMeComponent,
    AboveTheFoldComponent,
    TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
