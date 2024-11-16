import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from "@ngx-translate/core";





@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleState: boolean = false;
  activeLink: number = 0;
  navLinks: string[] = [];

  constructor(public translate: TranslateService) {
    this.translateNavLinks();

    // Re-fetch the nav links whenever the language changes
    this.translate.onLangChange.subscribe(() => {
      this.translateNavLinks();
    });
  }



  switchLanguage(language: string): void {
    this.translate.use(language);
    console.log(language);

  }

  private translateNavLinks() {
    this.translate.get('HEADER.NAV_LINKS').subscribe((links: string[]) => {
      this.navLinks = links;
    });
  }




}
