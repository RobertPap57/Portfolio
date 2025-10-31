import { Component } from '@angular/core'; 
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    imports: [TranslateModule, RouterModule, CommonModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public router: Router) {}

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This ensures a smooth scrolling animation
    });
  }
}
