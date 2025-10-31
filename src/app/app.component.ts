import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import { CursorShadowComponent } from './shared/cursor-shadow/cursor-shadow.component';



@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        RouterOutlet,
        TranslateModule,
        FooterComponent,
        HeaderComponent,
        CursorShadowComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent {
 title = 'portfolio';

  constructor(public translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }



}