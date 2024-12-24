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
  menuOpen: boolean = false;
  toggleState: boolean = false;
  activeLink: number = 0;
  navLinks: string[] = [];
  linkIds: string[] = ['about-me', 'skills', 'projects'];

  constructor(public translate: TranslateService) {
    this.translateNavLinks();

    // Re-fetch the nav links whenever the language changes
    this.translate.onLangChange.subscribe(() => {
      this.translateNavLinks();
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) document.documentElement.style.overflowY = 'hidden';
    this.activeLink = 0;
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.documentElement.style.overflowY = 'auto';
  }

  selectLink(index: number): void {
    this.activeLink = index + 1;
    this.closeMenu(); // Close menu after clicking a link
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
    console.log(language);
    this.closeMenu();

  }

  private translateNavLinks() {
    this.translate.get('header.navLinks').subscribe((links: string[]) => {
      this.navLinks = links;
    });
  }




}
