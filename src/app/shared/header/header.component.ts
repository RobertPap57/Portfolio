import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from "@ngx-translate/core";
import { RouterModule } from '@angular/router';






@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
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
    setTimeout(() => {
      this.activeLink = 0
    }, 500);
    this.closeMenu(); 
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
    this.closeMenu();

  }

  private translateNavLinks() {
    this.translate.get('header.navLinks').subscribe((links: string[]) => {
      this.navLinks = links;
    });
  }




}
