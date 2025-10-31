
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-animated-button',
    imports: [CommonModule, TranslateModule],
    templateUrl: './animated-button.component.html',
    styleUrl: './animated-button.component.scss'
})
export class AnimatedButtonComponent {
  constructor(private translate: TranslateService) { }
  @Input() disabled: boolean = false;
  position = 0; 
  animationLeftId: any; 
  animationToCenterId: any; 

  startHover() { 
    if (!this.disabled) {
    cancelAnimationFrame(this.animationToCenterId);
    this.animateLeft();
    }
  }

  stopHover() {
    cancelAnimationFrame(this.animationLeftId); 
    this.animateToCenter(); 
  }

  animateLeft() {
    let loop = () => {
      this.position -= 3; 
      if (this.translate.currentLang === 'de') {
        if (this.position < -230) {
          this.position = 230; 

        }
      }
      else if (this.position < -200) {
        this.position = 200; 

      }
      this.animationLeftId = requestAnimationFrame(loop);
    };
    this.animationLeftId = requestAnimationFrame(loop);
  }

  animateToCenter() {
    let stepBack = () => {
      let currentPosition = (0 - this.position) * 0.3; 
      this.position += currentPosition; 
      if (Math.abs(currentPosition) > 0.2) {
        this.animationToCenterId = requestAnimationFrame(stepBack); 
      } else {
        this.position = 0; 
      }
    };
    this.animationToCenterId = requestAnimationFrame(stepBack);
  }
}

