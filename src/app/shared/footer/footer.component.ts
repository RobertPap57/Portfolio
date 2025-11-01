import { Component } from '@angular/core'; 
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
    selector: 'app-footer',
    imports: [TranslateModule, RouterModule],
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
