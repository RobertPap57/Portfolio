
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-animated-button',
  standalone: true,
  imports: [ CommonModule, TranslateModule],
  templateUrl: './animated-button.component.html',
  styleUrl: './animated-button.component.scss'
})
export class AnimatedButtonComponent {
  position = 0; // Tracks the current X position of the child element
  animationLeftId: any; // Holds the reference to the animation loop
  animationToCenterId: any; // Holds the reference to the animation loop

  startHover() {
    cancelAnimationFrame(this.animationToCenterId);
    this.animateLeft();
  }

  stopHover() {
    cancelAnimationFrame(this.animationLeftId); // Stop the animation loop
    this.animateToCenter(); // Move back to center
  }

  animateLeft() {
    let loop = () => {
      this.position -= 3; // Move left
      if (this.position < -200){
        this.position = 200; // Reset position if out of bounds

      }
      this.animationLeftId = requestAnimationFrame(loop);
    };
    this.animationLeftId = requestAnimationFrame(loop);
  }

  animateToCenter() {
    let stepBack = () => {
      let currentPosition = (0 - this.position) * 0.3; // Calculate movement to center
      this.position += currentPosition; // Move closer to center
      if (Math.abs(currentPosition) > 0.2) {
        this.animationToCenterId = requestAnimationFrame(stepBack); // Continue animating until close enough
      } else {
        this.position = 0; // Snap to center
      }
    };
    this.animationToCenterId = requestAnimationFrame(stepBack);
  }
}

