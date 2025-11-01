
import { Component, HostListener } from '@angular/core';


@Component({
    selector: 'app-cursor-shadow',
    imports: [],
    templateUrl: './cursor-shadow.component.html',
    styleUrl: './cursor-shadow.component.scss'
})
export class CursorShadowComponent {
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const shadow = document.querySelector('.cursor-shadow') as HTMLElement;

    if (shadow) {
      shadow.style.transform = `translate(${event.clientX - 70}px, ${event.clientY - 64}px)`;

    }
  }
}

