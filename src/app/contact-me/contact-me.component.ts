import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ContactFormComponent } from "./contact-form/contact-form.component";



@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, TranslateModule, ContactFormComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

}
