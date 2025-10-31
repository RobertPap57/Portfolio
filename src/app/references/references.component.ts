import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-references',
    imports: [CommonModule, TranslateModule],
    templateUrl: './references.component.html',
    styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  referencesList: any[] = [];
  activeCardIndex: number = 0;

  constructor(private translate: TranslateService) {
    this.translateReferences();
    this.translate.onLangChange.subscribe(() => {
      this.translateReferences();
    });
  }

  private translateReferences() {
    this.translate.get('references.referencesList').subscribe((references: any[]) => {
      this.referencesList = references;
    });
  }

  swipeLeft() {
    this.activeCardIndex = (this.activeCardIndex + 1) % this.referencesList.length;
  }

  swipeRight() {
    this.activeCardIndex =
      (this.activeCardIndex - 1 + this.referencesList.length) %
      this.referencesList.length;
  }


}




