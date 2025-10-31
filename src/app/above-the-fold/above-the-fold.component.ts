import { Component } from '@angular/core';
import { AnimatedButtonComponent } from '../shared/animated-button/animated-button.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-above-the-fold',
    imports: [TranslateModule, AnimatedButtonComponent, CommonModule],
    templateUrl: './above-the-fold.component.html',
    styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
btnHover = false
marqueeContent: string[] = [];

constructor(public translate: TranslateService) {
  this. translateMarqueeContent();

  this.translate.onLangChange.subscribe(() => {
    this.translateMarqueeContent();
  });
}


private translateMarqueeContent() {
  this.translate.get('atf.marquee').subscribe((content: string[]) => {
    this.marqueeContent = content.concat(content);
  });
}



}
