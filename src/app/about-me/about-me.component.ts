import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-about-me',
    imports: [CommonModule, TranslateModule],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  isHovered: boolean = false;
  aboutMeContent: string[] = [];
  contentIcons: string[] = ['location', 'cognition', 'quality'];





  constructor(public translate: TranslateService) {
    this.translateContent();


    this.translate.onLangChange.subscribe(() => {
      this.translateContent();
    });
  }





  private translateContent() {
    this.translate.get('aboutMe.content').subscribe((line: string[]) => {
      this.aboutMeContent = line;
    });
  }







}
